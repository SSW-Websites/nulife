import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TestimonialsSection, FAQSection, SiteFooter, CTAButton } from "@/components/site-sections";
import nuLifeLogo from "@assets/Layer_1_1776719838989.png";
import heroMan from "@assets/8566065be8400f2dd715c1f798b2c97136b03dd2_1776719838989.png";
import reviewsRow from "@assets/image_24_1776719838989.png";
import cardMonitoring from "@assets/Group_1430105211_1776720189303.png";
import cardEducation from "@assets/Group_1430105212_1776720189311.png";
import cardConcierge from "@assets/Group_1430105213_1776720189311.png";
import drFrank from "@assets/Dr-Frank-J-Welch_1776788182401.jpg";
import drJanine from "@assets/Janine-Herrera-350x500px_1776788182402.jpg";
import drJoshua from "@assets/Joshua-Wapner_1776788182402.jpg";
import drKristine from "@assets/Kristine-Odio_(1)_1776788182402.jpg";
import drBrittini from "@assets/Brittini-Hernandez-headshot-ai-500px.jpeg_1776788182400.jpg";
import drJovana from "@assets/Jovana-Velez_1776788182402.jpg";
import drRoger from "@assets/id_rodger_1776788182401.jpg";
import drGuy from "@assets/Guy-Franks_1776788182401.jpg";
import drElizabeth from "@assets/Elizabth-M-2_1776788182401.jpg";
import drJuliana from "@assets/Juliana-Salunek-1_1776788182402.jpg";

const IMPACT_FONT = 'Impact, "Haettenschweiler", "Arial Narrow Bold", sans-serif';

const TEAM_MEMBERS = [
  { img: drFrank, name: "Dr. Frank J. Welch, M.D.", title: "Medical Director" },
  { img: drJanine, name: "Janine L. Herrera, AGACNP-BC", title: "Board-Certified Nurse Practitioner" },
  { img: drJoshua, name: "Joshua Wapner", title: "Chief Executive Officer" },
  { img: drKristine, name: "Kristine Odio", title: "Practice Manager" },
  { img: drBrittini, name: "Brittini Hernandez", title: "Administrative Coordinator" },
  { img: drJovana, name: "Jovana Velez", title: "Patient Care Advisor" },
  { img: drRoger, name: "Roger Medina", title: "Patient Care Advisor" },
  { img: drGuy, name: "Guy Frank", title: "Patient Care Advisor" },
  { img: drElizabeth, name: "Elizabeth Medina", title: "Patient Care Advisor" },
  { img: drJuliana, name: "Juliana Salunek", title: "Patient Care Advisor" },
];

