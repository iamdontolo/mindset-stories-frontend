
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Film, Camera, Edit, Music, Lightbulb, Users, 
  Play, Award, Clock, CheckCircle, ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Film Production',
      icon: Film,
      description: 'Complete end-to-end film production services from concept to final cut.',
      features: ['Pre-production Planning', 'Professional Filming', 'Post-production', 'Distribution Strategy'],
      price: 'From $15,000',
      duration: '3-6 months',
      category: 'Production'
    },
    {
      id: 2,
      title: 'Cinematography',
      icon: Camera,
      description: 'Professional cinematography services with state-of-the-art equipment.',
      features: ['4K/8K Filming', 'Drone Cinematography', 'Multi-camera Setup', 'Professional Lighting'],
      price: 'From $2,500/day',
      duration: '1-30 days',
      category: 'Production'
    },
    {
      id: 3,
      title: 'Video Editing',
      icon: Edit,
      description: 'Expert post-production services to bring your vision to life.',
      features: ['Color Grading', 'Sound Mixing', 'Visual Effects', 'Motion Graphics'],
      price: 'From $100/hour',
      duration: '1-8 weeks',
      category: 'Post-Production'
    },
    {
      id: 4,
      title: 'Scriptwriting',
      icon: Lightbulb,
      description: 'Professional scriptwriting and story development services.',
      features: ['Story Development', 'Character Creation', 'Dialogue Writing', 'Script Revision'],
      price: 'From $5,000',
      duration: '2-12 weeks',
      category: 'Pre-Production'
    },
    {
      id: 5,
      title: 'Sound Design',
      icon: Music,
      description: 'Complete audio production including music composition and sound effects.',
      features: ['Original Music', 'Sound Effects', 'Audio Mixing', 'Voice Over Recording'],
      price: 'From $1,500',
      duration: '1-4 weeks',
      category: 'Post-Production'
    },
    {
      id: 6,
      title: 'Creative Consulting',
      icon: Users,
      description: 'Strategic creative guidance for your film projects and brand storytelling.',
      features: ['Creative Strategy', 'Brand Storytelling', 'Project Planning', 'Creative Direction'],
      price: 'From $200/hour',
      duration: 'Ongoing',
      category: 'Consulting'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We discuss your vision, goals, and project requirements in detail.',
      icon: Users
    },
    {
      step: 2,
      title: 'Proposal & Planning',
      description: 'Detailed project proposal with timeline, budget, and creative approach.',
      icon: Lightbulb
    },
    {
      step: 3,
      title: 'Production Phase',
      description: 'Professional execution of your project with regular updates and feedback.',
      icon: Film
    },
    {
      step: 4,
      title: 'Delivery & Support',
      description: 'Final delivery of your project with ongoing support and revisions if needed.',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive film production services tailored to bring your vision to life 
              with professional quality and creative excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.id} 
                    className="bg-card/50 border-border hover:bg-card/80 transition-all duration-300 group animate-fade-in-up">
                <CardContent className="p-6">
                  {/* Service Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-background" />
                    </div>
                    <Badge variant="outline" className="border-primary/30">
                      {service.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing and Duration */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>{service.price}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to ensure your project is delivered on time, 
              within budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="text-center animate-fade-in-up">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-background" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-background text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl font-bold mb-6">
                Custom <span className="text-primary">Project Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Every project is unique, and we understand that standard packages don't always fit. 
                We offer completely customized solutions tailored to your specific needs, budget, and timeline.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Flexible budget options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Scalable project scope</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Dedicated project manager</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Regular progress updates</span>
                </div>
              </div>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                <span>Discuss Custom Project</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                  <Play className="w-10 h-10 text-primary ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start <span className="text-primary">Your Project</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss your vision and create a custom solution that brings your story to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
              Get Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-background">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
