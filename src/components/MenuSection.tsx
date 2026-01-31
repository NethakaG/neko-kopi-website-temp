// Menu data structure for developers
// Sample JSON structure:
// [
//   { "category": "Coffee", "items": [{ "name": "Latte", "description": "Smooth espresso with steamed milk", "price": "$5.50" }] }
// ]

interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    category: 'Coffee',
    items: [
      { name: 'Espresso', description: 'Rich and bold', price: '$4.00' },
      { name: 'Latte', description: 'Smooth espresso with steamed milk', price: '$5.50' },
      { name: 'Cappuccino', description: 'Classic Italian-style', price: '$5.00' },
      { name: 'Flat White', description: 'Double shot with velvety microfoam', price: '$5.50' },
      { name: 'Mocha', description: 'Espresso with chocolate and milk', price: '$6.00' },
      { name: 'Cold Brew', description: 'Slow-steeped for 18 hours', price: '$5.50' },
    ],
  },
  {
    category: 'Tea',
    items: [
      { name: 'Matcha Latte', description: 'Premium Japanese matcha', price: '$6.00' },
      { name: 'Hojicha Latte', description: 'Roasted green tea latte', price: '$5.50' },
      { name: 'Earl Grey', description: 'Bergamot-infused black tea', price: '$4.00' },
      { name: 'Chamomile', description: 'Soothing herbal blend', price: '$4.00' },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Cat Paw Cookies', description: 'Adorable butter cookies', price: '$4.50' },
      { name: 'Cheesecake Slice', description: 'Creamy New York style', price: '$7.00' },
      { name: 'Tiramisu', description: 'Coffee-soaked Italian classic', price: '$7.50' },
      { name: 'Matcha Roll Cake', description: 'Light and fluffy', price: '$6.50' },
    ],
  },
  {
    category: 'Savoury',
    items: [
      { name: 'Avocado Toast', description: 'Sourdough with fresh avocado', price: '$9.00' },
      { name: 'Croissant Sandwich', description: 'Ham, cheese, and greens', price: '$8.50' },
      { name: 'Quiche of the Day', description: 'Ask your server', price: '$8.00' },
      { name: 'Soup & Bread', description: 'Seasonal homemade soup', price: '$7.50' },
    ],
  },
  {
    category: 'Specials',
    items: [
      { name: 'Neko Latte', description: 'Latte with cat-themed latte art', price: '$7.00' },
      { name: 'Catnip Tea', description: 'Relaxing herbal blend (for humans!)', price: '$5.00' },
    ],
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title text-foreground mb-4">Our Menu</h2>
          <p className="section-subtitle mx-auto">
            Handcrafted drinks and homemade treats, made with love
          </p>
        </div>

        {/* Menu Categories */}
        <div className="max-w-3xl mx-auto space-y-10 sm:space-y-12">
          {menuData.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <h3 className="text-xl sm:text-2xl font-serif font-medium text-foreground mb-6 pb-2 border-b border-border">
                {category.category}
              </h3>

              {/* Menu Items */}
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-baseline justify-between gap-4"
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
                    <span className="text-primary font-medium whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          Prices include tax. Ask about our daily specials and seasonal offerings.
        </p>
      </div>
    </section>
  );
};

export default MenuSection;
