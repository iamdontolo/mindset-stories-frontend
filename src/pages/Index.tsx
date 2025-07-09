
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Film, Award, Users, Lightbulb, Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const stats = [
    { number: '50+', label: 'Films Produced', icon: Film },
    { number: '25+', label: 'Awards Won', icon: Award },
    { number: '100+', label: 'Team Members', icon: Users },
    { number: '1M+', label: 'Views Generated', icon: Play },
  ];

  const features = [
    {
      icon: Film,
      title: 'Professional Production',
      description: 'State-of-the-art equipment and experienced crew for every project.',
    },
    {
      icon: Lightbulb,
      title: 'Creative Vision',
      description: 'Unique storytelling approach that captivates and inspires audiences.',
    },
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Recognition from industry leaders and film festivals worldwide.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-background" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About Our <span className="text-primary">Vision</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Jamil's Mindset Production, we believe in the transformative power of storytelling. 
                Our mission is to create films that not only entertain but also challenge perspectives 
                and inspire positive change in society.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Founded with a passion for meaningful cinema, we specialize in crafting narratives 
                that resonate with diverse audiences while maintaining the highest production standards.
              </p>
              <Button asChild className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                <Link to="/about" className="flex items-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                    <Play className="w-10 h-10 text-primary ml-1" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-primary">Our Production</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine creativity with technical excellence to deliver films that make a lasting impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/50 border-border hover:bg-card/80 transition-colors animate-fade-in-up">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-primary">Create Your Story</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's collaborate to bring your vision to life with our expert production team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-background">
              <Link to="/films">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
