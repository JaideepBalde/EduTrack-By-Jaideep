import { Exam } from '../types';

export const governmentExams: Exam[] = [
  {
    id: 'upsc-cse',
    title: 'UPSC Civil Services Examination',
    category: 'government',
    department: 'Union Public Service Commission',
    difficulty: 'Advanced',
    duration: '1 Year Process',
    eligibility: ['Bachelor\'s Degree', 'Age: 21-32 years'],
    ageLimit: '21-32 years (General)',
    attempts: 6,
    applicationFee: '₹100 (General), ₹25 (SC/ST/PH/Women)',
    description: 'The Civil Services Examination is conducted annually by the Union Public Service Commission (UPSC) to recruit candidates for various Central Civil Services and posts.',
    pattern: {
      totalQuestions: 250,
      totalMarks: 2025,
      duration: '3 Stages',
      sections: [
        { name: 'Preliminary Exam', questions: 200, marks: 400 },
        { name: 'Main Exam', questions: 0, marks: 1750 },
        { name: 'Interview', questions: 0, marks: 275 }
      ],
      negativeMarking: '1/3rd mark deducted for wrong answers in Prelims',
      passingCriteria: 'Qualifying in each stage'
    },
    syllabus: [
      {
        id: 'history',
        name: 'History',
        weightage: 15,
        topics: [
          {
            id: 'ancient-history',
            name: 'Ancient History',
            difficulty: 'Medium',
            estimatedHours: 120,
            subtopics: [
              'Indus Valley Civilization',
              'Vedic Period',
              'Mauryan Empire',
              'Gupta Period',
              'Post-Gupta Period',
              'South Indian Kingdoms',
              'Art and Architecture',
              'Religious Movements'
            ],
            completed: false,
            attempts: 0
          },
          {
            id: 'medieval-history',
            name: 'Medieval History',
            difficulty: 'Medium',
            estimatedHours: 100,
            subtopics: [
              'Delhi Sultanate',
              'Mughal Empire',
              'Vijayanagara Empire',
              'Bahmani Kingdom',
              'Maratha Empire',
              'Regional Powers',
              'Administrative Systems',
              'Cultural Developments'
            ],
            completed: false,
            attempts: 0
          },
          {
            id: 'modern-history',
            name: 'Modern History',
            difficulty: 'Hard',
            estimatedHours: 150,
            subtopics: [
              'British Colonial Rule',
              'Indian National Movement',
              'Freedom Struggle',
              'Partition of India',
              'Post-Independence India',
              'Economic Policies',
              'Social Reforms',
              'Revolutionary Movements'
            ],
            completed: false,
            attempts: 0
          }
        ],
        studyMaterial: [
          {
            id: 'history-notes-1',
            title: 'Ancient India - Comprehensive Notes',
            type: 'notes',
            content: 'Detailed notes covering the Indus Valley Civilization, characterized by its advanced urban planning, sophisticated drainage systems, and standardized weights and measures. The Harappan civilization (2600-1900 BCE) was one of the world\'s earliest urban civilizations...'
          }
        ]
      },
      {
        id: 'geography',
        name: 'Geography',
        weightage: 12,
        topics: [
          {
            id: 'physical-geography',
            name: 'Physical Geography',
            difficulty: 'Medium',
            estimatedHours: 80,
            subtopics: [
              'Earth and Universe',
              'Landforms',
              'Climate and Weather',
              'Natural Vegetation',
              'Soils',
              'Natural Resources',
              'Oceanography',
              'Environmental Geography'
            ],
            completed: false,
            attempts: 0
          }
        ],
        studyMaterial: []
      },
      {
        id: 'polity',
        name: 'Indian Polity',
        weightage: 18,
        topics: [
          {
            id: 'constitution',
            name: 'Indian Constitution',
            difficulty: 'Hard',
            estimatedHours: 120,
            subtopics: [
              'Historical Background',
              'Making of Constitution',
              'Salient Features',
              'Preamble',
              'Fundamental Rights',
              'Directive Principles',
              'Fundamental Duties',
              'Amendment Procedure'
            ],
            completed: false,
            attempts: 0
          }
        ],
        studyMaterial: []
      }
    ],
    importantDates: [
      { event: 'Application Start', date: '2024-04-15', status: 'completed' },
      { event: 'Application End', date: '2024-05-15', status: 'completed' },
      { event: 'Preliminary Exam', date: '2024-06-16', status: 'upcoming' },
      { event: 'Main Exam', date: '2024-09-15', status: 'upcoming' }
    ],
    selectionProcess: ['Preliminary Exam', 'Main Exam', 'Personality Test (Interview)'],
    salary: '₹56,100 - ₹2,50,000',
    posts: 1000,
    officialWebsite: 'https://upsc.gov.in',
    examFrequency: 'Annual',
    preparationTime: '12-18 months',
    tags: ['IAS', 'IPS', 'IFS', 'Central Services']
  },
  {
    id: 'ssc-cgl',
    title: 'SSC Combined Graduate Level',
    category: 'government',
    department: 'Staff Selection Commission',
    difficulty: 'Intermediate',
    duration: '4 Months Process',
    eligibility: ['Bachelor\'s Degree', 'Age: 18-32 years'],
    ageLimit: '18-32 years (varies by post)',
    attempts: 'No limit',
    applicationFee: '₹100 (General), ₹0 (SC/ST/PH/Women)',
    description: 'SSC CGL is conducted to recruit candidates for various Group B and Group C posts in ministries, departments and organizations of the Government of India.',
    pattern: {
      totalQuestions: 300,
      totalMarks: 600,
      duration: '4 Tiers',
      sections: [
        { name: 'Tier 1', questions: 100, marks: 200, duration: '60 min' },
        { name: 'Tier 2', questions: 200, marks: 400, duration: '2 hrs each' },
        { name: 'Tier 3', questions: 0, marks: 100, duration: '60 min' },
        { name: 'Tier 4', questions: 0, marks: 0, duration: 'Varies' }
      ],
      negativeMarking: '0.5 marks for wrong answers',
      passingCriteria: 'Qualifying in each tier'
    },
    syllabus: [
      {
        id: 'quantitative-aptitude',
        name: 'Quantitative Aptitude',
        weightage: 25,
        topics: [
          {
            id: 'arithmetic',
            name: 'Arithmetic',
            difficulty: 'Medium',
            estimatedHours: 60,
            subtopics: [
              'Number System',
              'HCF and LCM',
              'Percentage',
              'Profit and Loss',
              'Simple and Compound Interest',
              'Time and Work',
              'Time and Distance',
              'Average',
              'Ratio and Proportion',
              'Mixture and Alligation'
            ],
            completed: false,
            attempts: 0
          }
        ],
        studyMaterial: []
      },
      {
        id: 'reasoning',
        name: 'General Intelligence & Reasoning',
        weightage: 25,
        topics: [
          {
            id: 'logical-reasoning',
            name: 'Logical Reasoning',
            difficulty: 'Medium',
            estimatedHours: 50,
            subtopics: [
              'Analogies',
              'Similarities and Differences',
              'Space Visualization',
              'Problem Solving',
              'Analysis and Judgment',
              'Decision Making',
              'Visual Memory',
              'Discrimination',
              'Observation',
              'Relationship Concepts'
            ],
            completed: false,
            attempts: 0
          }
        ],
        studyMaterial: []
      }
    ],
    importantDates: [
      { event: 'Application Start', date: '2024-06-01', status: 'upcoming' },
      { event: 'Application End', date: '2024-07-01', status: 'upcoming' },
      { event: 'Tier 1 Exam', date: '2024-08-15', status: 'upcoming' }
    ],
    selectionProcess: ['Tier 1', 'Tier 2', 'Tier 3', 'Document Verification'],
    salary: '₹25,500 - ₹81,100',
    posts: 15000,
    officialWebsite: 'https://ssc.nic.in',
    examFrequency: 'Annual',
    preparationTime: '6-8 months',
    tags: ['Assistant', 'Inspector', 'Officer', 'Clerk']
  },
  {
    id: 'ibps-po',
    title: 'IBPS PO (Probationary Officer)',
    category: 'government',
    department: 'Institute of Banking Personnel Selection',
    difficulty: 'Intermediate',
    duration: '6 Months Process',
    eligibility: ['Bachelor\'s Degree', 'Age: 20-30 years'],
    ageLimit: '20-30 years',
    attempts: 'No limit',
    applicationFee: '₹175 (General), ₹100 (SC/ST/PH)',
    description: 'IBPS PO exam is conducted to recruit Probationary Officers in participating public sector banks across India.',
    pattern: {
      totalQuestions: 200,
      totalMarks: 200,
      duration: '3 Phases',
      sections: [
        { name: 'Preliminary Exam', questions: 100, marks: 100, duration: '60 min' },
        { name: 'Main Exam', questions: 155, marks: 200, duration: '180 min' },
        { name: 'Interview', questions: 0, marks: 100, duration: '30 min' }
      ],
      negativeMarking: '0.25 marks for wrong answers',
      passingCriteria: 'Sectional and overall cutoff'
    },
    syllabus: [
      {
        id: 'banking-awareness',
        name: 'Banking Awareness',
        weightage: 20,
        topics: [
          {
            id: 'banking-fundamentals',
            name: 'Banking Fundamentals',
            difficulty: 'Medium',
            estimatedHours: 40,
            subtopics: [
              'History of Banking in India',
              'Types of Banks',
              'Banking Regulations',
              'RBI Functions',
              'Monetary Policy',
              'Financial Inclusion',
              'Banking Terminology',
              'Recent Banking Developments'
            ],
            completed: false,
            attempts: 0
          }
        ],
        studyMaterial: []
      }
    ],
    importantDates: [
      { event: 'Application Start', date: '2024-07-01', status: 'upcoming' },
      { event: 'Application End', date: '2024-08-01', status: 'upcoming' },
      { event: 'Preliminary Exam', date: '2024-09-15', status: 'upcoming' }
    ],
    selectionProcess: ['Preliminary Exam', 'Main Exam', 'Interview'],
    salary: '₹23,700 - ₹42,020',
    posts: 4000,
    officialWebsite: 'https://ibps.in',
    examFrequency: 'Annual',
    preparationTime: '4-6 months',
    tags: ['Banking', 'Finance', 'Management']
  }
];

