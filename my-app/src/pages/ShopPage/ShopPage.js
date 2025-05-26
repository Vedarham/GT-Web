import React, { useState } from 'react';
import './ShopPage.style.css';

const shopItems = [
  {
    id: 1,
    title: 'Gaming Headset',
    model: 'GHX-300',
    priceINR: 3500,
    priceTrophies: 150,
    image: 'https://assets2.razerzone.com/images/pnx.assets/57c2af30b5d9a2b699b3e896b788e00f/headset-landingpg-500x500-blacksharkv2pro2023.jpg',
  },
  {
    id: 2,
    title: 'Mechanical Keyboard',
    model: 'MKX-200',
    priceINR: 5000,
    priceTrophies: 200,
    image: 'https://images-cdn.ubuy.co.in/6568bc24713b5279ac360012-hk-gaming-gk61-mechanical-gaming.jpg',
  },
  {
    id: 3,
    title: 'Gaming Mouse',
    model: 'GMX-100',
    priceINR: 2000,
    priceTrophies: 100,
    image: 'https://pcbworldtech.com/wp-content/uploads/2020/09/RAZER-BASILISK-X-HYPERSPEED-WIRELESS-ERGONOMIC-GAMING-MOUSE-3.jpg',
  },
  {
    id: 4,
    title: 'VR Headset',
    model: 'VRX-500',
    priceINR: 12000,
    priceTrophies: 600,
    image: 'https://i.pcmag.com/imagery/reviews/063ep8ylYBmRGSXkZ0i0Qer-1.fit_lim.size_919x518.v1728608548.jpg',
  },
];

const ShopPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.title} added to cart!`);
  };

  return (
    <div className="shop-page">
      <h1>Game Equipment Shop</h1>
      <div className="shop-items">
        {shopItems.map((item) => (
          <div key={item.id} className="shop-card">
            <div className="image-container">
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>Model: {item.model}</p>
            <p>INR: ₹{item.priceINR}</p>
            <p>Trophies: {item.priceTrophies}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
