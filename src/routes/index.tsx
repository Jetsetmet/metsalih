import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Met Salih — Actress, Stuntwoman & Voiceover Artist" },
      { name: "description", content: "Met Salih (SAG/AFTRA) — actress, stunt performer and voiceover artist. Credits include Rampage, Girls Trip, The Walking Dead and more." },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#stunts", label: "Stunts" },
  { href: "#acting", label: "Acting" },
  { href: "#voice", label: "Voice" },
  { href: "#contact", label: "Contact" },
];

const filmCredits = [
  { title: "Rampage", role: "Stunts", coord: "Dan Stevens / Allan Poppleton" },
  { title: "Blockers", role: "Stunt Double", coord: "Steve Ritzi" },
  { title: "Girls Trip", role: "Stunt Double — Jada Pinkett Smith", coord: "Lex Geddings" },
  { title: "Jack Reacher 2: Never Go Back", role: "Precision Driver", coord: "Wade Eastwood" },
  { title: "Geostorm", role: "Stunt Performer", coord: "Charlie Croughwell" },
  { title: "Cut Throat City", role: "Stunts", coord: "Andy Dylan" },
  { title: "Kidnap", role: "Stunts", coord: "Andy Dylan / Steve Ritzi" },
  { title: "Hot Pursuit", role: "Stunt Performer", coord: "Charlie Croughwell" },
  { title: "Dawn of the Planet of the Apes", role: "Stunt Performer", coord: "Charlie Croughwell" },
  { title: "Now You See Me", role: "Stunt Actor", coord: "Stephen Pope" },
  { title: "Texas Chainsaw 3D", role: "Stunt Actor", coord: "Steve Griffin" },
  { title: "This Is the End", role: "Stunt Performer", coord: "Steve Ritzi" },
];

const tvCredits = [
  { title: "The Purge", role: "Stunt Performer", coord: "Andy Dylan" },
  { title: "The Walking Dead", role: "Stunt Performer", coord: "Monty Simmons" },
  { title: "MacGyver", role: "Stunt Performer", coord: "Jeff Wolfe" },
  { title: "NCIS: New Orleans", role: "Double — Shalita Grant & Tony Trucks", coord: "Jonathan Arthur" },
  { title: "Claws", role: "Lead Double — Karrueche Tran", coord: "Keith Adams" },
  { title: "Cloak and Dagger (Marvel)", role: "Utility Stunts", coord: "Andy Dylan" },
  { title: "American Horror Story", role: "Utility Stunts", coord: "Jim Henry" },
  { title: "Invisible Sister (Disney)", role: "Stunt Double", coord: "Rudy Weber" },
];

const coordCredits = [
  "Out of Blue — Dir. Carol Morley",
  "Blood in The Bayou — Dir. Kenn Michael",
  "The Convent — Dir. Justin Jones",
  "Dream House Nightmares — Dir. Jose Montesinos",
  "The Miles Were Many — Dir. Ashley Wright",
];

