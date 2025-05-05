
import React from "react";
import { Book, Calendar, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Pełna baza pytań egzaminacyjnych",
      description: "Frequently updated question base. All road code chapters and regulations needed to pass the exam.",
      icon: <Book className="h-10 w-10 text-primary" />
    },
    {
      title: "Symulacja egzaminu",
      description: "Practice real exam conditions. Time-limited tests with official exam questions.",
      icon: <Calendar className="h-10 w-10 text-primary" />
    },
    {
      title: "Tryb nauki",
      description: "Learn at your own pace anywhere. Detailed explanations to help you understand each rule.",
      icon: <Clock className="h-10 w-10 text-primary" />
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
            Master Driving Theory with Ease and Fun
          </h2>
          <p className="text-lg text-gray-600">
            Our app simplifies your driving theory learning experience, thus enhancing success. Designed for quick understanding and retention.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 card-hover"
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-secondary">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
