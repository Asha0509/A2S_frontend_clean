import { Shield, Box, Bot, Wand2, BarChart3, Wrench, Headset, UserCheck, Heart, Leaf, Link, Monitor, FileText, TrendingUp, Zap } from "lucide-react";

export default function Features() {
  const basicFeatures = [
    {
      icon: Shield,
      title: "Verified Property Listings",
      description: "Trusted residential, commercial, and land listings with verified authenticity"
    },
    {
      icon: Box,
      title: "2.5D Room Designer",
      description: "Upload rooms, visualize furniture & décor with AI-suggested arrangements"
    },
    {
      icon: Bot,
      title: "B2C AI Consultants",
      description: "Personalized property & vendor recommendations based on your preferences"
    },
    {
      icon: Wand2,
      title: "Auto-Generate Design Options",
      description: "AI suggests multiple furniture & layout arrangements for your space"
    },
    {
      icon: BarChart3,
      title: "Simple B2C Analytics",
      description: "Track preferences, saved properties, and bookings in one place"
    }
  ];

  const premiumFeatures = [
    {
      icon: Wrench,
      title: "Advanced Predictive Maintenance",
      description: "AI + IoT predicts building issues before breakdown (plumbing, electricity, HVAC)"
    },
    {
      icon: Headset,
      title: "Integrated AR/VR Management",
      description: "Property managers can see hidden infrastructure & immersive room walkthroughs"
    },
    {
      icon: UserCheck,
      title: "AI-powered Tenant Screening",
      description: "Assess reliability based on credit, rental history, job stability, police verification"
    },
    {
      icon: Heart,
      title: "Personalized Resident Experience",
      description: "Data analytics improve resident services & community engagement"
    },
    {
      icon: Leaf,
      title: "Sustainability-focused Features",
      description: "Smart water meters, solar panels, waste segregation, community gardening"
    }
  ];

  const enterpriseFeatures = [
    {
      icon: Link,
      title: "Blockchain Property Transfer",
      description: "Tamper-proof property records with transparent ownership transfer"
    },
    {
      icon: Monitor,
      title: "Virtual Property Management",
      description: "Manage multiple properties remotely: tenants, payments, repairs, legal documentation"
    },
    {
      icon: FileText,
      title: "Smart Contract Rent System",
      description: "Automated, transparent rent, deposits, and penalty management"
    },
    {
      icon: TrendingUp,
      title: "AI Property Valuation & Forecasting",
      description: "Predict property prices based on history, infrastructure, demand trends"
    },
    {
      icon: Zap,
      title: "IoT Energy Management",
      description: "Monitor and optimize energy use across all properties with smart systems"
    }
  ];

  const FeatureCard = ({ icon: Icon, title, description, testId, colorScheme = "blue" }: { 
    icon: any; 
    title: string; 
    description: string; 
    testId: string;
    colorScheme?: string;
  }) => {
    const colorClasses: Record<string, string> = {
      blue: "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:border-blue-300 text-blue-600",
      purple: "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:border-purple-300 text-purple-600",
      green: "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:border-green-300 text-green-600",
      orange: "bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 hover:border-orange-300 text-orange-600",
      indigo: "bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200 hover:border-indigo-300 text-indigo-600"
    };
    
    return (
      <div className={`${colorClasses[colorScheme]} border-2 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg`} data-testid={testId}>
        <div className="text-2xl mb-4">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-semibold text-slate-800 mb-2" data-testid={`${testId}-title`}>
          {title}
        </h3>
        <p className="text-slate-600 text-sm" data-testid={`${testId}-description`}>
          {description}
        </p>
      </div>
    );
  };

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-white via-slate-50 to-gray-100" data-testid="features-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4" data-testid="features-title">
            Smart Features You'll Love
          </h2>
          <p className="text-xl text-slate-600" data-testid="features-subtitle">
            Discover what makes A2S the perfect choice for your needs
          </p>
        </div>
        
        {/* Basic Plan Features */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg" data-testid="badge-basic">
              Basic Plan Features
            </span>
            <div className="h-px bg-gradient-to-r from-green-300 to-emerald-300 flex-1"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="basic-features-grid">
            {basicFeatures.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                testId={`basic-feature-${index}`}
                colorScheme="green"
              />
            ))}
          </div>
        </div>
        
        {/* Premium Plan Features */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg" data-testid="badge-premium">
              Premium Plan Features
            </span>
            <div className="h-px bg-gradient-to-r from-purple-300 to-pink-300 flex-1"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="premium-features-grid">
            {premiumFeatures.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                testId={`premium-feature-${index}`}
                colorScheme="purple"
              />
            ))}
          </div>
        </div>
        
        {/* Enterprise Plan Features */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg" data-testid="badge-enterprise">
              Enterprise Plan Features
            </span>
            <div className="h-px bg-gradient-to-r from-blue-300 to-indigo-300 flex-1"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="enterprise-features-grid">
            {enterpriseFeatures.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                testId={`enterprise-feature-${index}`}
                colorScheme="blue"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