const skills = [
  "Tae Kwon Do / Kuk Sool Won — Black Belt",
  "Stunt fighting & weapons",
  "Precision driving",
  "High falls & ratchets",
  "Motorcycle, snowboarding, skiing",
  "PADI Open Water, horse riding",
];

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-xl font-bold tracking-tight">
            Met <span className="text-gold">Salih</span>
          </a>
          <nav className="hidden gap-8 md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:opacity-90 md:inline-block"
          >
            Book Met
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-foreground md:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-md px-2 py-2 text-sm font-medium text-foreground hover:bg-secondary">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-primary px-5 py-2 text-center text-sm font-semibold text-primary-foreground">
                Book Met
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> SAG / AFTRA #10244285
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] md:text-7xl">
              Met <span className="text-primary">Salih</span>
            </h1>
            <p className="mt-4 text-lg font-medium text-muted-foreground md:text-xl">
              Actress · Stuntwoman · Voiceover Artist
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground/80">
              Find a job you enjoy and you never have to work again for the rest of your life.
              Based between LA, New Orleans &amp; Atlanta — eligible to work in the US, UK and EU.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#stunts" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5">
                View Credits
              </a>
              <a href="https://youtu.be/UtyrfHywC48" target="_blank" rel="noreferrer" className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-gold hover:text-gold">
                ▶ Watch Stunt Reel
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl" style={{ background: "var(--gradient-gold)", opacity: 0.15, filter: "blur(40px)" }} />
            <img
              src={heroImg}
              alt="Met Salih, stuntwoman in dynamic action pose"
              width={1536}
              height={1280}
              className="relative rounded-2xl border border-border bg-card object-cover shadow-[var(--shadow-elegant)]"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">About</p>
            <h2 className="mt-3 text-4xl font-bold">Performer. Storyteller. Pro.</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg leading-relaxed text-foreground/80">
              Met Salih is a SAG/AFTRA stunt performer, trained actor and voiceover artist with over a decade of
              credits across major studio features and prestige television. From precision driving on
              <em> Jack Reacher</em> to doubling Jada Pinkett Smith in <em>Girls Trip</em>, Met brings discipline,
              physicality and craft to every role.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                ["50+", "Film & TV credits"],
                ["3", "Stunt bases"],
                ["10+", "Years SAG/AFTRA"],
                ["1°", "Black belt"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-xl border border-border bg-card p-4">
                  <dt className="font-display text-3xl font-bold text-primary">{n}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* STUNTS */}
      <section id="stunts" className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">Stunt Work</p>
              <h2 className="mt-3 text-4xl font-bold">Selected Credits</h2>
            </div>
            <a href="mailto:metsalih.stunts@gmail.com?subject=Stunt%20Resume%20Request" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
              Request full resume →
            </a>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <CreditList title="Film" items={filmCredits} />
            <CreditList title="Television" items={tvCredits} />
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-xl font-bold">Stunt Coordinator</h3>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                {coordCredits.map((c) => (
                  <li key={c} className="flex gap-2"><span className="text-gold">◆</span>{c}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-xl font-bold">Training & Special Skills</h3>
              <ul className="mt-4 grid gap-2 text-sm text-foreground/80 sm:grid-cols-2">
                {skills.map((s) => (
                  <li key={s} className="flex gap-2"><span className="text-gold">◆</span>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ACTING / VOICE */}
      <section id="acting" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-[var(--shadow-elegant)]">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Acting</p>
            <h2 className="mt-3 text-3xl font-bold">Trained for the camera.</h2>
            <p className="mt-4 text-foreground/80">
              Jerry Katz Master Class · The Lyndon Technique · Ivana Chubbuck · New York Film Academy ·
              Central School of Speech &amp; Drama.
            </p>
            <a href="https://www.imdb.me/metsalih" target="_blank" rel="noreferrer" className="mt-6 inline-block text-sm font-semibold text-primary hover:underline">
              View IMDb profile →
            </a>
          </div>
          <div id="voice" className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-[var(--shadow-elegant)]">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Voiceover</p>
            <h2 className="mt-3 text-3xl font-bold">A voice with range.</h2>
            <p className="mt-4 text-foreground/80">
              Warm, versatile and commercially trained. Available for commercial, narration, character and
              animation work — remote or studio.
            </p>
            <a href="#contact" className="mt-6 inline-block text-sm font-semibold text-primary hover:underline">
              Request voice reel →
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Get in touch</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Let's make something.</h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/80">
            For bookings, resumes or production enquiries — reach out directly.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a href="tel:+13233488441" className="group rounded-2xl border border-border bg-card p-6 text-left transition-all hover:border-gold hover:shadow-[var(--shadow-gold)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Call</p>
              <p className="mt-2 font-display text-2xl font-bold text-foreground group-hover:text-primary">323 348 8441</p>
            </a>
            <a href="mailto:metsalih.stunts@gmail.com" className="group rounded-2xl border border-border bg-card p-6 text-left transition-all hover:border-gold hover:shadow-[var(--shadow-gold)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email</p>
              <p className="mt-2 break-all font-display text-xl font-bold text-foreground group-hover:text-primary">metsalih.stunts@gmail.com</p>
            </a>
          </div>
          <p className="mt-10 text-sm text-muted-foreground">
            Based in LA · New Orleans · Atlanta — Eligible to work in US, UK &amp; EU
          </p>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Met Salih. All rights reserved.</p>
          <p className="font-display italic">"Find a job you enjoy."</p>
        </div>
      </footer>
    </div>
  );
}

function CreditList({ title, items }: { title: string; items: { title: string; role: string; coord: string }[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h3 className="font-display text-2xl font-bold">{title}</h3>
      <ul className="mt-4 divide-y divide-border">
        {items.map((c) => (
          <li key={c.title} className="py-3">
            <p className="font-semibold text-foreground">{c.title}</p>
            <p className="text-sm text-muted-foreground">
              {c.role} <span className="text-gold">·</span> {c.coord}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
