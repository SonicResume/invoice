import Link from "next/link";

type LandingContentProps = {
  locale: string;
  variant?: "home" | "guide";
};

const processSteps = [
  {
    number: "01",
    title: "Add your details",
    description:
      "Enter your business information and your client's details to get started.",
  },
  {
    number: "02",
    title: "Describe the work",
    description:
      "Add services or products, quantities, prices, and any applicable taxes.",
  },
  {
    number: "03",
    title: "Export and send",
    description:
      "Review your invoice and download a polished PDF ready to share.",
  },
];

const benefits = [
  {
    number: "01",
    title: "Clear, professional invoices",
    description:
      "Present your work and payment details in a clean document your clients can understand.",
  },
  {
    number: "02",
    title: "Line items made simple",
    description:
      "Organise descriptions, quantities, rates, and totals without unnecessary hassle.",
  },
  {
    number: "03",
    title: "PDF when you're ready",
    description:
      "Review the finished invoice and export it as a PDF for your records or your client.",
  },
];

function InvoicePreview() {
  return (
    <div className="relative mx-auto w-full max-w-[490px]">
      <div className="absolute -right-5 -top-8 h-40 w-40 rounded-full bg-violet-200/70 blur-3xl" />
      <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-amber-100 blur-3xl" />

      <div className="relative border border-black/[0.06] bg-white p-7 shadow-[0_35px_90px_-40px_rgba(35,24,55,0.35)] sm:p-10">
        <div className="flex items-start justify-between border-b border-neutral-200 pb-7">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-violet-700">
              INVOICE
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em]">
              Invoice
            </h2>
            <p className="mt-2 text-xs text-neutral-500">INV-001</p>
          </div>
          <div className="flex h-11 w-11 items-center justify-center bg-violet-700 text-lg font-semibold text-white">
            N
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 py-7 text-xs">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
              From
            </p>
            <p className="font-semibold text-neutral-800">Your Business</p>
            <p className="mt-2 leading-5 text-neutral-500">
              Your name
              <br />
              Your email
            </p>
          </div>
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
              Bill to
            </p>
            <p className="font-semibold text-neutral-800">Your Client</p>
            <p className="mt-2 leading-5 text-neutral-500">
              Client company
              <br />
              Client email
            </p>
          </div>
        </div>

        <div className="border-y border-neutral-200 py-4">
          <div className="mb-5 grid grid-cols-[1fr_auto] text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-400">
            <span>Description</span>
            <span>Amount</span>
          </div>
          <div className="space-y-5 text-xs">
            <div className="grid grid-cols-[1fr_auto] gap-3">
              <div>
                <p className="font-semibold">Professional services</p>
                <p className="mt-1 text-neutral-500">Project delivery</p>
              </div>
              <span>$1,200.00</span>
            </div>
            <div className="grid grid-cols-[1fr_auto] gap-3">
              <div>
                <p className="font-semibold">Additional work</p>
                <p className="mt-1 text-neutral-500">Extra services</p>
              </div>
              <span>$300.00</span>
            </div>
          </div>
        </div>

        <div className="ml-auto max-w-[205px] space-y-3 py-6 text-xs">
          <div className="flex justify-between text-neutral-500">
            <span>Subtotal</span>
            <span>$1,500.00</span>
          </div>
          <div className="flex justify-between text-neutral-500">
            <span>Tax</span>
            <span>$0.00</span>
          </div>
          <div className="flex items-end justify-between border-t border-neutral-200 pt-4">
            <span className="font-semibold">Total</span>
            <span className="text-2xl font-semibold tracking-tight">
              $1,500
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between bg-[#f7f5fb] px-4 py-3">
          <span className="text-[10px] text-neutral-600">
            Thank you for your business.
          </span>
          <span className="text-[10px] font-semibold text-violet-800">
            PDF READY ↗
          </span>
        </div>

        <p className="mt-4 text-center text-[9px] tracking-[0.12em] text-neutral-400">
          ILLUSTRATIVE PREVIEW
        </p>
      </div>

      <div className="absolute -bottom-5 -right-2 bg-[#dff1e6] px-4 py-3 text-xs font-semibold text-[#285b43] shadow-md sm:-right-5">
        Ready for your next client.
      </div>
    </div>
  );
}

