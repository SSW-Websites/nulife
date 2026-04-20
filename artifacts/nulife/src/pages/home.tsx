import { motion } from "framer-motion";
import { ArrowRight, Leaf, Moon, Sun, Heart, Play, CheckCircle2, Quote } from "lucide-react";
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
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
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

          {/* Divider */}
          <div className="relative flex items-center my-14 md:my-20">
            <div className="flex-1 border-t border-dashed border-[#1F6BFF]/40" />
            <div className="mx-4 text-[#1F6BFF]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </svg>
            </div>
            <div className="flex-1 border-t border-dashed border-[#1F6BFF]/40" />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Stats column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 space-y-10"
            >
              {[
                { value: "1000+", label: "Patients Optimized" },
                { value: "12+", label: "Years of Experience" },
                { value: "90%", label: "Patient Success" },
              ].map((s) => (
                <div key={s.label}>
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
                  <div className="w-32 h-32 rounded-full overflow-hidden ring-1 ring-black/5 shadow-sm">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                  </div>
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
