
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Eye, Heart, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To create compelling narratives that challenge perspectives and inspire positive change through the power of cinema.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be a leading force in meaningful filmmaking, shaping stories that shift mindsets globally.',
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Authenticity, creativity, social impact, and excellence in every project we undertake.',
    },
  ];

  const achievements = [
    'Winner of Best Independent Film at Sundance Film Festival',
    'Featured in International Documentary Festival',
    'Over 1 million views across digital platforms',
    'Partnerships with major streaming services',
    'Recognition from industry leaders and critics',
    'Community impact through social awareness films',
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">Jamil's Mindset</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a passionate film production company dedicated to creating stories that matter, 
              inspire change, and leave a lasting impact on audiences worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg"></div>
            </div>
            
            <div className="animate-fade-in-right">
              <h2 className="text-3xl font-bold mb-6">Message from the Founder</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  "When I started Jamil's Mindset Production, I had a simple yet powerful vision: 
                  to use the medium of film to create stories that not only entertain but also 
                  challenge the way we think about the world around us."
                </p>
                <p>
                  "Every project we undertake is driven by our commitment to authenticity, 
                  creativity, and social impact. We believe that cinema has the unique power 
                  to shift mindsets, spark conversations, and inspire positive change."
                </p>
                <p>
                  "Our team is dedicated to maintaining the highest standards of production 
                  while never losing sight of the human stories at the heart of every film we create."
                </p>
              </div>
              <div className="mt-6">
                <p className="font-semibold text-primary">— Jamil</p>
                <p className="text-sm text-muted-foreground">Founder & Creative Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Core Principles</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card/50 border-border hover:bg-card/80 transition-colors animate-fade-in-up">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Recognition and milestones that reflect our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-3 animate-fade-in-up">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-3 h-3 text-background" />
                </div>
                <p className="text-muted-foreground">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl font-bold mb-6">Our Creative Culture</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We foster an environment where creativity thrives, collaboration is valued, 
                and every team member contributes to our shared vision of meaningful storytelling.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Collaborative team environment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  <span>Innovation and creative freedom</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-primary" />
                  <span>Passion for social impact</span>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
