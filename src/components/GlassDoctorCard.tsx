"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Clock, Zap, Star } from "lucide-react";
import type { Doctor } from "@/types/doctor";

interface GlassDoctorCardProps {
  doctor: Doctor;
  // onScheduleCall: (doctor: Doctor) => void;
  className?: string;
}

export default function GlassDoctorCard({ doctor, className }: GlassDoctorCardProps) {
  const [isHover, setIsHover] = useState(false);

  const timeText = useMemo(() => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes().toString().padStart(2, "0");
    const hour12 = ((h + 11) % 12) + 1;
    const ampm = h >= 12 ? "PM" : "AM";
    return `${hour12}:${m}${ampm}`;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      className={cn("relative w-full mb-8", className)}
    >
      {/* Pink glow behind card (replaces green) */}
      <div className="pointer-events-none absolute inset-x-3 -bottom-10 top-[90%] rounded-[28px] bg-pink-400/90 blur-0 shadow-[0_20px_50px_-16px_rgba(244,114,182,0.8)] z-0" />

      {/* Bottom floating review bar */}
      <div className="absolute inset-x-0 -bottom-10 mx-auto w-full z-0">
        <div className="flex items-center justify-center gap-2 bg-transparent py-3 text-center text-sm font-medium text-white/90">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={cn("h-4 w-4", i < Math.round(doctor.rating) ? "text-yellow-400 fill-current" : "text-white/30")} />
          ))}
          <span className="font-poppins">{doctor.rating.toFixed(1)} • {doctor.reviews} reviews</span>
        </div>
      </div>

      {/* Main card */}
      <Card
        className={cn(
          "relative z-10 mx-auto w-full overflow-visible rounded-[20px]",
          "bg-white backdrop-blur-xl", // white background as requested
          "border border-black/10",
          "shadow-lg shadow-black/10"
        )}
      >
        <CardContent className="p-6 sm:p-8">
          {/* Top bar with experience (left) and time (right) */}
          <div className="mb-6 flex items-center justify-between text-xs sm:text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-600 px-2.5 py-1 font-space font-medium tracking-wide">
                {doctor.experience}
              </span>
            </div>
            {/* <div className="flex items-center gap-2 opacity-80">
              <Clock className="h-4 w-4" />
              <span className="tabular-nums">{timeText}</span>
            </div> */}
          </div>

          {/* Avatar and basic info */}
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="relative h-44 w-44 sm:h-52 sm:w-52 shrink-0 overflow-hidden rounded-[20px] ring-2 ring-black/5">
              <Image src={doctor.image} alt={doctor.name} fill sizes="220px" className="object-cover" />
            </div>
            <div className="min-w-0 text-center">
              <h3 className="truncate text-2xl font-semibold font-cat text-neutral-900 ">
                {doctor.name}
              </h3>
              <p className="text-sm text-black/60 font-poppins">{doctor.specialization}</p>
            </div>
            <p className="text-center text-neutral-700 font-play max-w-prose leading-relaxed md:text-sm text-[13px] h-28">
              {doctor.description}
            </p>
          </div>

          {/* Bottom actions: fee left, schedule right */}
          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="text-left">
              <p className="text-neutral-500 text-xs font-poppins">Consultation Fee</p>
              <p className="text-base md:text-2xl font-bold text-green-600 font-poppins">₹{doctor.consultationFee}</p>
            </div>
            <Button
            variant="outline"
              // onClick={() => onScheduleCall(doctor)}
              className="md:h-12 h-10 rounded-2xl md:px-6 px-4 font-poppins"
            >
              Schedule Call
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
