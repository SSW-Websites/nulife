import { motion } from "framer-motion";
import {
  TestimonialsSection,
  FAQSection,
  SiteFooter,
} from "@/components/site-sections";
import nuLifeLogo from "@assets/Layer_1_1776719838989.png";
import heroBg from "@assets/BG_IMG_1776795090542.png";
import heroBgMobile from "@assets/BG_IMG_(1)_1776795225974.png";
import reviewsRow from "@assets/image_24_1776719838989.png";

const IMPACT_FONT =
  'Impact, "Haettenschweiler", "Arial Narrow Bold", sans-serif';

function CircleNode({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 aspect-square max-w-[200px] rounded-full border border-neutral-400 bg-transparent flex items-center justify-center p-3 sm:p-4 md:p-5">
      <span className="text-center text-neutral-900 font-medium leading-snug text-[11px] sm:text-sm md:text-base lg:text-lg">
        {children}
      </span>
    </div>
  );
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 40 12"
      className="shrink-0 w-6 sm:w-8 md:w-10 h-3 text-neutral-700"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="2" y1="6" x2="34" y2="6" />
      <polyline points="28,2 38,6 28,10" />
    </svg>
  );
}

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero — confirmation */}
      <section className="relative bg-black text-white overflow-hidden">
        {/* Hero background image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center md:hidden"
          style={{ backgroundImage: `url(${heroBgMobile})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center hidden md:block"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10 pt-8 pb-20 md:pb-28">
          {/* Top centered logo */}
          <div className="flex justify-center">
            <img
              src={nuLifeLogo}
              alt="NuLife Institute"
              className="h-9 w-auto"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16 md:mt-24 text-center max-w-6xl mx-auto"
          >
            <h1
              style={{ fontFamily: IMPACT_FONT, fontWeight: 400 }}
              className="font-sans uppercase text-4xl md:text-5xl lg:text-[64px] leading-[1.05] tracking-tight"
            >
              We've got your application.<br className="hidden md:block" />{" "}
              Our team will call you shortly.
            </h1>
            <p className="mt-6 text-base md:text-lg font-medium text-white/90">
              Keep your phone close. If you have any recent lab work, pull it up before the call. It helps us get further, faster.
            </p>

            <div className="mt-10 flex justify-center">
              <img
                src={reviewsRow}
                alt="Patient reviews"
                className="h-24 md:h-32 lg:h-36 w-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to make the most of your consultation */}
      <section className="bg-[#EEF1F4] py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              style={{ fontFamily: IMPACT_FONT, fontWeight: 400 }}
              className="uppercase text-4xl md:text-5xl lg:text-[60px] leading-[1.02] tracking-tight text-neutral-900 text-center"
            >
              What happens<br className="hidden lg:block" /> next
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6 w-full max-w-[760px]">
                <CircleNode>Come prepared with</CircleNode>
                <Arrow />
                <CircleNode>Your current symptoms &amp; concerns</CircleNode>
                <Arrow />
                <CircleNode>Any recent lab work</CircleNode>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <FAQSection />

      <SiteFooter />
    </div>
  );
}
