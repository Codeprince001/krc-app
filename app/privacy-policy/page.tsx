import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy | The Kingdom Church",
  description:
    "Privacy Policy for The Kingdom Church mobile app and related services.",
};

const effectiveDate = "April 15, 2026";
const supportEmail = "support@krcc.church";
const websiteUrl = "https://app.krcc.church";

const policySections = [
  {
    id: "information-we-collect",
    title: "1) Information We Collect",
    points: [
      "Account data you provide, such as your name, email address, phone number, profile details, and credentials.",
      "Community content you submit, including testimonies, prayer requests, comments, and feedback.",
      "Technical and usage information, such as app version, device type, pages visited, and crash diagnostics.",
      "Payment transaction metadata (for donations or purchases), but we do not store complete card details.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "2) How We Use Information",
    points: [
      "To create and secure user accounts and provide requested app features.",
      "To deliver church resources, notifications, events, and community interactions.",
      "To provide customer support, respond to concerns, and improve service quality.",
      "To monitor abuse, protect users, and comply with legal obligations.",
    ],
  },
  {
    id: "camera-permission",
    title: "3) Camera Permission (Android)",
    points: [
      "Our app requests android.permission.CAMERA only when you choose a feature that requires taking a photo (for example, profile photo upload).",
      "We do not access your camera in the background and do not capture photos or videos without your action.",
      "If you cancel before submission, camera content is not uploaded by us.",
      "If you upload an image, it is processed and stored to provide the requested app feature.",
      "You can deny or revoke camera permission anytime in your device settings; some photo-related features may no longer function.",
    ],
  },
  {
    id: "sharing",
    title: "4) How We Share Information",
    points: [
      "We do not sell personal information.",
      "We may share limited data with trusted providers for hosting, notifications, analytics, authentication, support, and payment processing.",
      "We may disclose information when legally required or to protect rights, safety, and platform integrity.",
    ],
  },
  {
    id: "data-retention",
    title: "5) Data Retention",
    points: [
      "We retain data for as long as needed to operate services, satisfy legal requirements, resolve disputes, and maintain security.",
      "When data is no longer needed, we delete, anonymize, or securely archive it.",
    ],
  },
  {
    id: "security",
    title: "6) Data Security",
    points: [
      "We use reasonable technical and organizational safeguards, including controlled access and secure infrastructure.",
      "No method of transmission or storage is completely secure, but we continuously improve protections and incident response.",
    ],
  },
  {
    id: "rights",
    title: "7) Your Rights and Choices",
    points: [
      "You may request access, correction, or deletion of personal information, subject to applicable law.",
      "You may adjust notification settings and profile information from within the app.",
      "You may request account deletion by contacting support.",
    ],
  },
  {
    id: "children",
    title: "8) Children's Privacy",
    points: [
      "Our services are not intended to collect personal data from children in violation of applicable law.",
      "If we learn such data was collected improperly, we will take reasonable steps to remove it.",
    ],
  },
  {
    id: "changes",
    title: "9) Changes to This Policy",
    points: [
      "We may update this Privacy Policy to reflect legal, technical, or service changes.",
      "When updates are material, we will provide notice through the app, website, or other appropriate channels.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-red-600 text-white">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-red-300/20 blur-3xl" />

        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-16 md:px-10">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-white/15 p-3 backdrop-blur">
              <Image
                src="/church-logo.png"
                alt="The Kingdom Church logo"
                width={56}
                height={56}
                className="h-14 w-14 rounded-xl object-contain"
                priority
              />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-blue-100">
                The Kingdom Church
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                Privacy Policy
              </h1>
            </div>
          </div>

          <p className="max-w-3xl text-base leading-7 text-blue-50 md:text-lg">
            This policy explains how we collect, use, store, and protect your
            personal information when you use our app and related digital
            services.
          </p>

          <div className="flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-white/40 bg-white/15 px-4 py-2 font-medium">
              Effective Date: {effectiveDate}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-10 md:px-10">
        <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[1.1fr_2fr] md:p-8">
          <aside>
            <h2 className="text-lg font-bold text-slate-900">Quick Navigation</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {policySections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="inline-block rounded-md px-2 py-1 transition hover:bg-blue-50 hover:text-blue-700"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="inline-block rounded-md px-2 py-1 transition hover:bg-red-50 hover:text-red-700"
                >
                  10) Contact Us
                </a>
              </li>
            </ul>
          </aside>

          <div className="space-y-7">
            <p className="text-sm leading-6 text-slate-700">
              By using our services, you agree to this Privacy Policy. If you do
              not agree, please discontinue use of our services.
            </p>

            {policySections.map((section) => (
              <article
                id={section.id}
                key={section.id}
                className="scroll-mt-24 rounded-xl border border-slate-200 bg-slate-50/60 p-5"
              >
                <h3 className="text-base font-bold text-slate-900 md:text-lg">
                  {section.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700 md:text-[15px]">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            <article
              id="contact"
              className="scroll-mt-24 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-red-50 p-5"
            >
              <h3 className="text-base font-bold text-slate-900 md:text-lg">
                10) Contact Us
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700 md:text-[15px]">
                If you have questions about this Privacy Policy or want to submit
                a data-related request, contact us at{" "}
                <a
                  href={`mailto:${supportEmail}`}
                  className="font-semibold text-blue-700 hover:text-blue-800"
                >
                  {supportEmail}
                </a>
                . You can also visit{" "}
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-red-700 hover:text-red-800"
                >
                  {websiteUrl}
                </a>
                .
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
