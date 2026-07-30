import { useState } from "react";

import espresso from "../assets/images/coffee/espresso.jpg";
import cappuccino from "../assets/images/coffee/cappuccino.jpg";
import latte from "../assets/images/coffee/latte.jpg";
import mocha from "../assets/images/coffee/mocha.jpg";
import coldBrew from "../assets/images/coffee/cold-brew.jpg";
import flatWhite from "../assets/images/coffee/flat-white.jpg";

import brownie from "../assets/images/desserts/brownie.jpg";
import cake from "../assets/images/desserts/cake.jpg";
import cheesecake from "../assets/images/desserts/cheesecake.jpg";
import croissant from "../assets/images/desserts/croissant.jpg";

const coffeeItems = [
  {
    name: "Espresso",
    image: espresso,
    price: "₹220",
    description: "Rich and bold espresso with a smooth finish.",
  },
  {
    name: "Cappuccino",
    image: cappuccino,
    price: "₹280",
    description: "Creamy milk foam blended with premium espresso.",
  },
  {
    name: "Latte",
    image: latte,
    price: "₹300",
    description: "Smooth steamed milk with a balanced flavor.",
  },
  {
    name: "Mocha",
    image: mocha,
    price: "₹340",
    description: "Chocolate and espresso in perfect harmony.",
  },
  {
    name: "Cold Brew",
    image: coldBrew,
    price: "₹320",
    description: "Slow brewed for a refreshing coffee experience.",
  },
  {
    name: "Flat White",
    image: flatWhite,
    price: "₹290",
    description: "Velvety microfoam with rich espresso.",
  },
];

const dessertItems = [
  {
    name: "Chocolate Brownie",
    image: brownie,
    price: "₹180",
    description: "Warm, rich and perfectly chocolatey.",
  },
  {
    name: "Chocolate Cake",
    image: cake,
    price: "₹240",
    description: "Soft chocolate sponge with creamy layers.",
  },
  {
    name: "Cheesecake",
    image: cheesecake,
    price: "₹260",
    description: "Classic creamy cheesecake with a buttery crust.",
  },
  {
    name: "Butter Croissant",
    image: croissant,
    price: "₹150",
    description: "Freshly baked, flaky and buttery.",
  },
];

function Menu() {
  const [activeTab, setActiveTab] = useState("coffee");

  const items =
    activeTab === "coffee" ? coffeeItems : dessertItems;

  return (
    <section
      id="menu"
      className="bg-[#111111] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-amber-400 uppercase tracking-[5px] mb-3">
            Our Menu
          </p>

          <h2 className="text-5xl font-bold">
            Crafted with Passion
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Every drink and dessert is prepared with premium
            ingredients and served fresh every day.
          </p>

        </div>

        {/* Tabs */}

        <div className="flex justify-center gap-5 mb-16">

          <button
            onClick={() => setActiveTab("coffee")}
            className={`px-8 py-3 rounded-full font-semibold transition ${
              activeTab === "coffee"
                ? "bg-amber-500 text-black"
                : "bg-[#1a1a1a] text-white hover:bg-[#252525]"
            }`}
          >
            ☕ Coffee
          </button>

          <button
            onClick={() => setActiveTab("dessert")}
            className={`px-8 py-3 rounded-full font-semibold transition ${
              activeTab === "dessert"
                ? "bg-amber-500 text-black"
                : "bg-[#1a1a1a] text-white hover:bg-[#252525]"
            }`}
          >
            🍰 Desserts
          </button>

        </div>

        {/* Cards will come here */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {items.map((item, index) => (

            <div
              key={index}
              className="bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-xl border border-gray-800 hover:border-amber-500 hover:-translate-y-2 transition-all duration-300"
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-72 object-cover transition duration-500 hover:scale-110"
                />

                <span className="absolute top-4 left-4 bg-amber-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                  {activeTab === "coffee" ? "Coffee" : "Dessert"}
                </span>

              </div>

              {/* Content */}

              <div className="p-7">

                <div className="flex justify-between items-center mb-4">

                  <h3 className="text-2xl font-bold">
                    {item.name}
                  </h3>

                  <span className="text-amber-400 font-bold text-lg">
                    {item.price}
                  </span>

                </div>

                <p className="text-gray-400 leading-7">
                  {item.description}
                </p>

                <button
                  className="mt-8 w-full bg-amber-500 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/30 text-black font-semibold py-3 rounded-full transition duration-300"
                >
                  Order Now
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Menu;