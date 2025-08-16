"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, ArrowRight, Brain, TrendingUp, Shield } from "lucide-react";
import CountUp from "react-countup";

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6">
            <Zap className="w-3 h-3 mr-1" />
            Powered by Google Gemini AI
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-6 leading-tight">
            Revolutionize Your
            <span className="text-primary block">Spending Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Leverage advanced AI to analyze your expenses, uncover hidden patterns, and receive personalized
            financial advice that transforms how you manage money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-transparent"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-playfair mb-4">
              Intelligent Financial Analysis
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform provides deep insights into your spending habits with actionable
              recommendations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-card hover:bg-card/80 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-playfair mb-4">
                  AI-Powered Analysis
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Google Gemini AI analyzes your spending patterns, categorizes expenses automatically, and
                  identifies optimization opportunities you might miss.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:bg-card/80 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold font-playfair mb-4">
                  Smart Recommendations
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Receive personalized advice on budget optimization, savings opportunities, and financial
                  goal achievement based on your unique spending behavior.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:bg-card/80 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold font-playfair mb-4">
                  Secure & Private
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your financial data is encrypted and processed securely. We never store sensitive information
                  and comply with industry-leading security standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-playfair mb-4">
              How ExpenseAI Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to transform your financial management with AI-powered insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-4">
                Connect Your Accounts
              </h3>
              <p className="text-muted-foreground">
                Securely link your bank accounts and credit cards. We use bank-level encryption to protect
                your data.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-foreground">2</span>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-4">
                AI Analysis
              </h3>
              <p className="text-muted-foreground">
                Google Gemini AI processes your transactions, identifies patterns, and categorizes your
                spending automatically.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-secondary-foreground">3</span>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-4">
                Get Insights
              </h3>
              <p className="text-muted-foreground">
                Receive personalized recommendations, budget suggestions, and actionable insights to
                improve your financial health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold font-playfair text-primary mb-2">
              <CountUp end={2300000} prefix="₹" suffix="+" duration={2} separator="," />
            </div>
            <p className="text-muted-foreground">Money Saved by Users</p>
          </div>
          <div>
            <div className="text-4xl font-bold font-playfair text-accent mb-2">
              <CountUp end={50000} suffix="+" duration={2} separator="," />
            </div>
            <p className="text-muted-foreground">Active Users</p>
          </div>
          <div>
            <div className="text-4xl font-bold font-playfair text-secondary mb-2">
              <CountUp end={98} suffix="%" duration={2} />
            </div>
            <p className="text-muted-foreground">User Satisfaction</p>
          </div>
        </div>
      </div>
    </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold font-playfair mb-6">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of users who have already improved their financial health with AI-powered insights.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Start Your Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </>
  );
}