export default function Home() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const [teamPage, setTeamPage] = useState(0);
  const TEAM_PER_PAGE = isMobile ? 1 : 4;
  const totalTeamPages = Math.ceil(TEAM_MEMBERS.length / TEAM_PER_PAGE);
  const safeTeamPage = Math.min(teamPage, totalTeamPages - 1);
  const visibleTeam = TEAM_MEMBERS.slice(
    safeTeamPage * TEAM_PER_PAGE,
    safeTeamPage * TEAM_PER_PAGE + TEAM_PER_PAGE,
  );
  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav className="relative z-50 bg-[#0B1F3A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src={nuLifeLogo} alt="NuLife Institute" className="h-9 w-auto" />
          </a>
          {/* Status pill — desktop / tablet only */}
          <div className="hidden md:flex items-center gap-2 text-xs sm:text-sm font-medium text-white/90">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span>Miami & Boca Raton</span>
            <span className="text-white/40">|</span>
            <span>Physician-led concierge care</span>
          </div>
          {/* CTA button — mobile only */}
          <a
            href="#qualify-form"
            className="md:hidden inline-flex items-center gap-2 bg-[#1F6BFF] hover:bg-[#1857D6] text-white text-[11px] font-semibold tracking-[0.12em] px-4 py-2.5 rounded-full transition-colors"
          >
            SEE IF YOU QUALIFY
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        {/* Background image: shirtless man, fully visible and centered */}
        <div className="absolute inset-0 bg-black">
          <img
            src={heroMan}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          {/* Soft side fades so the image blends into pure black at the edges */}
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Headline + reviews */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
            >
              {/* Status pill — mobile only (in nav on desktop) */}
              <div className="md:hidden mb-5 flex items-center justify-center gap-2 text-xs font-medium text-white/85">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>Miami & Boca Raton</span>
                <span className="text-white/40">|</span>
                <span>Physician-led concierge care</span>
              </div>
              <h1
                style={{ fontFamily: 'Impact, "Haettenschweiler", "Arial Narrow Bold", sans-serif', fontWeight: 400 }}
                className="uppercase tracking-tight text-white leading-[0.95] text-[44px] sm:text-6xl lg:text-[80px] xl:text-[92px]"
              >
                Hitting a<br />
                brick wall<br />
                with energy,<br />
                focus and<br />
                performance?
              </h1>
              <p className="mt-8 text-lg md:text-xl text-white/85 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Get physician-led hormone optimization that actually monitors you.
              </p>

              {/* Reviews strip */}
              <div className="mt-10 max-w-xl mx-auto lg:mx-0">
                <img
                  src={reviewsRow}
                  alt="Patient reviews — Jeff D., Tim C., Steve K., David M., Mike S., Chris T., Mark L."
                  className="w-full h-auto select-none"
                  draggable={false}
                />
              </div>

            </motion.div>

            {/* Qualification form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="lg:col-span-5 lg:justify-self-end w-full max-w-md"
            >
              <form
                id="qualify-form"
                onSubmit={(e) => e.preventDefault()}
                className="bg-white text-neutral-900 rounded-xl shadow-2xl ring-1 ring-black/5 p-6 md:p-7 space-y-4 scroll-mt-24"
              >
                <div className="grid grid-cols-2 gap-4">
                  <FieldText id="firstName" label="First Name" required />
                  <FieldText id="lastName" label="Last Name" required />
                </div>
                <FieldText id="email" type="email" label="Email" required />
                <FieldText id="phone" type="tel" label="Phone" required />
                <FieldText id="city" label="City, State" required />

                <FieldSelect
                  id="goal"
                  label="What's your #1 health goal right now?"
                  required
                  placeholder="Select your primary goal"
                  options={[
                    "Energy & Stamina",
                    "Focus & Mental Clarity",
                    "Strength & Performance",
                    "Body Composition",
                    "Libido & Sexual Health",
                    "Longevity & Prevention",
                  ]}
                />
                <FieldSelect
                  id="investment"
                  label="How much are you willing to invest in your health over 6 months?"
                  required
                  placeholder="Select investment range"
                  options={[
                    "$2,500 – $5,000",
                    "$5,000 – $10,000",
                    "$10,000 – $20,000",
                    "$20,000+",
                  ]}
                />
                <FieldSelect
                  id="visit"
                  label="Can you visit our Miami or Boca Raton location for your initial evaluation?"
                  required
                  placeholder="Select location preference"
                  options={["Yes — Miami", "Yes — Boca Raton", "Either location works", "Need to discuss"]}
                />
                <FieldSelect
                  id="timeline"
                  label="What type of treatment timeline are you looking for?"
                  required
                  placeholder="Select timeline"
                  options={["Start within 2 weeks", "Start within 1 month", "Start within 3 months", "Just exploring"]}
                />

                <CTAButton type="submit" className="w-full" />


                <p className="text-center text-xs text-neutral-500 pt-1">
                  Confidential consultation · Built for long-term success
                </p>
              </form>

              {/* Trust line — under the form on all viewports */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/90 mt-6">
                <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Proactive Care Advisor</span>
                <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 3-6 Annual Labs</span>
                <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> High Performance Community</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hormone Therapy Section */}
      <section id="hormone-therapy" className="bg-[#EEF1F4] py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6">
              Hormone Therapy
            </p>
            <h2
              style={{ fontFamily: IMPACT_FONT, fontWeight: 400 }}
              className="uppercase leading-[0.98] tracking-tight text-neutral-900 text-[34px] sm:text-5xl lg:text-[56px] xl:text-[64px] max-w-[1100px]"
            >
              Your energy is <span className="text-neutral-300">gone.</span> Focus slipping. Weight won't budge. Sex drive plummeted. Your doctor said everything's "normal." But you don't feel normal.
            </h2>
          </motion.div>

          <div className="mt-14 md:mt-20 grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            {/* Stats column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block lg:col-span-3 divide-y divide-neutral-300"
            >
              {[
                { value: "1000+", label: "Patients Optimized" },
                { value: "12+", label: "Years of Experience" },
                { value: "90%", label: "Patient Success" },
              ].map((s, i) => (
                <div key={s.label} className={i === 0 ? "pb-6" : "py-6 last:pb-0"}>
                  <div
                    style={{ fontFamily: IMPACT_FONT, fontWeight: 400 }}
                    className="text-5xl lg:text-6xl text-neutral-900 leading-none tracking-tight"
                  >
                    {s.value}
                  </div>
                  <div className="text-sm text-neutral-600 mt-2">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Cards column */}
            <div className="lg:col-span-9 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {[
                {
                  img: cardMonitoring,
                  title: "Proactive Monitoring",
                  desc: "Most clinics check once. We monitor continuously. Catch issues early. Adjust precisely. Less guesswork. More results.",
                },
                {
                  img: cardEducation,
                  title: "Education First",
                  desc: "No time limits. No jargon. We explain everything in plain English until you're confident. You'll leave knowing exactly what happens next.",
                },
                {
                  img: cardConcierge,
                  title: "Concierge Care",
                  desc: "Call your doctor. Text your doctor. Your patient care advisor anticipates needs and keeps your plan moving forward. No waiting weeks.",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1, duration: 0.55 }}
                  className="space-y-5 text-center sm:text-left"
                >
                  <img src={card.img} alt={card.title} className="w-36 h-36 object-contain mx-auto sm:mx-0" />
                  <h3
                    style={{ fontFamily: IMPACT_FONT, fontWeight: 400 }}
                    className="uppercase tracking-tight text-2xl leading-[1.05] text-neutral-900"
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600 max-w-xs mx-auto sm:mx-0">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section id="process" className="bg-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-[11px] tracking-[0.25em] text-neutral-900 uppercase font-extrabold">
              Our 4-Step Process
            </p>
            <h2
              style={{ fontFamily: IMPACT_FONT, fontWeight: 400 }}
              className="mt-5 uppercase text-4xl md:text-5xl lg:text-[56px] leading-[1.02] tracking-tight text-neutral-900 max-w-4xl mx-auto"
            >
              Get started in days with<br />our simple 4-step process
            </h2>
          </motion.div>

          <div className="mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {[
              {
                title: "Qualification Call",
                desc: "We make sure we're the right fit medically and that our approach matches your goals.",
              },
              {
                title: "Comprehensive Evaluation",
                desc: "Complete health intake and diagnostic lab panel. Results in 48 hours.",
              },
              {
                title: "Physician Consultation",
                desc: "Your physician walks you through your labs in plain English. Creates your personalized protocol. No time limits.",
              },
              {
                title: "Ongoing monitoring",
                desc: "3-6 follow-up lab panels per year. Adjust dosing. Track progress. Patient care advisor stays in touch.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="relative"
              >
                <div className="relative mb-5 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#0B1F3A] text-white flex items-center justify-center text-sm font-semibold relative z-10 shrink-0">
                    {i + 1}
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute left-10 right-[-3rem] top-1/2 -translate-y-1/2 h-px bg-neutral-300" />
                  )}
                </div>
                <h3 className="font-sans text-base font-semibold text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Difference Section */}
      <section id="difference" className="bg-[#EEF1F4] py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-[11px] tracking-[0.25em] text-neutral-900 uppercase font-extrabold">
              The Difference
            </p>
            <h2
              style={{ fontFamily: IMPACT_FONT, fontWeight: 400 }}
              className="mt-5 uppercase text-3xl md:text-5xl lg:text-[52px] leading-[1.05] tracking-tight text-neutral-900 max-w-4xl mx-auto"
            >
              Men and women don't have the same hormonal issues, so why would we give you the same treatment?
            </h2>
            <p className="mt-5 text-neutral-600 text-base">
              Personalized protocols built for your biology.
            </p>
          </motion.div>

          <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                badge: "FOR MEN",
                badgeBg: "bg-[#1F3BFF]",
                title: "Restore your edge",
                items: [
                  "Low testosterone and declining performance",
                  "Energy crashes and brain fog",
                  "Weight gain and muscle loss",
                  "Low libido and sexual dysfunction",
                  "Sleep and mood issues",
                  "Loss of strength and recovery",
                ],
                checkColor: "text-[#1F3BFF]",
                btnBg: "bg-[#1F3BFF] hover:bg-[#1730d6]",
              },
              {
                badge: "FOR WOMEN",
                badgeBg: "bg-[#D14361]",
                title: "Hormones done right",
                items: [
                  "Perimenopause and menopause symptoms",
                  "Weight gain and stubborn fat",
                  "Low energy and brain fog",
                  "Mood swings and irritability",
                  "Low libido and vaginal dryness",
                  "Sleep disruption and hot flashes",
                ],
                checkColor: "text-[#D14361]",
                btnBg: "bg-[#D14361] hover:bg-[#b8364f]",
              },
            ].map((card, i) => (
              <motion.div
                key={card.badge}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-neutral-200/70"
              >
                <span
                  className={`inline-block ${card.badgeBg} text-white text-[11px] tracking-[0.18em] font-semibold px-4 py-1.5 rounded-full`}
                >
                  {card.badge}
                </span>
                <h3 className="font-sans mt-5 text-2xl md:text-[26px] font-semibold text-neutral-900">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm text-neutral-500">What we address:</p>
                <ul className="mt-3 space-y-2.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] text-neutral-800">
                      <Check className={`w-4 h-4 mt-1 shrink-0 ${card.checkColor}`} strokeWidth={3} />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <CTAButton
                  variant={card.checkColor === "text-[#D14361]" ? "pink" : "blue"}
                  className="mt-7 w-full text-xl md:text-2xl px-6 py-3 md:py-3.5"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <div className="bg-gradient-to-b from-black from-50% to-[#EEF1F4] to-50%">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="bg-[#1F3BFF] rounded-2xl px-10 md:px-14 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div
              style={{ fontFamily: IMPACT_FONT, fontWeight: 400 }}
              className="uppercase text-white text-3xl md:text-[34px] lg:text-[38px] tracking-tight text-center md:text-left leading-[1.05]"
            >
              Ready to feel like yourself again?
            </div>
            <CTAButton />
          </div>
        </div>
      </div>

      {/* Direct Physician Access Section */}
      <section id="physicians" className="bg-[#EEF1F4] py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto lg:mx-0"
            >
              <p className="text-[11px] tracking-[0.25em] text-neutral-900 uppercase font-extrabold">
                Direct Physician Access
              </p>
              <h2
                style={{ fontFamily: IMPACT_FONT, fontWeight: 400 }}
                className="mt-5 uppercase text-3xl md:text-4xl lg:text-[44px] leading-[1.05] tracking-tight text-neutral-900"
              >
                Most clinics make you wait weeks. Most hand you off to assistants. Most leave you guessing between appointments. Not here.
              </h2>
            </motion.div>

            <div className="hidden lg:flex gap-3 shrink-0">
              <button
                onClick={() => setTeamPage((p) => (p - 1 + totalTeamPages) % totalTeamPages)}
                className="w-10 h-10 rounded-full border border-neutral-400 text-neutral-500 hover:text-neutral-900 hover:border-neutral-900 transition flex items-center justify-center"
                aria-label="Previous team"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
              <button
                onClick={() => setTeamPage((p) => (p + 1) % totalTeamPages)}
                className="w-10 h-10 rounded-full border border-neutral-900 text-neutral-900 transition flex items-center justify-center"
                aria-label="Next team"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-sm md:max-w-none mx-auto">
            {visibleTeam.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="text-center"
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-200">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="font-sans mt-4 text-sm font-semibold text-neutral-900">{member.name}</div>
                <div className="text-xs text-neutral-500 mt-0.5">{member.title}</div>
              </motion.div>
            ))}
          </div>

          {/* Mobile arrows — below cards, centered */}
          <div className="mt-8 flex lg:hidden justify-center gap-3">
            <button
              onClick={() => setTeamPage((p) => (p - 1 + totalTeamPages) % totalTeamPages)}
              className="w-10 h-10 rounded-full border border-neutral-400 text-neutral-500 transition flex items-center justify-center"
              aria-label="Previous team"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
            <button
              onClick={() => setTeamPage((p) => (p + 1) % totalTeamPages)}
              className="w-10 h-10 rounded-full border border-neutral-900 text-neutral-900 transition flex items-center justify-center"
              aria-label="Next team"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Blue CTA Section */}
      <section id="cta-blue" className="bg-[#1F3BFF] text-white py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
          <h2
            style={{ fontFamily: IMPACT_FONT, fontWeight: 400 }}
            className="uppercase text-4xl md:text-6xl lg:text-[76px] leading-[1.02] tracking-tight"
          >
            Physician-led hormone<br className="hidden lg:block" /> optimization that actually<br className="hidden lg:block" /> monitors you.
          </h2>
          <div className="mt-7 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm text-white/90">
            {["Proactive Care Advisor", "3-6 Annual Labs", "High Performance Community"].map((f) => (
              <div key={f} className="flex items-center gap-2">
                <Check className="w-4 h-4" strokeWidth={3} />
                <span>{f}</span>
              </div>
            ))}
          </div>
          <div className="mt-9">
            <CTAButton />
          </div>
        </div>
      </section>
      <FAQSection />
      <SiteFooter />
    </div>
  );
}

function FieldText({
  id,
  label,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-[11px] font-semibold tracking-wider uppercase text-neutral-700">
        {label} {required && <span className="text-neutral-400">*</span>}
      </Label>
      <Input
        id={id}
        type={type}
        required={required}
        className="h-11 rounded-md border-neutral-200 bg-neutral-50 focus-visible:ring-[#1F6BFF]/40 focus-visible:border-[#1F6BFF] text-neutral-900"
      />
    </div>
  );
}

function FieldSelect({
  id,
  label,
  placeholder,
  options,
  required,
}: {
  id: string;
  label: string;
  placeholder: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-[11px] font-semibold tracking-wider uppercase text-neutral-700">
        {label} {required && <span className="text-neutral-400">*</span>}
      </Label>
      <Select>
        <SelectTrigger
          id={id}
          className="h-11 rounded-md border-neutral-200 bg-neutral-50 focus:ring-[#1F6BFF]/40 focus:border-[#1F6BFF] text-neutral-900 data-[placeholder]:text-neutral-400"
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt} value={opt}>
              {opt}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
