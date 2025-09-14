import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  BookOpen, 
  Users, 
  Award,
  TrendingUp,
  MessageCircle,
  GraduationCap,
  MapPin,
  Star,
  ArrowRight,
  Target,
  Calendar,
  Bell
} from "lucide-react";

interface DashboardProps {
  user: { name: string; email: string } | null;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-muted-foreground mb-4">Please login to access the dashboard.</p>
          <Button asChild>
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </div>
    );
  }

  const dashboardItems = [
    {
      title: "Career Assessment Quiz",
      description: "Discover your ideal career path with our AI-powered assessment",
      icon: Brain,
      href: "/quiz",
      color: "from-purple-500 to-blue-600",
      progress: 0,
      actionText: "Start Quiz"
    },
    {
      title: "Personalized Recommendations",
      description: "Get customized course and career suggestions",
      icon: Target,
      href: "/recommendations",
      color: "from-blue-500 to-cyan-600",
      progress: 25,
      actionText: "View Recommendations"
    },
    {
      title: "College Finder",
      description: "Find the perfect colleges and universities for you",
      icon: GraduationCap,
      href: "/colleges",
      color: "from-green-500 to-teal-600",
      progress: 0,
      actionText: "Explore Colleges"
    },
    {
      title: "Career Pathway Explorer",
      description: "Map out your journey from education to career success",
      icon: MapPin,
      href: "/career-pathway",
      color: "from-yellow-500 to-orange-600",
      progress: 0,
      actionText: "Explore Paths"
    },
    {
      title: "AI Career Advisor",
      description: "Chat with our AI assistant for personalized guidance",
      icon: MessageCircle,
      href: "/chatbot",
      color: "from-pink-500 to-rose-600",
      progress: 50,
      actionText: "Start Chat"
    },
    {
      title: "Scholarship Opportunities",
      description: "Find funding options for your education",
      icon: Award,
      href: "/scholarships",
      color: "from-indigo-500 to-purple-600",
      progress: 0,
      actionText: "Browse Scholarships"
    }
  ];

  const recentActivities = [
    { action: "Completed personality assessment", time: "2 hours ago", icon: Brain },
    { action: "Viewed 5 college profiles", time: "1 day ago", icon: BookOpen },
    { action: "Started conversation with AI advisor", time: "3 days ago", icon: MessageCircle },
    { action: "Downloaded scholarship guide", time: "1 week ago", icon: Award }
  ];

  const achievements = [
    { title: "First Steps", description: "Completed profile setup", icon: Star, unlocked: true },
    { title: "Explorer", description: "Viewed 10 career paths", icon: Target, unlocked: true },
    { title: "Scholar Seeker", description: "Applied for 3 scholarships", icon: Award, unlocked: false },
    { title: "Career Ready", description: "Completed full assessment", icon: GraduationCap, unlocked: false }
  ];

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Section */}
        <div className="text-center space-y-4 py-8">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-glow animate-bounce-in">
            <GraduationCap className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Welcome back, {user.name}!
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continue your journey towards finding the perfect career path. Your future starts here!
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="card-gradient border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">25%</div>
              <div className="text-sm text-muted-foreground">Profile Complete</div>
            </CardContent>
          </Card>
          
          <Card className="card-gradient border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground">Courses Explored</div>
            </CardContent>
          </Card>

          <Card className="card-gradient border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Mentors Connected</div>
            </CardContent>
          </Card>

          <Card className="card-gradient border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">89%</div>
              <div className="text-sm text-muted-foreground">Match Score</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feature Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Explore Features</h2>
              <Button variant="outline" size="sm">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {dashboardItems.map((item, index) => (
                <Card 
                  key={index} 
                  className="group hover:scale-105 transition-all duration-300 card-gradient border-0 overflow-hidden"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        {item.progress > 0 && (
                          <div className="mt-1">
                            <Progress value={item.progress} className="h-2" />
                            <span className="text-xs text-muted-foreground">{item.progress}% complete</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="mb-4">{item.description}</CardDescription>
                    <Button asChild variant="hero" size="sm" className="w-full">
                      <Link to={item.href}>
                        {item.actionText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card className="card-gradient border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <activity.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="card-gradient border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center space-x-3 p-2 rounded-lg ${
                      achievement.unlocked ? 'bg-primary/10' : 'bg-muted/20 opacity-60'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      achievement.unlocked ? 'bg-gradient-primary' : 'bg-muted'
                    }`}>
                      <achievement.icon className={`h-4 w-4 ${
                        achievement.unlocked ? 'text-white' : 'text-muted-foreground'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{achievement.title}</p>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="card-gradient border-0">
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" asChild className="w-full justify-start">
                  <Link to="/parent-awareness">
                    <Users className="h-4 w-4 mr-2" />
                    Parent Resources
                  </Link>
                </Button>
                <Button variant="ghost" asChild className="w-full justify-start">
                  <Link to="/success-stories">
                    <Star className="h-4 w-4 mr-2" />
                    Success Stories
                  </Link>
                </Button>
                <Button variant="ghost" asChild className="w-full justify-start">
                  <Link to="/scholarships">
                    <Award className="h-4 w-4 mr-2" />
                    Latest Scholarships
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;