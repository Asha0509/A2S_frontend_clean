import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Home, Paintbrush, Briefcase, Hammer, Percent, DollarSign, Users, PieChart, Phone, GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import VendorWaitlistForm from "./forms/vendor-waitlist-form";

export default function Vendors() {
  const [showVendorForm, setShowVendorForm] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (roleId: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [roleId]: !prev[roleId]
    }));
  };

  const roles = [
    {
      id: "vastu",
      icon: Home,
      title: "Vastu Consultants",
      subtitle: "Professionals only",
      description: "Provide traditional Vastu Shastra consultation for homes and commercial spaces to ensure positive energy flow and prosperity.",
      commission: "10–12%",
      benefits: [
        "High-value consultations with premium clients",
        "Flexible scheduling for site visits",
        "Commission-based earnings with bonuses",
        "Professional certification support",
        "Access to exclusive client referrals"
      ],
      nonPaidExperience: false,
      colorScheme: "purple"
    },
    {
      id: "interior",
      icon: Paintbrush,
      title: "Interior Consultants",
      subtitle: "Students/artists allowed",
      description: "Create beautiful, functional interior designs for residential and commercial spaces using the latest design trends and technologies.",
      commission: "8–12%",
      benefits: [
        "Portfolio building opportunities",
        "Access to design software and tools",
        "Mentorship from experienced designers",
        "Client management dashboard",
        "Flexible project timelines"
      ],
      nonPaidExperience: true,
      colorScheme: "blue"
    },
    {
      id: "business",
      icon: Briefcase,
      title: "Business Consultants",
      subtitle: "Students/artists allowed",
      description: "Help businesses optimize their commercial spaces for productivity, efficiency, and employee satisfaction.",
      commission: "8–12%",
      benefits: [
        "Corporate client access",
        "Business development training",
        "Performance-based bonuses",
        "Professional networking opportunities",
        "Project management tools"
      ],
      nonPaidExperience: true,
      colorScheme: "green"
    },
    {
      id: "carpenter",
      icon: Hammer,
      title: "Factories / Carpenters / Furniture Makers",
      subtitle: "Professionals only",
      description: "Partner with us to provide high-quality custom furniture, fixtures, and construction services for our design projects.",
      commission: "8–10%",
      benefits: [
        "Bulk order opportunities",
        "Regular project flow",
        "Material sourcing support",
        "Quality certification programs",
        "Direct client connections"
      ],
      nonPaidExperience: false,
      colorScheme: "orange"
    }
  ];

  return (
    <>
      <section id="vendors" className="py-20 bg-background" data-testid="vendors-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent mb-4" data-testid="vendors-title">
              Vendor & Service Provider Opportunities
            </h2>
            <p className="text-xl text-slate-600" data-testid="vendors-subtitle">
              Join our growing network of professionals and grow your business
            </p>
          </div>
          
          {/* Role Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6" data-testid="roles-grid">
            {roles.map((role) => {
              const colorClasses: Record<string, string> = {
                purple: "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:border-purple-300 hover:shadow-purple-100",
                blue: "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:border-blue-300 hover:shadow-blue-100",
                green: "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:border-green-300 hover:shadow-green-100",
                orange: "bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 hover:border-orange-300 hover:shadow-orange-100"
              };
              
              const iconColors: Record<string, string> = {
                purple: "text-purple-600",
                blue: "text-blue-600", 
                green: "text-green-600",
                orange: "text-orange-600"
              };
              
              const titleColors: Record<string, string> = {
                purple: "text-purple-800",
                blue: "text-blue-800",
                green: "text-green-800", 
                orange: "text-orange-800"
              };
              
              return (
                <Card key={role.id} className={`${colorClasses[role.colorScheme]} border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={iconColors[role.colorScheme]}>
                        <role.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className={`text-lg ${titleColors[role.colorScheme]}`}>{role.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-sm text-slate-600">
                      {role.subtitle}
                    </CardDescription>
                  </CardHeader>
                
                  <CardContent className="pt-0">
                    <p className="text-sm text-slate-600 mb-4">
                      {role.description}
                    </p>
                    
                    <Collapsible 
                      open={expandedCards[role.id]} 
                      onOpenChange={() => toggleCard(role.id)}
                    >
                      <CollapsibleTrigger asChild>
                        <Button 
                          variant="outline" 
                          className={`w-full mb-4 justify-between border-${role.colorScheme}-200 hover:border-${role.colorScheme}-300 text-${role.colorScheme}-700 hover:bg-${role.colorScheme}-50`}
                          data-testid={`learn-more-${role.id}`}
                        >
                          Learn More
                          {expandedCards[role.id] ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </Button>
                      </CollapsibleTrigger>
                    
                    <CollapsibleContent className="space-y-4">
                        {/* Commission */}
                        <div className={`bg-${role.colorScheme}-50/50 rounded-lg p-4 border border-${role.colorScheme}-100`}>
                          <div className="flex items-center gap-2 mb-2">
                            <Percent className="h-4 w-4 text-green-600" />
                            <h4 className={`font-semibold text-${role.colorScheme}-800`}>Commission</h4>
                          </div>
                          <p className="text-sm text-slate-600">{role.commission} per transaction</p>
                        </div>
                        
                        {/* Benefits */}
                        <div className={`bg-${role.colorScheme}-50/50 rounded-lg p-4 border border-${role.colorScheme}-100`}>
                          <div className="flex items-center gap-2 mb-3">
                            <Users className={`h-4 w-4 text-${role.colorScheme}-600`} />
                            <h4 className={`font-semibold text-${role.colorScheme}-800`}>Benefits</h4>
                          </div>
                          <ul className="space-y-2">
                            {role.benefits.map((benefit, index) => (
                              <li key={index} className="text-sm text-slate-600 flex items-start gap-2">
                                <div className={`w-1.5 h-1.5 bg-${role.colorScheme}-500 rounded-full mt-2 flex-shrink-0`} />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      
                        {/* Standard Benefits */}
                        <div className={`bg-${role.colorScheme}-50/50 rounded-lg p-4 border border-${role.colorScheme}-100`}>
                          <div className="flex items-center gap-2 mb-3">
                            <PieChart className={`h-4 w-4 text-${role.colorScheme}-600`} />
                            <h4 className={`font-semibold text-${role.colorScheme}-800`}>Standard Benefits</h4>
                          </div>
                          <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                              <DollarSign className="h-3 w-3 mt-1 text-green-500" />
                              Standard monthly payment + bonus
                            </li>
                            <li className="flex items-start gap-2">
                              <PieChart className="h-3 w-3 mt-1 text-blue-500" />
                              Dashboard for management
                            </li>
                            <li className="flex items-start gap-2">
                              <Phone className="h-3 w-3 mt-1 text-orange-500" />
                              Personal onboarding support
                            </li>
                            {role.nonPaidExperience && (
                              <li className="flex items-start gap-2">
                                <GraduationCap className="h-3 w-3 mt-1 text-indigo-500" />
                                Non-paid experience allowed
                              </li>
                            )}
                          </ul>
                        </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
                    
                  <CardFooter className="pt-0">
                    <Button 
                      onClick={() => {
                        setSelectedRole(role.id);
                        setShowVendorForm(true);
                      }}
                      className={`w-full bg-gradient-to-r from-${role.colorScheme}-600 to-${role.colorScheme}-700 hover:from-${role.colorScheme}-700 hover:to-${role.colorScheme}-800 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
                      data-testid={`join-waitlist-${role.id}`}
                    >
                      Join Waitlist
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <VendorWaitlistForm 
        open={showVendorForm} 
        onOpenChange={setShowVendorForm}
        selectedRole={selectedRole}
      />
    </>
  );
}
