import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  ArrowLeft,
  Send,
  MessageCircle,
  Bot,
  User,
  Sparkles,
  BookOpen,
  Award,
  GraduationCap,
  Briefcase
} from "lucide-react";
import { chatbotResponses } from "@/data/dummyData";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI career advisor. How can I help you today? You can ask me about career options, education paths, scholarships, or any other career-related questions.",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return chatbotResponses.greetings[Math.floor(Math.random() * chatbotResponses.greetings.length)];
    }
    
    if (message.includes("career") || message.includes("job") || message.includes("profession")) {
      return chatbotResponses.career[Math.floor(Math.random() * chatbotResponses.career.length)];
    }
    
    if (message.includes("education") || message.includes("college") || message.includes("course") || message.includes("study")) {
      return chatbotResponses.education[Math.floor(Math.random() * chatbotResponses.education.length)];
    }
    
    if (message.includes("scholarship") || message.includes("funding") || message.includes("financial")) {
      return chatbotResponses.scholarships[Math.floor(Math.random() * chatbotResponses.scholarships.length)];
    }
    
    return chatbotResponses.default[Math.floor(Math.random() * chatbotResponses.default.length)];
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot thinking delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: "bot",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    {
      question: "What career is best for me?",
      icon: Briefcase,
      color: "from-blue-500 to-purple-600"
    },
    {
      question: "Which college should I choose?",
      icon: GraduationCap,
      color: "from-green-500 to-teal-600"
    },
    {
      question: "Tell me about scholarships",
      icon: Award,
      color: "from-yellow-500 to-orange-600"
    },
    {
      question: "What courses should I take?",
      icon: BookOpen,
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/dashboard")}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="text-center space-y-4 mb-8">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-glow animate-bounce-in">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            AI Career Advisor
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant answers to your career and education questions
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="card-gradient border-0 h-[600px] flex flex-col">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center">
                  <Bot className="h-5 w-5 mr-2" />
                  AI Career Advisor
                </CardTitle>
                <CardDescription>
                  Ask me anything about careers, education, or scholarships
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 p-0">
                <ScrollArea className="h-[400px] p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-lg ${
                            message.sender === "user"
                              ? "bg-gradient-primary text-white"
                              : "bg-muted/50 text-foreground"
                          }`}
                        >
                          <div className="flex items-start space-x-2">
                            {message.sender === "bot" && (
                              <Bot className="h-4 w-4 mt-1 flex-shrink-0" />
                            )}
                            <div className="flex-1">
                              <p className="text-sm leading-relaxed">{message.text}</p>
                              <p className={`text-xs mt-1 ${
                                message.sender === "user" ? "text-white/70" : "text-muted-foreground"
                              }`}>
                                {message.timestamp.toLocaleTimeString([], { 
                                  hour: '2-digit', 
                                  minute: '2-digit' 
                                })}
                              </p>
                            </div>
                            {message.sender === "user" && (
                              <User className="h-4 w-4 mt-1 flex-shrink-0" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-muted/50 p-3 rounded-lg flex items-center space-x-2">
                          <Bot className="h-4 w-4" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                          </div>
                          <span className="text-sm text-muted-foreground">AI is thinking...</span>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
              </CardContent>
              
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Type your question here..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button 
                    onClick={handleSendMessage} 
                    disabled={!inputMessage.trim() || isTyping}
                    variant="hero"
                    size="icon"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Questions Sidebar */}
          <div className="space-y-6">
            <Card className="card-gradient border-0">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Quick Questions
                </CardTitle>
                <CardDescription>
                  Click to ask common questions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickQuestions.map((item, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full h-auto p-3 text-left justify-start hover:scale-105 transition-all duration-300"
                    onClick={() => {
                      setInputMessage(item.question);
                      handleSendMessage();
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}>
                        <item.icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm">{item.question}</span>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="card-gradient border-0">
              <CardHeader>
                <CardTitle className="text-lg">AI Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Instant Responses</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>Career Guidance</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span>Education Advice</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span>Scholarship Info</span>
                </div>
              </CardContent>
            </Card>

            {/* Upgrade Notice */}
            <Card className="bg-gradient-primary text-white border-0">
              <CardContent className="p-4 text-center">
                <Sparkles className="h-8 w-8 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Premium AI</h4>
                <p className="text-sm text-white/90 mb-3">
                  Get advanced career insights and personalized guidance
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  Upgrade Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;