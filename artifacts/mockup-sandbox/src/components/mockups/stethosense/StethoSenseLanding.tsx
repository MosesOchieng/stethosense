import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BatteryCharging,
  Bluetooth,
  BrainCircuit,
  Check,
  ChevronRight,
  CircleDot,
  Cpu,
  HeartPulse,
  Menu,
  Mic2,
  Radio,
  ShieldCheck,
  Signal,
  Sparkles,
  Stethoscope,
  X,
  Zap,
} from "lucide-react";

const navItems = [
  ["Story", "story"],
  ["How it works", "workflow"],
  ["Technology", "technology"],
  ["Field care", "field"],
];

const workflow = [
  { n: "01", title: "Listen", text: "Use it exactly as you always have.", icon: Stethoscope },
  { n: "02", title: "Capture", text: "MEMS microphones preserve heart and lung sounds.", icon: Mic2 },
  { n: "03", title: "Clean", text: "Adaptive DSP removes noise without hiding signal.", icon: Radio },
  { n: "04", title: "Understand", text: "Embedded AI surfaces patterns worth a closer look.", icon: BrainCircuit },
  { n: "05", title: "Act", text: "Review, record, and share a clearer next step.", icon: HeartPulse },
];

const specs = [
  ["MEMS microphones", "High-fidelity acoustic capture"],
  ["AI processor", "Runs models at the edge"],
  ["Flash memory", "Stores recordings securely"],
];

