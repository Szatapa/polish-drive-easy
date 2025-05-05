
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { sampleQuestions, Question } from "@/data/quizQuestions";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQuestion = sampleQuestions[currentIndex];
  
  const handleAnswerSelect = (index: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(index);
    setIsAnswered(true);
    
    if (index === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentIndex < sampleQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setQuizComplete(true);
    }
  };
  
  const resetQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setQuizComplete(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-10 text-center">
              Driving Theory Quiz
            </h1>
            
            {!quizComplete ? (
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-sm font-medium text-gray-500">
                    Question {currentIndex + 1}/{sampleQuestions.length}
                  </div>
                  <div className="text-sm font-medium text-primary">
                    Score: {score}/{currentIndex + (isAnswered ? 1 : 0)}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-6 text-secondary">
                  {currentQuestion.question}
                </h3>
                
                <div className="space-y-3 mb-6">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                        selectedAnswer === index
                          ? index === currentQuestion.correctAnswer
                            ? "bg-green-50 border-green-500"
                            : "bg-red-50 border-red-500"
                          : "border-gray-200 hover:border-primary"
                      } ${isAnswered ? "cursor-default" : "hover:bg-gray-50"}`}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={isAnswered}
                    >
                      <div className="flex justify-between items-center">
                        <span>{option}</span>
                        {isAnswered && index === currentQuestion.correctAnswer && (
                          <Check className="h-5 w-5 text-green-500" />
                        )}
                        {isAnswered && selectedAnswer === index && index !== currentQuestion.correctAnswer && (
                          <X className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
                
                {isAnswered && (
                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-blue-800 mb-2">Explanation:</h4>
                    <p className="text-blue-700">{currentQuestion.explanation}</p>
                  </div>
                )}
                
                <div className="flex justify-end">
                  <Button
                    onClick={handleNextQuestion}
                    disabled={!isAnswered}
                    className={`${!isAnswered ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {currentIndex < sampleQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center">
                <h3 className="text-2xl font-bold mb-6 text-secondary">
                  Quiz Complete!
                </h3>
                <p className="text-lg mb-6">
                  Your final score: <span className="font-bold text-primary">{score}</span> out of <span className="font-bold">{sampleQuestions.length}</span>
                </p>
                <p className="mb-8">
                  {score === sampleQuestions.length 
                    ? "Perfect! You're ready for the exam!"
                    : score >= sampleQuestions.length * 0.8
                    ? "Great job! You're almost ready for the exam!"
                    : score >= sampleQuestions.length * 0.6
                    ? "Good effort! Keep practicing to improve your score."
                    : "You need more practice. Keep studying!"}
                </p>
                <Button onClick={resetQuiz}>Try Again</Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quiz;
