import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { 
  Brain, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle,
  ArrowLeft,
  Sparkles
} from "lucide-react";
import { quizQuestions, streamRecommendations } from "@/data/dummyData";

interface QuizAnswer {
  questionId: number;
  selectedOption: string;
}

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAnswerSelect = (optionId: string) => {
    const newAnswer: QuizAnswer = {
      questionId: quizQuestions[currentQuestion].id,
      selectedOption: optionId
    };

    const updatedAnswers = answers.filter(a => a.questionId !== newAnswer.questionId);
    setAnswers([...updatedAnswers, newAnswer]);
  };

  const getCurrentAnswer = () => {
    return answers.find(a => a.questionId === quizQuestions[currentQuestion].id)?.selectedOption;
  };

  const handleNext = () => {
    if (!getCurrentAnswer()) {
      toast({
        title: "Please select an answer",
        description: "Choose one option before proceeding to the next question.",
        variant: "destructive",
      });
      return;
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmitQuiz();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const scores = { science: 0, commerce: 0, arts: 0 };

    answers.forEach(answer => {
      const question = quizQuestions.find(q => q.id === answer.questionId);
      const option = question?.options.find(opt => opt.id === answer.selectedOption);
      
      if (option) {
        scores.science += option.points.science;
        scores.commerce += option.points.commerce;
        scores.arts += option.points.arts;
      }
    });

    // Find the stream with highest score
    const recommendedStream = Object.entries(scores).reduce((a, b) => 
      scores[a[0] as keyof typeof scores] > scores[b[0] as keyof typeof scores] ? a : b
    )[0] as keyof typeof scores;

    return { scores, recommendedStream };
  };

  const handleSubmitQuiz = () => {
    setIsLoading(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setShowResults(true);
      setIsLoading(false);
      
      toast({
        title: "Quiz completed!",
        description: "Your personalized recommendations are ready.",
      });
    }, 2000);
  };

  const progressPercentage = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (showResults) {
    const { scores, recommendedStream } = calculateResults();
    const recommendation = streamRecommendations[recommendedStream];

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

          <div className="text-center space-y-6 mb-8">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-glow animate-bounce-in">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Quiz Complete!
            </h1>
            <p className="text-xl text-muted-foreground">
              Based on your responses, here's what we recommend for you
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recommended Stream */}
            <Card className="card-gradient border-0">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">{recommendation.icon}</div>
                <CardTitle className="text-2xl text-primary">
                  {recommendation.name}
                </CardTitle>
                <CardDescription className="text-lg">
                  {recommendation.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Recommended Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {recommendation.subjects.map((subject, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Career Options:</h4>
                  <div className="space-y-2">
                    {recommendation.careers.map((career, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{career}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={() => navigate("/recommendations")}
                >
                  View Detailed Recommendations
                  <Sparkles className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Score Breakdown */}
            <Card className="card-gradient border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="h-6 w-6 mr-2" />
                  Your Aptitude Scores
                </CardTitle>
                <CardDescription>
                  Based on your quiz responses
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(scores).map(([stream, score]) => {
                  const maxScore = quizQuestions.length * 3; // Maximum possible score
                  const percentage = (score / maxScore) * 100;
                  const streamData = streamRecommendations[stream as keyof typeof streamRecommendations];
                  
                  return (
                    <div key={stream} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl">{streamData.icon}</span>
                          <span className="font-medium">{streamData.name}</span>
                        </div>
                        <span className="text-sm font-medium">{score}/{maxScore}</span>
                      </div>
                      <Progress value={percentage} className="h-3" />
                      <p className="text-xs text-muted-foreground">
                        {percentage.toFixed(0)}% match
                      </p>
                    </div>
                  );
                })}

                <div className="pt-4 border-t">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setCurrentQuestion(0);
                      setAnswers([]);
                      setShowResults(false);
                    }}
                  >
                    Retake Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const currentAnswer = getCurrentAnswer();

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
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-glow">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Career Assessment Quiz
          </h1>
          <p className="text-muted-foreground">
            Answer these questions to discover your ideal career path
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(progressPercentage)}% Complete
            </span>
          </div>
          <Progress value={progressPercentage} className="h-3" />
        </div>

        {/* Question Card */}
        <Card className="card-gradient border-0 mb-8">
          <CardHeader>
            <CardTitle className="text-xl leading-relaxed">
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {question.options.map((option) => (
              <Button
                key={option.id}
                variant={currentAnswer === option.id ? "hero" : "outline"}
                className={`w-full p-4 h-auto text-left justify-start transition-all duration-300 ${
                  currentAnswer === option.id 
                    ? 'scale-105 shadow-glow' 
                    : 'hover:scale-102 hover:shadow-lg'
                }`}
                onClick={() => handleAnswerSelect(option.id)}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    currentAnswer === option.id 
                      ? 'bg-white border-white' 
                      : 'border-current'
                  }`} />
                  <span className="text-sm leading-relaxed">{option.text}</span>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>

          <Button
            variant="hero"
            onClick={handleNext}
            disabled={isLoading}
            className="flex items-center space-x-2"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span>
                  {currentQuestion === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next'}
                </span>
                <ChevronRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;