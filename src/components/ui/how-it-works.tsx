"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Search, FileText, CreditCard, Calendar } from "lucide-react";

interface HowItWorksProps extends React.HTMLAttributes<HTMLElement> {}

interface StepCardProps {
  index: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const StepCard: React.FC<StepCardProps> = ({ index, icon, title, description, benefits }) => (
  <div className="relative rounded-2xl border bg-card p-6 text-card-foreground transition-all duration-300 ease-in-out md:hover:scale-105 md:hover:shadow-lg md:hover:border-primary/50 md:hover:bg-muted">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-primary">
      {icon}
    </div>
    <h3 className="mb-2 text-lg font-semibold font-poppins">{title}</h3>
    <p className="mb-6 text-muted-foreground font-poppins text-sm">{description}</p>
    <ul className="space-y-3">
      {benefits.map((benefit, i) => (
        <li key={i} className="flex items-center gap-3">
          <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
            <div className="h-2 w-2 rounded-full bg-primary"></div>
          </div>
          <span className="text-muted-foreground">{benefit}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const HowItWorks: React.FC<HowItWorksProps> = ({ className, ...props }) => {
  const stepsData = [
    {
      icon: <Search className="h-6 w-6 text-blue-400" />,
      title: "Choose your doctor",
      description: "Browse expert gynecologists and pick the right specialist for you.",
      benefits: ["Verified profiles & ratings", "Specializations clearly listed", "Transparent consultation fees"],
    },
    {
      icon: <FileText className="h-6 w-6 text-amber-800" />,
      title: "Fill basic details",
      description: "Share your name, email, phone, and age to proceed to payment.",
      benefits: ["Quick and simple form", "Your data stays private", "Helps doctors prepare"],
    },
    {
      icon: <CreditCard className="h-6 w-6 text-green-600" />,
      title: "Make secure payment",
      description: "Pay the consultation fee via PhonePe using our secure checkout.",
      benefits: ["Trusted payment gateway", "Instant confirmation", "No hidden charges"],
    },
    {
      icon: <Calendar className="h-6 w-6 text-yellow-400" />,
      title: "Book your slot",
      description: "Get redirected to Calendly to pick a convenient appointment time.",
      benefits: ["Auto email confirmation", "Video link generated", "Easy rescheduling"],
    },
  ];

  return (
    <section id="how-it-works" className={cn("w-full py-12 md:py-4", className)} {...props}>
      <div className="container px-0">
        <div className="mx-auto mb-10 md:mb-16 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-cat tracking-wide">How it works</h2>
          <p className="mt-4 text-base md:text-lg text-white font-poppins">
            Follow these simple steps to book your telemedicine consultation.
          </p>
        </div>

        {/* Desktop/Tablet: horizontal line with 4 circles above grid */}
        <div className="relative mx-auto mb-6 md:mb-8 w-full max-w-5xl hidden md:block">
          <div aria-hidden="true" className="absolute left-[11.333%] right-[11.333%] top-1/2 h-0.5 -translate-y-1/2 bg-border"></div>
          <div className="relative grid grid-cols-4">
            {[0,1,2,3].map((i) => (
              <div key={i} className="flex h-9 w-9 items-center justify-center justify-self-center rounded-full bg-muted font-semibold text-foreground ring-4 ring-background">
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Steps Grid */}
        <div className="mx-auto max-w-6xl">
          {/* Mobile: vertical left line with numbered circles aligned to each card */}
          <div className="md:hidden relative pl-8">
            <div aria-hidden="true" className="absolute left-2 top-4 bottom-0 w-[3px] mb-64 mt-10 bg-border"></div>
            <div className="space-y-6">
              {stepsData.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Numbered circle aligned left of each card */}
                  <div className="absolute font-poppins -left-10 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-muted text-foreground ring-4 ring-background">
                    {idx + 1}
                  </div>
                  <StepCard index={idx + 1} icon={step.icon} title={step.title} description={step.description} benefits={step.benefits} />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop/Tablet grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stepsData.map((step, idx) => (
              <StepCard key={idx} index={idx + 1} icon={step.icon} title={step.title} description={step.description} benefits={step.benefits} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
