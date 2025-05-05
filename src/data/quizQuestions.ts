
export interface Question {
  id: number;
  question: string;
  image?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const sampleQuestions: Question[] = [
  {
    id: 1,
    question: "What is the speed limit in built-up areas in Poland?",
    options: ["30 km/h", "50 km/h", "60 km/h", "70 km/h"],
    correctAnswer: 1,
    explanation: "In Poland, the speed limit in built-up areas is 50 km/h from 5:00 to 23:00 and 60 km/h from 23:00 to 5:00."
  },
  {
    id: 2,
    question: "When approaching an uncontrolled intersection, who has the right of way?",
    options: ["Vehicles coming from the left", "Vehicles coming from the right", "The larger vehicle", "The first vehicle to arrive"],
    correctAnswer: 1,
    explanation: "In Poland, vehicles coming from the right have the right of way at uncontrolled intersections (the right-hand rule)."
  },
  {
    id: 3,
    question: "What does a continuous white line in the middle of the road indicate?",
    options: ["You can overtake if safe", "You cannot cross or overtake", "It's a lane divider only", "None of the above"],
    correctAnswer: 1,
    explanation: "A continuous white line in the middle of the road indicates that you cannot cross it or overtake."
  },
  {
    id: 4,
    question: "What is the blood alcohol concentration (BAC) limit for non-professional drivers in Poland?",
    options: ["0.0%", "0.02%", "0.05%", "0.08%"],
    correctAnswer: 1,
    explanation: "In Poland, the blood alcohol concentration (BAC) limit for non-professional drivers is 0.02% (0.2‰)."
  },
  {
    id: 5,
    question: "Who has priority at a roundabout in Poland?",
    options: ["Vehicles entering the roundabout", "Vehicles already on the roundabout", "Vehicles on the right", "The largest vehicle"],
    correctAnswer: 1,
    explanation: "In Poland, vehicles already on the roundabout have priority over vehicles entering the roundabout."
  },
];
