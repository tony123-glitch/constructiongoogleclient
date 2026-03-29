"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent, useTransform, useMotionTemplate, useSpring } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Scrub video
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (videoRef.current) {
      const vidDuration = videoRef.current.duration;
      if (vidDuration && !isNaN(vidDuration)) {
        requestAnimationFrame(() => {
          if (videoRef.current) {
            videoRef.current.currentTime = latest * vidDuration;
          }
        });
      }
    }
  })

  // Fade out text from 0 to 0.2 of the scroll
  const textOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0])
  const textY = useTransform(smoothProgress, [0, 0.2], ["0px", "-50px"])

  // Desktop clip path
  const deskTop = useTransform(smoothProgress, [0, 0.3], ["20%", "0%"])
  const deskRight = useTransform(smoothProgress, [0, 0.3], ["2%", "0%"])
  const deskBottom = useTransform(smoothProgress, [0, 0.3], ["20%", "0%"])
  const deskLeft = useTransform(smoothProgress, [0, 0.3], ["52%", "0%"])

  // Mobile clip path
  const mobTop = useTransform(smoothProgress, [0, 0.3], ["60%", "0%"])
  const mobRight = useTransform(smoothProgress, [0, 0.3], ["4%", "0%"])
  const mobBottom = useTransform(smoothProgress, [0, 0.3], ["4%", "0%"])
  const mobLeft = useTransform(smoothProgress, [0, 0.3], ["4%", "0%"])

  const radius = useTransform(smoothProgress, [0, 0.3], ["24px", "0px"])

  const clipPathDesktop = useMotionTemplate`inset(${deskTop} ${deskRight} ${deskBottom} ${deskLeft} round ${radius})`
  const clipPathMobile = useMotionTemplate`inset(${mobTop} ${mobRight} ${mobBottom} ${mobLeft} round ${radius})`
  const activeClipPath = isMobile ? clipPathMobile : clipPathDesktop

  // Fade out the badge overlay as the video expands
  const overlayOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0])

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* Global dark background matching the theme behind everything */}
        <div className="absolute inset-0 z-0 bg-black">
          <div 
            className="absolute inset-0 opacity-20 mix-blend-overlay bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888081628-3e4b77fcc652?q=80&w=2070&auto=format&fit=crop')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        </div>

        {/* Text Content Layer */}
        <motion.div 
          style={{ opacity: textOpacity, y: textY }}
          className="container mx-auto px-4 md:px-6 relative z-20 grid md:grid-cols-2 gap-12 items-center pointer-events-none"
        >
          <div className="max-w-2xl space-y-8 mt-6 pointer-events-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 mt-4 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Top Rated in St. Louis</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight tracking-tight text-white drop-shadow-sm">
              Reliable Construction Services You Can <span className="text-primary italic">Trust</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
              From drywall repair to complete renovations, Bankhead Construction LLC delivers premium craftsmanship, fast execution, and uncompromising quality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/contact" 
                className="group relative inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 rounded-md font-semibold text-primary-foreground overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(11,61,145,0.4)] pointer-events-auto"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative">Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a 
                href="tel:+13147014877"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-semibold text-white border border-white/20 hover:bg-white/5 transition-colors backdrop-blur-sm pointer-events-auto"
              >
                <Phone className="w-5 h-5 text-primary" />
                Call (314) 701-4877
              </a>
            </div>
            
            {/* Small Trust Indicators */}
            <div className="flex items-center gap-6 pt-6 border-t border-white/10 mt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Customer" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-yellow-500 text-sm">★★★★★</div>
                <span className="text-xs text-gray-400 font-medium">Trusted by 500+ locals</span>
              </div>
            </div>
          </div>
          {/* Empty div for right column to keep layout structure */}
          <div className="hidden md:block w-full" />
        </motion.div>

        {/* Video Takeover Layer */}
        <motion.div 
          style={{ clipPath: activeClipPath }}
          className="absolute inset-0 z-10 bg-[#050505] pointer-events-none"
        >
          <video
            ref={videoRef}
            src="/Coolceling.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            muted
            playsInline
            preload="auto"
            onLoadedMetadata={() => {
              if (videoRef.current && !isNaN(videoRef.current.duration)) {
                videoRef.current.currentTime = smoothProgress.get() * videoRef.current.duration;
              }
            }}
          />
          <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />
          
          <motion.div style={{ opacity: overlayOpacity }} className="absolute bottom-6 left-6 right-6 lg:left-1/2 lg:translate-x-12">
            <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl inline-block">
              <p className="font-bold font-heading text-lg text-white">Excellence Delivered</p>
              <p className="text-primary text-sm font-semibold">100% Satisfaction Guarantee</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
