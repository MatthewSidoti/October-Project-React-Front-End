import React from 'react';
import './styles/Menu.css';



function Menu() {
  const menuItems = [
  { category: "Starter Revolt", items: ["Zesty Jalapeño Poppers", "Chaotic Nachos"] },
  { category: "Main Distortions", items: ["Spiked 'Slam' Burgers", "Riot Ribs", "Vegan Chaos Wraps"] },
  { category: "Sid’s Sides", items: ["Anarchy Fries", "Rebel Slaw", "Punked-Out Mac ‘n Cheese"] },
  { category: "Dessert Breakdown", items: ["DIY Sundae Smash", "Blackout Brownies"] },
  { category: "Drinks", items: ["Rebellion Red Ale", "Power Punk Smoothie", "Rock ‘n Cola"] },
];
  return (
    <section id="menu" className="menu">
      <h2>The Bites</h2>
      {menuItems.map((section) => (
        <div key={section.category} className="menu-category">
          <h3>{section.category}</h3>
          <ul>
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Menu;
