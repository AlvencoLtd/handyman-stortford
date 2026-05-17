#!/usr/bin/env python3
"""Recolor grayscale house/tools mark using QuickFix palette (logo-quickfix.svg), replace footer text."""

from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

# Matches fills in public/logo-quickfix.svg (dual-tone brand wordmark)
SVG_DEEP_BLUE = (0x00, 0x66, 0xA2)  # #0066a2
SVG_BRIGHT_BLUE = (0x00, 0x94, 0xC9)  # #0094c9 — “Quick”
SVG_ACCENT_GREEN = (0x98, 0xC5, 0x4C)  # #98c54c — “Fix”

# Page / light areas (site muted background)
LIGHT_BG = (0xF8, 0xFA, 0xF5)  # #F8FAF5


def _luminance(r: float, g: float, b: float) -> float:
    return 0.299 * r + 0.587 * g + 0.114 * b


def _blend(c0: tuple[int, int, int], c1: tuple[int, int, int], w: float) -> tuple[int, int, int]:
    w = max(0.0, min(1.0, w))
    return (
        int(round(c0[0] * (1 - w) + c1[0] * w)),
        int(round(c0[1] * (1 - w) + c1[1] * w)),
        int(round(c0[2] * (1 - w) + c1[2] * w)),
    )


def recolor_layer(rgba: Image.Image, dark: tuple[int, int, int], light: tuple[int, int, int]) -> Image.Image:
    """Map grayscale-ish artwork using luminance-only blend (preserves AA)."""
    w, h = rgba.size
    out = Image.new("RGBA", (w, h), (*light, 255))
    src = rgba.load()
    dst = out.load()
    for y in range(h):
        for x in range(w):
            r, g, b, a = src[x, y]
            if a < 8:
                dst[x, y] = (*light, 0)
                continue
            lum = _luminance(r, g, b) / 255.0
            rgb = _blend(dark, light, lum)
            dst[x, y] = (*rgb, a)
    return out


def try_load_font(bold: bool, size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    suffix = "Arial Bold.ttf" if bold else "Arial.ttf"
    candidates = [
        f"/System/Library/Fonts/Supplemental/{suffix}",
        f"/Library/Fonts/{suffix}",
        *(["/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"] if bold else ["/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"]),
    ]
    for p in candidates:
        path = Path(p)
        if path.is_file():
            return ImageFont.truetype(str(path), size=size)
    return ImageFont.load_default()


def try_load_bold_font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    return try_load_font(True, size)


def _text_len(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.FreeTypeFont | ImageFont.ImageFont) -> float:
    tl = getattr(draw, "textlength", None)
    if tl:
        return float(tl(text, font=font))
    bx = draw.textbbox((0, 0), text, font=font)
    return bx[2] - bx[0]


def draw_brand_block(draw: ImageDraw.ImageDraw, width: int, y_top: int) -> None:
    """Brand «Quick Fix» prominent, dual SVG colours; slogan below, slightly smaller."""
    font_brand = try_load_bold_font(52)
    font_slogan = try_load_font(False, 22)  # little smaller subtitle under brand

    part_quick = "Quick "
    part_fix = "Fix"
    slogan = "Property Maintenance"

    brand_mid = draw.textbbox((0, 0), part_quick + part_fix, font=font_brand)
    slog_mid = draw.textbbox((0, 0), slogan, font=font_slogan)

    y_brand = y_top - brand_mid[1]
    lw_q = _text_len(draw, part_quick, font_brand)
    lw_f = _text_len(draw, part_fix, font_brand)
    brand_total = lw_q + lw_f
    x_brand = (width - brand_total) / 2
    draw.text((x_brand, y_brand), part_quick, fill=SVG_BRIGHT_BLUE, font=font_brand)
    draw.text((x_brand + lw_q, y_brand), part_fix, fill=SVG_ACCENT_GREEN, font=font_brand)

    gap = 18  # airy separation between brand and slogan
    y_slogan = y_brand + (brand_mid[3] - brand_mid[1]) + gap - slog_mid[1]
    lw_slogan = _text_len(draw, slogan, font_slogan)
    x_slogan = (width - lw_slogan) / 2
    draw.text((x_slogan, y_slogan), slogan, fill=SVG_DEEP_BLUE, font=font_slogan)


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    default_in = root / "public/source-assets/house-tools-mark-template.png"
    default_out = root / "public/images/site/quickfix-house-tools-mark.png"

    ap = argparse.ArgumentParser()
    ap.add_argument("--input", type=Path, default=default_in)
    ap.add_argument("--output", type=Path, default=default_out)
    ap.add_argument(
        "--crop-bottom",
        type=int,
        default=361,
        help="Exclude template footer text: keep rows [0, crop_bottom) before recolor.",
    )
    args = ap.parse_args()

    im = Image.open(args.input).convert("RGBA")
    w_in, _ = im.size
    bottom = args.crop_bottom
    cropped = im.crop((0, 0, w_in, bottom))

    tinted = recolor_layer(cropped, SVG_DEEP_BLUE, LIGHT_BG)

    out_h = max(612, tinted.height + 176)
    canvas = Image.new("RGBA", (w_in, out_h), (*LIGHT_BG, 255))
    canvas.alpha_composite(tinted, dest=(0, 0))

    draw = ImageDraw.Draw(canvas)
    # Tighter to the house silhouette; typography starts just under the illustration
    brand_block_top = tinted.height + 16
    draw_brand_block(draw, w_in, brand_block_top)

    args.output.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(args.output, "PNG", optimize=True)
    print(f"Wrote {args.output.relative_to(root)}")


if __name__ == "__main__":
    main()
