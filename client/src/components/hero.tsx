import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import UserWaitlistForm from "@/components/forms/user-waitlist-form";
import VendorWaitlistForm from "./forms/vendor-waitlist-form";
import heroVideo from "@assets/video_1758488652751.mp4";

export default function Hero() {
  const [showUserForm, setShowUserForm] = useState(false);
  const [showVendorForm, setShowVendorForm] = useState(false);
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const heroVisualRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
      if (e.matches && videoRef.current) {
        videoRef.current.pause();
      } else if (!e.matches && videoRef.current) {
        videoRef.current.play();
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
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

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', handleChange);
    };
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
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay={!reducedMotion}
            loop
            muted
            playsInline
            poster={reducedMotion ? "" : undefined}
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="max-w-xl lg:max-w-none">
              {/* Animated text overlays */}
              <div className="hero-text-container">
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-emerald-600 bg-clip-text text-transparent leading-tight mb-6 hero-text-1" data-testid="hero-headline">
                  Every house deserves to be more than just four walls. We built A2S to make it possible.
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed hero-text-2" data-testid="hero-subheadline">
                  From empty rooms to living stories. Why guess your space when you can experience it?
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => setShowUserForm(true)}
                  className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 pulse-cta"
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
            
            {/* Hero Content Space */}
            <div className="mt-12 lg:mt-0">
              <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
                <div 
                  ref={heroVisualRef}
                  className="w-full h-full max-w-lg transition-transform duration-300 ease-out flex items-center justify-center" 
                  data-testid="hero-content"
                >
                  <div className="text-center p-8 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg border border-white border-opacity-20">
                    <h3 className="text-2xl font-bold text-white mb-4">Experience A2S</h3>
                    <p className="text-white text-opacity-90">Transform spaces with intelligent design</p>
                  </div>
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
