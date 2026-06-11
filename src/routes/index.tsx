import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import headshotMain from "@/assets/media/headshot-main.jpg.asset.json";
import headshot1 from "@/assets/media/headshot1.jpg.asset.json";
import headshot2 from "@/assets/media/headshot2.jpg.asset.json";
import headshot3 from "@/assets/media/headshot3.jpg.asset.json";
import headshot2014 from "@/assets/media/headshot-2014.jpg.asset.json";
import stuntShot from "@/assets/media/stunt-shot.jpg.asset.json";
import gritty from "@/assets/media/gritty.jpg.asset.json";
import bonnieClyde from "@/assets/media/bonnie-clyde.jpg.asset.json";
import hatchet3 from "@/assets/media/hatchet3.jpg.asset.json";
import baytown from "@/assets/media/baytown-eva.jpg.asset.json";
import bridgewater from "@/assets/media/bridgewater.jpg.asset.json";
import silverDress from "@/assets/media/silver-dress.jpg.asset.json";
import voiceClub from "@/assets/media/voice-club.mp3.asset.json";
import voiceCommercial from "@/assets/media/voice-commercial.mp3.asset.json";
import stuntResume from "@/assets/media/stunt-resume.pdf.asset.json";
import icResume from "@/assets/media/ic-resume.pdf.asset.json";
import jetsetmetLogo from "@/assets/jetsetmet-logo.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Met Salih — Actress, Stuntwoman, Intimacy Coordinator & Voiceover Artist" },
      { name: "description", content: "Met Salih (SAG/AFTRA) — actress, stunt performer, intimacy coordinator and voiceover artist. Credits include Rampage, Girls Trip, The Walking Dead and more." },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#reels", label: "Reels" },
  { href: "#stunts", label: "Stunts" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#voice", label: "Voice" },
  { href: "#contact", label: "Contact" },
];

const gallery = [
  { src: headshotMain.url, title: "Headshot" },
  { src: stuntShot.url, title: "Stunt Shot" },
  { src: gritty.url, title: "Gritty Look" },
  { src: baytown.url, title: "Baytown Outlaws — doubling Eva Longoria" },
  { src: bonnieClyde.url, title: "Bonnie & Clyde — doubling Sarah Hyland" },
  { src: hatchet3.url, title: "Hatchet III — doubling Danielle Harris" },
  { src: bridgewater.url, title: "The Bridgewater Murders" },
  { src: headshot1.url, title: "Headshot" },
  { src: headshot2.url, title: "Headshot" },
  { src: headshot3.url, title: "Headshot" },
  { src: silverDress.url, title: "Portrait" },
];

const reels = [
  { id: "hefyapgrAbw", title: "Latest Reel" },
  { id: "ATBpYf7arbs", title: "Actor Reel" },
  { id: "g5Gnc92cfe0", title: "Showreel" },
  { id: "zJbVuzFoVJU", title: "The Exile — with Tracy Miller" },
  { id: "TjNDB_GP_Lk", title: "Misdirection" },
];

