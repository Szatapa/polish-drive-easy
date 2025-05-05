
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AppPreview = () => {
  return (
    <section className="section-padding bg-muted overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
              Master Your Driving Theory with Ease
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our app transforms driving theory into an engaging experience. Learn quickly and effectively, so you can pass your exam with confidence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white shadow-md">
                <CardContent className="p-5">
                  <h3 className="font-bold text-secondary mb-2">Quick Learning</h3>
                  <p className="text-gray-600">Study at your own pace, anytime and anywhere</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md">
                <CardContent className="p-5">
                  <h3 className="font-bold text-secondary mb-2">Fun Experience</h3>
                  <p className="text-gray-600">Interactive quizzes and game-mode learning to enjoy.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md">
                <CardContent className="p-5">
                  <h3 className="font-bold text-secondary mb-2">Progress Tracking</h3>
                  <p className="text-gray-600">Monitor your improvement with detailed statistics</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md">
                <CardContent className="p-5">
                  <h3 className="font-bold text-secondary mb-2">Exam Simulation</h3>
                  <p className="text-gray-600">Practice under real exam conditions to be prepared</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="bg-gray-200 w-72 h-[500px] rounded-[40px] p-4 shadow-2xl mx-auto">
                <div className="bg-white w-full h-full rounded-[32px] overflow-hidden relative">
                  <div className="bg-primary text-white p-4">
                    <h4 className="font-bold">Study.to/exam</h4>
                    <p className="text-sm opacity-80">Polish Driving Theory App</p>
                  </div>
                  
                  {/* Mock content */}
                  <div className="p-4">
                    <div className="bg-gray-100 rounded-lg p-4 mb-4">
                      <div className="h-4 w-3/4 bg-gray-300 rounded mb-2"></div>
                      <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="h-10 bg-gray-100 rounded-lg"></div>
                      <div className="h-10 bg-gray-100 rounded-lg"></div>
                      <div className="h-10 bg-primary/20 rounded-lg"></div>
                      <div className="h-10 bg-gray-100 rounded-lg"></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                      <div className="h-8 w-24 rounded-full bg-primary"></div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="h-12 bg-gray-100 rounded-full flex items-center justify-between px-4">
                        <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                        <div className="h-6 w-6 rounded-full bg-primary"></div>
                        <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