export const privateExams: Exam[] = [
  {
    id: 'tcs-nqt',
    title: 'TCS National Qualifier Test',
    category: 'private',
    department: 'Tata Consultancy Services',
    difficulty: 'Intermediate',
    duration: '120 minutes',
    eligibility: ['Any Degree', 'Age: No limit'],
    ageLimit: 'No age limit',
    attempts: 'Once per year',
    applicationFee: '₹0 (Free)',
    description: 'TCS NQT is a national level test conducted by TCS to assess and recruit fresh talent for various roles across different domains.',
    pattern: {
      totalQuestions: 110,
      totalMarks: 110,
      duration: '120 minutes',
      sections: [
        { name: 'Verbal Ability', questions: 24, marks: 24, duration: '30 min' },
        { name: 'Reasoning Ability', questions: 30, marks: 30, duration: '35 min' },
        { name: 'Numerical Ability', questions: 26, marks: 26, duration: '40 min' },
        { name: 'Programming Logic', questions: 30, marks: 30, duration: '35 min' }
      ],
      negativeMarking: 'No negative marking',
      passingCriteria: 'Sectional cutoff'
    },
    syllabus: [
      {
        id: 'programming-concepts',
        name: 'Programming Concepts',
        weightage: 30,
        topics: [
          {
            id: 'c-programming',
            name: 'C Programming Basics',
            difficulty: 'Medium',
            estimatedHours: 50,
            subtopics: [
              'Data Types and Variables',
              'Control Structures',
              'Functions',
              'Arrays and Strings',
              'Pointers',
              'Structures and Unions',
              'File Handling',
              'Dynamic Memory Allocation'
            ],
            completed: false,
            attempts: 0
          }
        ],
        studyMaterial: []
      },
      {
        id: 'logical-reasoning-private',
        name: 'Logical Reasoning',
        weightage: 25,
        topics: [
          {
            id: 'analytical-reasoning',
            name: 'Analytical Reasoning',
            difficulty: 'Medium',
            estimatedHours: 40,
            subtopics: [
              'Pattern Recognition',
              'Series Completion',
              'Coding-Decoding',
              'Blood Relations',
              'Direction Sense',
              'Ranking and Arrangement',
              'Puzzles',
              'Data Sufficiency'
            ],
            completed: false,
            attempts: 0
          }
        ],
        studyMaterial: []
      }
    ],
    importantDates: [
      { event: 'Registration Opens', date: '2024-05-01', status: 'completed' },
      { event: 'Registration Closes', date: '2024-12-31', status: 'ongoing' },
      { event: 'Exam Dates', date: '2024-01-01 to 2024-12-31', status: 'ongoing' }
    ],
    selectionProcess: ['TCS NQT', 'Technical Interview', 'HR Interview'],
    salary: '₹3.5 - ₹7 LPA',
    posts: 40000,
    officialWebsite: 'https://nextstep.tcs.com',
    examFrequency: 'Multiple times per year',
    preparationTime: '2-3 months',
    tags: ['IT', 'Software Development', 'Fresh Graduate']
  }
];

export const allExams = [...governmentExams, ...privateExams];

export const getExamById = (id: string): Exam | undefined => {
  return allExams.find(exam => exam.id === id);
};

export const getExamsByCategory = (category: 'government' | 'private'): Exam[] => {
  return allExams.filter(exam => exam.category === category);
};