const filmCredits = [
  { title: "Rampage", role: "Stunts", coord: "Dan Stevens / Allan Poppleton" },
  { title: "Blockers", role: "Stunt Double", coord: "Steve Ritzi" },
  { title: "Girls Trip", role: "Stunt Double — Jada Pinkett Smith", coord: "Lex Geddings" },
  { title: "Jack Reacher 2: Never Go Back", role: "Stunts", coord: "Wade Eastwood" },
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
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [emailRevealed, setEmailRevealed] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src={jetsetmetLogo.url} alt="JetSetMet logo" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-display text-xl font-bold tracking-tight">Met <span className="text-gold">Salih</span></span>
          </a>
          <nav className="hidden gap-7 md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:opacity-90 md:inline-block">
            Book Met
          </a>
          <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="rounded-md p-2 text-foreground md:hidden">
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
              Actress · Stuntwoman · Intimacy Coordinator · Voiceover Artist
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground/80">
              Find a job you enjoy and you never have to work again for the rest of your life.
              Based in New Orleans — eligible to work in the US, UK and EU.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#reels" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5">
                ▶ Watch Reels
              </a>
              <a href="#stunts" className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-gold hover:text-gold">
                View Credits
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl" style={{ background: "var(--gradient-gold)", opacity: 0.18, filter: "blur(40px)" }} />
            <img
              src={headshotMain.url}
              alt="Met Salih headshot"
              width={800}
              height={1000}
              className="relative aspect-[4/5] w-full rounded-2xl border border-border bg-card object-cover shadow-[var(--shadow-elegant)]"
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
              Met Salih is a SAG/AFTRA stunt performer, trained actor, certified intimacy coordinator and
              voiceover artist with over a decade of credits across major studio features and prestige
              television. From stunt work on <em>Rampage</em> to doubling Jada Pinkett Smith in
              <em> Girls Trip</em>, Met brings discipline, physicality, craft and a safe, collaborative set
              presence to every role.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={stuntResume.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
              >
                ↓ Stunt Resume (PDF)
              </a>
              <a
                href={icResume.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold bg-card px-5 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-gold-foreground"
              >
                ↓ Intimacy Coordinator Resume (PDF)
              </a>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[["50+", "Film & TV credits"], ["3", "Stunt bases"], ["10+", "Years SAG/AFTRA"], ["1°", "Black belt"]].map(([n, l]) => (
                <div key={l} className="rounded-xl border border-border bg-card p-4">
                  <dt className="font-display text-3xl font-bold text-primary">{n}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* REELS */}
      <section id="reels" className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Showreels</p>
          <h2 className="mt-3 text-4xl font-bold">On Screen</h2>
          <p className="mt-3 max-w-2xl text-foreground/80">A selection of reels and clips spanning stunts, acting and on-set work.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reels.map((r) => (
              <div key={r.id} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-[var(--shadow-elegant)]">
                <div className="aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${r.id}`}
                    title={r.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold">{r.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUNTS */}
      <section id="stunts" className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Stunt Work</p>
            <h2 className="mt-3 text-4xl font-bold">Selected Credits</h2>
          </div>
          <a href={stuntResume.url} target="_blank" rel="noreferrer" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
            Download full resume (PDF) →
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
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Portfolio</p>
          <h2 className="mt-3 text-4xl font-bold">Gallery</h2>
          <p className="mt-3 max-w-2xl text-foreground/80">Headshots, on-set photography and behind-the-scenes from features and TV.</p>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {gallery.map((g) => (
              <button
                key={g.src}
                onClick={() => setLightbox(g.src)}
                className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-card"
              >
                <img
                  src={g.src}
                  alt={g.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-left text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {g.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* VOICE */}
      <section id="voice" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold">Voiceover</p>
        <h2 className="mt-3 text-4xl font-bold">Voice Reels</h2>
        <p className="mt-3 max-w-2xl text-foreground/80">Warm, versatile and commercially trained — available for commercial, narration, character and animation work.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { title: "Club Voice Reel", src: voiceClub.url },
            { title: "Commercial Voice Reel", src: voiceCommercial.url },
          ].map((v) => (
            <div key={v.src} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full text-xl" style={{ background: "var(--gradient-gold)" }}>🎙️</span>
                <div>
                  <p className="font-display text-xl font-bold">{v.title}</p>
                  <p className="text-sm text-muted-foreground">Met Salih</p>
                </div>
              </div>
              <audio controls preload="none" src={v.src} className="mt-5 w-full">
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <img src={jetsetmetLogo.url} alt="JetSetMet logo" className="mx-auto mb-8 h-28 w-28 rounded-full object-contain md:h-36 md:w-36" />
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Get in touch</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Let's make something.</h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/80">
            For bookings, resumes or production enquiries — reach out directly.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a href="https://www.actorschoicetalent.com/contact" target="_blank" rel="noreferrer" className="group rounded-2xl border border-border bg-card p-6 text-left transition-all hover:border-gold hover:shadow-[var(--shadow-gold)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Acting Enquiries</p>
              <p className="mt-2 font-display text-xl font-bold text-foreground group-hover:text-primary">Lisa · Actors Choice Talent Agency</p>
              <p className="mt-1 text-sm text-muted-foreground">Contact Lisa for all acting bookings</p>
            </a>
            <button
              onClick={() => {
                setEmailRevealed(true);
                window.location.href = "mailto:metsalih.stunts@gmail.com";
              }}
              className="group rounded-2xl border border-border bg-card p-6 text-left transition-all hover:border-gold hover:shadow-[var(--shadow-gold)]"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Stunt &amp; Intimacy Coordinator Bookings</p>
              <p className="mt-2 break-all font-display text-xl font-bold text-foreground group-hover:text-primary">
                {emailRevealed ? "metsalih.stunts@gmail.com" : "Click to reveal email"}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Email for stunt, intimacy coordination &amp; on-set bookings</p>
            </button>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>Agent: <a href="https://www.actorschoicetalent.com/contact" target="_blank" rel="noreferrer" className="font-semibold text-primary hover:underline">Lisa · Actors Choice Talent Agency</a></span>
            <a href="https://www.imdb.me/metsalih" target="_blank" rel="noreferrer" className="font-semibold text-primary hover:underline">IMDb →</a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Based in New Orleans — Eligible to work in US, UK &amp; EU
          </p>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Met Salih. All rights reserved.</p>
          <p className="font-display italic">"Find a job you enjoy."</p>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] grid place-items-center bg-black/85 p-6 backdrop-blur-sm"
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-full rounded-lg object-contain" />
        </div>
      )}
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
