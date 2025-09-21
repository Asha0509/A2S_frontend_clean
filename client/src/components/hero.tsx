import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Layers3, Palette, Box, Camera, Smartphone } from "lucide-react";
import UserWaitlistForm from "@/components/forms/user-waitlist-form";
import VendorWaitlistForm from "./forms/vendor-waitlist-form";

export default function Hero() {
  const [showUserForm, setShowUserForm] = useState(false);
  const [showVendorForm, setShowVendorForm] = useState(false);
  

  return (
    <>
      <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50" data-testid="hero-section">
        {/* CSS Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="animated-background"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="max-w-xl lg:max-w-none">
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-emerald-600 bg-clip-text text-transparent leading-tight mb-6" data-testid="hero-headline">
                Every house deserves to be more than just four walls. We built A2S to make it possible.
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed" data-testid="hero-subheadline">
                From empty rooms to living stories. Why guess your space when you can experience it?
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => setShowUserForm(true)}
                  className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                  data-testid="button-get-started"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </Button>
                <Button 
                  onClick={() => setShowVendorForm(true)}
                  variant="outline"
                  className="border-2 border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
                  data-testid="button-vendor-waitlist"
                >
                  Join Vendor Waitlist
                </Button>
              </div>
            </div>
            
            {/* PropTech Animation Visual */}
            <div className="mt-12 lg:mt-0">
              <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
                {/* Background Glow */}
                <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/10 to-emerald-400/10 blur-3xl animate-pulse"></div>
                
                {/* Central Hub - Represents the A2S Platform */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 shadow-2xl flex items-center justify-center animate-pulse">
                    <Home className="w-12 h-12 text-white" />
                  </div>
                  
                  {/* Floating PropTech Elements */}
                  {/* Floor Plans - Top */}
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 animate-bounce delay-100">
                    <div className="w-12 h-12 rounded-lg bg-white shadow-lg border border-blue-200 flex items-center justify-center hover:scale-110 transition-transform">
                      <Layers3 className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  
                  {/* Design Palette - Top Right */}
                  <div className="absolute -top-12 -right-12 animate-float delay-200">
                    <div className="w-10 h-10 rounded-full bg-white shadow-lg border border-purple-200 flex items-center justify-center hover:scale-110 transition-transform">
                      <Palette className="w-5 h-5 text-purple-600" />
                    </div>
                  </div>
                  
                  {/* 3D/AR Visualization - Right */}
                  <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 animate-bounce delay-300">
                    <div className="w-12 h-12 rounded-lg bg-white shadow-lg border border-emerald-200 flex items-center justify-center hover:scale-110 transition-transform">
                      <Box className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                  
                  {/* Property Photography - Bottom Right */}
                  <div className="absolute -bottom-12 -right-8 animate-float delay-400">
                    <div className="w-10 h-10 rounded-full bg-white shadow-lg border border-indigo-200 flex items-center justify-center hover:scale-110 transition-transform">
                      <Camera className="w-5 h-5 text-indigo-600" />
                    </div>
                  </div>
                  
                  {/* Mobile App - Bottom */}
                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce delay-500">
                    <div className="w-12 h-12 rounded-lg bg-white shadow-lg border border-cyan-200 flex items-center justify-center hover:scale-110 transition-transform">
                      <Smartphone className="w-6 h-6 text-cyan-600" />
                    </div>
                  </div>
                  
                  {/* Connection Lines */}
                  <div className="absolute inset-0 pointer-events-none">
                    <svg className="w-full h-full animate-pulse" viewBox="0 0 200 200">
                      <defs>
                        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0.3"/>
                        </linearGradient>
                      </defs>
                      {/* Connecting lines from center to floating elements */}
                      <line x1="100" y1="100" x2="100" y2="50" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse"/>
                      <line x1="100" y1="100" x2="150" y2="100" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse"/>
                      <line x1="100" y1="100" x2="100" y2="150" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse"/>
                    </svg>
                  </div>
                  
                  {/* Orbital Ring */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-blue-200/30 rounded-full animate-spin-slow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UserWaitlistForm 
        open={showUserForm} 
        onOpenChange={setShowUserForm} 
      />
      <VendorWaitlistForm 
        open={showVendorForm} 
        onOpenChange={setShowVendorForm} 
      />
    </>
  );
}
