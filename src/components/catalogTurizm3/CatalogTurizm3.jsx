import React, { useState } from 'react';
import './CatalogTurizm3.css'


const cardStyle = {
  display: 'flex',
  alignItems: 'center',
  
  padding: '10px',
  margin: 'auto'
};

const imageStyle = {
  width: '800px',
  height: '650px',
  marginRight: '20px'
};

const CatalogTurizm3 = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardData = [
    {
      id: 1,
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/07/fa/b5/lovenavat.jpg?w=600&h=500&s=1',
      title: 'Нават',
      image2: 'https://faiza.kg/media/info/gallery/about-us-banner_vnzHtUh.jpg',
      title2: 'Фаиза',
      image3: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/64/39/9f/caption.jpg?w=600&h=-1&s=1',
      title3: 'Уголек',
      image4: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/af/83/19/caption.jpg?w=600&h=500&s=1',
      title4: 'Чебак Паб',
      image5: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/66/d2/e4/furusato.jpg?w=600&h=-1&s=1',
      title5: 'Фурусато',
    
    },
    {
      id: 2,
      image: 'https://st-1.akipress.org/st_gallery/99/1002899.cb66967ff83be61aec4a2051d5b55933.jpg',
      title: 'Панфилов парк',
      image2: 'https://asiamountains.net/assets/cache_image/assets/lib/resized/98/1600x1066_0x0_d0b.jpg',
      title2: 'Аларча',
      image3: 'https://orbita.kg/wp-content/uploads/2019/09/musor-1_croped.jpg',
      title3: 'Алатай',
      image4: 'https://map.kg/uploads/posts/2023-02/talas_ozerobeshtash-18.jpg',
      title4: 'Беш Таш',
      image5: 'https://24.kg/files/media/93/93980.jpg',
      title5: 'Кан ачуу',
    
    },
    
 
  
  ];

  const handleClick = (id) => {
    setSelectedCard(id);
  };

  return (
    <div className='catalog'>
    
      <h1>Горад</h1>
      <button onClick={() => handleClick(1)}>Заведения</button>
      <button onClick={() => handleClick(2)}>Парки</button>
     
      

      {selectedCard && (
        <div style={cardStyle} className='cardStyle'>
          <img
            src={cardData.find(card => card.id === selectedCard).image}
            alt={cardData.find(card => card.id === selectedCard).title}
            style={imageStyle}
          />
          <div>
            <h2>{cardData.find(card => card.id === selectedCard).title}</h2>
            <p>{cardData.find(card => card.id === selectedCard).description}</p>
            <p>{cardData.find(card => card.id === selectedCard).description2}</p>
          </div>
        </div>
      )}
      {selectedCard && (
        <div style={cardStyle} className='cardStyle'>
          <img
            src={cardData.find(card => card.id === selectedCard).image2}
            alt={cardData.find(card => card.id === selectedCard).title2}
            style={imageStyle}
          />
          <div>
            <h2>{cardData.find(card => card.id === selectedCard).title2}</h2>
            <p>{cardData.find(card => card.id === selectedCard).description}</p>
            <p>{cardData.find(card => card.id === selectedCard).description2}</p>
          </div>
        </div>
      )}
      {selectedCard && (
        <div style={cardStyle} className='cardStyle'>
          <img
            src={cardData.find(card => card.id === selectedCard).image3}
            alt={cardData.find(card => card.id === selectedCard).title3}
            style={imageStyle}
          />
          <div>
            <h2>{cardData.find(card => card.id === selectedCard).title3}</h2>
            <p>{cardData.find(card => card.id === selectedCard).description}</p>
            <p>{cardData.find(card => card.id === selectedCard).description2}</p>
          </div>
        </div>
      )}
      {selectedCard && (
        <div style={cardStyle} className='cardStyle'>
          <img
            src={cardData.find(card => card.id === selectedCard).image4}
            alt={cardData.find(card => card.id === selectedCard).title4}
            style={imageStyle}
          />
          <div>
            <h2>{cardData.find(card => card.id === selectedCard).title4}</h2>
            <p>{cardData.find(card => card.id === selectedCard).description}</p>
            <p>{cardData.find(card => card.id === selectedCard).description2}</p>
          </div>
        </div>
      )}
      {selectedCard && (
        <div style={cardStyle} className='cardStyle'>
          <img
            src={cardData.find(card => card.id === selectedCard).image5}
            alt={cardData.find(card => card.id === selectedCard).title5}
            style={imageStyle}
          />
          <div>
            <h2>{cardData.find(card => card.id === selectedCard).title5}</h2>
            <p>{cardData.find(card => card.id === selectedCard).description}</p>
            <p>{cardData.find(card => card.id === selectedCard).description2}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogTurizm3;
