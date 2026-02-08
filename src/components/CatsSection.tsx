import { Hand, CameraOff, UtensilsCrossed, Heart, Sparkles, Fish, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import heroImage from "@/assets/hero-cafe.jpg"; // Placeholder if needed, but we use cat images
import catMochi from '@/assets/cat-mochi.jpg';
import catKuro from '@/assets/cat-kuro.jpg';
import catLuna from '@/assets/cat-luna.jpg';
import catCaramel from '@/assets/cat-caramel.jpg';
import catShadow from '@/assets/cat-shadow.jpg';
import catBiscuit from '@/assets/cat-biscuit.jpg';

interface CatProfile {
  name: string;
  personality: string;
  image: string;
  stats: {
    cuddles: number; // 1-5
    energy: number; // 1-5
    favorite: string; 
  };
}

const cats: CatProfile[] = [
  { 
    name: 'Mochi', 
    personality: 'The curious explorer who loves head scratches', 
    image: catMochi,
    stats: { cuddles: 5, energy: 3, favorite: "Creamy treats" }
  },
  { 
    name: 'Kuro', 
    personality: 'Our calm and dignified gentleman', 
    image: catKuro,
    stats: { cuddles: 3, energy: 2, favorite: "Window watching" } 
  },
  { 
    name: 'Luna', 
    personality: 'Playful and always ready for treats', 
    image: catLuna,
    stats: { cuddles: 4, energy: 5, favorite: "Feather toys" } 
  },
  { 
    name: 'Caramel', 
    personality: 'Sweet and loves to nap on laps', 
    image: catCaramel,
    stats: { cuddles: 5, energy: 1, favorite: "Warm blankets" } 
  },
  { 
    name: 'Shadow', 
    personality: 'Mysterious but surprisingly cuddly', 
    image: catShadow,
    stats: { cuddles: 2, energy: 4, favorite: "Cardboard boxes" } 
  },
  { 
    name: 'Biscuit', 
    personality: 'The friendliest greeter at the door', 
    image: catBiscuit,
    stats: { cuddles: 5, energy: 4, favorite: "Belly rubs" } 
  },
];

const houseRules = [
  { icon: Hand, title: "Gentle Touches Only", rule: "We love soft pets! Please don't pick us up or wake us if we're sleeping." },
  { icon: CameraOff, title: "No Flash Photos", rule: "Photos are paw-some, but bright lights hurt our eyes. Flash off, please!" },
  { icon: UtensilsCrossed, title: "Human Food is for Humans", rule: "Please don't share your treats with us, no matter how cute we look." },
  { icon: Heart, title: "Respect Our Space", rule: "If we walk away or hide, we need some alone time. Please let us be." },
];

const CatsSection = () => {
  return (
    <section id="cats" className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title text-foreground mb-4">Meet Our Cats</h2>
          <p className="section-subtitle mx-auto">
            Our resident felines are all rescued cats looking for love and
            companionship. Come say hello, they're excited to meet you!
          </p>
        </div>

        {/* Cat Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 sm:mb-20">
          {cats.map((cat, index) => (
            <CatCard key={index} cat={cat} />
          ))}
        </div>

        {/* House Rules */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-serif font-medium text-foreground text-center mb-8">
            House Rules
          </h3>
          <p className="text-center text-muted-foreground mb-8">
            To keep our cats happy and healthy, we kindly ask all guests to follow these simple guidelines.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {houseRules.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-primary/20 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.rule}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CatCard = ({ cat }: { cat: CatProfile }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseLeave={handleLeave}
      className="group h-[340px] sm:h-[350px] cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <div
        className={cn(
          "relative w-full h-full transition-all duration-500 preserve-3d",
          isFlipped ? "my-rotate-y-180" : ""
        )}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 backface-hidden rounded-lg overflow-hidden border border-border/50 bg-card"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="h-[60%] overflow-hidden">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[40%] p-4 text-center flex flex-col justify-center bg-card">
            <h3 className="font-serif font-medium text-lg text-foreground mb-1">
              {cat.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {cat.personality}
            </p>
            <p className="text-xs text-primary mt-2 flex items-center justify-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
              <Sparkles className="w-3 h-3" /> Tap to reveal stats
            </p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden rounded-lg overflow-hidden border border-border/50 bg-muted/30 p-6 flex flex-col justify-center items-center text-center my-rotate-y-180"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)" 
          }}
        >
          <h3 className="font-serif font-bold text-xl text-primary mb-4">{cat.name}'s Stats</h3>
          
          <div className="space-y-4 w-full">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Cuddles</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Heart 
                    key={i} 
                    className={cn(
                      "w-4 h-4", 
                      i < cat.stats.cuddles ? "fill-primary text-primary" : "text-muted-foreground/30"
                    )} 
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Energy</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Sun 
                    key={i} 
                    className={cn(
                      "w-4 h-4", 
                      i < cat.stats.energy ? "fill-orange-400 text-orange-400" : "text-muted-foreground/30"
                    )} 
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 pt-2 border-t border-border/50">
              <span className="text-sm font-medium flex items-center gap-2">
                <Fish className="w-4 h-4 text-primary" /> Favorite:
              </span>
              <span className="text-sm text-muted-foreground text-right">{cat.stats.favorite}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatsSection;
