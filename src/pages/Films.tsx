
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Calendar, Clock, Award, ExternalLink } from 'lucide-react';

const Films = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Documentary', 'Short Film', 'Feature Film', 'Commercial'];

  const films = [
    {
      id: 1,
      title: 'Breaking Barriers',
      category: 'Documentary',
      year: 2024,
      duration: '85 min',
      thumbnail: 'https://images.unsplash.com/photo-1489599514054-ac71d7c7c46a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A powerful documentary exploring social barriers and the people who overcome them.',
      awards: ['Best Documentary - Film Festival 2024'],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 2,
      title: 'The Last Stand',
      category: 'Short Film',
      year: 2023,
      duration: '22 min',
      thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A gripping short film about resilience in the face of adversity.',
      awards: ['Audience Choice Award'],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 3,
      title: 'Mindshift',
      category: 'Feature Film',
      year: 2023,
      duration: '118 min',
      thumbnail: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A thought-provoking feature film about personal transformation and growth.',
      awards: ['Best Screenplay', 'Outstanding Cinematography'],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 4,
      title: 'Urban Stories',
      category: 'Documentary',
      year: 2022,
      duration: '95 min',
      thumbnail: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Exploring the untold stories of urban communities and their struggles.',
      awards: ['Social Impact Award'],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 5,
      title: 'Brand Revolution',
      category: 'Commercial',
      year: 2024,
      duration: '3 min',
      thumbnail: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A creative commercial showcasing brand transformation and innovation.',
      awards: [],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 6,
      title: 'Silent Voices',
      category: 'Short Film',
      year: 2022,
      duration: '18 min',
      thumbnail: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A moving short film giving voice to the voiceless in society.',
      awards: ['Best Director Award'],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ];

  const filteredFilms = selectedCategory === 'All' 
    ? films 
    : films.filter(film => film.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Film Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our collection of award-winning films, documentaries, and commercial projects 
              that showcase our commitment to powerful storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90" 
                  : "border-primary text-primary hover:bg-primary hover:text-background"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Films Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFilms.map((film, index) => (
              <Card key={film.id} className="bg-card/50 border-border hover:bg-card/80 transition-all duration-300 group animate-fade-in-up">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={film.thumbnail} 
                    alt={film.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Trailer
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-primary/90">
                    {film.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{film.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{film.description}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{film.year}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{film.duration}</span>
                    </div>
                  </div>

                  {film.awards.length > 0 && (
                    <div className="mb-4">
                      {film.awards.map((award, awardIndex) => (
                        <div key={awardIndex} className="flex items-center space-x-2 text-sm text-primary">
                          <Award className="w-4 h-4" />
                          <span>{award}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-background">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-card/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a Story to Tell?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's collaborate to bring your vision to life with the same passion and quality 
            you see in our portfolio.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Films;
