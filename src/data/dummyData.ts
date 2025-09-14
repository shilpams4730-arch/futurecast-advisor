// Dummy data for the Career Advisor app

export const quizQuestions = [
  {
    id: 1,
    question: "What type of activities do you enjoy most?",
    options: [
      { id: "a", text: "Solving mathematical problems and puzzles", points: { science: 3, commerce: 1, arts: 0 } },
      { id: "b", text: "Reading books and writing stories", points: { science: 0, commerce: 1, arts: 3 } },
      { id: "c", text: "Managing events and leading teams", points: { science: 1, commerce: 3, arts: 1 } },
      { id: "d", text: "Creating art and designing things", points: { science: 0, commerce: 0, arts: 3 } }
    ]
  },
  {
    id: 2,
    question: "Which subject interests you the most?",
    options: [
      { id: "a", text: "Physics and Chemistry", points: { science: 3, commerce: 0, arts: 0 } },
      { id: "b", text: "History and Geography", points: { science: 0, commerce: 1, arts: 3 } },
      { id: "c", text: "Economics and Business Studies", points: { science: 1, commerce: 3, arts: 1 } },
      { id: "d", text: "Computer Science and Technology", points: { science: 3, commerce: 2, arts: 1 } }
    ]
  },
  {
    id: 3,
    question: "What kind of work environment appeals to you?",
    options: [
      { id: "a", text: "Laboratory or research facility", points: { science: 3, commerce: 0, arts: 0 } },
      { id: "b", text: "Corporate office", points: { science: 1, commerce: 3, arts: 1 } },
      { id: "c", text: "Creative studio or agency", points: { science: 0, commerce: 1, arts: 3 } },
      { id: "d", text: "Outdoor fieldwork", points: { science: 2, commerce: 1, arts: 2 } }
    ]
  },
  {
    id: 4,
    question: "Which skill would you like to develop further?",
    options: [
      { id: "a", text: "Analytical and problem-solving skills", points: { science: 3, commerce: 2, arts: 1 } },
      { id: "b", text: "Communication and interpersonal skills", points: { science: 1, commerce: 2, arts: 3 } },
      { id: "c", text: "Financial and business management", points: { science: 0, commerce: 3, arts: 0 } },
      { id: "d", text: "Creative and artistic abilities", points: { science: 0, commerce: 0, arts: 3 } }
    ]
  },
  {
    id: 5,
    question: "What motivates you the most?",
    options: [
      { id: "a", text: "Making scientific discoveries", points: { science: 3, commerce: 0, arts: 0 } },
      { id: "b", text: "Building successful businesses", points: { science: 1, commerce: 3, arts: 1 } },
      { id: "c", text: "Expressing creativity and emotions", points: { science: 0, commerce: 0, arts: 3 } },
      { id: "d", text: "Helping and inspiring others", points: { science: 1, commerce: 1, arts: 3 } }
    ]
  }
];

export const streamRecommendations = {
  science: {
    name: "Science Stream",
    description: "Perfect for analytical minds who love problem-solving and scientific exploration",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    careers: ["Engineer", "Doctor", "Scientist", "Researcher", "Data Analyst"],
    icon: "🧪"
  },
  commerce: {
    name: "Commerce Stream",
    description: "Ideal for business-minded individuals interested in economics and finance",
    subjects: ["Economics", "Accountancy", "Business Studies", "Mathematics"],
    careers: ["Chartered Accountant", "Business Analyst", "Investment Banker", "Entrepreneur"],
    icon: "💼"
  },
  arts: {
    name: "Arts/Humanities Stream",
    description: "Great for creative and socially conscious students interested in human behavior",
    subjects: ["History", "Geography", "Political Science", "Psychology", "Literature"],
    careers: ["Journalist", "Psychologist", "Teacher", "Social Worker", "Designer"],
    icon: "🎨"
  }
};

