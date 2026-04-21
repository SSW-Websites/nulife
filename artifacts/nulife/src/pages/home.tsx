import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Moon, Sun, Heart, Play, CheckCircle2, Quote, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

const PATIENT_REVIEWS = [
  {
    quote: "I have been a client of Nulife's for several years. At 47 years old I feel and look as great as I did at 30! I have referred Nulife to many of my friends over the years and all of them are as happy as I am.",
    name: "Lanelle Phillips",
    time: "5 months ago",
  },
  {
    quote: "As a 54 year old athlete that loves to train every day, I am very thankful to NuLife Institute for helping me enjoy what I love to do every day. Strongly recommended!",
    name: "Ric Caselli",
    time: "2 months ago",
  },
  {
    quote: "The team at Nulife provides cutting edge health options that have improved my quality of life. Their friendly and professional staff offer a wide range of health and fitness programs which have made a huge difference.",
    name: "Michael Hall",
    time: "2 months ago",
  },
  {
    quote: "Elizabeth and Janine are so very knowledgeable. NuLife Institute is continually guiding me, towards great health and vitality. They're the best in Miami.",
    name: "Jay International",
    time: "2 months ago",
  },
  {
    quote: "My experience working with Jovana was excellent. She has great product knowledge and suggestions. And I felt very comfortable discussing my male health issues with her",
    name: "Aaron Grover",
    time: "2 months ago",
  },
  {
    quote: "Jovana was very attentive and explained everything clearly. My husband and I are glad to start our journey at NuLife together.",
    name: "Shirley Borloz",
    time: "2 months ago",
  },
];

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
  const [reviewPage, setReviewPage] = useState(0);
  const REVIEWS_PER_PAGE = isMobile ? 1 : 3;
  const totalReviewPages = Math.ceil(PATIENT_REVIEWS.length / REVIEWS_PER_PAGE);
  const safeReviewPage = Math.min(reviewPage, totalReviewPages - 1);
  const visibleReviews = PATIENT_REVIEWS.slice(
    safeReviewPage * REVIEWS_PER_PAGE,
    safeReviewPage * REVIEWS_PER_PAGE + REVIEWS_PER_PAGE,
  );
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
                <a
                  href="#qualify-form"
                  className={`mt-7 w-full ${card.btnBg} text-white font-semibold tracking-[0.12em] text-sm py-4 rounded-full transition-colors text-center block`}
                >
                  SEE IF YOU QUALIFY
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials-real" className="bg-black text-white pt-20 md:pt-28 pb-20 md:pb-24">
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

          <div className="mt-12 grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            <div className="relative rounded-2xl overflow-hidden bg-neutral-800 aspect-[4/3]">
              <div className="absolute left-6 bottom-6 text-white z-10">
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

            <div className="flex flex-col justify-between min-h-full py-2 text-center lg:text-left">
              <h3
                style={{ fontFamily: IMPACT_FONT, fontWeight: 400 }}
                className="uppercase text-4xl md:text-5xl lg:text-[64px] leading-[1.02] tracking-tight"
              >
                "My life completely changed thanks to this treatment."
              </h3>
              <div className="mt-8 text-sm text-neutral-300 leading-relaxed">
                <div>Hormone Therapy</div>
                <div>Andrew L. | Age 48 | Miami, FL</div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-sm md:max-w-none mx-auto">
            {visibleReviews.map((r) => (
              <div key={r.name} className="bg-white text-neutral-800 rounded-2xl p-6 flex flex-col">
                <p className="text-[14px] leading-relaxed text-neutral-700 flex-1">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <div className="text-sm font-semibold text-neutral-900">{r.name}</div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">{r.time}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => setReviewPage((p) => (p - 1 + totalReviewPages) % totalReviewPages)}
              className="w-10 h-10 rounded-full border border-neutral-700 text-neutral-400 hover:text-white hover:border-white transition flex items-center justify-center"
              aria-label="Previous reviews"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
            <button
              onClick={() => setReviewPage((p) => (p + 1) % totalReviewPages)}
              className="w-10 h-10 rounded-full border border-neutral-700 text-white hover:border-white transition flex items-center justify-center"
              aria-label="Next reviews"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Bar (overlapping between sections) */}
      <div className="bg-gradient-to-b from-black from-50% to-[#EEF1F4] to-50%">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="bg-[#1F3BFF] rounded-2xl px-10 md:px-14 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div
              style={{ fontFamily: IMPACT_FONT, fontWeight: 400 }}
              className="uppercase text-white text-3xl md:text-[34px] lg:text-[38px] tracking-tight text-center md:text-left leading-[1.05]"
            >
              Ready to feel like yourself again?
            </div>
            <a
              href="#qualify-form"
              className="bg-white text-neutral-900 font-semibold tracking-[0.14em] text-sm px-8 py-4 rounded-full hover:bg-neutral-100 transition whitespace-nowrap"
            >
              SEE IF YOU QUALIFY
            </a>
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
          <a
            href="#qualify-form"
            className="mt-9 inline-block bg-white text-neutral-900 font-semibold tracking-[0.14em] text-sm px-10 py-4 rounded-full hover:bg-neutral-100 transition"
          >
            SEE IF YOU QUALIFY
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-20 md:py-28">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <div className="text-center">
            <h2 className="font-sans text-3xl md:text-4xl font-semibold text-neutral-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-neutral-500 text-base">
              Get answers to common questions about our personalized health optimization programs
            </p>
          </div>

          <Accordion type="single" collapsible defaultValue="q-0" className="mt-12 space-y-4">
            {[
              {
                q: "What is age management medicine?",
                a: "Age management medicine focuses on optimizing your health as you age, improving how you feel today while reducing your risk of serious conditions such as heart disease, diabetes, osteoporosis, cognitive decline, and certain cancers.\n\nAt its core, aging is closely tied to metabolism, and metabolism is largely regulated by hormones. Hormones act as messengers, directing how your cells, organs, and systems function every day. As hormone levels decline, often beginning in your 30s, metabolic efficiency decreases. This can lead to symptoms many people accept as \u201Cnormal aging,\u201D such as weight gain, fatigue, muscle loss, reduced mental clarity, and decreased sexual health.\n\nAge management medicine is about addressing these changes proactively. By optimizing hormone balance and metabolic function, we aim to slow or even reverse many age-related declines and help you maintain strength, vitality, and long-term health.",
              },
              {
                q: "Why choose NuLife Institute?",
                a: "Our physicians specialize exclusively in age management and hormone optimization. We take the time to understand your health history, lifestyle, and goals, allowing us to create a highly personalized treatment plan designed for long-term success, not temporary fixes.",
              },
              {
                q: "What is Low T?",
                a: "Low T refers to low testosterone levels, a condition that commonly occurs as men age during a natural process called andropause. Testosterone plays a critical role in energy levels, muscle and bone health, sexual function, sleep quality, and overall well-being.\n\nLow testosterone has also been linked to an increased risk of conditions such as diabetes and osteoporosis, and research shows that healthier testosterone levels are associated with improved longevity and quality of life. Because the symptoms of Low T can resemble depression or general aging, it is often underdiagnosed without proper testing.",
              },
              {
                q: "My sex drive isn\u2019t what it used to be. Could hormones be the cause?",
                a: "Yes, hormone imbalances, particularly low testosterone, can significantly affect libido in both men and women. When hormone levels are optimized, many patients experience meaningful improvements in sexual desire, performance, and overall confidence. In our clinical experience, hormone optimization has been highly effective in addressing hormone-related sexual dysfunction.",
              },
              {
                q: "Can hormone therapy help with sexual dysfunction?",
                a: "Sexual dysfunction can have multiple causes, but hormonal imbalance is one of the most common and treatable factors. Restoring testosterone and other key hormones to healthy levels often improves libido, erectile function, and sexual satisfaction.\n\nIf additional support is needed, there are other medical options that can be explored in consultation with your physician. Treatment is always individualized based on your health profile and needs.",
              },
              {
                q: "Can I increase my testosterone naturally without hormone supplementation?",
                a: "In very mild cases, lifestyle changes such as regular exercise, improved nutrition, and stress management may help support testosterone levels. However, when levels are clinically low, these measures alone are often insufficient. Proper testing is the only way to determine whether hormone supplementation is appropriate.",
              },
              {
                q: "How is testosterone supplemented?",
                a: "Testosterone can be administered through injections or transdermal topical creams or gels. The method and dosage are customized based on your lab results, medical history, and lifestyle to ensure safe and effective treatment.",
              },
              {
                q: "What is Human Growth Hormone (HGH) therapy?",
                a: "Human Growth Hormone plays a vital role in tissue repair, muscle development, bone strength, metabolism, cognitive function, and overall vitality. HGH levels naturally decline beginning in early adulthood, often decreasing significantly by midlife.\n\nWhen medically indicated, restoring HGH to healthy levels may help improve energy, body composition, cardiovascular health, skin quality, mental clarity, immune function, and recovery. Treatment is only considered after comprehensive testing confirms a deficiency.",
              },
              {
                q: "Are there side effects to hormone therapy?",
                a: "When properly prescribed and monitored, bioidentical hormone therapy has been shown to be both safe and effective. As with any medical treatment, potential side effects exist, which is why a comprehensive evaluation, including lab work and physical examination, is essential before starting therapy. At Nulife Institute we test 3-6X per year to closely monitor all patients.\n\nTreatment is only initiated when medically appropriate, and ongoing monitoring ensures hormone levels remain within safe, optimal ranges.",
              },
              {
                q: "How can hormone optimization help women?",
                a: "Hormonal imbalances affect millions of women and can occur during perimenopause, menopause, or earlier stages of life. Symptoms may include hot flashes, night sweats, weight gain, fatigue, mood changes, sleep disturbances, and reduced sexual interest.\n\nBioidentical hormone therapy, when appropriately prescribed, can help alleviate these symptoms and support energy levels, mental clarity, bone health, and overall quality of life.",
              },
              {
                q: "Can you use lab work completed by my doctor?",
                a: "In some cases, recent lab work may be accepted if it meets our clinical requirements. However, our physicians typically perform a comprehensive diagnostic panel to ensure accuracy and to fully assess your current hormone levels before developing a personalized treatment plan.",
              },
              {
                q: "What are bioidentical hormones?",
                a: "Bioidentical hormones are derived from natural sources and are structurally identical to the hormones your body produces naturally. Because of this, they are metabolized more efficiently and are generally better tolerated than synthetic hormones.\n\nEach treatment plan is custom-compounded based on your individual lab results, ensuring precision rather than a one-size-fits-all approach.",
              },
              {
                q: "Can my regular doctor provide these treatments?",
                a: "While many physicians are familiar with hormone replacement therapy, age management and bioidentical hormone optimization require specialized training. Our physicians are board-certified and trained specifically in age management medicine, with a focus on long-term health optimization rather than symptom suppression alone.",
              },
              {
                q: "How do I know if I need hormone therapy?",
                a: "The only reliable way to determine hormonal deficiencies or imbalances is through proper blood testing interpreted by an experienced specialist. From there, a personalized treatment plan can be developed based on your specific needs and goals.",
              },
              {
                q: "How long will I need to stay on treatment?",
                a: "Treatment duration varies from patient to patient. Hormone optimization is often a long-term commitment, as discontinuing therapy may allow hormone levels to return to pre-treatment levels. Your physician will review expectations and options with you in detail.",
              },
              {
                q: "Can I apply for treatment online or over the phone?",
                a: "For your safety and in accordance with medical regulations, all patients must be evaluated in person by a physician before beginning treatment.",
              },
              {
                q: "Do you accept insurance?",
                a: "To provide the highest level of personalized care without restrictions, treatments are not covered by insurance.",
              },
              {
                q: "How much does treatment cost?",
                a: "Costs vary based on your individual health profile, lab results, and treatment plan. Pricing is discussed transparently after your medical evaluation.",
              },
              {
                q: "When will I start seeing results?",
                a: "Many patients begin noticing improvements in energy, focus, mood, and overall well-being within four to six weeks, although timelines vary depending on individual response.",
              },
            ].map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`q-${i}`}
                className="border border-neutral-200 rounded-xl px-6 bg-white"
              >
                <AccordionTrigger className="font-sans text-left text-[15px] font-semibold text-neutral-900 hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] text-neutral-600 leading-relaxed pb-5 whitespace-pre-line">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 py-10">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10 text-center text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} All rights reserved</p>
          <div className="mt-3 flex justify-center gap-8">
            <a
              href="https://nulifeinstitute.com/privacy-notice"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://nulifeinstitute.com/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 transition-colors"
            >
              Terms of Service
            </a>
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
