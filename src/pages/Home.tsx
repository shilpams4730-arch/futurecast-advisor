import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Users, 
  TrendingUp, 
  Award,
  Brain,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";
import heroImage from "@/assets/hero-background.jpg";

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Assessment",
      description: "Take personalized quizzes to discover your ideal career path based on your interests and aptitude."
    },
    {
      icon: BookOpen,
      title: "Education Guidance",
      description: "Find the perfect colleges, courses, and educational pathways to achieve your career goals."
    },
    {
      icon: Target,
      title: "Career Roadmaps",
      description: "Get detailed step-by-step plans from education to landing your dream job."
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Connect with industry professionals and alumni for personalized guidance."
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Stay updated with latest industry trends, salary data, and job market analysis."
    },
    {
      icon: Award,
      title: "Scholarship Finder",
      description: "Discover funding opportunities and scholarships tailored to your profile."
    }
  ];

  const stats = [
    { number: "50K+", label: "Students Guided" },
    { number: "500+", label: "Career Paths" },
    { number: "95%", label: "Success Rate" },
    { number: "1000+", label: "Colleges Listed" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      content: "CareerGuide Pro helped me discover my passion for tech and guided me through the entire journey from choosing the right course to landing my dream job!",
      rating: 5
    },
    {
      name: "Rahul Patel",
      role: "Medical Student at AIIMS",
      content: "The personalized guidance and scholarship information were invaluable. I couldn't have made it to medical school without this platform.",
      rating: 5
    },
    {
      name: "Ananya Gupta",
      role: "Business Analyst at McKinsey",
      content: "The career roadmap feature is brilliant! It showed me exactly what steps to take, and I followed it to success.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary-dark bg-clip-text text-transparent animate-fade-in">
                Your Future Starts Here
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Discover your ideal career path with AI-powered guidance, personalized recommendations, and expert mentorship.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button size="xl" variant="hero" asChild className="animate-glow">
                <Link to="/signup">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="glass" asChild>
                <Link to="#features">
                  Learn More
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-secondary rounded-full opacity-20 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "4s" }} />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Why Choose CareerGuide Pro?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and personalized guidance to help you make informed decisions about your future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="card-gradient border-0 hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from students who transformed their careers with our guidance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass border-0 hover:shadow-glow transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90" />
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already discovered their ideal career path. Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="secondary" asChild className="hover:scale-105 transition-transform duration-300">
              <Link to="/signup">
                Start Free Assessment
                <Sparkles className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="xl" variant="glass" asChild className="text-white border-white/20 hover:bg-white/20">
              <Link to="/login">
                I Already Have an Account
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-float" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-float" style={{ animationDelay: "3s" }} />
      </section>
    </div>
  );
};

export default Home;