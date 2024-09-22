import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="uls">
        <ul>
          <li className='li'>Создатели</li>
          <li>Арсен</li>
          <li>Саян</li>
          <li>Жека</li>
          <li>Эму</li>
        </ul>
        <ul>
          <li className='li'>Десайнеры</li>
          <li>Арсен</li>
          <li>Саян</li>
          <li>Жека</li>
          <li>Эму</li>
        </ul>
        <ul>
          <li className='li'>Сот сети</li>
          <li>Instagram</li>
          <li>Whatsapp</li>
          <li>GitHub</li>
          <li>TikTok</li>
          <li>Youtube</li>
          <li>Facebook</li>
        </ul>
      </div>
      <div className="lin"></div>
      <div className="pint">
        <div className="png">
          <img src="https://sputnik.kg/img/103430/44/1034304403_691:0:1814:1123_1920x0_80_0_0_9fad4cdf907eeb736274521586d87b4e.jpg" alt="" />
          <img src="https://vivid-travel.kz/assets/images/tours/issykul-novyj/mob3.jpg" alt="" />
        </div>
        <div className="png">
          <img src="https://asiamountains.net/assets/cache_image/assets/lib/resized/52/1600x1066_0x0_d0b.jpg" alt="" />
          <img src="https://www.tourdom.ru/upload/iblock/cd8/cd813a8d228167072c7d1c175117a449.jpg" alt="" />
        </div>

      </div>
    </footer>
  )
}

export default Footer