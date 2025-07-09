
import { Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FFD700%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-spotlight"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-foreground mb-2">Shaping Stories</span>
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Shifting Mindsets
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Where creativity meets purpose. We craft compelling narratives that inspire change, 
            challenge perspectives, and leave lasting impact on audiences worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-background font-semibold px-8 py-3 rounded-full">
              <Link to="/films" className="flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Our Films</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-background px-8 py-3 rounded-full">
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full animate-pulse hidden lg:block"></div>
        <div className="absolute top-1/3 right-16 w-1 h-1 bg-accent rounded-full animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse hidden lg:block"></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
