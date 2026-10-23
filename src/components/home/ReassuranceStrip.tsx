import React from "react";
import { Heart, Home, Users, MessageSquare } from "lucide-react";

export const ReassuranceStrip: React.FC = () => {
  const items = [
    {
      icon: Heart,
      title: "Personalised Care",
      subtitle: "Tailored to individual routines & choices",
    },
    {
      icon: Home,
      title: "Comfortable Accommodation",
      subtitle: "Ensuite bedrooms & tranquil gardens",
    },
    {
      icon: Users,
      title: "Activities and Companionship",
      subtitle: "Purposeful hobbies & daily connections",
    },
    {
      icon: MessageSquare,
      title: "Family Communication",
      subtitle: "Open doors, transparent care updates",
    },
  ];

  return (
    <section className="bg-sage-100/80 border-y border-border/80 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 px-3 py-1.5"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-border/80 text-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-foreground leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
