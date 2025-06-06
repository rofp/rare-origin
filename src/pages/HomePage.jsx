import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Sprouted Almond Crunch",
    description: "Air-roasted sprouted almonds with natural salt.",
    price: 299,
    image: "/products/almond.jpg",
  },
  {
    id: 2,
    name: "Organic Banana Powder",
    description: "Made from sun-dried ripe bananas. 100% pure.",
    price: 199,
    image: "/products/banana.jpg",
  },
  {
    id: 3,
    name: "Sprouted Cashew Delight",
    description: "Cashews with earthy spices, lightly roasted.",
    price: 349,
    image: "/products/cashew.jpg",
  },
];

export default function HomePage() {
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState({});

  const handleQtyChange = (id, amount) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + amount),
    }));
  };

  const handleAddToCart = (product) => {
    const qty = quantities[product.id] || 1;
    addToCart({ ...product, qty });
  };

  return (
    <div className="min-h-screen bg-[#fdfaf3] text-green-900 font-sans">
      {/* HERO */}
      <div className="text-center py-12">
        <img src="/RareOriginLogo.png" alt="Rare Origin Logo" className="w-24 mx-auto mb-4" />
        <h1 className="text-4xl font-bold">RARE ORIGIN</h1>
        <p className="text-md text-green-700 italic mt-2">
          Cultivating Nature, Processing Purity.
        </p>
      </div>

      {/* PRODUCTS */}
      <div className="px-6 pb-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Bestsellers</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-lg font-bold text-green-800 mt-3">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-green-700 font-bold text-lg">₹{product.price}</span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleQtyChange(product.id, -1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="w-6 text-center">
                      {quantities[product.id] || 1}
                    </span>
                    <button
                      onClick={() => handleQtyChange(product.id, 1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="ml-2 px-3 py-2 text-white bg-green-700 rounded-full text-sm hover:bg-green-800"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
