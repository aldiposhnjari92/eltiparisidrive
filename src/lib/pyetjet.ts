import { Test } from "./types";

export const pyetje: Test[] = [
  {
    id: 1,
    name: "Test 1 - Traffic Rules",
    questions: [
      {
        id: 1,
        question: "What does a red traffic light mean?",
        options: ["Go", "Slow down", "Stop", "Proceed with caution"],
        correctAnswer: 2,
        image: null
      },
      {
        id: 2,
        question: "What is the maximum speed limit in urban areas in Albania?",
        options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
        correctAnswer: 1,
        image: null
      },
      {
        id: 3,
        question: "What does this sign indicate?",
        options: ["No parking", "Stop required", "Yield", "Speed limit"],
        correctAnswer: 1,
        image: "https://images.unsplash.com/photo-1616690710400-a16d146927c5?w=300&h=200&fit=crop"
      },
      {
        id: 4,
        question: "When should you use your turn signal?",
        options: ["Only when other cars are present", "Before changing lanes or turning", "Only at intersections", "Signals are optional"],
        correctAnswer: 1,
        image: null
      },
      {
        id: 5,
        question: "What should you do at a roundabout?",
        options: ["Speed up to enter quickly", "Yield to traffic already in the roundabout", "Stop completely before entering", "Always go straight"],
        correctAnswer: 1,
        image: null
      }
    ]
  },
  {
    id: 2,
    name: "Test 2 - Road Safety",
    questions: [
      {
        id: 1,
        question: "What is the minimum safe following distance?",
        options: ["1 second", "2 seconds", "3 seconds", "5 seconds"],
        correctAnswer: 2,
        image: null
      },
      {
        id: 2,
        question: "When must you wear a seatbelt?",
        options: ["Only on highways", "Only in the front seat", "At all times while driving", "Only when passengers are present"],
        correctAnswer: 2,
        image: null
      },
      {
        id: 3,
        question: "What does this road marking mean?",
        options: ["Parking allowed", "No overtaking", "Emergency stopping only", "Bus lane"],
        correctAnswer: 1,
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=300&h=200&fit=crop"
      },
      {
        id: 4,
        question: "What should you do when an emergency vehicle approaches with sirens?",
        options: ["Speed up", "Pull over to the right and stop", "Continue at same speed", "Change lanes frequently"],
        correctAnswer: 1,
        image: null
      },
      {
        id: 5,
        question: "At what blood alcohol level is it illegal to drive?",
        options: ["0.05%", "0.08%", "0.10%", "Any amount"],
        correctAnswer: 0,
        image: null
      }
    ]
  },
  {
    id: 3,
    name: "Test 3 - Advanced Driving",
    questions: [
      {
        id: 1,
        question: "What should you do when driving in fog?",
        options: ["Use high beams", "Use low beams and fog lights", "Use parking lights only", "Turn off all lights"],
        correctAnswer: 1,
        image: null
      },
      {
        id: 2,
        question: "What is hydroplaning?",
        options: ["Driving on ice", "Loss of traction on wet roads", "Engine overheating", "Brake failure"],
        correctAnswer: 1,
        image: null
      },
      {
        id: 3,
        question: "What does this warning sign indicate?",
        options: ["School zone", "Pedestrian crossing", "Children playing", "Reduced speed ahead"],
        correctAnswer: 1,
        image: "https://images.unsplash.com/photo-1585503418537-88331351ad99?w=300&h=200&fit=crop"
      },
      {
        id: 4,
        question: "When is it safe to pass another vehicle?",
        options: ["Always allowed", "When there's a solid line", "When there's a dashed line and clear visibility", "Never allowed"],
        correctAnswer: 2,
        image: null
      },
      {
        id: 5,
        question: "What should you do if your brakes fail?",
        options: ["Jump out of the car", "Pump the brakes and use handbrake gradually", "Turn off the engine immediately", "Speed up to get home faster"],
        correctAnswer: 1,
        image: null
      }
    ]
  }
];