export function StethoSenseLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const go = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-[100dvh] overflow-hidden bg-[#f6f4ef] text-[#112a35]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes rise { from { opacity:0; transform:translateY(18px) } to { opacity:1; transform:translateY(0) } }
        @keyframes pulseLine { 0%,100% { opacity:.55; transform:scaleX(.94) } 50% { opacity:1; transform:scaleX(1) } }
        .ss-rise { animation: rise .8s ease both; }
        .ss-delay-1 { animation-delay:.12s } .ss-delay-2 { animation-delay:.22s } .ss-delay-3 { animation-delay:.32s }
        .ss-line { animation: pulseLine 3s ease-in-out infinite; transform-origin:left; }
        .ss-noise { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.035'/%3E%3C/svg%3E"); }
      `}</style>

      <header className="sticky top-0 z-40 border-b border-[#dce2dd] bg-[#f6f4ef]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[70px] max-w-[1240px] items-center justify-between px-5 md:px-8">
          <button onClick={() => go("top")} className="flex items-center gap-2 text-left" aria-label="StethoSense home">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#0e7370] text-[#f6f4ef]"><HeartPulse size={17} /></span>
            <span className="text-[15px] font-bold tracking-[-.03em]">Stetho<span className="text-[#0e7370]">Sense</span></span>
          </button>
          <nav className="hidden items-center gap-7 text-[12px] font-medium text-[#50656a] md:flex">
            {navItems.map(([label, id]) => <button key={id} onClick={() => go(id)} className="transition-colors hover:text-[#0e7370]">{label}</button>)}
          </nav>
          <button onClick={() => setDemoOpen(true)} className="hidden rounded-full bg-[#102f3a] px-5 py-2.5 text-[12px] font-bold text-[#f7f5ef] transition-transform hover:-translate-y-0.5 md:block">Request a demo <ArrowRight className="ml-2 inline" size={13} /></button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-full p-2 md:hidden" aria-label="Toggle menu">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
        {menuOpen && <div className="border-t border-[#dce2dd] bg-[#f6f4ef] px-5 py-4 md:hidden">{navItems.map(([label, id]) => <button key={id} onClick={() => go(id)} className="block w-full py-3 text-left text-sm">{label}</button>)}<button onClick={() => setDemoOpen(true)} className="mt-2 w-full rounded-full bg-[#102f3a] py-3 text-sm font-bold text-white">Request a demo</button></div>}
      </header>

      <section id="top" className="ss-noise relative mx-auto grid max-w-[1240px] items-center gap-12 px-5 pb-20 pt-16 md:grid-cols-[.9fr_1.1fr] md:px-8 md:pb-28 md:pt-24">
        <div className="relative z-10">
          <p className="ss-rise mb-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.24em] text-[#0e7370]"><span className="h-2 w-2 rounded-full bg-[#db8b5f]" /> A small upgrade to a vital ritual</p>
          <h1 className="ss-rise ss-delay-1 max-w-[560px] font-['Playfair_Display'] text-[clamp(3.3rem,7vw,6.7rem)] leading-[.91] tracking-[-.065em] text-[#102f3a]">Every heartbeat<br /><em className="font-normal text-[#0e7370]">tells a story.</em></h1>
          <p className="ss-rise ss-delay-2 mt-7 max-w-[430px] text-[15px] leading-7 text-[#53676b]">The stethoscope you already trust, now with intelligence that helps you hear what matters — wherever care happens.</p>
          <div className="ss-rise ss-delay-3 mt-9 flex flex-wrap items-center gap-3"><button onClick={() => go("workflow")} className="rounded-full bg-[#0e7370] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(14,115,112,.18)] transition-transform hover:-translate-y-1">Explore the difference <ArrowRight className="ml-2 inline" size={15} /></button><button onClick={() => go("story")} className="rounded-full border border-[#aebfba] px-6 py-3.5 text-sm font-bold text-[#102f3a] hover:bg-white">Why it matters</button></div>
          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-[11px] font-medium text-[#637679]"><span className="flex items-center gap-2"><Check size={14} className="text-[#0e7370]" /> Offline-first</span><span className="flex items-center gap-2"><Check size={14} className="text-[#0e7370]" /> Bluetooth connected</span><span className="flex items-center gap-2"><Check size={14} className="text-[#0e7370]" /> Replaceable battery</span></div>
        </div>
        <div className="relative min-h-[430px] md:min-h-[580px]">
          <div className="absolute inset-5 rounded-[42%_42%_12%_12%] bg-[#dce9e3]" />
          <img src="/__mockup/images/stethosense-hero.jpg" alt="StethoSense connected stethoscope" className="relative h-[430px] w-full rounded-[32px] object-cover mix-blend-multiply md:h-[580px]" />
          <div className="absolute bottom-7 left-5 rounded-2xl border border-white/60 bg-[#f6f4ef]/85 p-4 backdrop-blur-md md:left-8"><div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#0e7370]"><span className="h-2 w-2 rounded-full bg-[#4daf73]" /> Connected</div><div className="mt-1 font-['Space_Mono'] text-xs text-[#102f3a]">READY TO LISTEN</div></div>
          <div className="absolute right-[-8px] top-10 hidden w-36 space-y-3 rounded-2xl bg-[#102f3a] p-4 text-[#edf4ee] shadow-xl md:block"><div className="flex items-center gap-2 text-[11px]"><Mic2 size={15} className="text-[#8dd8ca]" /> Captures<br />heart & lungs</div><div className="flex items-center gap-2 text-[11px]"><BrainCircuit size={15} className="text-[#8dd8ca]" /> AI analyzes<br />as you listen</div><div className="flex items-center gap-2 text-[11px]"><BatteryCharging size={15} className="text-[#8dd8ca]" /> Built for<br />the long shift</div></div>
        </div>
      </section>

      <section id="story" className="border-y border-[#dce2dd] bg-[#edece5]">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-20 md:grid-cols-[.85fr_1.15fr] md:px-8 md:py-28">
          <div><p className="text-[11px] font-bold uppercase tracking-[.22em] text-[#0e7370]">The gap is audible</p><h2 className="mt-5 max-w-md font-['Playfair_Display'] text-4xl leading-[1.02] tracking-[-.04em] md:text-6xl">The stethoscope hasn’t changed much.<br /><span className="text-[#0e7370]">Healthcare has.</span></h2><p className="mt-7 max-w-sm text-sm leading-7 text-[#637679]">A quiet sound can be hard to hear consistently. A rural clinic may have no internet. A second opinion may be hours away. The tool should meet the moment.</p></div>
          <div className="grid gap-3 sm:grid-cols-3">{[["Human hearing", "Subtle abnormalities can be difficult to identify consistently."], ["Limited specialist access", "Millions of patients are screened far from a specialist."], ["No digital record", "Traditional auscultation produces no recording or reusable data."]].map(([title, text], i) => <div key={title} className="rounded-2xl border border-[#d6ded9] bg-[#f8f7f2] p-5"><div className="mb-10 grid h-9 w-9 place-items-center rounded-full bg-[#dbece5] text-[#0e7370]">{i === 0 ? <CircleDot size={17} /> : i === 1 ? <ShieldCheck size={17} /> : <Signal size={17} />}</div><h3 className="font-bold text-[#102f3a]">{title}</h3><p className="mt-2 text-xs leading-5 text-[#637679]">{text}</p></div>)}</div>
        </div>
      </section>

      <section id="workflow" className="bg-[#102f3a] text-[#edf4ee]"><div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28"><div className="grid gap-10 md:grid-cols-[.8fr_1.2fr]"><div><p className="text-[11px] font-bold uppercase tracking-[.22em] text-[#8dd8ca]">One small upgrade</p><h2 className="mt-5 font-['Playfair_Display'] text-5xl leading-[.98] tracking-[-.05em] md:text-7xl">A smarter<br /><em className="font-normal text-[#8dd8ca]">stethoscope.</em></h2><p className="mt-7 max-w-sm text-sm leading-7 text-[#abc1bd]">StethoSense replaces the conventional Y-connector with a compact intelligent module that captures auscultation signals while preserving the clinician’s natural listening experience.</p></div><div className="flex items-center justify-center rounded-[28px] bg-[#173d49] p-8"><div className="flex w-full max-w-[560px] items-center justify-between gap-2 text-center">{["Listen", "Capture", "Clean", "Understand", "Insight"].map((x, i) => <div key={x} className="flex items-center gap-2"><div><div className={`mx-auto grid h-12 w-12 place-items-center rounded-2xl ${i === 4 ? "bg-[#0e7370] text-white" : "border border-[#4a6d73] text-[#8dd8ca]"}`}>{[<Stethoscope size={19} />, <Mic2 size={19} />, <Radio size={19} />, <Cpu size={19} />, <HeartPulse size={19} />][i]}</div><span className="mt-2 block text-[10px] text-[#abc1bd]">{x}</span></div>{i < 4 && <ChevronRight className="hidden text-[#668c8d] sm:block" size={15} />}</div>)}</div></div></div></div></section>

      <section className="bg-[#f6f4ef]"><div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28"><div className="mb-12 flex items-end justify-between gap-6"><div><p className="text-[11px] font-bold uppercase tracking-[.22em] text-[#0e7370]">A five-step rhythm</p><h2 className="mt-4 font-['Playfair_Display'] text-4xl tracking-[-.04em] md:text-6xl">How StethoSense works</h2></div><span className="hidden font-['Space_Mono'] text-xs text-[#79908e] md:block">01 — 05</span></div><div className="grid gap-3 md:grid-cols-5">{workflow.map(({ n, title, text, icon: Icon }) => <div key={n} className="group border-t-2 border-[#cbd7d0] py-5 transition-colors hover:border-[#0e7370]"><div className="flex items-center justify-between"><span className="font-['Space_Mono'] text-xs text-[#0e7370]">{n}</span><Icon size={20} className="text-[#78928e] transition-transform group-hover:-translate-y-1 group-hover:text-[#0e7370]" /></div><h3 className="mt-12 font-bold">{title}</h3><p className="mt-2 text-xs leading-5 text-[#637679]">{text}</p></div>)}</div></div></section>

      <section id="technology" className="bg-[#e0ebe5]"><div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-20 md:grid-cols-[1.1fr_.9fr] md:items-center md:px-8 md:py-28"><div className="relative overflow-hidden rounded-[28px] bg-[#102f3a] p-7 text-[#edf4ee] md:p-10"><div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-[#8dd8ca]/20" /><p className="text-[11px] font-bold uppercase tracking-[.22em] text-[#8dd8ca]">Intelligence inside the Y</p><div className="mt-10 grid gap-5 sm:grid-cols-3">{specs.map(([title, text]) => <div key={title} className="border-l border-[#42686b] pl-4"><div className="text-sm font-bold">{title}</div><div className="mt-2 text-xs leading-5 text-[#abc1bd]">{text}</div></div>)}</div><div className="mt-12 flex h-32 items-center justify-center gap-3 rounded-2xl bg-[#173d49]"><div className="h-16 w-12 rounded-lg border border-[#79908e] bg-[#244c55]" /><Zap className="text-[#db8b5f]" size={20} /><div className="h-20 w-28 rounded-xl border border-[#8dd8ca] bg-[#0e7370]/30 p-3"><div className="h-1 w-10 rounded bg-[#8dd8ca]" /><div className="ss-line mt-7 h-1 rounded bg-[#db8b5f]" /></div></div></div><div><p className="text-[11px] font-bold uppercase tracking-[.22em] text-[#0e7370]">Designed for the real world</p><h2 className="mt-5 font-['Playfair_Display'] text-4xl leading-[1.02] tracking-[-.04em] md:text-6xl">Capability,<br /><span className="text-[#0e7370]">not complexity.</span></h2><ul className="mt-8 space-y-4 text-sm text-[#53676b]">{[["Bluetooth", "Secure, low-energy connectivity."], ["Replaceable battery", "Designed for a full day of care."], ["Status LEDs", "Simple visual feedback at a glance."], ["Modular PCBs", "Built for repair, iteration, and scale."]].map(([a,b]) => <li key={a} className="flex items-center gap-3 border-b border-[#cbd7d0] pb-3"><Check size={16} className="text-[#0e7370]" /><span><strong className="text-[#102f3a]">{a}</strong> <span className="ml-1">{b}</span></span></li>)}</ul></div></div></section>

      <section id="field" className="bg-[#f6f4ef]"><div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-20 md:grid-cols-[.9fr_1.1fr] md:items-center md:px-8 md:py-28"><div><p className="text-[11px] font-bold uppercase tracking-[.22em] text-[#0e7370]">Care doesn’t stop when the internet does</p><h2 className="mt-5 font-['Playfair_Display'] text-4xl leading-[1.02] tracking-[-.04em] md:text-6xl">Built for where<br /><span className="text-[#0e7370]">healthcare happens.</span></h2><div className="mt-8 grid gap-5 sm:grid-cols-2"><div><h3 className="flex items-center gap-2 text-sm font-bold"><Radio size={16} className="text-[#0e7370]" /> Offline-first</h3><p className="mt-2 text-xs leading-5 text-[#637679]">Record and review without a network. Sync when you return.</p></div><div><h3 className="flex items-center gap-2 text-sm font-bold"><Bluetooth size={16} className="text-[#0e7370]" /> Connected</h3><p className="mt-2 text-xs leading-5 text-[#637679]">Move securely between device, phone, and care team.</p></div></div></div><div className="relative"><img src="/__mockup/images/stethosense-field.jpg" alt="Clinician using StethoSense in a community clinic" className="h-[380px] w-full rounded-[28px] object-cover md:h-[480px]" /><div className="absolute bottom-5 left-5 max-w-[240px] rounded-xl bg-[#f6f4ef]/90 p-4 backdrop-blur"><p className="text-xs font-bold text-[#102f3a]">No phone. No internet.<br /><span className="text-[#0e7370]">No problem.</span></p></div></div></div></section>

      <section className="border-y border-[#dce2dd] bg-[#edece5]"><div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28"><div className="mb-10 text-center"><p className="text-[11px] font-bold uppercase tracking-[.22em] text-[#0e7370]">A clearer baseline</p><h2 className="mt-4 font-['Playfair_Display'] text-4xl tracking-[-.04em] md:text-6xl">Traditional stethoscope <span className="text-[#0e7370]">vs.</span> StethoSense</h2></div><div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[#d0dbd5] bg-[#f8f7f2]"><div className="grid grid-cols-[1fr_1fr_1fr] border-b border-[#d0dbd5] text-xs font-bold"><div className="p-4">Capability</div><div className="p-4 text-[#637679]">Traditional</div><div className="bg-[#dceee7] p-4 text-[#0e7370]">StethoSense</div></div>{[["Human interpretation", "Yes", "Yes + AI support"], ["Digital recording", "No", "Yes"], ["Works offline", "Yes", "Yes"], ["Shareable insights", "No", "Securely"], ["Replaceable battery", "No", "Yes"]].map(([a,b,c]) => <div key={a} className="grid grid-cols-[1fr_1fr_1fr] border-b border-[#e0e6e1] text-xs last:border-b-0"><div className="p-4 text-[#53676b]">{a}</div><div className="p-4 text-[#9aa9a5]">{b}</div><div className="bg-[#dceee7]/50 p-4 font-bold text-[#0e7370]"><Check size={14} className="mr-1 inline" />{c}</div></div>)}</div></div></section>

      <section className="bg-[#102f3a] text-[#edf4ee]"><div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28"><div className="grid gap-12 md:grid-cols-[.75fr_1.25fr]"><div><p className="text-[11px] font-bold uppercase tracking-[.22em] text-[#8dd8ca]">The StethoSense ecosystem</p><h2 className="mt-5 font-['Playfair_Display'] text-5xl leading-[.98] tracking-[-.05em] md:text-7xl">One device.<br /><em className="font-normal text-[#8dd8ca]">A wider circle</em><br />of care.</h2></div><div className="grid gap-4 sm:grid-cols-3">{[["Hardware", "The intelligent Y-connector captures sound without changing the ritual.", Stethoscope], ["App", "Review, annotate, and share an accessible record with your team.", Radio], ["Platform", "Secure insights, device health, and a clearer picture over time.", BrainCircuit]].map(([title, text, Icon]) => { const I = Icon as typeof Stethoscope; return <div key={title as string} className="rounded-2xl border border-[#345760] p-5 transition-colors hover:border-[#8dd8ca]"><I className="text-[#8dd8ca]" size={23} /><h3 className="mt-14 font-bold">{title as string}</h3><p className="mt-2 text-xs leading-5 text-[#abc1bd]">{text as string}</p><ArrowRight className="mt-8 text-[#db8b5f]" size={16} /></div>})}</div></div></div></section>

      <footer className="bg-[#0b242d] px-5 py-14 text-[#edf4ee] md:px-8"><div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-10 md:flex-row md:items-end"><div><div className="flex items-center gap-2 text-sm font-bold"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#0e7370]"><HeartPulse size={16} /></span> StethoSense</div><p className="mt-5 max-w-xs text-sm leading-6 text-[#abc1bd]">We’re building the technology to help every heartbeat be heard.</p></div><div className="flex flex-wrap gap-3"><button onClick={() => setDemoOpen(true)} className="rounded-full bg-[#8dd8ca] px-5 py-3 text-xs font-bold text-[#102f3a]">Partner with us</button><button onClick={() => setDemoOpen(true)} className="rounded-full border border-[#527177] px-5 py-3 text-xs font-bold">Contact StethoSense</button></div></div><div className="mx-auto mt-12 max-w-[1240px] border-t border-[#294b53] pt-5 text-[10px] text-[#78928e]">© 2026 StethoSense Technologies · Designed for the people who listen first.</div></footer>

      {demoOpen && <div className="fixed inset-0 z-50 grid place-items-center bg-[#102f3a]/70 px-5 backdrop-blur-sm" role="dialog" aria-modal="true"><div className="relative w-full max-w-md rounded-3xl bg-[#f6f4ef] p-7 text-[#102f3a] shadow-2xl"><button onClick={() => { setDemoOpen(false); setSubmitted(false); }} className="absolute right-5 top-5 rounded-full p-2 hover:bg-[#e2e9e3]" aria-label="Close"><X size={18} /></button>{submitted ? <div className="py-10 text-center"><div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#dceee7] text-[#0e7370]"><Check /></div><h2 className="mt-5 font-['Playfair_Display'] text-3xl">We’ll be in touch.</h2><p className="mt-3 text-sm text-[#637679]">Thanks for your interest in bringing clearer listening to your team.</p></div> : <><p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#0e7370]">Start a conversation</p><h2 className="mt-3 font-['Playfair_Display'] text-4xl tracking-[-.04em]">See StethoSense in practice.</h2><p className="mt-3 text-sm leading-6 text-[#637679]">Tell us where you work and we’ll arrange a focused product walkthrough.</p><form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="mt-7 space-y-3"><input required aria-label="Name" placeholder="Your name" className="w-full rounded-xl border border-[#cbd7d0] bg-[#fffefa] px-4 py-3 text-sm outline-none focus:border-[#0e7370]" /><input required type="email" aria-label="Email" placeholder="Work email" className="w-full rounded-xl border border-[#cbd7d0] bg-[#fffefa] px-4 py-3 text-sm outline-none focus:border-[#0e7370]" /><button className="w-full rounded-xl bg-[#0e7370] py-3.5 text-sm font-bold text-white">Request a demo <ArrowRight className="ml-2 inline" size={15} /></button></form></>}</div></div>}
    </main>
  );
}