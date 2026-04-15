import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  BookOpen,
  CheckCircle2,
  CalendarCheck2,
  HeartHandshake,
  Layers3,
  MonitorSmartphone,
  MessageCircleHeart,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Daily Devotionals",
    description:
      "Start each day with scripture-based encouragement and practical reflections.",
    icon: BookOpen,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Church Events",
    description:
      "Stay updated with upcoming programs, services, conferences, and outreach activities.",
    icon: CalendarCheck2,
    color: "from-red-500 to-red-600",
  },
  {
    title: "Sermons On Demand",
    description:
      "Watch and listen to inspiring sermons anytime to strengthen your walk with Christ.",
    icon: PlayCircle,
    color: "from-blue-500 to-red-500",
  },
  {
    title: "Prayer Community",
    description:
      "Share prayer requests and stand in faith with a caring and supportive church family.",
    icon: MessageCircleHeart,
    color: "from-red-500 to-pink-500",
  },
];

const highlights = [
  {
    label: "Active Members",
    value: "10K+",
    icon: Users,
  },
  {
    label: "Answered Prayer Stories",
    value: "2,500+",
    icon: HeartHandshake,
  },
  {
    label: "Notifications Delivered",
    value: "1M+",
    icon: Bell,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb,transparent_45%),radial-gradient(circle_at_80%_20%,#ef4444,transparent_35%)] opacity-80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-50 to-transparent" />

        <div className="relative mx-auto w-full max-w-6xl px-6 pt-6 pb-20 md:px-10 md:pt-8 md:pb-24">
          <header className="sticky top-4 z-20 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-xl">
            <nav className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/15 p-2">
                  <Image
                    src="/church-logo.png"
                    alt="The Kingdom Church logo"
                    width={42}
                    height={42}
                    className="rounded-lg object-contain"
                    priority
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-100">
                    Kingdom Church
                  </p>
                  <p className="text-sm font-semibold text-white">Mobile App</p>
                </div>
              </div>

              <div className="hidden items-center gap-5 text-sm font-medium text-slate-200 md:flex">
                <a href="#features" className="transition hover:text-white">
                  Features
                </a>
                <a href="#experience" className="transition hover:text-white">
                  Experience
                </a>
                <a href="#download" className="transition hover:text-white">
                  Download
                </a>
              </div>

              <span className="rounded-full border border-white/35 px-4 py-2 text-sm font-semibold text-white/90 md:hidden">
                Kingdom Church
              </span>
            </nav>
          </header>

          <div className="mt-12 grid items-center gap-10 md:mt-16 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-blue-50">
                <Sparkles className="h-4 w-4" />
                Your Church in Your Pocket
              </div>

              <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                Faith. Fellowship. Growth.
                <span className="mt-2 block text-blue-200">
                  All in one beautiful app.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg">
                Stay spiritually grounded through devotionals and sermons, stay
                connected through events and community, and stay inspired every
                day with Kingdom Church.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Download on Android
                </a>
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Download on iOS
                </a>
                <a
                  href="https://thechurchworldwide.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Official Website
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-2xl border border-white/15 bg-slate-900/70 p-4">
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                  <p className="text-sm font-semibold text-blue-100">
                    Community Snapshot
                  </p>
                  <MonitorSmartphone className="h-5 w-5 text-red-300" />
                </div>
                <div className="space-y-3">
                  {highlights.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2.5"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="rounded-md bg-blue-500/20 p-1.5 text-blue-100">
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="text-sm text-slate-100">
                            {item.label}
                          </span>
                        </div>
                        <span className="font-bold text-white">{item.value}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs uppercase tracking-wider text-slate-300">
                    Prayer
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Request Support
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs uppercase tracking-wider text-slate-300">
                    Sermons
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Watch Anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-700">
            Features You Will Love
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Designed to strengthen spiritual growth and community
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            Every section of the app is built to help members stay connected
            with church life throughout the week.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className={`mb-4 inline-flex rounded-xl bg-gradient-to-r p-3 text-white ${feature.color}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="experience" className="bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 md:grid-cols-3 md:px-10">
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <ShieldCheck className="h-8 w-8 text-blue-700" />
            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Safe and Secure
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              Your information is protected with secure authentication and
              privacy-first practices.
            </p>
          </div>

          <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
            <Bell className="h-8 w-8 text-red-600" />
            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Never Miss Updates
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              Get instant notifications for events, devotionals, announcements,
              and sermon releases.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <HeartHandshake className="h-8 w-8 text-blue-700" />
            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Built for Community
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              Encourage one another through prayers, testimonies, and shared
              moments of faith.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10">
        <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 md:grid-cols-3 md:p-8">
          <div className="rounded-2xl bg-slate-50 p-5">
            <Layers3 className="h-6 w-6 text-blue-700" />
            <h3 className="mt-3 font-bold text-slate-900">
              Everything in One Place
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Devotionals, sermons, giving, testimonies, and church updates are
              organized for easy access.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <Users className="h-6 w-6 text-red-600" />
            <h3 className="mt-3 font-bold text-slate-900">
              Built for Members
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Designed for real church life: discover events, join conversations,
              and walk in faith together.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <CheckCircle2 className="h-6 w-6 text-blue-700" />
            <h3 className="mt-3 font-bold text-slate-900">
              Easy to Use
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A clean interface that is simple to navigate for both first-time
              and regular users.
            </p>
          </div>
        </div>
      </section>

      <section id="download" className="bg-gradient-to-r from-blue-700 to-red-600">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-16 text-center text-white md:px-10">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Join The Kingdom Church App Today
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-blue-50">
            Connect, grow, and stay inspired every day with content and community
            made for your spiritual journey.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.thekingdomchurch.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-xl border border-white/15 bg-white p-1 transition hover:bg-blue-50"
              aria-label="Get it on Google Play"
            >
              <Image
                src="/google-play.png"
                alt="Get it on Google Play"
                width={180}
                height={54}
                className="h-12 w-auto object-contain"
              />
            </a>
            <a
              href="https://apps.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-xl border border-white/15 bg-white p-1 transition hover:bg-blue-50"
              aria-label="Download on the App Store"
            >
              <Image
                src="/ios-store.png"
                alt="Download on the App Store"
                width={180}
                height={54}
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-200">
        <div className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/10 p-2">
                  <Image
                    src="/church-logo.png"
                    alt="The Kingdom Church logo"
                    width={34}
                    height={34}
                    className="rounded-md object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    The Kingdom Church
                  </p>
                  <p className="text-xs text-slate-400">Mobile App</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                Helping believers grow in faith, stay connected, and experience
                church life every day.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                App
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#features" className="transition hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#experience" className="transition hover:text-white">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#download" className="transition hover:text-white">
                    Download
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.krcc.church"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    Web Platform
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                Resources
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li>
                  <a
                    href="mailto:support@krcc.church"
                    className="transition hover:text-white"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:feedback@krcc.church"
                    className="transition hover:text-white"
                  >
                    Feedback
                  </a>
                </li>
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.thekingdomchurch.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    Google Play
                  </a>
                </li>
                <li>
                  <a
                    href="https://apps.apple.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    App Store (iOS)
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                Legal
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="/privacy-policy" className="transition hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <span className="text-slate-500">Terms of Service (Coming soon)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-500 md:flex md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} The Kingdom Church. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Built with love for the Kingdom community.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
