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
            
            {/* Blueprint to Reality PropTech Animation */}
            <div className="mt-12 lg:mt-0">
              <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
                {/* Main Animation Container */}
                <div className="proptech-hero-visual w-full h-full max-w-lg" data-testid="proptech-animation">
                  <svg 
                    viewBox="0 0 400 300" 
                    className="w-full h-full drop-shadow-2xl"
                    style={{ filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.15))' }}
                  >
                    <defs>
                      {/* Gradients */}
                      <linearGradient id="wallGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f8fafc" />
                        <stop offset="100%" stopColor="#e2e8f0" />
                      </linearGradient>
                      <linearGradient id="floorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1e293b" />
                        <stop offset="100%" stopColor="#334155" />
                      </linearGradient>
                      <radialGradient id="lightGradient" cx="50%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
                      </radialGradient>
                      <linearGradient id="sofaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1d4ed8" />
                      </linearGradient>
                      
                      {/* Grid Pattern */}
                      <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#94a3b8" strokeWidth="0.5" opacity="0.3"/>
                      </pattern>
                      
                      {/* Pulse Effect */}
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                      
                      {/* Mask for reveal */}
                      <mask id="revealMask">
                        <rect width="400" height="300" fill="white" className="reveal-rect"/>
                      </mask>
                    </defs>
                    
                    {/* Background Grid */}
                    <rect width="400" height="300" fill="url(#gridPattern)" className="grid-bg" opacity="0"/>
                    
                    {/* Room Structure - Blueprint Phase */}
                    <g className="blueprint-layer">
                      {/* Floor */}
                      <path 
                        d="M 50 200 L 350 200 L 320 250 L 80 250 Z" 
                        fill="none" 
                        stroke="#3b82f6" 
                        strokeWidth="2"
                        className="blueprint-floor"
                        strokeDasharray="800"
                        strokeDashoffset="800"
                      />
                      
                      {/* Back Wall */}
                      <path 
                        d="M 50 200 L 350 200 L 350 80 L 50 80 Z" 
                        fill="none" 
                        stroke="#3b82f6" 
                        strokeWidth="2"
                        className="blueprint-wall"
                        strokeDasharray="600"
                        strokeDashoffset="600"
                      />
                      
                      {/* Side Walls */}
                      <path 
                        d="M 50 200 L 80 250 L 80 130 L 50 80 Z" 
                        fill="none" 
                        stroke="#3b82f6" 
                        strokeWidth="2"
                        className="blueprint-side"
                        strokeDasharray="400"
                        strokeDashoffset="400"
                      />
                    </g>
                    
                    {/* Room Structure - Reality Phase */}
                    <g className="reality-layer" opacity="0">
                      {/* Floor */}
                      <path 
                        d="M 50 200 L 350 200 L 320 250 L 80 250 Z" 
                        fill="url(#floorGradient)"
                        className="room-floor"
                      />
                      
                      {/* Back Wall */}
                      <path 
                        d="M 50 200 L 350 200 L 350 80 L 50 80 Z" 
                        fill="url(#wallGradient)"
                        className="room-wall"
                      />
                      
                      {/* Side Wall */}
                      <path 
                        d="M 50 200 L 80 250 L 80 130 L 50 80 Z" 
                        fill="url(#wallGradient)"
                        className="room-side"
                        opacity="0.8"
                      />
                    </g>
                    
                    {/* Furniture - Reality Phase */}
                    <g className="furniture-layer" opacity="0">
                      {/* Sofa */}
                      <rect x="120" y="180" width="80" height="15" rx="7" fill="url(#sofaGradient)" className="sofa"/>
                      <rect x="125" y="175" width="70" height="8" rx="4" fill="#2563eb" className="sofa-back"/>
                      
                      {/* Coffee Table */}
                      <ellipse cx="200" cy="220" rx="25" ry="12" fill="#8b5cf6" className="table"/>
                      
                      {/* Plant */}
                      <ellipse cx="280" cy="190" rx="8" ry="4" fill="#dc2626" className="pot"/>
                      <path d="M 280 190 Q 275 175 280 160 Q 285 175 280 190" fill="#10b981" className="plant"/>
                      
                      {/* Pendant Light */}
                      <circle cx="200" cy="100" r="8" fill="#f59e0b" className="light-fixture"/>
                      <circle cx="200" cy="140" r="20" fill="url(#lightGradient)" opacity="0.6" className="light-glow"/>
                    </g>
                    
                    {/* Smart Tech Sensors */}
                    <g className="smart-layer" opacity="0">
                      {/* Temperature Sensor */}
                      <circle cx="100" cy="120" r="3" fill="#ef4444" className="sensor temp-sensor">
                        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
                      </circle>
                      
                      {/* Motion Sensor */}
                      <circle cx="300" cy="110" r="3" fill="#22c55e" className="sensor motion-sensor">
                        <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite"/>
                      </circle>
                      
                      {/* Light Sensor */}
                      <circle cx="200" cy="90" r="3" fill="#eab308" className="sensor light-sensor">
                        <animate attributeName="r" values="3;5;3" dur="1.8s" repeatCount="indefinite"/>
                      </circle>
                      
                      {/* Data Flow Lines */}
                      <path d="M 100 120 Q 150 100 200 90" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.5" className="data-flow-1">
                        <animate attributeName="stroke-dasharray" values="0,100;20,80;0,100" dur="3s" repeatCount="indefinite"/>
                      </path>
                      <path d="M 300 110 Q 250 95 200 90" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.5" className="data-flow-2">
                        <animate attributeName="stroke-dasharray" values="0,100;20,80;0,100" dur="3.5s" repeatCount="indefinite"/>
                      </path>
                    </g>
                    
                    {/* A2S Hub Badge */}
                    <g className="hub-layer" opacity="0">
                      <rect x="170" y="40" width="60" height="24" rx="12" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeWidth="1" className="hub-badge"/>
                      <text x="200" y="54" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="600" className="hub-text">A2S</text>
                      <circle cx="185" cy="52" r="2" fill="#10b981" className="hub-indicator">
                        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
                      </circle>
                    </g>
                    
                    {/* AR Overlay Effect */}
                    <rect x="0" y="0" width="400" height="300" fill="url(#arSweep)" opacity="0" className="ar-sweep"/>
                    
                  </svg>
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