export const collegeData = [
  {
    id: 1,
    name: "Indian Institute of Technology Delhi",
    location: "New Delhi, India",
    type: "Government",
    courses: ["B.Tech", "M.Tech", "PhD"],
    ranking: 1,
    fees: "₹2,50,000/year",
    established: 1961,
    specializations: ["Computer Science", "Electrical Engineering", "Mechanical Engineering"]
  },
  {
    id: 2,
    name: "Lady Shri Ram College",
    location: "New Delhi, India",
    type: "Government",
    courses: ["B.A.", "B.Com", "B.Sc"],
    ranking: 2,
    fees: "₹45,000/year",
    established: 1956,
    specializations: ["Economics", "Psychology", "English Literature"]
  },
  {
    id: 3,
    name: "All India Institute of Medical Sciences",
    location: "New Delhi, India",
    type: "Government",
    courses: ["MBBS", "MD", "MS"],
    ranking: 1,
    fees: "₹1,50,000/year",
    established: 1956,
    specializations: ["Medicine", "Surgery", "Pediatrics"]
  },
  {
    id: 4,
    name: "Indian Institute of Management Ahmedabad",
    location: "Ahmedabad, India",
    type: "Government",
    courses: ["MBA", "PGDM", "Executive MBA"],
    ranking: 1,
    fees: "₹25,00,000/year",
    established: 1961,
    specializations: ["Finance", "Marketing", "Operations"]
  },
  {
    id: 5,
    name: "Jamia Millia Islamia",
    location: "New Delhi, India",
    type: "Government",
    courses: ["B.A.", "B.Tech", "MBA"],
    ranking: 12,
    fees: "₹50,000/year",
    established: 1920,
    specializations: ["Mass Communication", "Engineering", "Social Sciences"]
  }
];

export const careerPaths = [
  {
    id: 1,
    title: "Software Engineer",
    stream: "Science",
    education: "B.Tech Computer Science → M.Tech (Optional) → Industry Experience",
    duration: "4-6 years",
    averageSalary: "₹8-25 LPA",
    skills: ["Programming", "Problem Solving", "System Design"],
    companies: ["Google", "Microsoft", "Amazon", "TCS", "Infosys"],
    growth: "Junior Developer → Senior Developer → Team Lead → Engineering Manager"
  },
  {
    id: 2,
    title: "Chartered Accountant",
    stream: "Commerce",
    education: "B.Com → CA Foundation → CA Intermediate → CA Final",
    duration: "5-7 years",
    averageSalary: "₹6-20 LPA",
    skills: ["Financial Analysis", "Auditing", "Taxation"],
    companies: ["Deloitte", "PwC", "KPMG", "EY"],
    growth: "Junior CA → Senior CA → Manager → Partner"
  },
  {
    id: 3,
    title: "Psychologist",
    stream: "Arts",
    education: "B.A. Psychology → M.A. Psychology → PhD/Clinical Training",
    duration: "6-8 years",
    averageSalary: "₹4-15 LPA",
    skills: ["Counseling", "Research", "Communication"],
    companies: ["Hospitals", "Schools", "Private Practice", "NGOs"],
    growth: "Junior Psychologist → Licensed Psychologist → Specialist → Practice Owner"
  },
  {
    id: 4,
    title: "Data Scientist",
    stream: "Science",
    education: "B.Tech/B.Sc → M.Sc Data Science → Certifications",
    duration: "4-6 years",
    averageSalary: "₹10-30 LPA",
    skills: ["Machine Learning", "Statistics", "Programming"],
    companies: ["Google", "Facebook", "Netflix", "Flipkart"],
    growth: "Data Analyst → Data Scientist → Senior Data Scientist → Chief Data Officer"
  }
];

export const scholarships = [
  {
    id: 1,
    name: "National Merit Scholarship",
    provider: "Government of India",
    amount: "₹12,000/year",
    eligibility: "Merit-based, minimum 80% in 12th grade",
    deadline: "March 31, 2024",
    type: "Merit-based",
    field: "All streams",
    description: "Financial assistance for meritorious students pursuing higher education."
  },
  {
    id: 2,
    name: "Kishore Vaigyanik Protsahan Yojana",
    provider: "Indian Institute of Science",
    amount: "₹5,000/month + Research Grant",
    eligibility: "Science students with interest in research",
    deadline: "November 30, 2023",
    type: "Research-based",
    field: "Science",
    description: "Encourages students to pursue research careers in basic sciences."
  },
  {
    id: 3,
    name: "Girls Excellence Award",
    provider: "Women Education Foundation",
    amount: "₹50,000",
    eligibility: "Female students with 85%+ marks",
    deadline: "April 15, 2024",
    type: "Gender-based",
    field: "All streams",
    description: "Promoting higher education among girl students."
  },
  {
    id: 4,
    name: "Tech Innovator Scholarship",
    provider: "TechCorp Foundation",
    amount: "₹1,00,000",
    eligibility: "Engineering students with innovative projects",
    deadline: "January 20, 2024",
    type: "Innovation-based",
    field: "Engineering",
    description: "Supporting innovative minds in technology and engineering."
  }
];

