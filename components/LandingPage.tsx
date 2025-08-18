"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, ArrowRight, Brain, TrendingUp, Shield } from "lucide-react";
import CountUp from "react-countup";
import { TextAnimate } from "./magicui/text-animate";
import { motion } from "framer-motion";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { WordRotate } from "./magicui/word-rotate";
export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="secondary"
                className="mb-6 flex items-center gap-1"
              >
                <Zap className="w-3 h-3" />
                Powered by Google Gemini AI
              </Badge>
            </motion.div>
          </div>

          <TextAnimate className="text-5xl md:text-6xl font-bold font-playfair mb-2 leading-tight">
            Transform the Way You
          </TextAnimate>

          <WordRotate
            className="text-5xl md:text-6xl font-bold font-playfair text-primary mb-6"
            words={["Spend", "Budget", "Invest", "Save"]}
            duration={2000}
            motionProps={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -20 },
              transition: { duration: 0.5, ease: "easeOut" },
            }}
          />

          <TextAnimate className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Leverage advanced AI to analyze your expenses, uncover hidden
            patterns, and receive personalized financial advice that transforms
            how you manage money.
          </TextAnimate>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <InteractiveHoverButton className="h-[60px] px-8 text-lg flex items-center gap-2">
              Get Started Free
            </InteractiveHoverButton>

            {/* Watch Demo - same height, rounded */}
            <Button
              variant="outline"
              size="lg"
              className="h-[60px] px-8 text-lg rounded-full flex items-center justify-center bg-transparent"
            >
              Watch Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-playfair mb-4">
              Intelligent Financial Analysis
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform provides deep insights into your spending
              habits with actionable recommendations.
            </p>
          </motion.div>
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
                Google Gemini AI analyzes your spending patterns, categorizes
                expenses automatically, and identifies optimization
                opportunities you might miss.
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
                Receive personalized advice on budget optimization, savings
                opportunities, and financial goal achievement based on your
                unique spending behavior.
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
                Your financial data is encrypted and processed securely. We
                never store sensitive information and comply with
                industry-leading security standards.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl font-bold font-playfair mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              How ExpenseAI Works
            </motion.h2>

            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Three simple steps to transform your financial management with
              AI-powered insights.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">
                  1
                </span>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-4">
                Connect Your Accounts
              </h3>
              <p className="text-muted-foreground">
                Securely link your bank accounts and credit cards. We use
                bank-level encryption to protect your data.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-foreground">
                  2
                </span>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-4">
                AI Analysis
              </h3>
              <p className="text-muted-foreground">
                Google Gemini AI processes your transactions, identifies
                patterns, and categorizes your spending automatically.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-secondary-foreground">
                  3
                </span>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-4">
                Get Insights
              </h3>
              <p className="text-muted-foreground">
                Receive personalized recommendations, budget suggestions, and
                actionable insights to improve your financial health.
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
                <CountUp
                  end={2300000}
                  prefix="₹"
                  suffix="+"
                  duration={2}
                  separator=","
                />
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
        <motion.div
          className="container mx-auto text-center max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold font-playfair mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Financial Future?
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join thousands of users who have already improved their financial
            health with AI-powered insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="text-lg px-8 py-6">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          <motion.p
            className="text-sm text-muted-foreground mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            No credit card required • 14-day free trial • Cancel anytime
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}
