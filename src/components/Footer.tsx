const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground dark:bg-card text-background dark:text-foreground py-12 sm:py-16 text-center">
      <div className="section-container">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Logo & Info */}
          <div className="flex flex-col items-center max-w-lg mx-auto">
            <h3 className="text-2xl font-serif font-medium mb-4">
              Neko & Kopi Catfé
            </h3>
            <p className="text-background/70 dark:text-muted-foreground text-sm leading-relaxed">
              A cozy cat café where coffee meets cuddles. Come for the coffee,
              stay for the cats.
            </p>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-background/20 dark:border-border/10 w-full max-w-md mx-auto">
            <p className="text-sm text-background/50 dark:text-muted-foreground/50">
              © {currentYear} Neko & Kopi Catfé. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

