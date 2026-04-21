import { motion } from "framer-motion";
import {
  TestimonialsSection,
  FAQSection,
  SiteFooter,
} from "@/components/site-sections";
import nuLifeLogo from "@assets/Layer_1_1776719838989.png";
import heroMan from "@assets/8566065be8400f2dd715c1f798b2c97136b03dd2_1776719838989.png";
import reviewsRow from "@assets/image_24_1776719838989.png";
import circlesDiagram from "@assets/Group_350_1776790465717.png";

const IMPACT_FONT =
  'Impact, "Haettenschweiler", "Arial Narrow Bold", sans-serif';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero — confirmation */}
      <section className="relative bg-[#0B1F3A] text-white overflow-hidden">
        {/* Background image of man */}
        <div
          className="absolute inset-y-0 right-0 w-2/3 lg:w-1/2 opacity-50 lg:opacity-70 bg-no-repeat bg-cover bg-right"
          style={{ backgroundImage: `url(${heroMan})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/95 to-[#0B1F3A]/40" />

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
            className="mt-16 md:mt-24 text-center max-w-4xl mx-auto"
          >
            <h1
              style={{ fontFamily: IMPACT_FONT, fontWeight: 400 }}
              className="font-sans uppercase text-4xl md:text-6xl lg:text-[72px] leading-[1.02] tracking-tight"
            >
              You're all set, your<br className="hidden md:block" />{" "}
              consultation is confirmed.
            </h1>
            <p className="mt-6 text-sm md:text-base text-white/80">
              Check your email for confirmation details and a calendar invite.
            </p>

            <div className="mt-10 flex justify-center">
              <img
                src={reviewsRow}
                alt="Patient reviews"
                className="h-12 md:h-14 w-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to make the most of your consultation */}
      <section className="bg-[#EEF1F4] py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              style={{ fontFamily: IMPACT_FONT, fontWeight: 400 }}
              className="uppercase text-3xl md:text-4xl lg:text-[44px] leading-[1.05] tracking-tight text-neutral-900 text-center lg:text-left"
            >
              How to make<br /> the most of your<br /> consultation
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-center lg:justify-end"
            >
              <img
                src={circlesDiagram}
                alt="Come prepared with your current symptoms & concerns and any recent lab work"
                className="w-full max-w-[560px] h-auto"
              />
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
