import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Adjust the path if necessary
import { GrYoutube } from 'react-icons/gr';
import { FaInstagram } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { MdFavorite } from "react-icons/md";

const Header = () => {
  return (
    <div className='container header'>
      <div className="logo">
        <h1>WETE <span>X</span></h1>
      </div>
      <div className="pages">
        <Link to="/">Главное</Link>
        <Link to="/catalog">Кыргызстан</Link>
        <Link to="/city">Горад</Link>
        <Link to="/priroda">Природа</Link>
      </div>
      <MdFavorite fill='white' className='favorite'  />
      <GrYoutube className='sociables' fill='white' />
      <FaInstagram className='sociablec' fill='white' />
      <FaArrowAltCircleRight className='sociable' fill='white' />
      <h4>+996 999 999 <span> Добавить рекламу</span></h4>
    </div>
  );
};

export default Header;
