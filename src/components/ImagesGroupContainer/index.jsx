import React from 'react';
import styles from './style.module.css';

const ImagesGroupContainer = ({ setTag, imageGroupObj }) => {
  return (
    <>
      {Object.keys(imageGroupObj).map((el) => (
        <div key={el} className={styles.imagesContainer}>
          <p>{el}</p>
          {imageGroupObj[el].map((element) => (
            <div
            key={element}
              onClick={() => {
                setTag(el);
              }}
              className={styles.imageContainer}
            >
              <img src={element} alt='' />
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
export default ImagesGroupContainer;
