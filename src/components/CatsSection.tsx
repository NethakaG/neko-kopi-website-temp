import { Hand, CameraOff, UtensilsCrossed, Heart } from 'lucide-react';
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
}

const cats: CatProfile[] = [
  { name: 'Mochi', personality: 'The curious explorer who loves head scratches', image: catMochi },
  { name: 'Kuro', personality: 'Our calm and dignified gentleman', image: catKuro },
  { name: 'Luna', personality: 'Playful and always ready for treats', image: catLuna },
  { name: 'Caramel', personality: 'Sweet and loves to nap on laps', image: catCaramel },
  { name: 'Shadow', personality: 'Mysterious but surprisingly cuddly', image: catShadow },
  { name: 'Biscuit', personality: 'The friendliest greeter at the door', image: catBiscuit },
];

const houseRules = [
  { icon: Hand, rule: 'Be gentle with our cats' },
  { icon: CameraOff, rule: 'No flash photography' },
  { icon: UtensilsCrossed, rule: "Please don't feed without permission" },
  { icon: Heart, rule: 'Respect their space when resting' },
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
            companionship. Come say hello—they're excited to meet you!
          </p>
        </div>

        {/* Cat Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {cats.map((cat, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg bg-card border border-border/50 card-hover"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-serif font-medium text-lg text-foreground mb-1">
                  {cat.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {cat.personality}
                </p>
              </div>
            </div>
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
                className="flex items-center gap-4 p-4 rounded-lg bg-muted/50"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-primary">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-foreground">{item.rule}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatsSection;