export default function LandingContent({
  locale,
  variant = "home",
}: LandingContentProps) {
  const isGuide = variant === "guide";
  const startHref = `/${locale}?step=items`;

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f6f2] text-[#1d1b20]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <Link
          href={`/${locale}`}
          className="text-2xl font-bold tracking-[-0.08em]"
          aria-label="Noah Invoice home"
        >
          noah<span className="text-violet-700">.</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link
            href={isGuide ? `/${locale}` : `/${locale}/guide`}
            className="hidden text-neutral-600 transition hover:text-violet-800 sm:inline"
          >
            {isGuide ? "Home" : "How it works"}
          </Link>
          <Link
            href={startHref}
            className="rounded-full bg-[#24202b] px-5 py-3 font-medium text-white transition hover:bg-violet-800"
          >
            Create invoice <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-12 md:grid-cols-2 md:px-10 md:pb-32 md:pt-20">
        <div className="max-w-xl">
          <div className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-800">
            <span className="h-px w-8 bg-violet-700" />
            Invoicing, made clearer
          </div>

          <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            {isGuide ? (
              <>
                From your work
                <br />
                to a
                <br />
                <span className="font-serif font-normal italic text-violet-800">
                  finished invoice.
                </span>
              </>
            ) : (
              <>
                Good work
                <br />
                deserves a
                <br />
                <span className="font-serif font-normal italic text-violet-800">
                  better invoice.
                </span>
              </>
            )}
          </h1>

          <p className="mt-7 max-w-md text-base leading-8 text-neutral-600 sm:text-lg">
            Create a polished, professional invoice in minutes. Add your
            details, organise your work, and export a PDF ready to send.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              href={startHref}
              className="inline-flex items-center gap-8 rounded-full bg-violet-700 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-900/10 transition hover:-translate-y-0.5 hover:bg-violet-800"
            >
              Make an invoice <span className="text-lg">→</span>
            </Link>
            <span className="text-xs text-neutral-500">
              Three steps. One professional result.
            </span>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-neutral-200 pt-6">
            {[
              ["01", "Add details"],
              ["02", "List your work"],
              ["03", "Export PDF"],
            ].map(([number, label]) => (
              <div key={number}>
                <p className="text-xs font-semibold text-violet-800">
                  {number}
                </p>
                <p className="mt-2 text-xs text-neutral-600 sm:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <InvoicePreview />
      </section>

      <section className="border-y border-neutral-200 bg-white" id="how-it-works">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-800">
                The process
              </p>
              <h2 className="mt-4 max-w-sm text-4xl font-semibold leading-tight tracking-[-0.05em]">
                Less admin.
                <br />
                More time for your work.
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-600">
                Everything you need to prepare a clear invoice, without
                making the process more complicated than it needs to be.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="border-t-2 border-violet-700 pt-5"
                >
                  <span className="text-xs font-semibold text-violet-800">
                    STEP {step.number}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-800">
              Made for the details
            </p>
            <h2 className="mt-4 max-w-lg text-4xl font-semibold tracking-[-0.05em]">
              Everything in its right place.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-neutral-600">
            A straightforward workflow that helps you create invoices that are
            easy to read and ready to share.
          </p>
        </div>

        <div className="grid gap-10 border-t border-neutral-200 pt-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.number}>
              <span className="text-xs font-semibold text-violet-800">
                {benefit.number}
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                {benefit.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-neutral-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </section>

          <section className="px-6 pb-20 md:px-10 md:pb-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 bg-[#24202b] px-7 py-10 text-white sm:flex-row sm:items-center sm:px-12 sm:py-14">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-300">
              Need help with your next step?
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Explore our professional services.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-neutral-300">
              Visit SonicResume to discover our services and find the support
              you need to move forward.
            </p>
          </div>
          <a
            href="https://www.sonicresume.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-6 self-start rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#24202b] transition hover:bg-violet-100 sm:self-center"
          >
            Explore our services <span className="text-lg">↗</span>
          </a>
        </div>
      </section>

      </main>
    );
  }
