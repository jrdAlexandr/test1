import React from 'react';
import styles from './style.module.css';

const ImagesContainer = ({ setTag, imageArr }) => {
  return (
    <div className={styles.imagesContainer}>
      {imageArr.map((el, i) => (
        <div
          onClick={() => {
            setTag(el.tag);
          }}
          key={el.data.image_url}
          className={styles.imageContainer}
        >
          <img src={el.data.image_url} alt='' />
        </div>
      ))}
    </div>
  );
};
export default ImagesContainer;
