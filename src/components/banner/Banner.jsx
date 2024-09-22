import React, { useState, useEffect } from 'react';
import './Banner.css'; 

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const banners = [
    { title: "Плаза", text: "Торговый центер у нас есть различные кафешки развлекательные парки и многое другое", img: "https://static.wixstatic.com/media/d8047e_e6f28e1dadf04f64bc13f5d924601a04~mv2.jpeg/v1/fill/w_640,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d8047e_e6f28e1dadf04f64bc13f5d924601a04~mv2.jpeg" },
    { title: "Лалафо", text: "Вы унас найдете много вещей разных подготовиться школе и начать бизнес ", img: "https://24.kg/thumbnails/31046/3cb4f/254924_w750_h_r.jpg" },
    { title: "Окурмен ", text: "It курс помогаем освоиться frontend или backend  возможность встретить Гапып агая", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsuMxSee8-MrVmqkpTx4KWP2GWjrI3cpFx8Q&s" },
    { title: "Спар", text: "Мы предлагаем разогреть свою или вашу еду есть ашкана еа выбор и можно поесть у нас", img: "https://cms.totalcomputers.co.uk/wp-content/uploads/2022/08/shutterstock_2182762585-scaled.jpg" },
    { title: "Глобус", text: "СуперМаркет у нас вы найдете отделы с готовой выпечкой или же продукты", img: "https://globus.kg/uploads/news/full/1597808512_18579000.JPG" },
    { title: "Елит хаус", text: "купите квартиру и получите новый айфон 15 про макс в падорак ", img: "https://static.tildacdn.one/tild3937-3338-4566-b332-636235393139/__.jpg" },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
    }, 5000); 

    return () => clearInterval(intervalId);
  }, [banners.length]);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + banners.length) % banners.length);
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
  };

  const { title, text, img } = banners[currentIndex];

  return (
    <div className="banner">
      <div 
        className="banner-content" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div key={index} className="banner-item">
            <img src={banner.img} alt={banner.title} />
            <div className="banner-text-container">
              <h1 className="banner-title">{banner.title}</h1>
              <p className="banner-text">{banner.text}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="nav-button left" onClick={handlePrev}>◄</button>
      <button className="nav-button right" onClick={handleNext}>►</button>
    </div>
  );
};

export default Banner;
