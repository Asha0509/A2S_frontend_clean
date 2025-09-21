import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import UserWaitlistForm from "@/components/forms/user-waitlist-form";
import VendorWaitlistForm from "./forms/vendor-waitlist-form";

export default function Hero() {
  const [showUserForm, setShowUserForm] = useState(false);
  const [showVendorForm, setShowVendorForm] = useState(false);
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);
  const heroVisualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimationStarted) {
            setIsAnimationStarted(true);
            if (heroVisualRef.current) {
              heroVisualRef.current.classList.add('active');
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (heroVisualRef.current) {
      observer.observe(heroVisualRef.current);
    }

    return () => observer.disconnect();
  }, [isAnimationStarted]);

  useEffect(() => {
    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroVisualRef.current) return;
      
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      
      animationFrame = requestAnimationFrame(() => {
        if (!heroVisualRef.current) return;
        
        const rect = heroVisualRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) / rect.width;
        const deltaY = (e.clientY - centerY) / rect.height;
        
        // Cap rotation for smoother experience
        const rotateX = Math.max(-4, Math.min(4, deltaY * -4));
        const rotateY = Math.max(-4, Math.min(4, deltaX * 4));
        
        heroVisualRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };

    const handleMouseLeave = () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      if (heroVisualRef.current) {
        heroVisualRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      }
    };

    if (heroVisualRef.current) {
      heroVisualRef.current.addEventListener('mousemove', handleMouseMove);
      heroVisualRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      if (heroVisualRef.current) {
        heroVisualRef.current.removeEventListener('mousemove', handleMouseMove);
        heroVisualRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  

  return (
    <>
      <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-teal-100 via-teal-50 to-purple-100" data-testid="hero-section">
        {/* Floating geometric shapes background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="max-w-xl lg:max-w-none">
              {/* Animated text overlays */}
              <div className="hero-text-container">
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-emerald-600 bg-clip-text text-transparent leading-tight mb-6 hero-text-1" data-testid="hero-headline">
                  Discover your dream space
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed hero-text-2" data-testid="hero-subheadline">
                  Visualize it before you buy
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => setShowUserForm(true)}
                  className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 pulse-cta"
                  data-testid="button-get-started"
                >
                  Join Waitlist <ArrowRight className="w-5 h-5" />
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
            
            {/* Simple 2.5D Room Animation */}
            <div className="mt-12 lg:mt-0">
              <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
                {/* Main Animation Container */}
                <div 
                  ref={heroVisualRef}
                  className="simple-room-visual w-full h-full max-w-lg transition-transform duration-300 ease-out" 
                  data-testid="room-animation"
                >
                  <svg 
                    viewBox="0 0 400 300" 
                    className="w-full h-full drop-shadow-lg"
                  >
                    <defs>
                      <linearGradient id="roomGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f1f5f9" />
                        <stop offset="100%" stopColor="#e2e8f0" />
                      </linearGradient>
                      <linearGradient id="floorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#cbd5e1" />
                        <stop offset="100%" stopColor="#94a3b8" />
                      </linearGradient>
                    </defs>
                    
                    {/* Simple 2.5D Room Outline */}
                    <g className="room-walls">
                      {/* Floor */}
                      <path 
                        d="M 80 200 L 320 200 L 300 240 L 100 240 Z" 
                        fill="url(#floorGradient)"
                        stroke="#64748b" 
                        strokeWidth="2"
                        className="room-floor draw-line"
                        opacity="0"
                      />
                      
                      {/* Back Wall */}
                      <path 
                        d="M 80 200 L 320 200 L 320 80 L 80 80 Z" 
                        fill="url(#roomGradient)"
                        stroke="#64748b" 
                        strokeWidth="2"
                        className="room-back-wall draw-line"
                        opacity="0"
                      />
                      
                      {/* Side Wall */}
                      <path 
                        d="M 80 200 L 100 240 L 100 120 L 80 80 Z" 
                        fill="#e2e8f0"
                        stroke="#64748b" 
                        strokeWidth="2"
                        className="room-side-wall draw-line"
                        opacity="0"
                      />
                    </g>
                    
                    {/* Furniture Icons */}
                    <g className="furniture-icons">
                      {/* Chair */}
                      <g className="furniture-item chair" transform="translate(-50, 0)">
                        <rect x="120" y="160" width="30" height="30" rx="5" fill="#3b82f6" opacity="0.8"/>
                        <rect x="125" y="155" width="20" height="10" rx="2" fill="#2563eb"/>
                      </g>
                      
                      {/* Table */}
                      <g className="furniture-item table" transform="translate(50, 0)">
                        <ellipse cx="200" cy="180" rx="25" ry="15" fill="#8b5cf6" opacity="0.8"/>
                        <rect x="195" y="180" width="10" height="20" fill="#7c3aed"/>
                      </g>
                      
                      {/* Plant */}
                      <g className="furniture-item plant" transform="translate(50, 0)">
                        <ellipse cx="280" cy="170" rx="8" ry="5" fill="#dc2626"/>
                        <path d="M 280 170 Q 275 155 280 145 Q 285 155 280 170" fill="#10b981"/>
                      </g>
                    </g>
                    
                    {/* AI Recommendation Dots */}
                    <g className="ai-dots">
                      <circle className="ai-dot dot-1" cx="135" cy="175" r="3" fill="#fbbf24" opacity="0"/>
                      <circle className="ai-dot dot-2" cx="200" cy="180" r="3" fill="#fbbf24" opacity="0"/>
                      <circle className="ai-dot dot-3" cx="280" cy="160" r="3" fill="#fbbf24" opacity="0"/>
                    </g>
                    
                    {/* AI Sidebar */}
                    <g className="ai-sidebar">
                      <rect x="350" y="80" width="40" height="120" rx="10" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeWidth="2" opacity="0" className="sidebar-bg"/>
                      <text x="370" y="100" textAnchor="middle" fill="#3b82f6" fontSize="8" fontWeight="600" opacity="0" className="sidebar-text">AI</text>
                      <text x="370" y="115" textAnchor="middle" fill="#3b82f6" fontSize="8" fontWeight="600" opacity="0" className="sidebar-text">RECS</text>
                    </g>
                    
                    {/* Glowing Dot Paths */}
                    <g className="dot-paths">
                      <path d="M 135 175 Q 200 150 350 140" fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0" className="glow-path path-1"/>
                      <path d="M 200 180 Q 250 160 350 150" fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0" className="glow-path path-2"/>
                      <path d="M 280 160 Q 300 140 350 160" fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0" className="glow-path path-3"/>
                    </g>
                    
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
