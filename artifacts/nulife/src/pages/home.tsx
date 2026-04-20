import { motion } from "framer-motion";
import { ArrowRight, Leaf, Moon, Sun, Heart, Play, CheckCircle2, Quote, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import nuLifeLogo from "@assets/Layer_1_1776719838989.png";
import heroMan from "@assets/8566065be8400f2dd715c1f798b2c97136b03dd2_1776719838989.png";
import reviewsRow from "@assets/image_24_1776719838989.png";
import cardMonitoring from "@assets/Group_1430105211_1776720189303.png";
import cardEducation from "@assets/Group_1430105212_1776720189311.png";
import cardConcierge from "@assets/Group_1430105213_1776720189311.png";

const IMPACT_FONT = 'Impact, "Haettenschweiler", "Arial Narrow Bold", sans-serif';

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav className="relative z-50 bg-[#0B1F3A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src={nuLifeLogo} alt="NuLife Institute" className="h-9 w-auto" />
          </a>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-white/90">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="hidden sm:inline">Miami & Boca Raton</span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span>Physician-led concierge care</span>
          </div>
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
              className="lg:col-span-7 max-w-2xl"
            >
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
              <p className="mt-8 text-lg md:text-xl text-white/85 max-w-xl leading-relaxed">
                Get physician-led hormone optimization that actually monitors you.
              </p>

              {/* Reviews strip */}
              <div className="mt-10 max-w-xl">
                <img
                  src={reviewsRow}
                  alt="Patient reviews — Jeff D., Tim C., Steve K., David M., Mike S., Chris T., Mark L."
                  className="w-full h-auto select-none"
                  draggable={false}
                />
              </div>

              {/* Trust line under reviews (mobile). On desktop it appears under the form. */}
              <div className="mt-8 lg:hidden flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/85">
                <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Proactive Care Advisor</span>
                <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 3-6 Annual Labs</span>
                <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> High Performance Community</span>
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
                onSubmit={(e) => e.preventDefault()}
                className="bg-white text-neutral-900 rounded-xl shadow-2xl ring-1 ring-black/5 p-6 md:p-7 space-y-4"
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

                <Button
                  type="submit"
                  className="w-full h-14 rounded-md bg-[#1F6BFF] hover:bg-[#1857D6] text-white text-base font-semibold tracking-wide shadow-lg shadow-blue-900/20"
                >
                  SEE IF YOU QUALIFY
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-center text-xs text-neutral-500 pt-1">
                  Confidential consultation · Built for long-term success
                </p>
              </form>

              {/* Trust line on desktop, under the form */}
              <div className="hidden lg:flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/90 mt-6">
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
              className="lg:col-span-3 divide-y divide-neutral-300"
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
                  className="space-y-5"
                >
                  <img src={card.img} alt={card.title} className="w-36 h-36 object-contain" />
                  <h3
                    style={{ fontFamily: IMPACT_FONT, fontWeight: 400 }}
                    className="uppercase tracking-tight text-2xl leading-[1.05] text-neutral-900"
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600 max-w-xs">
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
            <p className="text-[11px] tracking-[0.25em] text-[#1F6BFF] uppercase font-medium">
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
            <p className="text-[11px] tracking-[0.25em] text-[#1F6BFF] uppercase font-medium">
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
                <button
                  className={`mt-7 w-full ${card.btnBg} text-white font-semibold tracking-[0.12em] text-sm py-4 rounded-full transition-colors`}
                >
                  SEE IF YOU QUALIFY
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials-real" className="bg-black text-white pt-20 md:pt-28 pb-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-[11px] tracking-[0.25em] text-neutral-300 uppercase font-medium">
              Testimonials
            </p>
            <h2
              style={{ fontFamily: IMPACT_FONT, fontWeight: 400 }}
              className="mt-4 uppercase text-3xl md:text-4xl lg:text-[44px] leading-[1.05] tracking-tight"
            >
              Real results from <span className="underline underline-offset-[6px] decoration-2">real patients</span>
            </h2>
          </motion.div>

          <div className="mt-12 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="relative rounded-2xl overflow-hidden bg-neutral-200 aspect-[4/3]">
              <img src={heroMan} alt="Patient testimonial" className="w-full h-full object-cover" />
              <div className="absolute left-6 bottom-6 text-white">
                <div className="text-lg font-semibold">A. Lermsider</div>
                <div className="h-[3px] w-24 bg-[#D14361] mt-1" />
                <div className="text-xs mt-1 text-neutral-200">Miami, FL 48</div>
              </div>
              <button className="absolute inset-0 flex items-center justify-center group">
                <span className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition">
                  <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
                </span>
              </button>
            </div>

            <div>
              <h3
                style={{ fontFamily: IMPACT_FONT, fontWeight: 400 }}
                className="font-sans uppercase text-3xl md:text-4xl lg:text-[44px] leading-[1.05] tracking-tight"
              >
                "My life completely changed thanks to this treatment."
              </h3>
              <div className="mt-6 text-sm text-neutral-300 leading-relaxed">
                <div>Hormone Therapy</div>
                <div>Andrew L. | Age 48 | Miami, FL</div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="bg-white text-neutral-800 rounded-2xl p-6">
                <p className="text-[13px] leading-relaxed text-neutral-600">
                  They did this, that and whatever else a testimonial gets included. May be good or no, but it's a testimonial, let's keep it short and sweet. They did this, that and whatever else a testimonial gets included. May be good or no, but it's a testimonial, let's keep it short and sweet.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0B1F3A]" />
                  <div>
                    <div className="text-sm font-semibold text-neutral-900">John Doe</div>
                    <div className="text-[11px] text-neutral-500">Software AE at Slack</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <button className="w-10 h-10 rounded-full border border-neutral-700 text-neutral-400 hover:text-white hover:border-white transition flex items-center justify-center">
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
            <button className="w-10 h-10 rounded-full border border-neutral-700 text-white hover:border-white transition flex items-center justify-center">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Bar (overlapping) */}
      <div className="bg-black pb-16">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="bg-[#1F3BFF] rounded-2xl px-8 md:px-12 py-6 md:py-7 flex flex-col md:flex-row items-center justify-between gap-5">
            <div
              style={{ fontFamily: IMPACT_FONT, fontWeight: 400 }}
              className="uppercase text-white text-2xl md:text-[26px] tracking-tight text-center md:text-left"
            >
              Ready to feel like yourself again?
            </div>
            <button className="bg-white text-neutral-900 font-semibold tracking-[0.12em] text-sm px-7 py-3.5 rounded-full hover:bg-neutral-100 transition whitespace-nowrap">
              SEE IF YOU QUALIFY
            </button>
          </div>
        </div>
      </div>

      {/* Direct Physician Access Section */}
      <section id="physicians" className="bg-[#EEF1F4] py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-[11px] tracking-[0.25em] text-[#1F6BFF] uppercase font-medium">
                Direct Physician Access
              </p>
              <h2
                style={{ fontFamily: IMPACT_FONT, fontWeight: 400 }}
                className="mt-5 uppercase text-3xl md:text-4xl lg:text-[44px] leading-[1.05] tracking-tight text-neutral-900"
              >
                Most clinics make you wait weeks. Most hand you off to assistants. Most leave you guessing between appointments. Not here.
              </h2>
            </motion.div>

            <div className="flex gap-3 shrink-0">
              <button className="w-10 h-10 rounded-full border border-neutral-400 text-neutral-500 hover:text-neutral-900 hover:border-neutral-900 transition flex items-center justify-center">
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
              <button className="w-10 h-10 rounded-full border border-neutral-900 text-neutral-900 transition flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="text-center"
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-200 to-neutral-300 flex items-end justify-center">
                  <div className="w-full h-full bg-neutral-300" />
                </div>
                <div className="mt-4 text-sm font-semibold text-neutral-900">Dr. Frank J. Welch, M.D.</div>
                <div className="text-xs text-neutral-500 mt-0.5">Medical Director</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Elements Grid */}
      <section id="elements" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">The Elements</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A holistic approach to daily optimization. Three pillars working in harmony to restore balance.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sun className="w-6 h-6" />,
                title: "Morning Clarity",
                desc: "Adaptogenic blends designed to banish brain fog and provide sustained, jitter-free focus.",
                color: "bg-[#FDF4E9] text-[#C26B51]"
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Daily Movement",
                desc: "Guided micro-routines that mobilize joints and stimulate circulation without exhaustion.",
                color: "bg-[#EEF2E6] text-[#6B705C]"
              },
              {
                icon: <Moon className="w-6 h-6" />,
                title: "Deep Restoration",
                desc: "Evening botanicals that naturally lower cortisol and prepare the body for reparative sleep.",
                color: "bg-[#EAE8F0] text-[#4A4E69]"
              }
            ].map((element, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group p-8 rounded-3xl bg-card border border-border/50 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${element.color}`}>
                  {element.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 text-foreground">{element.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {element.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Movement Spotlight Section */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden relative">
                <img 
                  src="/movement.png" 
                  alt="Morning movement" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[3rem]"></div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Move with intention.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fitness doesn't have to mean punishment. Our guided 10-minute morning flows are designed to gently wake up the nervous system, create mobility, and center your mind before the day demands your attention.
              </p>
              <ul className="space-y-4 pt-4">
                {["10-minute morning routines", "No equipment required", "Focus on breath and mobility", "Designed by physical therapists"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-foreground" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <Button variant="outline" className="rounded-full h-12 px-6">Explore Routines</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section id="science" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/texture.png" alt="Texture" className="w-full h-full object-cover opacity-15 mix-blend-multiply" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary text-primary-foreground rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-2xl"
          >
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-6xl font-serif font-bold">The Foundation Kit</h2>
              <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed max-w-xl">
                Everything you need to start your journey. A 30-day supply of our core botanical formula, access to the movement library, and our guided intention journal.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Clinically dosed adaptogens (Ashwagandha, Rhodiola)",
                  "No synthetic fillers, gums, or refined sugars",
                  "Sustainably sourced, third-party tested ingredients"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Leaf className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-8">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90 rounded-full h-14 px-8 text-base shadow-xl">
                  Get the Kit - $89
                </Button>
              </div>
            </div>
            <div className="flex-1 relative w-full max-w-md">
              <motion.div 
                whileHover={{ rotate: 0, scale: 1.05 }}
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl rotate-3 transition-all duration-500 cursor-pointer"
              >
                <img src="/product.png" alt="Foundation Kit" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground">Stories of Renewal</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "I've tried every supplement out there. NuLife is the first system that actually made me feel human again before 9 AM.",
                author: "Sarah J.",
                role: "Creative Director"
              },
              {
                quote: "The combination of the morning ritual and the botanical blend completely shifted how I start my day. The brain fog is gone.",
                author: "Michael T.",
                role: "Software Engineer"
              },
              {
                quote: "It feels less like taking vitamins and more like treating myself to a moment of peace. The branding matches the feeling.",
                author: "Elena R.",
                role: "Photographer"
              }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm relative"
              >
                <Quote className="w-8 h-8 text-primary/20 absolute top-8 left-8" />
                <div className="relative z-10 pt-8">
                  <p className="text-foreground leading-relaxed italic mb-6">"{review.quote}"</p>
                  <div>
                    <div className="font-bold text-foreground">{review.author}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Newsletter */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground">Begin your transformation.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
              Join 50,000+ others who have redefined their daily routines. Subscribe to get our free 7-day morning reset guide.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3 pt-10">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="h-14 rounded-full px-6 text-base bg-muted border-transparent focus-visible:ring-primary shadow-inner"
              />
              <Button size="lg" className="h-14 rounded-full px-8 shrink-0 shadow-lg shadow-primary/20">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-20 px-6 rounded-t-[3rem] mt-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="font-serif text-4xl font-bold mb-6 text-[#E8C2B3]">NuLife</div>
            <p className="text-white/60 max-w-sm leading-relaxed">
              Science-backed wellness for ambitious people who want to live with energy, clarity, and intention.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-[#E8C2B3] transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-[#E8C2B3] transition-colors">The Science</a></li>
              <li><a href="#" className="hover:text-[#E8C2B3] transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-[#E8C2B3] transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Shop</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-[#E8C2B3] transition-colors">Foundation Kit</a></li>
              <li><a href="#" className="hover:text-[#E8C2B3] transition-colors">Refills</a></li>
              <li><a href="#" className="hover:text-[#E8C2B3] transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-[#E8C2B3] transition-colors">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Support</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-[#E8C2B3] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#E8C2B3] transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-[#E8C2B3] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#E8C2B3] transition-colors">Wholesale</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-white/40 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} NuLife Wellness Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
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
