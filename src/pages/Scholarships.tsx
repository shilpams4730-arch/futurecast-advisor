import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  ArrowLeft,
  Search,
  Filter,
  Award,
  Calendar,
  DollarSign,
  Users,
  ExternalLink,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { scholarships } from "@/data/dummyData";

const Scholarships = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedField, setSelectedField] = useState("all");
  const [filteredScholarships, setFilteredScholarships] = useState(scholarships);

  const filterScholarships = () => {
    let filtered = scholarships;

    if (searchTerm) {
      filtered = filtered.filter(scholarship => 
        scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scholarship.field.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType !== "all") {
      filtered = filtered.filter(scholarship => 
        scholarship.type.toLowerCase().includes(selectedType.toLowerCase())
      );
    }

    if (selectedField !== "all") {
      filtered = filtered.filter(scholarship => 
        scholarship.field.toLowerCase() === selectedField.toLowerCase()
      );
    }

    setFilteredScholarships(filtered);
  };

  React.useEffect(() => {
    filterScholarships();
  }, [searchTerm, selectedType, selectedField]);

  const scholarshipTypes = ["all", "merit-based", "need-based", "research-based", "gender-based", "innovation-based"];
  const fields = ["all", "science", "engineering", "commerce", "arts", "medical"];

  const getDeadlineStatus = (deadline: string) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const daysDiff = Math.ceil((deadlineDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
    
    if (daysDiff < 0) return { status: "expired", text: "Deadline passed", color: "text-red-500" };
    if (daysDiff <= 7) return { status: "urgent", text: `${daysDiff} days left`, color: "text-orange-500" };
    if (daysDiff <= 30) return { status: "soon", text: `${daysDiff} days left`, color: "text-yellow-600" };
    return { status: "open", text: `${daysDiff} days left`, color: "text-green-500" };
  };

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
            <Award className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Scholarship Opportunities
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover funding opportunities to make your education dreams affordable
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="card-gradient border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Find Your Perfect Scholarship
            </CardTitle>
            <CardDescription>
              Search and filter scholarships based on your profile and interests
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search scholarships..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Scholarship Type" />
                </SelectTrigger>
                <SelectContent>
                  {scholarshipTypes.map(type => (
                    <SelectItem key={type} value={type}>
                      {type === "all" ? "All Types" : type.split("-").map(word => 
                        word.charAt(0).toUpperCase() + word.slice(1)
                      ).join(" ")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedField} onValueChange={setSelectedField}>
                <SelectTrigger>
                  <SelectValue placeholder="Field of Study" />
                </SelectTrigger>
                <SelectContent>
                  {fields.map(field => (
                    <SelectItem key={field} value={field}>
                      {field === "all" ? "All Fields" : field.charAt(0).toUpperCase() + field.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="card-gradient border-0 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">{scholarships.length}</div>
              <div className="text-sm text-muted-foreground">Total Scholarships</div>
            </CardContent>
          </Card>

          <Card className="card-gradient border-0 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">₹50L+</div>
              <div className="text-sm text-muted-foreground">Total Funding</div>
            </CardContent>
          </Card>

          <Card className="card-gradient border-0 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Students Benefited</div>
            </CardContent>
          </Card>

          <Card className="card-gradient border-0 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">
                {scholarships.filter(s => getDeadlineStatus(s.deadline).status !== "expired").length}
              </div>
              <div className="text-sm text-muted-foreground">Active Applications</div>
            </CardContent>
          </Card>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Found {filteredScholarships.length} scholarships
          </h2>
          <Button variant="outline" size="sm">
            Sort by Deadline
          </Button>
        </div>

        {/* Scholarship Cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {filteredScholarships.map((scholarship) => {
            const deadlineInfo = getDeadlineStatus(scholarship.deadline);
            
            return (
              <Card 
                key={scholarship.id} 
                className="card-gradient border-0 hover:scale-102 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {scholarship.name}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mt-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{scholarship.provider}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {scholarship.amount}
                      </div>
                      <Badge variant={scholarship.type.includes("Merit") ? "default" : "secondary"}>
                        {scholarship.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{scholarship.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Eligibility:</span>
                      <span className="text-muted-foreground">{scholarship.eligibility}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Field:</span>
                      <Badge variant="outline">{scholarship.field}</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Deadline:
                      </span>
                      <div className="flex items-center space-x-2">
                        {deadlineInfo.status === "expired" ? (
                          <AlertCircle className="h-4 w-4 text-red-500" />
                        ) : (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        )}
                        <span className={deadlineInfo.color}>
                          {scholarship.deadline} ({deadlineInfo.text})
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button 
                      variant="hero" 
                      size="sm" 
                      className="flex-1"
                      disabled={deadlineInfo.status === "expired"}
                    >
                      {deadlineInfo.status === "expired" ? "Deadline Passed" : "Apply Now"}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Application Tips */}
        <Card className="card-gradient border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="h-5 w-5 mr-2" />
              Scholarship Application Tips
            </CardTitle>
            <CardDescription>
              Increase your chances of winning scholarships
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold">Start Early</h4>
              <p className="text-sm text-muted-foreground">Begin your applications well before deadlines</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold">Perfect Essays</h4>
              <p className="text-sm text-muted-foreground">Write compelling personal statements</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold">Meet Requirements</h4>
              <p className="text-sm text-muted-foreground">Ensure you meet all eligibility criteria</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto">
                <ExternalLink className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold">Apply Multiple</h4>
              <p className="text-sm text-muted-foreground">Apply to several scholarships to increase chances</p>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-primary text-white border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help with Applications?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Our experts can help you craft winning scholarship applications and maximize your funding opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" onClick={() => navigate("/chatbot")}>
                Get Application Help
              </Button>
              <Button variant="glass" size="lg">
                Book Consultation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Scholarships;