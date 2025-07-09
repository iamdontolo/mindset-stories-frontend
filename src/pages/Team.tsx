
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter, Mail, Camera, Film, Edit, Music } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Jamil Ahmed',
      role: 'Founder & Creative Director',
      bio: 'Visionary filmmaker with over 10 years of experience in creating impactful stories that challenge perspectives and inspire change.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      skills: ['Direction', 'Screenwriting', 'Creative Strategy'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'jamil@jamilsmindset.com'
      },
      icon: Film
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Director of Photography',
      bio: 'Award-winning cinematographer known for her unique visual storytelling and expertise in creating stunning cinematic experiences.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b17c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      skills: ['Cinematography', 'Lighting', 'Visual Composition'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@jamilsmindset.com'
      },
      icon: Camera
    },
    {
      id: 3,
      name: 'Marcus Rodriguez',
      role: 'Senior Editor',
      bio: 'Master storyteller in post-production, specializing in narrative structure and emotional pacing that brings stories to life.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      skills: ['Video Editing', 'Color Grading', 'Sound Design'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'marcus@jamilsmindset.com'
      },
      icon: Edit
    },
    {
      id: 4,
      name: 'Elena Vasquez',
      role: 'Producer',
      bio: 'Strategic producer with a keen eye for project management and resource optimization, ensuring every production runs smoothly.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      skills: ['Project Management', 'Budgeting', 'Team Coordination'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'elena@jamilsmindset.com'
      },
      icon: Film
    },
    {
      id: 5,
      name: 'David Chen',
      role: 'Sound Designer',
      bio: 'Creative audio specialist who crafts immersive soundscapes that enhance storytelling and create emotional connections.',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      skills: ['Audio Production', 'Music Composition', 'Sound Effects'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@jamilsmindset.com'
      },
      icon: Music
    },
    {
      id: 6,
      name: 'Maya Patel',
      role: 'Creative Writer',
      bio: 'Talented screenwriter and creative consultant who develops compelling narratives that resonate with diverse audiences.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      skills: ['Screenwriting', 'Story Development', 'Character Design'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'maya@jamilsmindset.com'
      },
      icon: Edit
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="text-primary">Creative Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The passionate professionals behind every story we tell. Our diverse team brings 
              together years of experience, creative vision, and technical expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={member.id} 
                    className="bg-card/50 border-border hover:bg-card/80 transition-all duration-300 group animate-fade-in-up">
                <CardContent className="p-6">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <member.icon className="w-4 h-4 text-background" />
                    </div>
                  </div>

                  {/* Name and Role */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground text-sm mb-4 text-center">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs border-primary/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-card/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our <span className="text-primary">Creative Family</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're always looking for talented individuals who share our passion for meaningful storytelling. 
            Be part of a team that creates films with purpose and impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
              View Open Positions
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-background">
              Submit Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Makes Us <span className="text-primary">Different</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Film className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaborative Spirit</h3>
              <p className="text-muted-foreground">
                We believe in the power of collaboration, where every voice matters and creativity flourishes.
              </p>
            </div>

            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technical Excellence</h3>
              <p className="text-muted-foreground">
                Our commitment to using the latest technology and techniques ensures the highest quality output.
              </p>
            </div>

            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Creative Innovation</h3>
              <p className="text-muted-foreground">
                We constantly push creative boundaries to tell stories in new and compelling ways.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
