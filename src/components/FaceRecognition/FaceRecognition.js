import React from 'react';
import './FaceRecognition.css';

export const FaceRecognition = ({ imageUrl, box }) => {
  const { leftCol, topRow, rightCol, bottomRow } = box;
  return (
    <div className='center'>
      <div className='absolute mt2'>
        <img
          id='inputimage'
          src={imageUrl}
          alt='img'
          width='500px'
          height='auto'
        />
        <div
          className='bounding-box'
          style={{
            top: topRow,
            right: rightCol,
            bottom: bottomRow,
            left: leftCol
          }}
        >
          {' '}
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;
