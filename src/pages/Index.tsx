
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import QuizDemo from "@/components/QuizDemo";
import AppPreview from "@/components/AppPreview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <AppPreview />
        <QuizDemo />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
