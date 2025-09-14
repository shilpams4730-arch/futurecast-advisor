import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  ArrowLeft,
  Search,
  Star,
  MapPin,
  Calendar,
  Award,
  ExternalLink,
  Heart,
  TrendingUp,
  Users,
  Sparkles
} from "lucide-react";
import { successStories } from "@/data/dummyData";

const SuccessStories = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedField, setSelectedField] = useState("all");
  const [selectedStory, setSelectedStory] = useState<any>(null);

  const filteredStories = successStories.filter(story => {
    const matchesSearch = story.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.currentRole.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesField = selectedField === "all" || 
                        story.course.toLowerCase().includes(selectedField.toLowerCase());
    
    return matchesSearch && matchesField;
  });

  const fields = ["all", "technology", "medical", "business", "arts", "engineering"];

  const stats = [
    { number: "95%", label: "Employment Rate" },
    { number: "₹15L", label: "Average Starting Salary" },
    { number: "500+", label: "Success Stories" },
    { number: "50+", label: "Top Companies" }
  ];

  if (selectedStory) {
    return (
      <div className="min-h-screen p-4 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => setSelectedStory(null)}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Stories
          </Button>

          <Card className="card-gradient border-0">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="text-8xl mb-4">{selectedStory.image}</div>
                <h1 className="text-4xl font-bold mb-2">{selectedStory.name}</h1>
                <p className="text-xl text-muted-foreground mb-4">{selectedStory.currentRole}</p>
                <div className="flex items-center justify-center space-x-4">
                  <Badge variant="secondary">{selectedStory.course}</Badge>
                  <span className="text-muted-foreground flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {selectedStory.college}
                  </span>
                  <span className="text-muted-foreground flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Class of {selectedStory.year}
                  </span>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Sparkles className="h-6 w-6 mr-2 text-primary" />
                    My Journey
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    {selectedStory.story}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-primary" />
                      Key Achievement
                    </h4>
                    <div className="p-4 bg-gradient-primary/10 rounded-lg border border-primary/20">
                      <p className="text-primary font-medium">{selectedStory.achievement}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                      Career Timeline
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-primary rounded-full" />
                        <span className="text-sm">Graduated from {selectedStory.college}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-secondary rounded-full" />
                        <span className="text-sm">Started career in {selectedStory.year}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-accent rounded-full" />
                        <span className="text-sm">Currently: {selectedStory.currentRole}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/20 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3">Words of Wisdom</h4>
                  <blockquote className="text-lg italic text-muted-foreground">
                    "Success is not just about reaching your destination, but about the journey of growth, learning, and perseverance. Trust the process and believe in yourself."
                  </blockquote>
                  <footer className="text-right mt-4 text-sm text-muted-foreground">
                    — {selectedStory.name}
                  </footer>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Button variant="hero" size="lg" onClick={() => navigate("/quiz")}>
              Start Your Own Journey
              <Sparkles className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

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
            <Star className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Success Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Be inspired by alumni who turned their career dreams into reality
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="card-gradient border-0 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search and Filter */}
        <Card className="card-gradient border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="h-5 w-5 mr-2" />
              Find Inspiring Stories
            </CardTitle>
            <CardDescription>
              Search by name, course, or current role
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search success stories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedField} onValueChange={setSelectedField}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Field" />
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

        {/* Success Stories Grid */}
        {filteredStories.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredStories.map((story, index) => (
              <Card 
                key={index} 
                className="card-gradient border-0 hover:scale-105 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedStory(story)}
              >
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {story.image}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {story.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {story.currentRole}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-center space-y-2">
                    <Badge variant="secondary">{story.course}</Badge>
                    <div className="text-sm text-muted-foreground flex items-center justify-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {story.college}
                    </div>
                  </div>

                  <div className="p-3 bg-muted/20 rounded-lg">
                    <p className="text-sm text-muted-foreground italic line-clamp-3">
                      "{story.story.substring(0, 120)}..."
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Achievement</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{story.year}</span>
                    </div>
                  </div>

                  <Button variant="hero" size="sm" className="w-full">
                    Read Full Story
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="card-gradient border-0 text-center py-12">
            <CardContent>
              <Star className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No stories found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search filters or explore all our inspiring stories
              </p>
              <Button variant="outline" onClick={() => {
                setSearchTerm("");
                setSelectedField("all");
              }}>
                View All Stories
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Featured Alumni Section */}
        <Card className="bg-gradient-primary text-white border-0 mb-8">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Featured Alumni Spotlight</h3>
                <p className="text-white/90 mb-6">
                  Every month, we highlight exceptional alumni who are making a difference in their fields. 
                  Their journeys inspire thousands of students to pursue their dreams.
                </p>
                <div className="flex items-center space-x-4 text-white/80">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">500+ Alumni</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm">50+ Countries</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="h-4 w-4" />
                    <span className="text-sm">Top Companies</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">🌟</div>
                <Button variant="secondary" size="lg">
                  Nominate an Alumni
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="card-gradient border-0 text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Start Writing Your Success Story</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every success story starts with a single step. Take our career assessment and begin your journey towards achieving your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" onClick={() => navigate("/quiz")}>
                Take Career Assessment
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate("/recommendations")}>
                Explore Career Paths
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SuccessStories;