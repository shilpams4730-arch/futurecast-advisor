import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  Search,
  ArrowRight,
  Target,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Clock,
  DollarSign,
  Users
} from "lucide-react";
import { careerPaths } from "@/data/dummyData";

const CareerPathway = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPath, setSelectedPath] = useState<any>(null);

  const filteredPaths = careerPaths.filter(path =>
    path.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    path.stream.toLowerCase().includes(searchTerm.toLowerCase()) ||
    path.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const pathwaySteps = [
    { 
      step: 1, 
      title: "Foundation Education", 
      description: "Complete your 10+2 with relevant subjects",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-600"
    },
    { 
      step: 2, 
      title: "Higher Education", 
      description: "Pursue degree programs aligned with your career goal",
      icon: Target,
      color: "from-purple-500 to-pink-600"
    },
    { 
      step: 3, 
      title: "Skill Development", 
      description: "Build industry-relevant skills through courses and training",
      icon: TrendingUp,
      color: "from-green-500 to-teal-600"
    },
    { 
      step: 4, 
      title: "Professional Experience", 
      description: "Gain practical experience through internships and jobs",
      icon: Briefcase,
      color: "from-orange-500 to-red-600"
    }
  ];

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
            Career Pathway Explorer
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Map out your journey from education to career success
          </p>
        </div>

        {/* Search Section */}
        <Card className="card-gradient border-0 mb-8">
          <CardHeader>
            <CardTitle>Explore Career Paths</CardTitle>
            <CardDescription>
              Search for careers by title, field, or required skills
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for careers (e.g., Software Engineer, Doctor, Designer)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </CardContent>
        </Card>

        {selectedPath ? (
          // Detailed Career Path View
          <div className="space-y-8">
            <Card className="card-gradient border-0">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-3xl text-primary mb-2">
                      {selectedPath.title}
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-muted-foreground">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {selectedPath.duration}
                      </span>
                      <span className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {selectedPath.averageSalary}
                      </span>
                      <Badge variant="secondary">{selectedPath.stream}</Badge>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedPath(null)}
                  >
                    View All Paths
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Target className="h-4 w-4 mr-2" />
                      Required Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPath.skills.map((skill: string, index: number) => (
                        <Badge key={index} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Top Companies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPath.companies.map((company: string, index: number) => (
                        <Badge key={index} variant="secondary">
                          {company}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Career Growth Path</h4>
                  <p className="text-muted-foreground">{selectedPath.growth}</p>
                </div>
              </CardContent>
            </Card>

            {/* Pathway Steps */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-center">Your Journey to {selectedPath.title}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pathwaySteps.map((step, index) => (
                  <Card key={index} className="card-gradient border-0 text-center group hover:scale-105 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-sm text-primary font-medium mb-2">
                        Step {step.step}
                      </div>
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education Pathway */}
            <Card className="card-gradient border-0">
              <CardHeader>
                <CardTitle>Education Pathway</CardTitle>
                <CardDescription>Detailed educational journey for {selectedPath.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-muted/20 rounded-lg">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Education Path</h4>
                      <p className="text-muted-foreground">{selectedPath.education}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="text-center space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" onClick={() => navigate("/colleges")}>
                  Find Relevant Colleges
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigate("/recommendations")}>
                  View Course Recommendations
                </Button>
              </div>
            </div>
          </div>
        ) : (
          // Career Paths Grid
          <div className="grid lg:grid-cols-2 gap-6">
            {filteredPaths.map((path, index) => (
              <Card 
                key={index} 
                className="card-gradient border-0 hover:scale-102 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedPath(path)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {path.title}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-2">
                        {path.stream}
                      </Badge>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{path.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-primary" />
                      <span>{path.averageSalary}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {path.skills.slice(0, 3).map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {path.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{path.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Top Employers</h4>
                    <p className="text-sm text-muted-foreground">
                      {path.companies.slice(0, 3).join(", ")}
                      {path.companies.length > 3 && " and more"}
                    </p>
                  </div>

                  <Button variant="hero" size="sm" className="w-full">
                    Explore This Path
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredPaths.length === 0 && searchTerm && (
          <Card className="card-gradient border-0 text-center py-12">
            <CardContent>
              <Target className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No career paths found</h3>
              <p className="text-muted-foreground mb-4">
                Try searching with different keywords or explore our recommendations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" onClick={() => setSearchTerm("")}>
                  View All Paths
                </Button>
                <Button variant="hero" onClick={() => navigate("/recommendations")}>
                  Get Personalized Recommendations
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CareerPathway;