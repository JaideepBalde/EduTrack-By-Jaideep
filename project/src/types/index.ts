export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  joinedDate: string;
  totalStudyHours: number;
  streak: number;
  level: number;
  xp: number;
}

export interface Exam {
  id: string;
  title: string;
  category: 'government' | 'private';
  department: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  eligibility: string[];
  ageLimit: string;
  attempts: number;
  applicationFee: string;
  description: string;
  pattern: ExamPattern;
  syllabus: Subject[];
  importantDates: ImportantDate[];
  selectionProcess: string[];
  salary: string;
  posts: number;
  officialWebsite: string;
  examFrequency: string;
  preparationTime: string;
  tags: string[];
}

export interface ExamPattern {
  totalQuestions: number;
  totalMarks: number;
  duration: string;
  sections: Section[];
  negativeMarking: string;
  passingCriteria: string;
}

export interface Section {
  name: string;
  questions: number;
  marks: number;
  duration?: string;
}

export interface Subject {
  id: string;
  name: string;
  weightage: number;
  topics: Topic[];
  studyMaterial: StudyMaterial[];
}

export interface Topic {
  id: string;
  name: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  estimatedHours: number;
  subtopics: string[];
  completed: boolean;
  lastStudied?: string;
  score?: number;
  attempts: number;
}

export interface StudyMaterial {
  id: string;
  title: string;
  type: 'notes' | 'video' | 'practice' | 'reference';
  content: string;
  duration?: string;
  url?: string;
}

export interface ImportantDate {
  event: string;
  date: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  subject: string;
  topic: string;
  marks: number;
  previouslyAsked?: string[];
}

export interface TestResult {
  id: string;
  examId: string;
  userId: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeTaken: string;
  completedAt: string;
  subjectWiseScore: { [subject: string]: number };
  grade: 'A+' | 'A' | 'B+' | 'B' | 'C' | 'F';
}

export interface StudyPlan {
  id: string;
  examId: string;
  userId: string;
  title: string;
  targetDate: string;
  dailyHours: number;
  schedule: StudySchedule[];
  progress: number;
  createdAt: string;
}

export interface StudySchedule {
  date: string;
  subjects: string[];
  topics: string[];
  hours: number;
  completed: boolean;
  actualHours?: number;
}

export interface Progress {
  examId: string;
  totalTopics: number;
  completedTopics: number;
  averageScore: number;
  weeklyProgress: number[];
  subjectProgress: { [subject: string]: number };
  strongAreas: string[];
  weakAreas: string[];
  recommendedFocus: string[];
}