import React from "react";
import { cn } from "@/lib/utils";
// Supports categories with items, subcategories, and add-ons

interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  prices?: {
    hot?: string;
    cold?: string;
  };
}

interface Addon {
  name: string;
  price: string;
}

interface Subcategory {
  title: string;
  items: MenuItem[];
  note?: string;
}

interface MenuCategory {
  category: string;
  intro?: string;
  items?: MenuItem[];
  subcategories?: Subcategory[];
  addons?: Addon[];
  addonTitle?: string;
  note?: string;
}

const menuData: MenuCategory[] = [
  {
    category: "Snacks",
    intro: "All snacks and light bites in one place.",
    subcategories: [
      {
        title: "Korean Fried Chicken",
        items: [
          { name: "6 pcs", price: "LKR 1,500" },
          { name: "12 pcs", price: "LKR 2,540" },
        ],
      },
      {
        title: "Mini Tteokbokki",
        items: [
          { name: "With Gochujang", price: "LKR 1,890" },
          { name: "With Half Boiled Egg", price: "LKR 1,990" },
        ],
      },
      {
        title: "Spicy Fried Tofu",
        items: [
          { name: "6 pcs", price: "LKR 1,200" },
          { name: "12 pcs", price: "LKR 2,200" },
        ],
      },
      {
        title: "Battered Chili Prawns",
        items: [
          { name: "6 pcs", price: "LKR 1,890" },
          { name: "12 pcs", price: "LKR 3,450" },
        ],
      },
      {
        title: "Chicken Katsu Bucket",
        items: [
          { name: "3 pcs", price: "LKR 1,720" },
          { name: "6 pcs", price: "LKR 2,300" },
          { name: "12 pcs", price: "LKR 3,640" },
        ],
      },
    ],
    addons: [
      { name: "Kochchi", price: "+300" },
      { name: "Buldak", price: "+500" },
      { name: "Mayonnaise", price: "+310" },
      { name: "Mozzarella", price: "+800" },
    ],
    addonTitle: "Snack Add-ons",
    note: "",
  },
  {
    category: "More Snacks",
    subcategories: [
      {
        title: "French Fries",
        items: [
          { name: "Just Fries", price: "LKR 800" },
          { name: "Loaded Katsu Fries", price: "LKR 2,100" },
        ],
      },
      {
        title: "Dumplings (Steamed or Fried)",
        items: [
          { name: "Vegetable (6 pcs)", price: "LKR 1,790" },
          { name: "Chicken (6 pcs)", price: "LKR 2,600" },
          { name: "Seafood (6 pcs)", price: "LKR 3,200" },
        ],
      },
      {
        title: "Mini Onigiri",
        items: [
          { name: "Plain", price: "LKR 550" },
          { name: "Tuna & Mayo", price: "LKR 1,380" },
          { name: "Spicy Meaty", price: "LKR 2,100" },
        ],
      },
      {
        title: "Steamed Rice Options",
        items: [
          { name: "Plain Sushi Rice", price: "LKR 550" },
          { name: "Garden Salad Bowl", price: "LKR 800" },
          { name: "Japanese Curry Cup", price: "LKR 610" },
        ],
      },
      {
        title: "Mini Corn Dog",
        items: [{ name: "Classic Corn Dog", price: "LKR 900" }],
      },
    ],
  },
  {
    category: "Stews",
    subcategories: [
      {
        title: "Korean Soft Tofu Stew",
        items: [
          { name: "Tofu / Egg", price: "LKR 1,350" },
          { name: "Chicken", price: "LKR 1,860" },
          { name: "Seafood", price: "LKR 2,100" },
          { name: "All-in-One", price: "LKR 3,100" },
        ],
      },
    ],
    addons: [
      { name: "Sushi Rice", price: "+550" },
      { name: "Kimchi", price: "+400" },
    ],
    addonTitle: "Stew Add-ons",
  },
  {
    category: "Sando (Japanese Sandwiches)",
    items: [
      { name: "Mayo & Egg", price: "LKR 1,440" },
      { name: "Fried Double Katsu", price: "LKR 2,250" },
      { name: "Cheesy Coleslaw", price: "LKR 1,100" },
      { name: "Tuna & Corn", price: "LKR 2,520" },
    ],
    addons: [
      { name: "Kochchi", price: "+300" },
      { name: "Buldak", price: "+500" },
      { name: "Mozzarella", price: "+800" },
      { name: "Mayonnaise", price: "+310" },
    ],
    addonTitle: "Sando Add-ons",
  },
  {
    category: "Japanese Curry Rice",
    items: [
      { name: "Vegetable", price: "LKR 1,390" },
      { name: "Fried Katsu", price: "LKR 1,850" },
      { name: "Egg", price: "LKR 1,670" },
      { name: "Boiled Chicken", price: "LKR 2,800" },
      { name: "Seafood", price: "LKR 3,150" },
    ],
  },
  {
    category: "Kids' Bento Box",
    items: [
      {
        name: "Kids' Bento Box",
        description:
          "Includes fries, boiled egg, veggies, nuggets, sticky rice & strawberries with Nutella.",
        price: "LKR 2,800",
      },
    ],
  },
  {
    category: "Ramyeon (Build Your Own)",
    subcategories: [
      {
        title: "Base",
        items: [
          { name: "Jjajangmyeong", price: "LKR 1,000" },
          { name: "Buldak Black", price: "LKR 1,200" },
        ],
      },
      {
        title: "Spice Level",
        items: [
          { name: "Normal", price: "Included" },
          { name: "Mild Chilli", price: "+200" },
          { name: "Spicy Kochchi", price: "+300" },
          { name: "Ultra Shinigami", price: "+500" },
        ],
      },
      {
        title: "Broth",
        items: [
          { name: "No Broth", price: "" },
          { name: "Medium Broth", price: "" },
          { name: "Full Broth", price: "" },
        ],
      },
      {
        title: "Add-ons",
        items: [
          { name: "Sweet Corn", price: "+300" },
          { name: "Leeks", price: "+180" },
          { name: "Cabbage", price: "+180" },
          { name: "Kimchi", price: "+420" },
          { name: "Mini Tteokbokki", price: "+650" },
        ],
      },
    ],
  },
  {
    category: "Add-ons",
    intro: "Add these to your order.",
    items: [
      { name: "Tofu (30g)", price: "LKR 500" },
      { name: "Boiled Egg", price: "LKR 200" },
      { name: "Chicken Katsu", price: "LKR 650" },
      { name: "Cuttlefish (30g)", price: "LKR 580" },
      { name: "Fish Goujons", price: "LKR 550" },
      { name: "Fried Prawns (3 pcs)", price: "LKR 820" },
      { name: "Chicken Breast Slice (2 pcs)", price: "LKR 970" },
      { name: "Tuna (60g)", price: "LKR 380" },
      { name: "Mayo", price: "LKR 400" },
      { name: "Soya Sauce", price: "LKR 200" },
      { name: "Gochujang Paste", price: "LKR 410" },
    ],
  },
  {
    category: "Beverages",
    intro: "Hot, cold, and café specials.",
    subcategories: [
      {
        title: "Tea & Hot Drinks",
        items: [
          { name: "Plain Tea", price: "LKR 200" },
          { name: "Ginger Tea", price: "LKR 220" },
          { name: "Milk Tea", price: "LKR 280" },
          { name: "Tinkiri Tea", price: "LKR 300" },
          { name: "Green Tea", price: "LKR 200" },
          { name: "Hot Chocolate", price: "LKR 450" },
          { name: "Hot Milo", price: "LKR 480" },
        ],
      },
      {
        title: "Shakes",
        items: [
          { name: "Chocolate Shake", price: "LKR 820" },
          { name: "Strawberry Shake", price: "LKR 800" },
          { name: "Vanilla Shake", price: "LKR 750" },
        ],
      },
      {
        title: "Frappes",
        items: [
          { name: "Milo Frappe", price: "LKR 920" },
          { name: "Nutella Frappe", price: "LKR 1,100" },
        ],
      },
      {
        title: "Neko Specials",
        items: [
          { name: "Dalgona Iced Kopi", price: "LKR 650" },
          { name: "Vietnamese Iced Kopi", price: "LKR 760" },
          { name: "Iced Coffee Float", price: "LKR 820" },
          { name: "Earth Matcha Latte (Hot/Cold)", price: "LKR 1,280" },
          { name: "Milo Mocha (Hot/Cold)", price: "LKR 1,200" },
          { name: "Café Bombom (Hot/Cold)", price: "LKR 880" },
          { name: "Egg Kopi (Hot)", price: "LKR 850" },
        ],
      },
      {
        title: "Fresh Juices",
        items: [
          { name: "Lime", price: "LKR 650" },
          { name: "Watermelon", price: "LKR 600" },
          { name: "Passion Fruit", price: "LKR 620" },
        ],
      },
      {
        title: "Detox Drinks",
        items: [
          { name: "Mint & Cucumber", price: "LKR 680" },
          { name: "Carrot & Ginger", price: "LKR 720" },
        ],
      },
      {
        title: "Soda",
        items: [
          { name: "Cola", price: "LKR 200" },
          { name: "Sprite", price: "LKR 200" },
          { name: "Coke Float", price: "LKR 340" },
          { name: "Lime Sprite", price: "LKR 400" },
        ],
      },
      {
        title: "Espresso Bar",
        items: [
          { name: "Single Espresso", prices: { hot: "LKR 400", cold: "LKR 450" } },
          { name: "Double Espresso", prices: { hot: "LKR 550", cold: "LKR 600" } },
          { name: "Americano", prices: { hot: "LKR 590", cold: "LKR 690" } },
          { name: "Mocha", prices: { hot: "LKR 750", cold: "LKR 850" } },
          { name: "Cappuccino", prices: { hot: "LKR 730", cold: "LKR 830" } },
          { name: "Latte", prices: { hot: "LKR 800", cold: "LKR 900" } },
          { name: "Bombom", prices: { hot: "LKR 880", cold: "LKR 980" } },
          { name: "Matcha Latte", prices: { hot: "LKR 1,060", cold: "LKR 1,160" } },
          { name: "Affogato", price: "LKR 890" },
        ],
        note: "Hot/Cold variants listed separately for clarity.",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Cookie Sando", price: "LKR 1,000" },
      { name: "Seasonal Mochi with Ice Cream (2 pcs)", price: "LKR 1,620" },
      { name: "Nutella Mini Donut Platter (8 pcs)", price: "LKR 1,680" },
      { name: "Chocolate Biscuit Pudin", price: "LKR 880" },
      { name: "Ichigo Sando", price: "LKR 1,350" },
    ],
  },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>(menuData[0].category);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.getAttribute("data-category") || "");
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    menuData.forEach((category) => {
      const element = document.getElementById(`category-${category.category.replace(/\s+/g, '-').toLowerCase()}`);
      if (element) observer.observe(element);
    });

    // Actually, let's select by attribute to be dynamic
    const sections = document.querySelectorAll("[data-category]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Sync horizontal scroll with active category
  React.useEffect(() => {
    if (activeCategory && scrollContainerRef.current) {
      const activeBtn = Array.from(scrollContainerRef.current.children[0].children).find(
        (child) => child.textContent === activeCategory
      ) as HTMLElement;

      if (activeBtn) {
        const container = scrollContainerRef.current;
        const scrollLeft = activeBtn.offsetLeft - container.offsetLeft - container.offsetWidth / 2 + activeBtn.offsetWidth / 2;
        
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeCategory]);

  const scrollToCategory = (categoryName: string) => {
    const id = `category-${categoryName.replace(/\s+/g, '-').toLowerCase()}`;
    const element = document.getElementById(id);
    if (element) {
      // Use scrollIntoView which respects scroll-margin-top
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title text-foreground mb-4">Our Menu</h2>
          <p className="section-subtitle mx-auto">
            Asian fusion delights crafted with authentic flavors
          </p>
        </div>

        {/* Menu Categories */}
        <div 
          ref={scrollContainerRef}
          className="sticky top-16 sm:top-20 z-40 py-4 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto custom-scrollbar bg-transparent"
        >
          <div className="flex gap-2 sm:gap-4 min-w-max">
            {menuData.map((category) => (
              <button
                key={category.category}
                onClick={() => scrollToCategory(category.category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap",
                  activeCategory === category.category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                )}
              >
                {category.category}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
          {menuData.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              id={`category-${category.category.replace(/\s+/g, '-').toLowerCase()}`}
              data-category={category.category}
              className="scroll-mt-40 sm:scroll-mt-44"
            >
              {/* Category Header */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground mb-2">
                  {category.category}
                </h3>
                {category.intro && (
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {category.intro}
                  </p>
                )}
              </div>

              {/* Subcategories */}
              {category.subcategories && (
                <div className="space-y-8">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <div key={subIndex} className="pl-0 sm:pl-4">
                      <h4 className="text-lg sm:text-xl font-medium text-foreground mb-4 pb-2 border-b border-border/50">
                        {subcategory.title}
                      </h4>
                      {subcategory.title === "Espresso Bar" ? (
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="border-b border-border/50 text-muted-foreground text-sm">
                                <th className="py-2 font-medium">Drink</th>
                                <th className="py-2 font-medium text-right">Hot</th>
                                <th className="py-2 font-medium text-right">Cold</th>
                              </tr>
                            </thead>
                            <tbody>
                              {subcategory.items.map((item, itemIndex) => (
                                <tr
                                  key={itemIndex}
                                  className="border-b border-border/10 last:border-0 hover:bg-muted/50 transition-colors"
                                >
                                  <td className="py-2 font-medium text-foreground">
                                    {item.name}
                                  </td>
                                  <td className="py-2 text-right text-primary font-semibold text-sm">
                                    {item.prices?.hot || (item.price || "-")}
                                  </td>
                                  <td className="py-2 text-right text-primary font-semibold text-sm">
                                    {item.prices?.cold || "-"}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {subcategory.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex items-baseline justify-between gap-4 hover:bg-muted/50 transition-colors p-2 -mx-2 rounded-md"
                            >
                              <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2">
                                  <span className="font-medium text-foreground">
                                    {item.name}
                                  </span>
                                  {item.description && (
                                    <span className="hidden sm:inline text-sm text-muted-foreground">
                                      — {item.description}
                                    </span>
                                  )}
                                </div>
                                {item.description && (
                                  <p className="sm:hidden text-sm text-muted-foreground mt-0.5">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                              {item.price && (
                                <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">
                                  {item.price}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                      {subcategory.note && (
                        <p className="text-xs text-muted-foreground italic mt-3">
                          {subcategory.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Direct Items (no subcategories) */}
              {category.items && (
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-baseline justify-between gap-4 hover:bg-muted/50 transition-colors p-2 -mx-2 rounded-md"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2">
                          <span className="font-medium text-foreground">
                            {item.name}
                          </span>
                          {item.description && (
                            <span className="hidden sm:inline text-sm text-muted-foreground">
                              — {item.description}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="sm:hidden text-sm text-muted-foreground mt-0.5">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Add-ons */}
              {category.addons && category.addons.length > 0 && (
                <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border/50">
                  <h5 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    {category.addonTitle || "Add-ons"}
                  </h5>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {category.addons.map((addon, addonIndex) => (
                      <div
                        key={addonIndex}
                        className="flex items-center justify-between text-sm bg-background/50 rounded px-3 py-2"
                      >
                        <span className="text-muted-foreground">
                          {addon.name}
                        </span>
                        <span className="text-primary font-medium ml-2">
                          {addon.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Category Note */}
              {category.note && (
                <p className="text-xs text-muted-foreground italic mt-4">
                  {category.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-xs text-muted-foreground">
              All prices are in Sri Lankan Rupees (LKR). Prices include tax.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
