
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { sampleQuestions, Question } from "@/data/quizQuestions";
import { Check, X } from "lucide-react";

const QuizDemo = () => {
  const [currentQuestion, setCurrentQuestion] = useState<Question>(sampleQuestions[0]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  
  const handleAnswerSelect = (index: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(index);
    setIsAnswered(true);
    
    if (index === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };
  
  const handleNextQuestion = () => {
    const nextQuestionIndex = (questionNumber + 1) % sampleQuestions.length;
    setQuestionNumber(nextQuestionIndex);
    setCurrentQuestion(sampleQuestions[nextQuestionIndex]);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
              Master Driving Theory with Interactive Quizzes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enjoy a dynamic approach to studying with interactive quizzes and visual materials. Our app helps you manage while you learn, so your road rules knowledge is sound before the exam.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm font-medium text-gray-500">
                Question {questionNumber + 1}/{sampleQuestions.length}
              </div>
              <div className="text-sm font-medium text-primary">
                Score: {score}/{questionNumber + (isAnswered ? 1 : 0)}
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
                Next Question
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizDemo;
