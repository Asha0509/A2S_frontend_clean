import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import UserWaitlistForm from "@/components/forms/user-waitlist-form";

export default function Plans() {
  const [showUserForm, setShowUserForm] = useState(false);

  const plans = [
    {
      name: "Basic",
      tag: "Budget-Friendly",
      tagColor: "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
      description: "Perfect for individual homeowners and renters",
      features: [
        "Verified Property Search (residential, commercial, land)",
        "Designer Room (2.5D) – upload rooms, visualize layouts",
        "AI Consultants (B2C) – property & vendor suggestions",
        "Auto-Generate Design Options – multiple arrangements",
        "Simple B2C Analytics – track preferences & bookings"
      ],
      borderClass: "border-2 border-green-300 hover:border-green-400",
      bgGradient: "bg-gradient-to-br from-green-50 to-emerald-50"
    },
    {
      name: "Premium",
      tag: "Most Popular",
      tagColor: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
      description: "Advanced features for luxury living and professionals",
      features: [
        "Everything in Basic",
        "AR/VR Property Management – immersive walkthroughs",
        "Advanced Predictive Maintenance – AI + IoT predictions",
        "AI-powered Tenant Screening – comprehensive analysis",
        "Personalized Resident Experience – data-based recommendations",
        "Sustainability Features – smart meters, solar panels"
      ],
      borderClass: "border-4 border-purple-400 shadow-2xl shadow-purple-200",
      bgGradient: "bg-gradient-to-br from-purple-50 to-pink-50",
      featured: true
    },
    {
      name: "Enterprise",
      tag: "B2B Solution",
      tagColor: "bg-gradient-to-r from-blue-500 to-indigo-500 text-white",
      description: "Complete solution for property management businesses",
      features: [
        "Everything in Premium",
        "Blockchain Property Ownership Transfer",
        "Smart Contract Rent Payment System",
        "Virtual Property Management – multiple properties",
        "AI Property Valuation & Forecasting",
        "Dedicated Account Manager & Priority Support"
      ],
      borderClass: "border-2 border-blue-300 hover:border-blue-400",
      bgGradient: "bg-gradient-to-br from-blue-50 to-indigo-50"
    }
  ];

  return (
    <>
      <section id="plans" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" data-testid="plans-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4" data-testid="plans-title">
              Choose Your Perfect Plan
            </h2>
            <p className="text-xl text-slate-600 mb-8" data-testid="plans-subtitle">
              Tailored solutions for every need and budget
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={plan.name}
                className={`relative ${plan.bgGradient} ${plan.borderClass} rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                data-testid={`plan-card-${plan.name.toLowerCase()}`}
              >
                <div className="plan-badge">
                  <span className={`${plan.tagColor} px-4 py-1 rounded-full text-sm font-semibold`}>
                    {plan.tag}
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2" data-testid={`plan-name-${plan.name.toLowerCase()}`}>
                    {plan.name}
                  </h3>
                  <p className="text-slate-600 mb-6" data-testid={`plan-description-${plan.name.toLowerCase()}`}>
                    {plan.description}
                  </p>
                  
                  <ul className="space-y-4 mb-8" data-testid={`plan-features-${plan.name.toLowerCase()}`}>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="text-emerald-500 mt-1 w-4 h-4 flex-shrink-0" />
                        <span className={`text-sm text-slate-700 ${featureIndex === 0 && plan.name !== "Basic" ? "font-semibold" : ""}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => setShowUserForm(true)}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      plan.name === "Basic" 
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                        : plan.name === "Premium"
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                        : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                    }`}
                    data-testid={`button-get-started-${plan.name.toLowerCase()}`}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <UserWaitlistForm 
        open={showUserForm} 
        onOpenChange={setShowUserForm} 
      />
    </>
  );
}
