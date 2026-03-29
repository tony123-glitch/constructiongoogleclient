"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface PageHeaderProps {
  title: React.ReactNode
  subtitle: string
  backgroundImage: string
}

export default function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  // Smooth parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <div ref={ref} className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden border-b border-white/5">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/70 to-black/40" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl pt-16"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 drop-shadow-2xl"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 font-medium shadow-black/50 drop-shadow-md"
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </div>
  )
}
