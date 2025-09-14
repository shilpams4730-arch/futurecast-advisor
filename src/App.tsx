import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";
import Recommendations from "./pages/Recommendations";
import CollegeFinder from "./pages/CollegeFinder";
import CareerPathway from "./pages/CareerPathway";
import Chatbot from "./pages/Chatbot";
import Scholarships from "./pages/Scholarships";
import ParentAwareness from "./pages/ParentAwareness";
import SuccessStories from "./pages/SuccessStories";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const handleLogin = (userData: { name: string; email: string }) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-gradient-background">
            <Navbar 
              isAuthenticated={!!user} 
              user={user || undefined} 
              onLogout={handleLogout} 
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/signup" element={<SignUp onLogin={handleLogin} />} />
              
              {/* Protected Routes */}
              <Route path="/dashboard" element={<Dashboard user={user} />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/recommendations" element={<Recommendations />} />
              <Route path="/colleges" element={<CollegeFinder />} />
              <Route path="/career-pathway" element={<CareerPathway />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="/scholarships" element={<Scholarships />} />
              <Route path="/parent-awareness" element={<ParentAwareness />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
