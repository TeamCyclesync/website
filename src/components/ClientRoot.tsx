"use client";
import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(false);
  }, []);

  return (
    <>
      {!showContent && <Preloader onComplete={() => setShowContent(true)} />}
      {showContent && children}
    </>
  );
} 