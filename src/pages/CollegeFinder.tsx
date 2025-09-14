import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  MapPin, 
  Star,
  ArrowLeft,
  Filter,
  GraduationCap,
  Calendar,
  DollarSign,
  Users,
  Award,
  Building,
  ExternalLink
} from "lucide-react";
import { collegeData } from "@/data/dummyData";

const CollegeFinder = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedState, setSelectedState] = useState("all");
  const [filteredColleges, setFilteredColleges] = useState(collegeData);

  const filterColleges = () => {
    let filtered = collegeData;

    if (searchTerm) {
      filtered = filtered.filter(college => 
        college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedType !== "all") {
      filtered = filtered.filter(college => 
        college.type.toLowerCase() === selectedType.toLowerCase()
      );
    }

    if (selectedState !== "all") {
      filtered = filtered.filter(college => 
        college.location.toLowerCase().includes(selectedState.toLowerCase())
      );
    }

    setFilteredColleges(filtered);
  };

  React.useEffect(() => {
    filterColleges();
  }, [searchTerm, selectedType, selectedState]);

  const states = [
    "all", "delhi", "maharashtra", "karnataka", "tamil nadu", 
    "west bengal", "gujarat", "rajasthan", "uttar pradesh"
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
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            College Finder
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect college for your academic journey
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="card-gradient border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Search & Filter Colleges
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search colleges, courses, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="College Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="government">Government</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                  <SelectItem value="autonomous">Autonomous</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger>
                  <SelectValue placeholder="State/Location" />
                </SelectTrigger>
                <SelectContent>
                  {states.map(state => (
                    <SelectItem key={state} value={state}>
                      {state === "all" ? "All States" : state.charAt(0).toUpperCase() + state.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Found {filteredColleges.length} colleges
          </h2>
          <Button variant="outline" size="sm">
            Sort by Ranking
          </Button>
        </div>

        {/* College Cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {filteredColleges.map((college) => (
            <Card 
              key={college.id} 
              className="card-gradient border-0 hover:scale-102 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {college.name}
                    </CardTitle>
                    <div className="flex items-center space-x-2 mt-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{college.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold">#{college.ranking}</span>
                    </div>
                    <Badge variant={college.type === "Government" ? "default" : "secondary"}>
                      {college.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Est. {college.established}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span>{college.fees}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Award className="h-4 w-4 mr-2" />
                    Courses Offered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {college.courses.map((course, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Specializations</h4>
                  <p className="text-sm text-muted-foreground">
                    {college.specializations.join(", ")}
                  </p>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button variant="hero" size="sm" className="flex-1">
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Compare
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Section */}
        <Card className="card-gradient border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              College Locations
            </CardTitle>
            <CardDescription>
              Interactive map showing college locations (Feature coming soon)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center border-2 border-dashed border-muted">
              <div className="text-center space-y-2">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
                <p className="text-muted-foreground">Interactive Map View</p>
                <p className="text-sm text-muted-foreground">Coming Soon</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="card-gradient border-0 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                <Building className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Total Colleges</div>
            </CardContent>
          </Card>

          <Card className="card-gradient border-0 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Government Colleges</div>
            </CardContent>
          </Card>

          <Card className="card-gradient border-0 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">Top Ranked</div>
            </CardContent>
          </Card>

          <Card className="card-gradient border-0 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">50L+</div>
              <div className="text-sm text-muted-foreground">Students Enrolled</div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-primary text-white border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
            <p className="text-white/90 mb-6">
              Talk to our expert counselors for personalized college recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" onClick={() => navigate("/chatbot")}>
                Chat with AI Advisor
              </Button>
              <Button variant="glass" size="lg">
                Book Counseling Session
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CollegeFinder;