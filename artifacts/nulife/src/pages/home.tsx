import { motion } from "framer-motion";
import { ArrowRight, Leaf, Moon, Sun, Heart, Play, CheckCircle2, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold tracking-tight text-primary">NuLife</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
            <a href="#philosophy" className="hover:text-primary transition-colors">Philosophy</a>
            <a href="#elements" className="hover:text-primary transition-colors">The Elements</a>
            <a href="#science" className="hover:text-primary transition-colors">Science</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:flex rounded-full">Log in</Button>
            <Button className="rounded-full px-6">Start Journey</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6">
              <Sun className="w-4 h-4" />
              <span>A new morning routine</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-[1.1] mb-6">
              Wake up to <br/>
              <span className="text-primary italic">your best self.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              NuLife blends science-backed nutrition, mindful movement, and restorative rest into a simple daily system designed for ambitious people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full text-base h-14 px-8 shadow-xl shadow-primary/20">
                Explore the System <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base h-14 px-8 group bg-background/50 backdrop-blur-sm">
                <Play className="mr-2 w-4 h-4 group-hover:text-primary transition-colors" /> Watch the Film
              </Button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-2xl">
              <img 
                src="/hero-bg.png" 
                alt="Sun-drenched morning" 
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
            </div>
            {/* Floating element */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-background/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-border/50 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-foreground">
                  <Leaf className="w-5 h-5" />
                </div>
                <div className="font-medium text-sm">Vitality Score</div>
              </div>
              <div className="text-3xl font-serif font-bold text-foreground">94%</div>
              <div className="text-xs text-muted-foreground mt-1">Average user increase in morning energy.</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-foreground">
              Quiet confidence comes from a <span className="italic text-primary">grounded foundation.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              We believe wellness shouldn't feel like a chore or a clinical prescription. It should feel like a sun-drenched morning — warm, hopeful, and intentional. By focusing on the foundational pillars of health, we give you the clarity and energy to build the life you want.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border/50 pt-12">
              {[
                { label: "Plant-based", value: "100%" },
                { label: "Bioavailable", value: "High" },
                { label: "Fillers", value: "Zero" },
                { label: "Sourcing", value: "Ethical" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-serif font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
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
