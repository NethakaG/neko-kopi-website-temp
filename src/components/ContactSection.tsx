import { useState } from "react";
import { MapPin, Clock, Phone, MessageCircle, Star, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    review: "",
    visitDate: "",
    recommend: "",
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.rating === 0) {
      toast({
        title: "Rating required",
        description: "Please select a star rating.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Review submitted!",
      description: "Thanks for sharing your experience.",
    });

    setFormData({ 
      name: "", 
      rating: 0, 
      review: "", 
      visitDate: "", 
      recommend: "" 
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title text-foreground mb-4">Leave a Review</h2>
          <p className="section-subtitle mx-auto">
            We value your feedback! Tell us about your visit to Neko & Kopi Catfé.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info & Map (Kept as sidebar context) */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    319/4, 05 Nawala Rd
                    <br />
                    Colombo 00500
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-primary/80 transition-colors mt-1 inline-block"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-primary">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    Opening Hours
                  </h4>
                  <p className="text-muted-foreground">
                    Monday – Tuesday: Closed
                    <br />
                    Wednesday – Friday: 9am – 7pm
                    <br />
                    Saturday – Sunday: 9am – 9pm
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Phone</h4>
                  <a
                    href="tel:+941231231234"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    (+94) 123 123 1234
                  </a>
                </div>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              <a
                href="https://wa.me/941231231234"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>

            <div className="aspect-video rounded-lg overflow-hidden border border-border bg-muted">
              <iframe
                src="https://www.google.com/maps?q=Neko+and+Kopi%2C+319%2F4%2C+05+Nawala+Rd%2C+Colombo+00500%2C+Sri+Lanka&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Neko & Kopi Catfé Location"
              />
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <a
                href="https://www.instagram.com/nekocafelk/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@nekoandkopi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Review Form */}
          <div className="bg-card border border-border/50 rounded-lg p-6 sm:p-8">
            <h3 className="text-xl font-serif font-medium text-foreground mb-6">
              Write a Review
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Rating */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Rating <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        className={cn(
                          "w-8 h-8 transition-colors",
                          (hoveredRating ? star <= hoveredRating : star <= formData.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground/40"
                        )}
                        strokeWidth={1.5}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-background border-border focus:border-primary focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              {/* Visit Date (Optional) */}
              <div>
                <label
                  htmlFor="visitDate"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Date of Visit <span className="text-muted-foreground font-normal ml-1">(Optional)</span>
                </label>
                <div className="relative">
                  <Input
                    id="visitDate"
                    name="visitDate"
                    type="date"
                    value={formData.visitDate}
                    onChange={(e) =>
                      setFormData({ ...formData, visitDate: e.target.value })
                    }
                    className="bg-background border-border focus:border-primary focus:ring-primary pl-10"
                  />
                  <Calendar className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Recommendation (Optional) */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Would you recommend us? <span className="text-muted-foreground font-normal ml-1">(Optional)</span>
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="recommend"
                      value="yes"
                      checked={formData.recommend === "yes"}
                      onChange={(e) => setFormData({ ...formData, recommend: e.target.value })}
                      className="text-primary focus:ring-primary"
                    />
                    <span className="text-sm">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="recommend"
                      value="no"
                      checked={formData.recommend === "no"}
                      onChange={(e) => setFormData({ ...formData, recommend: e.target.value })}
                      className="text-primary focus:ring-primary"
                    />
                    <span className="text-sm">No</span>
                  </label>
                </div>
              </div>

              {/* Review Text */}
              <div>
                <label
                  htmlFor="review"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Your Review <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="review"
                  name="review"
                  required
                  rows={4}
                  value={formData.review}
                  onChange={(e) =>
                    setFormData({ ...formData, review: e.target.value })
                  }
                  className="bg-background border-border focus:border-primary focus:ring-primary resize-none"
                  placeholder="What did you like? What can we improve?"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isSubmitting ? "Submitting..." : "Submit Review"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
