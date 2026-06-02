import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Brain,
  Database,
  BookOpen,
} from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design Philosophy: Modern Tech Minimalism with Bold Black & Yellow Accents
 * - Asymmetric layouts with geometric precision
 * - High-contrast color scheme for maximum visual impact
 * - Smooth animations and micro-interactions
 * - Technical typography (Space Grotesk for headings, Inter for body)
 */

interface AnimatedElementProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedElement = ({
  children,
  delay = 0,
  className = "",
}: AnimatedElementProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Submit to Formspree
    fetch("https://formspree.io/f/mjgznabg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    })
      .then(response => {
        if (response.ok) {
          setFormData({ name: "", email: "", message: "" });
          setSubmitMessage(
            "Thank you! Your message has been sent successfully."
          );
          setTimeout(() => setSubmitMessage(""), 3000);
        } else {
          setSubmitMessage("Something went wrong. Please try again.");
        }
      })
      .catch(() => {
        setSubmitMessage("Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-xl font-bold text-primary">Hasnain</div>
          <div className="flex items-center gap-8">
            <a
              href="#about"
              className="text-sm hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-sm hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-sm hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-sm hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663059537522/SMMfp9FSTEVVQpURXP3bRq/hero-bg-AizKKRLk2XsdAS4fHp6FNp.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent z-10" />

        <div className="container relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <AnimatedElement delay={100}>
                <div className="space-y-4">
                  <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                    <span className="text-primary text-sm font-semibold">
                      AI & Machine Learning Engineer
                    </span>
                  </div>
                  <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                    Rana Muhammad <span className="text-primary">Hassnain</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                    Passionate AI student with expertise in machine learning,
                    data analysis, and NLP. Currently contributing to HEC-funded
                    research on AI ethics.
                  </p>
                </div>
              </AnimatedElement>

              <AnimatedElement delay={200} className="flex gap-4">
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1Eh5-CspPfgca0qOTKWHmxAhTO0mtxPFs/view?usp=drivesdk",
                      "_blank"
                    )
                  }
                >
                  Download Resume
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-base"
                  onClick={() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get in Touch
                </Button>
              </AnimatedElement>

              <AnimatedElement delay={300} className="flex gap-6 pt-4">
                <a
                  href="https://linkedin.com/in/rana-muhammad-hassnain-a52447370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/Rana4682"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="mailto:ranahassnainrajput786@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={24} />
                </a>
              </AnimatedElement>
            </div>

            {/* Right Visual */}
            <AnimatedElement delay={150} className="hidden lg:block">
              <div className="relative h-96 rounded-lg overflow-hidden border border-primary/20">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663059537522/SMMfp9FSTEVVQpURXP3bRq/project-showcase-hytY5CBSw3qwKt2r5gBXjX.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-border">
        <div className="container">
          <AnimatedElement>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">About Me</h2>
          </AnimatedElement>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatedElement delay={100} className="lg:col-span-2">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate AI student at Khwaja Fareed University of
                  Engineering & Information Technology, currently pursuing my
                  Bachelor's in Artificial Intelligence. With a strong
                  foundation in Python, machine learning, and data analysis, I'm
                  actively seeking hands-on opportunities to apply and expand my
                  expertise.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm currently contributing to a HEC-funded national research
                  project on AI ethics, where I work with PhD and MS-level
                  researchers on developing ethical frameworks for AI in
                  Pakistan. This experience has taught me how real research and
                  teamwork translate into meaningful outcomes.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm curious, fast to learn, and ready to bring my energy,
                  skills, and dedication to a team that's building something
                  impactful in the AI space.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={150}>
              <Card className="bg-card border-border p-6 space-y-4">
                <h3 className="text-xl font-bold text-primary">Quick Facts</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Location:</span>
                    <p className="text-foreground font-semibold">
                      Sukkur, Pakistan
                    </p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Education:</span>
                    <p className="text-foreground font-semibold">
                      B.S. Artificial Intelligence
                    </p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">GPA:</span>
                    <p className="text-foreground font-semibold">3.38 / 4.0</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Focus:</span>
                    <p className="text-foreground font-semibold">
                      ML, NLP, Data Science
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 border-t border-border">
        <div className="container">
          <AnimatedElement>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Featured Projects
            </h2>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <AnimatedElement delay={100}>
              <Card className="bg-card border-border hover-lift overflow-hidden group">
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        NLP Question Generation System
                      </h3>
                      <p className="text-sm text-primary font-semibold">
                        Current Research Project
                      </p>
                    </div>
                    <Code2 className="text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-muted-foreground">
                    Designed a 14-stage NLP pipeline for automatic question
                    generation from English text with 91.5% tense recognition
                    accuracy. Engineered dual-strategy generation combining
                    rule-based and T5 neural approaches.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      spaCy
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      Transformers
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      PyTorch
                    </span>
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1naJfyG7k5Aq4MSAsiY6wihFljjLQGp6-/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                  >
                    View Details <ExternalLink size={16} />
                  </a>
                </div>
              </Card>
            </AnimatedElement>

            {/* Project 2 */}
            <AnimatedElement delay={150}>
              <Card className="bg-card border-border hover-lift overflow-hidden group">
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Heart Disease Prediction
                      </h3>
                      <p className="text-sm text-primary font-semibold">
                        ML Application
                      </p>
                    </div>
                    <Brain className="text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-muted-foreground">
                    Designed and deployed a heart disease prediction system
                    using machine learning. Implemented classification
                    algorithms including Random Forest, Logistic Regression, and
                    Decision Trees with comprehensive model evaluation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      Scikit-learn
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      Flask
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      ML
                    </span>
                  </div>
                  <a
                    href="https://github.com/Rana4682/Heart-Disease-Prediction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                  >
                    View on GitHub <ExternalLink size={16} />
                  </a>
                </div>
              </Card>
            </AnimatedElement>

            {/* Project 3 */}
            <AnimatedElement delay={200}>
              <Card className="bg-card border-border hover-lift overflow-hidden group">
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Eid Sales Analysis
                      </h3>
                      <p className="text-sm text-primary font-semibold">
                        Data Analysis
                      </p>
                    </div>
                    <Database className="text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-muted-foreground">
                    Performed comprehensive exploratory data analysis on Eid
                    sales patterns. Handled missing values and outliers, created
                    visual dashboards highlighting customer demographics and
                    regional performance insights.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      Pandas
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      Matplotlib
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      EDA
                    </span>
                  </div>
                  <a
                    href="https://github.com/Rana4682/Eid-Sales-Analysis.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                  >
                    View on GitHub <ExternalLink size={16} />
                  </a>
                </div>
              </Card>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 border-t border-border">
        <div className="container">
          <AnimatedElement>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Experience & Research
            </h2>
          </AnimatedElement>

          <div className="space-y-8">
            {/* Experience 1 */}
            <AnimatedElement delay={100}>
              <div className="relative pl-8 border-l-2 border-primary pb-8">
                <div className="absolute left-[-13px] top-0 w-6 h-6 bg-primary rounded-full" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    Machine Learning Engineer
                  </h3>
                  <p className="text-primary font-semibold">
                    Elevvo Pathways, Cairo, Egypt
                  </p>
                  <p className="text-sm text-muted-foreground">
                    July 2025 - August 2025
                  </p>
                  <p className="text-muted-foreground mt-3">
                    Assisted in preparing and preprocessing datasets for machine
                    learning tasks. Implemented supervised learning algorithms
                    including linear and logistic regression for predictive
                    modeling. Gained experience with model training, testing,
                    and performance evaluation in an international remote
                    internship.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            {/* Experience 2 */}
            <AnimatedElement delay={150}>
              <div className="relative pl-8 border-l-2 border-primary pb-8">
                <div className="absolute left-[-13px] top-0 w-6 h-6 bg-primary rounded-full" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    Data Science & Analytics
                  </h3>
                  <p className="text-primary font-semibold">
                    DevelopersHub Corporation, Islamabad, Pakistan
                  </p>
                  <p className="text-sm text-muted-foreground">
                    June 2025 - July 2025
                  </p>
                  <p className="text-muted-foreground mt-3">
                    Delivered actionable insights through advanced data
                    cleaning, preprocessing, and exploratory analysis. Built and
                    evaluated predictive machine learning models. Translated
                    complex data into clear visual dashboards and
                    executive-level reports. Optimized workflow efficiency
                    through Python automation.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            {/* Research */}
            <AnimatedElement delay={200}>
              <div className="relative pl-8 border-l-2 border-primary pb-8">
                <div className="absolute left-[-13px] top-0 w-6 h-6 bg-primary rounded-full" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    Research Assistant - AI Ethics
                  </h3>
                  <p className="text-primary font-semibold">
                    KFUEIT, Rahim Yar Khan (HEC-NRPU Project)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    October 2025 - Current
                  </p>
                  <p className="text-muted-foreground mt-3">
                    Selected through formal university committee for HEC-funded
                    national research project on "Ethical Framework for AI in
                    Pakistan: An Islamic and Moral Perspective." Collaborating
                    with PhD and MS-level researchers on AI ethics framework
                    development. Performing data collection, preprocessing, and
                    exploratory analysis using Python.
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 border-t border-border">
        <div className="container">
          <AnimatedElement>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Technical Skills
            </h2>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Programming */}
            <AnimatedElement delay={100}>
              <Card className="bg-card border-border p-6 hover-lift">
                <Code2 className="text-primary mb-4" size={32} />
                <h3 className="text-lg font-bold mb-3">Programming</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Python</li>
                  <li>• SQL</li>
                  <li>• JavaScript/TypeScript</li>
                  <li>• Jupyter Notebook</li>
                </ul>
              </Card>
            </AnimatedElement>

            {/* ML & Data Science */}
            <AnimatedElement delay={150}>
              <Card className="bg-card border-border p-6 hover-lift">
                <Brain className="text-primary mb-4" size={32} />
                <h3 className="text-lg font-bold mb-3">ML & Data Science</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Scikit-learn</li>
                  <li>• PyTorch</li>
                  <li>• TensorFlow</li>
                  <li>• Hugging Face</li>
                </ul>
              </Card>
            </AnimatedElement>

            {/* Data Processing */}
            <AnimatedElement delay={200}>
              <Card className="bg-card border-border p-6 hover-lift">
                <Database className="text-primary mb-4" size={32} />
                <h3 className="text-lg font-bold mb-3">Data Processing</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Pandas</li>
                  <li>• NumPy</li>
                  <li>• Matplotlib</li>
                  <li>• Seaborn</li>
                </ul>
              </Card>
            </AnimatedElement>

            {/* NLP & Specializations */}
            <AnimatedElement delay={250}>
              <Card className="bg-card border-border p-6 hover-lift">
                <BookOpen className="text-primary mb-4" size={32} />
                <h3 className="text-lg font-bold mb-3">
                  NLP & Specializations
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• spaCy</li>
                  <li>• NLP</li>
                  <li>• Flask</li>
                  <li>• Transformers</li>
                </ul>
              </Card>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <AnimatedElement>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Certifications
            </h2>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedElement delay={100}>
              <a
                href="https://coursera.org/verify/specialization/B8F4Q32LSOI2"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="bg-card border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer">
                  <h3 className="text-lg font-bold mb-2">
                    Machine Learning Specialization
                  </h3>
                  <p className="text-primary text-sm font-semibold mb-2">
                    DeepLearning.AI (Coursera)
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Completed June 2025
                  </p>
                  <p className="text-primary text-xs font-semibold mt-3 flex items-center gap-1">
                    View Certificate →
                  </p>
                </Card>
              </a>
            </AnimatedElement>

            <AnimatedElement delay={150}>
              <a
                href="https://coursera.org/verify/0SRDNN34XFYN"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="bg-card border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer">
                  <h3 className="text-lg font-bold mb-2">
                    Introduction to Generative AI
                  </h3>
                  <p className="text-primary text-sm font-semibold mb-2">
                    Google
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Completed August 2025
                  </p>
                  <p className="text-primary text-xs font-semibold mt-3 flex items-center gap-1">
                    View Certificate →
                  </p>
                </Card>
              </a>
            </AnimatedElement>

            <AnimatedElement delay={200}>
              <a
                href="https://coursera.org/verify/0SRDNN34XFYN"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="bg-card border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer">
                  <h3 className="text-lg font-bold mb-2">
                    Introduction to Artificial Intelligence
                  </h3>
                  <p className="text-primary text-sm font-semibold mb-2">IBM</p>
                  <p className="text-muted-foreground text-sm">
                    Completed July 2025
                  </p>
                  <p className="text-primary text-xs font-semibold mt-3 flex items-center gap-1">
                    View Certificate →
                  </p>
                </Card>
              </a>
            </AnimatedElement>

            <AnimatedElement delay={250}>
              <a
                href="https://coursera.org/share/c7ab6871d7fd261b867bbf6768ae2eb6"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="bg-card border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer">
                  <h3 className="text-lg font-bold mb-2">
                    Foundations: Data, Data, Everywhere
                  </h3>
                  <p className="text-primary text-sm font-semibold mb-2">
                    Google (Coursera)
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Completed 2025
                  </p>
                  <p className="text-primary text-xs font-semibold mt-3 flex items-center gap-1">
                    View Certificate →
                  </p>
                </Card>
              </a>
            </AnimatedElement>

            <AnimatedElement delay={300}>
              <a
                href="https://coursera.org/verify/V3JUVU34EAY4"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="bg-card border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer">
                  <h3 className="text-lg font-bold mb-2">
                    Foundations of Business Intelligence
                  </h3>
                  <p className="text-primary text-sm font-semibold mb-2">
                    Google (Coursera)
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Completed 2025
                  </p>
                  <p className="text-primary text-xs font-semibold mt-3 flex items-center gap-1">
                    View Certificate →
                  </p>
                </Card>
              </a>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-border">
        <div className="container">
          <AnimatedElement>
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Let's Connect
                </h2>
                <p className="text-lg text-muted-foreground">
                  I'm always interested in hearing about new opportunities and
                  collaborations. Feel free to reach out!
                </p>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base"
                  onClick={() =>
                    (window.location.href =
                      "mailto:ranahassnainrajput786@gmail.com")
                  }
                >
                  <Mail className="mr-2" size={20} />
                  Send Email
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-base"
                  onClick={() =>
                    window.open(
                      "https://linkedin.com/in/rana-muhammad-hassnain-a52447370",
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="mr-2" size={20} />
                  LinkedIn
                </Button>
              </div>

              {/* Contact Form */}
              <Card className="bg-card border-border p-8">
                <form
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                  noValidate
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-semibold text-foreground"
                      >
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-semibold text-foreground"
                      >
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base font-semibold"
                  >
                    {isSubmitting ? "Submitting..." : "Send Message"}
                  </Button>

                  {submitMessage && (
                    <p className="text-sm text-primary text-center font-semibold">
                      {submitMessage}
                    </p>
                  )}
                </form>
              </Card>

              <div className="text-center pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  © 2026 Rana Muhammad Hassnain. All rights reserved.
                </p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
}
