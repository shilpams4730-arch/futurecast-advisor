import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Star, 
  TrendingUp, 
  DollarSign, 
  Clock,
  ArrowLeft,
  BookOpen,
  Briefcase,
  Target,
  Award,
  MapPin,
  Users
} from "lucide-react";

const Recommendations = () => {
  const navigate = useNavigate();
  const [selectedStream, setSelectedStream] = useState("science");

  const streamRecommendations = {
    science: {
      name: "Science Stream",
      icon: "🧪",
      color: "from-blue-500 to-purple-600",
      courses: [
        {
          name: "B.Tech Computer Science",
          college: "IIT Delhi",
          duration: "4 years",
          fees: "₹2.5L/year",
          rating: 4.9,
          placement: "98%",
          avgSalary: "₹15-25 LPA",
          description: "Comprehensive program covering programming, algorithms, and system design.",
          tags: ["High Demand", "Tech Industry", "Innovation"]
        },
        {
          name: "MBBS",
          college: "AIIMS Delhi",
          duration: "5.5 years",
          fees: "₹1.5L/year",
          rating: 4.9,
          placement: "100%",
          avgSalary: "₹8-15 LPA",
          description: "Premier medical education with hands-on clinical experience.",
          tags: ["Healthcare", "Social Impact", "Stable Career"]
        },
        {
          name: "B.Sc Data Science",
          college: "ISI Kolkata",
          duration: "3 years",
          fees: "₹1.2L/year",
          rating: 4.7,
          placement: "95%",
          avgSalary: "₹12-20 LPA",
          description: "Modern curriculum focusing on analytics, ML, and big data.",
          tags: ["Emerging Field", "AI/ML", "Research"]
        }
      ],
      careers: [
        {
          title: "Software Engineer",
          demand: "Very High",
          growth: "+22%",
          salaryRange: "₹8-25 LPA",
          companies: ["Google", "Microsoft", "Amazon", "Meta"],
          description: "Design and develop software applications and systems.",
          skills: ["Programming", "Problem Solving", "System Design"]
        },
        {
          title: "Data Scientist",
          demand: "High",
          growth: "+35%",
          salaryRange: "₹10-30 LPA",
          companies: ["Netflix", "Uber", "Airbnb", "LinkedIn"],
          description: "Extract insights from data to drive business decisions.",
          skills: ["Statistics", "Machine Learning", "Python/R"]
        },
        {
          title: "Medical Doctor",
          demand: "High",
          growth: "+15%",
          salaryRange: "₹8-50 LPA",
          companies: ["Hospitals", "Clinics", "Private Practice"],
          description: "Diagnose and treat patients across various specializations.",
          skills: ["Medical Knowledge", "Empathy", "Decision Making"]
        }
      ]
    },
    commerce: {
      name: "Commerce Stream",
      icon: "💼",
      color: "from-green-500 to-blue-600",
      courses: [
        {
          name: "B.Com + CA",
          college: "Delhi University",
          duration: "5-6 years",
          fees: "₹50K/year",
          rating: 4.6,
          placement: "85%",
          avgSalary: "₹6-20 LPA",
          description: "Combined degree with Chartered Accountancy for finance expertise.",
          tags: ["Finance", "Professional Course", "High ROI"]
        },
        {
          name: "BBA",
          college: "FMS Delhi",
          duration: "3 years",
          fees: "₹15K/year",
          rating: 4.8,
          placement: "92%",
          avgSalary: "₹8-15 LPA",
          description: "Foundation in business administration and management.",
          tags: ["Management", "Leadership", "Entrepreneurship"]
        },
        {
          name: "Economics Honors",
          college: "LSR College",
          duration: "3 years",
          fees: "₹45K/year",
          rating: 4.7,
          placement: "88%",
          avgSalary: "₹7-18 LPA",
          description: "Deep understanding of economic principles and policy.",
          tags: ["Policy", "Research", "Analytics"]
        }
      ],
      careers: [
        {
          title: "Chartered Accountant",
          demand: "High",
          growth: "+18%",
          salaryRange: "₹6-25 LPA",
          companies: ["Big 4", "Corporates", "Practice"],
          description: "Handle accounting, auditing, and financial advisory services.",
          skills: ["Financial Analysis", "Auditing", "Taxation"]
        },
        {
          title: "Investment Banker",
          demand: "Medium",
          growth: "+12%",
          salaryRange: "₹15-50 LPA",
          companies: ["Goldman Sachs", "JP Morgan", "ICICI", "HDFC"],
          description: "Facilitate corporate finance and investment deals.",
          skills: ["Financial Modeling", "Valuation", "Communication"]
        },
        {
          title: "Business Analyst",
          demand: "High",
          growth: "+25%",
          salaryRange: "₹8-20 LPA",
          companies: ["McKinsey", "BCG", "Accenture", "Deloitte"],
          description: "Analyze business processes and recommend improvements.",
          skills: ["Analytics", "Strategy", "Problem Solving"]
        }
      ]
    },
    arts: {
      name: "Arts/Humanities",
      icon: "🎨",
      color: "from-purple-500 to-pink-600",
      courses: [
        {
          name: "B.A. Psychology",
          college: "Jamia Millia Islamia",
          duration: "3 years",
          fees: "₹50K/year",
          rating: 4.5,
          placement: "78%",
          avgSalary: "₹4-12 LPA",
          description: "Study of human behavior, cognition, and mental processes.",
          tags: ["Mental Health", "Research", "Social Impact"]
        },
        {
          name: "Mass Communication",
          college: "IIMC Delhi",
          duration: "3 years",
          fees: "₹1.5L/year",
          rating: 4.7,
          placement: "85%",
          avgSalary: "₹5-15 LPA",
          description: "Comprehensive media and communication studies program.",
          tags: ["Media", "Creative", "Communication"]
        },
        {
          name: "B.A. English Literature",
          college: "Hindu College",
          duration: "3 years",
          fees: "₹45K/year",
          rating: 4.4,
          placement: "72%",
          avgSalary: "₹4-10 LPA",
          description: "In-depth study of literature, language, and writing.",
          tags: ["Writing", "Literature", "Critical Thinking"]
        }
      ],
      careers: [
        {
          title: "Content Creator",
          demand: "Very High",
          growth: "+30%",
          salaryRange: "₹5-20 LPA",
          companies: ["Media Houses", "Digital Agencies", "Freelance"],
          description: "Create engaging content across various digital platforms.",
          skills: ["Writing", "Creativity", "Digital Marketing"]
        },
        {
          title: "Psychologist",
          demand: "High",
          growth: "+20%",
          salaryRange: "₹4-15 LPA",
          companies: ["Hospitals", "Clinics", "Schools", "NGOs"],
          description: "Help people overcome mental health challenges and improve well-being.",
          skills: ["Counseling", "Empathy", "Research"]
        },
        {
          title: "UX Designer",
          demand: "Very High",
          growth: "+40%",
          salaryRange: "₹8-25 LPA",
          companies: ["Tech Companies", "Design Studios", "Startups"],
          description: "Design user-friendly interfaces and experiences for digital products.",
          skills: ["Design Thinking", "Prototyping", "User Research"]
        }
      ]
    }
  };

  const currentRecommendation = streamRecommendations[selectedStream as keyof typeof streamRecommendations];

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/dashboard")}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="text-center space-y-4 mb-8">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-glow">
            <Target className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Personalized Recommendations
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Based on your assessment, here are the best courses and career paths for you
          </p>
        </div>

        {/* Stream Selection */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {Object.entries(streamRecommendations).map(([key, stream]) => (
            <Card 
              key={key}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedStream === key 
                  ? 'ring-2 ring-primary shadow-glow' 
                  : 'hover:shadow-lg'
              }`}
              onClick={() => setSelectedStream(key)}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">{stream.icon}</div>
                <h3 className="font-semibold text-lg">{stream.name}</h3>
                {selectedStream === key && (
                  <Badge variant="secondary" className="mt-2">
                    Selected
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recommendations Content */}
        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="courses" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Recommended Courses</span>
            </TabsTrigger>
            <TabsTrigger value="careers" className="flex items-center space-x-2">
              <Briefcase className="h-4 w-4" />
              <span>Career Opportunities</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {currentRecommendation.courses.map((course, index) => (
                <Card key={index} className="card-gradient border-0 hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg">{course.name}</CardTitle>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{course.college}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription>{course.description}</CardDescription>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span>{course.fees}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{course.placement} placement</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span>{course.avgSalary}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {course.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="hero" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="careers" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {currentRecommendation.careers.map((career, index) => (
                <Card key={index} className="card-gradient border-0 hover:scale-102 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{career.title}</CardTitle>
                        <CardDescription className="mt-2">{career.description}</CardDescription>
                      </div>
                      <Badge 
                        variant={career.demand === "Very High" ? "default" : "secondary"}
                        className="ml-2"
                      >
                        {career.demand} Demand
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          <span className="text-sm font-medium">Growth Rate</span>
                        </div>
                        <p className="text-lg font-bold text-green-500">{career.growth}</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">Salary Range</span>
                        </div>
                        <p className="text-lg font-bold text-primary">{career.salaryRange}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <Award className="h-4 w-4 mr-2" />
                        Key Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {career.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <Briefcase className="h-4 w-4 mr-2" />
                        Top Employers
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {career.companies.join(", ")}
                      </p>
                    </div>

                    <Button variant="outline" className="w-full">
                      Explore Career Path
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="mt-8 bg-gradient-primary text-white border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Take the Next Step?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Explore colleges, connect with mentors, and start building your path to success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" onClick={() => navigate("/colleges")}>
                Find Colleges
              </Button>
              <Button variant="glass" size="lg" onClick={() => navigate("/career-pathway")}>
                Explore Career Paths
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Recommendations;