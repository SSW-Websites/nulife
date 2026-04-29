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

export default function Disqualify() {
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
            className="mt-16 md:mt-24 text-center max-w-5xl mx-auto"
          >
            <h1
              style={{ fontFamily: IMPACT_FONT, fontWeight: 400 }}
              className="font-sans uppercase text-3xl md:text-4xl lg:text-[56px] leading-[1.05] tracking-tight"
            >
              We appreciate your interest<br className="hidden md:block" /> in NuLife Institute.
            </h1>
            <div className="mt-8 space-y-5 text-base md:text-lg font-medium text-white/90 max-w-3xl mx-auto">
              <p>
                After reviewing your answers, our programs aren't the right fit at this time.
              </p>
              <p>
                NuLife's programs are designed as private, cash-pay medical care. Because of how our treatment plans are structured, including bioidentical hormones, peptide therapy, and our full diagnostic protocol, they fall outside what Medicare covers.
              </p>
              <p>
                This isn't a reflection of your health goals or how serious you are about them. It's a coverage mismatch, and we'd rather be upfront about it now than waste your time on a call that leads nowhere.
              </p>
              <p>
                If your coverage situation changes, or if you're exploring options outside Medicare for any of our programs, our team is here.
              </p>
            </div>

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

      <TestimonialsSection />

      <FAQSection />

      <SiteFooter />
    </div>
  );
}
