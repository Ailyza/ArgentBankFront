import React from "react";
import "./features.css";
import Feature from "../../components/Feature/Feature";

// Sample feature data
const features = [
  {
    title: "You are our #1 priority",
    image: "icon-chat.webp",
    alt: "chat icon",
    texte:
      "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    title: "More savings means higher rates",
    image: "icon-money.webp",
    alt: "money icon",
    texte: "The more you save with us, the higher your interest rate will be!",
  },
  {
    title: "Security you can trust",
    image: "icon-security.webp",
    alt: "security icon",
    texte:
      "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {features.map((feature, index) => (
        <Feature
          key={index}
          title={feature.title}
          image={feature.image}
          alt={feature.alt}
          text={feature.texte}
        />
      ))}
    </section>
  );
}

export default Features;
