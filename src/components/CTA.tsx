
import React from "react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Driving Journey Today
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-lg">
              Experience is the most effective way to master your driving theory and rule your exam.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-primary hover:bg-gray-100">
                Register to Start for Free
              </Button>
              <div className="flex items-center gap-4">
                <a href="#" className="block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" 
                    alt="Google Play" 
                    className="h-10"
                  />
                </a>
                <a href="#" className="block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1200px-Download_on_the_App_Store_Badge.svg.png" 
                    alt="App Store" 
                    className="h-10"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1541985634571-236036312e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
              alt="Happy student driver" 
              className="rounded-full w-64 h-64 object-cover mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
