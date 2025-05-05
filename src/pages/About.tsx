
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-10 text-center">
              About Study.to/exam
            </h1>
            
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12">
              <p className="text-lg text-gray-600 mb-6">
                At Study.to/exam, we're dedicated to making driving theory education accessible, 
                engaging, and effective for everyone preparing for their Polish driving exam in English.
              </p>
              
              <p className="text-lg text-gray-600 mb-6">
                Our team of experienced driving instructors and education experts has designed a learning
                experience that adapts to your needs, whether you're a visual learner or prefer a more
                interactive approach.
              </p>
              
              <p className="text-lg text-gray-600">
                We constantly update our question database to reflect the most current Polish driving 
                regulations, ensuring that you're always studying the most relevant material.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold text-secondary mb-6">
              Our Mission
            </h2>
            
            <p className="text-lg text-gray-600 mb-12">
              To empower students with the knowledge and confidence needed to pass their driving theory 
              exam on the first attempt, through innovative learning methods and user-friendly technology.
            </p>
            
            <h2 className="text-2xl font-bold text-secondary mb-6">
              Why Choose Us
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-3 text-secondary">
                  Comprehensive Content
                </h3>
                <p className="text-gray-600">
                  Our database includes all possible questions and scenarios you might encounter on your exam.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-3 text-secondary">
                  English Language Support
                </h3>
                <p className="text-gray-600">
                  We understand the challenges of studying in a foreign language and provide clear translations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-3 text-secondary">
                  Adaptive Learning
                </h3>
                <p className="text-gray-600">
                  Our system identifies your weak areas and adjusts to focus your study time effectively.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-3 text-secondary">
                  User-Friendly Design
                </h3>
                <p className="text-gray-600">
                  Our app is designed with simplicity in mind, making study sessions stress-free and productive.
                </p>
              </div>
            </div>
            
            <div className="bg-muted p-8 rounded-xl text-center mb-12">
              <h2 className="text-2xl font-bold text-secondary mb-6">
                Ready to Pass Your Polish Driving Theory Exam?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of successful students who have passed their exam with our help.
              </p>
              <button className="btn-primary">
                Start Learning Now
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
