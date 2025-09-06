import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ScrollText, Scale, Landmark, Gavel, BookMarked, Mail, Phone, MapPin, Instagram, Shield, Users, ChevronRight, MessageSquare } from "lucide-react";

export default function GuwahatiLegalSite() {
  // Lightweight site settings — edit here
  const SITE = useMemo(() => ({
    name: "Guwahati Legal",
    tagline: "Legal awareness • High Court updates • Community help",
    instagram: "https://www.instagram.com/guwahatilegal/",
    email: "contact@gml.example", // <-- replace with your real email
    phone: "+91-00000-00000",  // <-- replace with your real phone / WhatsApp
    address: "Guwahati, Assam — Gauhati High Court & Subordinate Courts",
  }), []);

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "services", label: "Practice Areas" },
    { id: "instagram", label: "Instagram" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  const instaEmbeds = [
    // Recent posts we found publicly
    { url: "https://www.instagram.com/reel/DN_QOijEvHK/", title: "Flooding awareness reel (Aug 30, 2025)" },
    { url: "https://www.instagram.com/reel/DN84OZ2EwI3/", title: "Reel (Aug 29, 2025)" },
    { url: "https://www.instagram.com/p/DN83yMBkyZb/", title: "Post (Aug 29, 2025)" },
    { url: "https://www.instagram.com/p/DM4kOSFPdhY/", title: "Court-cum-office complex update (early 2025)" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 140 }} className="h-10 w-10 rounded-2xl bg-slate-900 text-white grid place-items-center shadow">
              <Gavel className="h-5 w-5" />
            </motion.div>
            <div>
              <div className="font-semibold text-lg tracking-tight">{SITE.name}</div>
              <div className="text-xs text-slate-500 -mt-0.5">{SITE.tagline}</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(i => (
              <a key={i.id} href={`#${i.id}`} className="text-sm text-slate-700 hover:text-slate-900">{i.label}</a>
            ))}
            <a href={SITE.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm rounded-xl px-4 py-2 bg-slate-900 text-white shadow hover:shadow-md">
              <Instagram className="h-4 w-4"/> Instagram
            </a>
          </nav>
          <button className="md:hidden p-2 rounded-xl border border-slate-300" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
            <ScrollText className="h-5 w-5"/>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200"> 
            <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2">
              {navItems.map(i => (
                <a key={i.id} href={`#${i.id}`} className="py-2" onClick={() => setMenuOpen(false)}>{i.label}</a>
              ))}
              <a href={SITE.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm rounded-xl px-4 py-2 bg-slate-900 text-white w-max">
                <Instagram className="h-4 w-4"/> Instagram
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Justice, Simplified for <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">Assam</span>
            </motion.h1>
            <p className="mt-4 text-slate-600 text-lg">
              We distill complex legal updates from the Gauhati High Court and beyond into clear, actionable guidance for citizens, students, and litigants.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-slate-900 text-white shadow hover:shadow-md">
                <Mail className="h-4 w-4"/> Book a Consultation
              </a>
              <a href="#instagram" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border border-slate-300 hover:border-slate-400">
                <Instagram className="h-4 w-4"/> Latest on Instagram
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4"/> Ethical. Reliable. Court-ready.</div>
              <div className="flex items-center gap-2"><Landmark className="h-4 w-4"/> Gauhati High Court & Subordinate Courts</div>
            </div>
          </div>
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="aspect-[4/3] rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
              <img alt="Gauhati High Court and Saraighat Bridge montage" src="https://images.unsplash.com/photo-1551295011-7f22586b0e0b?q=80&w=1400&auto=format&fit=crop" className="w-full h-full object-cover"/>
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white border border-slate-200 rounded-2xl shadow p-4 grid gap-2 w-56">
              <div className="font-semibold text-slate-800 flex items-center gap-2"><Scale className="h-4 w-4"/> Court Updates</div>
              <div className="text-xs text-slate-600">Follow our concise explainers on key orders & procedures.</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-14 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight">About {SITE.name}</h2>
            <p className="mt-3 text-slate-600">
              {SITE.name} began as a community-driven initiative on Instagram to make legal processes—like tenant verification, RTI applications, and court cause-lists—easy to understand. Today, we create explainers, host Q&As, and guide citizens to the right resources across Assam.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[{icon: <BookMarked className="h-5 w-5"/>, title: "Plain-language explainers"}, {icon: <Gavel className="h-5 w-5"/>, title: "High Court highlights"}, {icon: <Users className="h-5 w-5"/>, title: "Student & litigant help"}].map((f, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200 p-4 bg-white shadow-sm flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-slate-900 text-white grid place-items-center">{f.icon}</div>
                  <div className="text-sm font-medium">{f.title}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
            <div className="text-sm text-slate-500">Quick Links</div>
            <div className="mt-3 grid gap-2 text-sm">
              <a className="inline-flex items-center gap-2 hover:underline" href="https://ghconline.gov.in/" target="_blank" rel="noreferrer"><Landmark className="h-4 w-4"/> Gauhati High Court</a>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://hcservices.ecourts.gov.in/ecourtindiaHC/index_highcourt.php?dist_cd=1&stateNm=Assam&state_cd=6" target="_blank" rel="noreferrer"><Scale className="h-4 w-4"/> e-Courts (Case Status)</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold tracking-tight">Practice Areas & Helpdesk</h2>
          <p className="mt-2 text-slate-600">We blend legal awareness with hands-on assistance. Book a slot for structured guidance or referrals.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {[
              { icon: <Landmark className="h-5 w-5"/>, title: "High Court Matters", desc: "Writs, bail, appeals — updates & orientation for litigants." },
              { icon: <Scale className="h-5 w-5"/>, title: "Civil & Criminal", desc: "Case prep checklists, document review, referral network." },
              { icon: <BookMarked className="h-5 w-5"/>, title: "Tenant Verification", desc: "Step-by-step guide on Assam Police Sewa Setu process." },
            ].map((card, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-slate-900 text-white grid place-items-center mb-3">{card.icon}</div>
                <div className="font-semibold">{card.title}</div>
                <div className="text-sm text-slate-600 mt-1">{card.desc}</div>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm text-slate-900 font-medium">Enquire <ChevronRight className="h-4 w-4"/></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section id="instagram" className="py-16 border-t border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight flex items-center gap-3"><Instagram className="h-6 w-6"/> Latest from Instagram</h2>
            <a href={SITE.instagram} target="_blank" rel="noreferrer" className="text-sm inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 bg-white">Open Profile</a>
          </div>
          <p className="mt-2 text-slate-600">Live embeds of a few recent posts. Update these links anytime — no backend needed.</p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {instaEmbeds.map((p, idx) => (
              <div key={idx} className="rounded-2xl bg-white border border-slate-200 shadow-sm p-3">
                <div className="text-sm font-medium mb-2">{p.title}</div>
                {/* Instagram oEmbed via iframe */}
                <iframe 
                  title={p.title}
                  src={`https://www.instagram.com/p/C/embeds/?url=${encodeURIComponent(p.url)}&omitscript=true`}
                  className="w-full aspect-[4/5] rounded-xl border border-slate-200"
                  loading="lazy"
                />
                <div className="pt-3">
                  <a href={p.url} target="_blank" rel="noreferrer" className="text-sm text-slate-900 inline-flex items-center gap-2">Open on Instagram <ChevronRight className="h-4 w-4"/></a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-xs text-slate-500">Note: If embeds don’t load due to Instagram restrictions, use the “Open on Instagram” links.</div>
        </div>
      </section>

      {/* Testimonials / Notes */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          {[{q: "Clear, concise, and timely updates on court procedures.", a: "Student, Guwahati"}, {q: "Helped me understand tenant verification end-to-end.", a: "Landlord, Dispur"}, {q: "Great initiative for legal awareness in Assam.", a: "Entrepreneur, Beltola"}].map((t, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
              <MessageSquare className="h-5 w-5"/>
              <div className="mt-3 text-slate-800">“{t.q}”</div>
              <div className="mt-2 text-xs text-slate-500">— {t.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 border-t border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold tracking-tight">FAQs</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
              <div className="font-semibold">Do you take up cases or only create content?</div>
              <div className="text-sm text-slate-600 mt-2">We primarily create awareness and guide you to the right resources. For legal representation, we collaborate with a referral network of advocates as needed.</div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
              <div className="font-semibold">How can I request a post or explainer?</div>
              <div className="text-sm text-slate-600 mt-2">Send us a DM on Instagram or use the contact form below with your topic and any documents (no sensitive data online, please).</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Contact & Appointments</h2>
            <div className="mt-5 grid gap-3 text-sm">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4"/> <a href={`mailto:${SITE.email}`} className="hover:underline">{SITE.email}</a></div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4"/> <a href={`https://wa.me/${SITE.phone.replace(/[^\d]/g, "")}`} target="_blank" rel="noreferrer" className="hover:underline">{SITE.phone} (WhatsApp)</a></div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4"/> {SITE.address}</div>
            </div>
            <div className="mt-6 text-sm text-slate-600">Prefer email/DM for a callback window. We’ll respond within 1 business day.</div>
          </div>
          <form action={`mailto:${SITE.email}`} method="post" encType="text/plain" className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm grid gap-4">
            <div>
              <label className="text-sm">Name</label>
              <input required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="Your name"/>
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input type="email" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="you@example.com"/>
            </div>
            <div>
              <label className="text-sm">Message</label>
              <textarea required rows={5} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="Tell us briefly how we can help"/>
            </div>
            <button type="submit" className="rounded-2xl px-5 py-3 bg-slate-900 text-white w-max inline-flex items-center gap-2 shadow hover:shadow-md">
              <Mail className="h-4 w-4"/> Send
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="font-semibold">{SITE.name}</div>
            <div className="text-slate-600 mt-2">© {new Date().getFullYear()} — All rights reserved.</div>
          </div>
          <div>
            <div className="font-semibold mb-2">Resources</div>
            <ul className="grid gap-2">
              <li><a className="hover:underline" href="https://ghconline.gov.in/" target="_blank" rel="noreferrer">Gauhati High Court</a></li>
              <li><a className="hover:underline" href="https://hcservices.ecourts.gov.in/ecourtindiaHC/index_highcourt.php?dist_cd=1&stateNm=Assam&state_cd=6" target="_blank" rel="noreferrer">e‑Courts (Case Status)</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Social</div>
            <a href={SITE.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><Instagram className="h-4 w-4"/> @guwahatilegal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}