export const successStories = [
  {
    id: 1,
    name: "Priya Sharma",
    image: "👩‍💻",
    course: "B.Tech Computer Science",
    college: "IIT Delhi",
    currentRole: "Software Engineer at Google",
    story: "From a small town in Rajasthan to working at Google, CareerGuide Pro helped me understand my potential and choose the right path.",
    achievement: "Youngest team lead at Google India",
    year: "2023"
  },
  {
    id: 2,
    name: "Rahul Patel",
    image: "👨‍⚕️",
    course: "MBBS",
    college: "AIIMS Delhi",
    currentRole: "Cardiothoracic Surgeon",
    story: "The career guidance and scholarship information helped me pursue my dream of becoming a doctor despite financial constraints.",
    achievement: "Performed 500+ successful surgeries",
    year: "2022"
  },
  {
    id: 3,
    name: "Ananya Gupta",
    image: "👩‍🎨",
    course: "B.A. Fine Arts",
    college: "Jamia Millia Islamia",
    currentRole: "Creative Director at Adobe",
    story: "Initially confused about career options after 12th, the platform helped me discover my passion for design and creativity.",
    achievement: "Led design for Adobe's flagship products",
    year: "2023"
  },
  {
    id: 4,
    name: "Vikram Singh",
    image: "👨‍💼",
    course: "B.Com + CA",
    college: "Delhi University",
    currentRole: "CFO at Startup Unicorn",
    story: "The detailed career roadmaps and industry insights helped me plan my journey from B.Com to becoming a CFO.",
    achievement: "Led IPO worth ₹1000 crores",
    year: "2023"
  }
];

export const chatbotResponses = {
  greetings: [
    "Hello! I'm your AI career advisor. How can I help you today?",
    "Hi there! I'm here to help you with career guidance. What would you like to know?",
    "Welcome! I'm your personal career guide. Feel free to ask me anything about careers and education."
  ],
  career: [
    "Based on your interests, I'd recommend exploring careers in technology, healthcare, or business. Would you like me to elaborate on any specific field?",
    "Career choice depends on your interests, skills, and market demand. What subjects do you enjoy the most?",
    "There are many exciting career paths available today. Tell me about your favorite subjects and hobbies!"
  ],
  education: [
    "For higher education, consider factors like your interests, career goals, and financial situation. Which stream are you considering?",
    "Education is the foundation of a great career. Are you looking for information about specific courses or colleges?",
    "The best education path depends on your career goals. What field interests you the most?"
  ],
  scholarships: [
    "There are many scholarships available for deserving students. Check our scholarship section for detailed information.",
    "Scholarships can significantly help with education costs. What's your academic background and field of interest?",
    "We have a comprehensive list of scholarships. Would you like me to help you find ones that match your profile?"
  ],
  default: [
    "That's an interesting question! Let me help you find the right information. Could you be more specific?",
    "I'm here to help with career and education guidance. Could you rephrase your question?",
    "I'd love to help you with that! Can you provide more details about what you're looking for?"
  ]
};

export const parentAwarenessArticles = [
  {
    id: 1,
    title: "Understanding Your Child's Career Interests",
    image: "👨‍👩‍👧‍👦",
    summary: "Learn how to identify and nurture your child's natural talents and interests.",
    content: "Every child is unique with their own set of talents, interests, and capabilities. As parents, it's crucial to observe and understand these natural inclinations rather than imposing our own career preferences.",
    readTime: "5 min read",
    category: "Career Guidance"
  },
  {
    id: 2,
    title: "New Age Careers: Beyond Traditional Options",
    image: "🚀",
    summary: "Explore emerging career fields that didn't exist a decade ago.",
    content: "The job market has evolved dramatically with technology. New careers like Data Scientists, UX Designers, and Digital Marketers offer exciting opportunities for the new generation.",
    readTime: "7 min read",
    category: "Industry Trends"
  },
  {
    id: 3,
    title: "Financial Planning for Your Child's Education",
    image: "💰",
    summary: "Smart strategies to fund your child's higher education dreams.",
    content: "Planning for education expenses early can make a significant difference. Learn about education loans, scholarships, and investment options for education funding.",
    readTime: "6 min read",
    category: "Financial Planning"
  },
  {
    id: 4,
    title: "Supporting Your Child Through Academic Stress",
    image: "🧘‍♀️",
    summary: "Help your child manage academic pressure and maintain mental well-being.",
    content: "Academic stress is common among students today. Learn how to recognize signs of stress and provide emotional support during crucial academic phases.",
    readTime: "4 min read",
    category: "Mental Health"
  }
];