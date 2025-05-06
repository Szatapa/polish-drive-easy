import React from "react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="bg-muted pt-10 pb-20 md:pt-16 md:pb-32 overflow-hidden relative">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-sm mb-6">
              Start Your Journey
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
              Master Driving Theory with Fun and Ease
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Our app makes learning driving theory fast, enjoyable, and effective. 
              Designed for busy individuals, it helps you prepare for your driving exam 
              without the stress.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary">
                Register to Start for Free
              </Button>
              <Button variant="outline" className="btn-secondary">
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex">
                <a href="#" className="block">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" className="h-10" />
                </a>
              </div>
              <div className="flex">
                <a href="#" className="block">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1200px-Download_on_the_App_Store_Badge.svg.png" alt="App Store" className="h-10" />
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative">
              <img alt="App Preview" className="w-full max-w-md mx-auto rounded-lg shadow-2xl object-scale-down" src="/lovable-uploads/0f29f751-6cf6-4119-bb2c-f8cab6bcf188.png" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;