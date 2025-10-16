import { Icon } from "@iconify/react";

const contactMethods = [
  {
    icon: "mdi:email-fast-outline",
    title: "Email",
    description: "For partnerships, media requests, and general enquiries.",
    value: "hello@humanjustice.org",
    href: "mailto:hello@humanjustice.org",
  },
  {
    icon: "mdi:phone-in-talk-outline",
    title: "Phone",
    description: "Speak directly with our advocacy and support team.",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
  },
  {
    icon: "mdi:map-marker-outline",
    title: "Head Office",
    description: "Visit our offices for consultations and in-person support.",
    value: "42 Justice Avenue, Abuja, Nigeria",
    href: "https://maps.google.com/?q=42+Justice+Avenue+Abuja",
  },
];

const supportHighlights = [
  {
    icon: "mdi:account-group-outline",
    title: "Community Support",
    description: "Guidance for survivors, families, and partner organisations navigating justice systems.",
  },
  {
    icon: "mdi:gavel",
    title: "Legal Advocacy",
    description: "Assistance with case reviews, legal representation, and policy consultations.",
  },
  {
    icon: "mdi:calendar-clock",
    title: "Office Hours",
    description: "Monday to Friday, 9:00am – 6:00pm WAT. Weekend visits available by appointment.",
  },
];

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[linear-gradient(120deg,#0D1834_0%,#01113B_60%,#0D1834_100%)]">
        <div className="absolute inset-0 opacity-30 bg-[url('/images/noise.png')] bg-cover" aria-hidden="true"></div>
        <div className="containerings relative z-10 px-6 py-24 md:py-32 text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em]">
            <Icon icon="mdi:compass-outline" className="h-4 w-4" />
            Contact
          </span>
          <h1 className="mt-6 max-w-3xl text-[32px] sm:text-[40px] md:text-[54px] font-semibold leading-tight">
            We are here to listen, support, and collaborate for human dignity.
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/80">
            Reach out to the Human Justice Foundation team for legal advocacy, community partnerships, or media enquiries. Our specialists respond within 48 hours.
          </p>
        </div>
      </section>

      <section className="containerings px-6 -mt-16 md:-mt-20">
        <div className="grid gap-6 md:grid-cols-3">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.href}
              className="group rounded-[28px] border border-white bg-white p-8 shadow-[0_20px_60px_rgba(1,17,59,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_72px_rgba(1,17,59,0.12)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#246CDA]/10 text-[#246CDA]">
                <Icon icon={method.icon} className="h-6 w-6" />
              </span>
              <h2 className="mt-6 text-xl font-semibold text-[#0D1834]">{method.title}</h2>
              <p className="mt-3 text-sm text-[#456075]">{method.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#01113B]">
                {method.value}
                <Icon icon="mdi:arrow-top-right" className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f7f7] py-20 mt-24">
        <div className="containerings px-6 grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-start">
          <form
            onSubmit={handleSubmit}
            className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(1,17,59,0.08)]"
          >
            <h2 className="text-[26px] font-semibold text-[#0D1834]">Send us a message</h2>
            <p className="mt-3 text-sm text-[#456075]">
              Share your enquiry and our team will connect with you within two working days.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-[#0D1834]">First Name</span>
                <input
                  type="text"
                  required
                  placeholder="Jane "
                  className="h-[56px] rounded-[16px] border border-[#E2E8F0] px-4 text-sm text-[#0D1834] outline-none transition focus:border-[#246CDA] focus:ring-2 focus:ring-[#246CDA]/20"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-[#0D1834]">Last Name </span>
                <input
                  type="text"
                  required
                  placeholder="Doe"
                  className="h-[56px] rounded-[16px] border border-[#E2E8F0] px-4 text-sm text-[#0D1834] outline-none transition focus:border-[#246CDA] focus:ring-2 focus:ring-[#246CDA]/20"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-[#0D1834]">Email Address</span>
                <input
                  type="email"
                  placeholder="+234 801 234 5678"
                  className="h-[56px] rounded-[16px] border border-[#E2E8F0] px-4 text-sm text-[#0D1834] outline-none transition focus:border-[#246CDA] focus:ring-2 focus:ring-[#246CDA]/20"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-[#0D1834]">Topic</span>
                <select
                  className="h-[56px] rounded-[16px] border border-[#E2E8F0] px-4 text-sm text-[#0D1834] outline-none transition focus:border-[#246CDA] focus:ring-2 focus:ring-[#246CDA]/20"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select an area
                  </option>
                  <option value="advocacy">Legal advocacy</option>
                  <option value="support">Community support</option>
                  <option value="media">Media enquiry</option>
                  <option value="partnership">Partnership</option>
                </select>
              </label>
            </div>

            <label className="mt-5 flex flex-col gap-2">
              <span className="text-sm font-medium text-[#0D1834]">Message</span>
              <textarea
                rows={5}
                required
                placeholder="Let us know how we can support you..."
                className="rounded-[16px] border border-[#E2E8F0] px-4 py-3 text-sm text-[#0D1834] outline-none transition focus:border-[#246CDA] focus:ring-2 focus:ring-[#246CDA]/20"
              ></textarea>
            </label>

            <button
              type="submit"
              className="mt-8 flex h-[56px] w-full items-center justify-center gap-2 rounded-[999px] bg-[#246CDA] text-base font-semibold text-white transition hover:bg-[#1f5ab6]"
            >
              Send message
              <Icon icon="mdi:send" className="h-5 w-5" />
            </button>
          </form>

          <div className="space-y-8">
            <div className="rounded-[32px] bg-[#01113B] px-8 py-10 text-white shadow-[0_24px_68px_rgba(1,17,59,0.2)]">
              <h3 className="text-[24px] font-semibold">Visit our offices</h3>
              <p className="mt-3 text-sm text-white/80">
                We welcome survivors, community partners, and policy leaders for scheduled consultations.
              </p>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Icon icon="mdi:map-marker" className="mt-0.5 h-5 w-5 text-[#63A0FF]" />
                  <div>
                    <p className="font-medium">Headquarters</p>
                    <p className="text-white/80">42 Justice Avenue, Abuja, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon icon="mdi:clock-outline" className="mt-0.5 h-5 w-5 text-[#63A0FF]" />
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-white/80">Monday – Friday, 9:00am – 6:00pm WAT</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon icon="mdi:calendar-check-outline" className="mt-0.5 h-5 w-5 text-[#63A0FF]" />
                  <div>
                    <p className="font-medium">Weekend Support</p>
                    <p className="text-white/80">Book appointments for urgent matters via email.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-[0_20px_60px_rgba(1,17,59,0.06)]">
              {supportHighlights.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#246CDA]/10 text-[#246CDA]">
                    <Icon icon={item.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h4 className="text-base font-semibold text-[#0D1834]">{item.title}</h4>
                    <p className="mt-1 text-sm text-[#456075]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="containerings px-6">
          <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#1F2E59_0%,#01113B_60%,#0D1834_100%)] p-10 text-white shadow-[0_24px_68px_rgba(1,17,59,0.2)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h3 className="text-[30px] font-semibold">Partner with us to advance justice</h3>
                <p className="mt-3 text-sm text-white/80">
                  Collaborate on strategic litigation, research, and community-led initiatives to protect human rights.
                </p>
              </div>
              <a
                href="mailto:partnerships@humanjustice.org"
                className="inline-flex h-[54px] items-center justify-center gap-2 rounded-[999px] bg-white px-8 text-base font-semibold text-[#01113B] transition hover:bg-[#F1F5FF]"
              >
                partnerships@humanjustice.org
                <Icon icon="mdi:arrow-top-right" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
