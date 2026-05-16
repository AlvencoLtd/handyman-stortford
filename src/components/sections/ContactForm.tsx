import { ContactFormClient } from "./ContactFormClient";

export function ContactForm() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 bg-[color:var(--primary)] py-20 text-white md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Get a Free Quote
          </h2>
          <p className="mt-4 text-lg text-white/85">
            Describe your job and I&apos;ll get back to you quickly.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <ContactFormClient />
          <p className="mt-6 text-center text-sm text-white/80">
            Or message directly on WhatsApp →{" "}
            <a
              href="https://wa.me/393209708536"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[color:var(--accent)] underline-offset-4 hover:underline"
            >
              Open WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
