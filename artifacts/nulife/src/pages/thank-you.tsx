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
import circlesDiagram from "@assets/Group_350_1776790465717.png";

const IMPACT_FONT =
  'Impact, "Haettenschweiler", "Arial Narrow Bold", sans-serif';

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
            className="mt-16 md:mt-24 text-center max-w-4xl mx-auto"
          >
            <h1
              style={{ fontFamily: IMPACT_FONT, fontWeight: 400 }}
              className="font-sans uppercase text-4xl md:text-6xl lg:text-[72px] leading-[1.02] tracking-tight"
            >
              You're all set, your<br className="hidden md:block" />{" "}
              consultation is confirmed.
            </h1>
            <p className="mt-6 text-base md:text-lg font-medium text-white/90">
              Check your email for confirmation details and a calendar invite.
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
                className="w-full max-w-[900px] h-auto"
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
