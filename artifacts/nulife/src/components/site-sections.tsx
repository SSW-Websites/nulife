import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const IMPACT_FONT =
  'Impact, "Haettenschweiler", "Arial Narrow Bold", sans-serif';

export const PATIENT_REVIEWS = [
  {
    quote:
      "I have been a client of Nulife's for several years. At 47 years old I feel and look as great as I did at 30! I have referred Nulife to many of my friends over the years and all of them are as happy as I am.",
    name: "Lanelle Phillips",
    time: "5 months ago",
  },
  {
    quote:
      "As a 54 year old athlete that loves to train every day, I am very thankful to NuLife Institute for helping me enjoy what I love to do every day. Strongly recommended!",
    name: "Ric Caselli",
    time: "2 months ago",
  },
  {
    quote:
      "The team at Nulife provides cutting edge health options that have improved my quality of life. Their friendly and professional staff offer a wide range of health and fitness programs which have made a huge difference.",
    name: "Michael Hall",
    time: "2 months ago",
  },
  {
    quote:
      "Elizabeth and Janine are so very knowledgeable. NuLife Institute is continually guiding me, towards great health and vitality. They're the best in Miami.",
    name: "Jay International",
    time: "2 months ago",
  },
  {
    quote:
      "My experience working with Jovana was excellent. She has great product knowledge and suggestions. And I felt very comfortable discussing my male health issues with her",
    name: "Aaron Grover",
    time: "2 months ago",
  },
  {
    quote:
      "Jovana was very attentive and explained everything clearly. My husband and I are glad to start our journey at NuLife together.",
    name: "Shirley Borloz",
    time: "2 months ago",
  },
];

const FAQ_ITEMS = [
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
];

export function CTAButton({
  href = "#qualify-form",
  children = "SEE IF YOU QUALIFY",
  variant = "blue",
  className = "",
  type = "anchor",
}: {
  href?: string;
  children?: React.ReactNode;
  variant?: "blue" | "pink";
  className?: string;
  type?: "anchor" | "submit";
}) {
  const colorClasses =
    variant === "pink"
      ? "bg-[#D14361] hover:bg-[#b8364f] shadow-[0_0_0_3px_rgba(209,67,97,0.35)]"
      : "bg-[#1F3BFF] hover:bg-[#1730d6] shadow-[0_0_0_3px_rgba(95,121,255,0.45)]";
  const base = `inline-flex items-center justify-center uppercase text-white tracking-[0.04em] text-xl md:text-2xl leading-none px-10 md:px-12 py-2.5 md:py-3 rounded-full transition-colors ${colorClasses} ${className}`;
  if (type === "submit") {
    return (
      <button
        type="submit"
        style={{ fontFamily: IMPACT_FONT, fontWeight: 400 }}
        className={base}
      >
        {children}
      </button>
    );
  }
  return (
    <a
      href={href}
      style={{ fontFamily: IMPACT_FONT, fontWeight: 400 }}
      className={base}
    >
      {children}
    </a>
  );
}

export function TestimonialsSection() {
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

  return (
    <section
      id="testimonials-real"
      className="bg-black text-white pt-20 md:pt-28 pb-20 md:pb-24"
    >
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
            Real results from{" "}
            <span className="underline underline-offset-[6px] decoration-2">
              real patients
            </span>
          </h2>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          <div className="relative rounded-2xl overflow-hidden bg-neutral-800 aspect-[4/3]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/SJ71RUZS_jE"
              title="NuLife Institute patient testimonial"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
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
            <div
              key={r.name}
              className="bg-white text-neutral-800 rounded-2xl p-6 flex flex-col"
            >
              <p className="text-[14px] leading-relaxed text-neutral-700 flex-1">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="mt-6">
                <div className="text-sm font-semibold text-neutral-900">
                  {r.name}
                </div>
                <div className="text-[11px] text-neutral-500 mt-0.5">
                  {r.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() =>
              setReviewPage(
                (p) => (p - 1 + totalReviewPages) % totalReviewPages,
              )
            }
            className="w-10 h-10 rounded-full border border-neutral-700 text-neutral-400 hover:text-white hover:border-white transition flex items-center justify-center"
            aria-label="Previous reviews"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
          </button>
          <button
            onClick={() =>
              setReviewPage((p) => (p + 1) % totalReviewPages)
            }
            className="w-10 h-10 rounded-full border border-neutral-700 text-white hover:border-white transition flex items-center justify-center"
            aria-label="Next reviews"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="max-w-[900px] mx-auto px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-sans text-3xl md:text-4xl font-semibold text-neutral-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-neutral-500 text-base">
            Get answers to common questions about our personalized health
            optimization programs
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="q-0"
          className="mt-12 space-y-4"
        >
          {FAQ_ITEMS.map((item, i) => (
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
  );
}

export function SiteFooter() {
  return (
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
  );
}
