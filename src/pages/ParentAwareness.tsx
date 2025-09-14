import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft,
  Users,
  BookOpen,
  TrendingUp,
  Heart,
  Brain,
  DollarSign,
  Clock,
  ArrowRight,
  Download,
  Share2,
  Eye
} from "lucide-react";
import { parentAwarenessArticles } from "@/data/dummyData";

const ParentAwareness = () => {
  const navigate = useNavigate();
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const categories = [
    {
      name: "Career Guidance",
      icon: Users,
      color: "from-blue-500 to-purple-600",
      articles: parentAwarenessArticles.filter(article => article.category === "Career Guidance")
    },
    {
      name: "Industry Trends",
      icon: TrendingUp,
      color: "from-green-500 to-teal-600",
      articles: parentAwarenessArticles.filter(article => article.category === "Industry Trends")
    },
    {
      name: "Financial Planning",
      icon: DollarSign,
      color: "from-yellow-500 to-orange-600",
      articles: parentAwarenessArticles.filter(article => article.category === "Financial Planning")
    },
    {
      name: "Mental Health",
      icon: Heart,
      color: "from-pink-500 to-red-600",
      articles: parentAwarenessArticles.filter(article => article.category === "Mental Health")
    }
  ];

  const resources = [
    {
      title: "Parent's Guide to Modern Careers",
      type: "PDF Guide",
      size: "2.5 MB",
      downloads: "5.2K",
      icon: BookOpen
    },
    {
      title: "Career Assessment Checklist",
      type: "Worksheet",
      size: "850 KB",
      downloads: "3.8K",
      icon: Brain
    },
    {
      title: "Education Investment Calculator",
      type: "Excel Tool",
      size: "1.2 MB",
      downloads: "4.1K",
      icon: DollarSign
    },
    {
      title: "Communication Templates",
      type: "PDF Templates",
      size: "1.8 MB",
      downloads: "2.9K",
      icon: Users
    }
  ];

  const tips = [
    {
      title: "Listen Before Advising",
      description: "Understand your child's interests and aspirations before suggesting career paths.",
      icon: "👂"
    },
    {
      title: "Stay Updated",
      description: "Keep yourself informed about emerging careers and industry trends.",
      icon: "📚"
    },
    {
      title: "Support, Don't Push",
      description: "Encourage exploration while respecting their autonomy and choices.",
      icon: "🤝"
    },
    {
      title: "Plan Finances Early",
      description: "Start saving and planning for education expenses well in advance.",
      icon: "💰"
    }
  ];

  if (selectedArticle) {
    return (
      <div className="min-h-screen p-4 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => setSelectedArticle(null)}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Articles
          </Button>

          <article className="space-y-8">
            <header className="text-center space-y-4">
              <div className="text-6xl mb-4">{selectedArticle.image}</div>
              <h1 className="text-4xl font-bold">{selectedArticle.title}</h1>
              <div className="flex items-center justify-center space-x-4 text-muted-foreground">
                <Badge variant="secondary">{selectedArticle.category}</Badge>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {selectedArticle.readTime}
                </span>
              </div>
            </header>

            <Card className="card-gradient border-0">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-muted-foreground mb-6">
                    {selectedArticle.summary}
                  </p>
                  <div className="space-y-6 text-foreground leading-relaxed">
                    <p>{selectedArticle.content}</p>
                    
                    {selectedArticle.category === "Career Guidance" && (
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Key Points to Remember</h3>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Every child has unique strengths and interests</li>
                          <li>Avoid projecting your unfulfilled dreams onto your child</li>
                          <li>Encourage exploration of different fields and activities</li>
                          <li>Consider aptitude tests and career counseling</li>
                          <li>Support their decisions even if they differ from your expectations</li>
                        </ul>
                      </div>
                    )}

                    {selectedArticle.category === "Industry Trends" && (
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Emerging Career Fields</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 bg-muted/20 rounded-lg">
                            <h4 className="font-semibold">Technology</h4>
                            <p className="text-sm text-muted-foreground">AI, Data Science, Cybersecurity, Cloud Computing</p>
                          </div>
                          <div className="p-4 bg-muted/20 rounded-lg">
                            <h4 className="font-semibold">Digital Marketing</h4>
                            <p className="text-sm text-muted-foreground">Content Creation, Social Media, SEO, Analytics</p>
                          </div>
                          <div className="p-4 bg-muted/20 rounded-lg">
                            <h4 className="font-semibold">Healthcare Tech</h4>
                            <p className="text-sm text-muted-foreground">Telemedicine, Health Informatics, Biotechnology</p>
                          </div>
                          <div className="p-4 bg-muted/20 rounded-lg">
                            <h4 className="font-semibold">Sustainability</h4>
                            <p className="text-sm text-muted-foreground">Green Energy, Environmental Consulting, Sustainable Design</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center space-x-4">
              <Button variant="hero">
                <Download className="h-4 w-4 mr-2" />
                Download Article
              </Button>
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
            </div>
          </article>
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
            <Users className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Parent Awareness Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering parents with insights and tools to guide their children's career journey
          </p>
        </div>

        <Tabs defaultValue="articles" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="articles" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Articles</span>
            </TabsTrigger>
            <TabsTrigger value="resources" className="flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Resources</span>
            </TabsTrigger>
            <TabsTrigger value="tips" className="flex items-center space-x-2">
              <Brain className="h-4 w-4" />
              <span>Quick Tips</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="space-y-8">
            {/* Featured Article */}
            <Card className="card-gradient border-0 mb-8">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <Badge variant="secondary" className="mb-4">Featured Article</Badge>
                    <h2 className="text-3xl font-bold mb-4">
                      {parentAwarenessArticles[0].title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {parentAwarenessArticles[0].summary}
                    </p>
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {parentAwarenessArticles[0].readTime}
                      </span>
                      <Badge variant="outline">
                        {parentAwarenessArticles[0].category}
                      </Badge>
                    </div>
                    <Button 
                      variant="hero" 
                      onClick={() => setSelectedArticle(parentAwarenessArticles[0])}
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-center">
                    <div className="text-8xl mb-4">{parentAwarenessArticles[0].image}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Articles by Category */}
            <div className="space-y-8">
              {categories.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.articles.map((article, articleIndex) => (
                      <Card 
                        key={articleIndex} 
                        className="card-gradient border-0 hover:scale-105 transition-all duration-300 cursor-pointer group"
                        onClick={() => setSelectedArticle(article)}
                      >
                        <CardHeader>
                          <div className="text-4xl mb-2">{article.image}</div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                            {article.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="mb-4">
                            {article.summary}
                          </CardDescription>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {article.readTime}
                            </span>
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="card-gradient border-0 hover:scale-105 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <resource.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="group-hover:text-primary transition-colors duration-300">
                          {resource.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {resource.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {resource.size}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {resource.downloads} downloads
                      </span>
                    </div>
                    <Button variant="hero" size="sm" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download Resource
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tips" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {tips.map((tip, index) => (
                <Card key={index} className="card-gradient border-0 hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{tip.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                        <p className="text-muted-foreground">{tip.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Expert Advice Section */}
            <Card className="bg-gradient-primary text-white border-0 mt-8">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Need Personalized Advice?</h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Book a session with our family counselors who specialize in career guidance for teenagers and young adults.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" size="lg">
                    Book Family Session
                  </Button>
                  <Button variant="glass" size="lg" onClick={() => navigate("/chatbot")}>
                    Chat with Expert
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ParentAwareness;