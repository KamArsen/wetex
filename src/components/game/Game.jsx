import React, { useState, useEffect } from 'react';

const Game = () => {
 
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem('score');
    return savedScore ? parseInt(savedScore, 10) : 0;
  });

 
  useEffect(() => {
    localStorage.setItem('score', score);
  }, [score]);

 
  const incrementScore = () => {
    if (score < 5) {
      setScore(prevScore => prevScore + 1);
    }
  };

 
  const decrementScore = () => {
    if (score > 0) {
      setScore(prevScore => prevScore - 1);
    }
  };

  return (
    <div style={styles.container}
    ><h1 style={{
       
        top:'550px'
    }}>Оцените сайт 0/5</h1>
      <button 
        onClick={decrementScore} 
        style={{ ...styles.button, ...styles.decrementButton }} 
        disabled={score <= 0}
      >
        -
      </button>
      <h1 style={styles.score}>Счёт: {score}</h1>
      <button 
        onClick={incrementScore} 
        style={styles.button} 
        disabled={score >= 5}
      >
        {score < 5 ? '+' : 'Максимум достигнут!'}
      </button>
      {score >= 5 && <p style={styles.message}>Вы достигли максимального счёта.</p>}
    </div>
  );
};


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '400px',
   margin:'auto',
   width:'1300px',
    backgroundColor: '#f0f0f0',
    marginBottom:'100px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s',
    margin: '0 10px',
  },
  decrementButton: {
    backgroundColor: '#dc3545',
  },
  score: {
    margin: '0 20px',
    fontSize: '24px',
  },
  message: {
    marginTop: '10px',
    color: '#d9534f',
    fontSize: '18px',
  }
};

export default Game;
