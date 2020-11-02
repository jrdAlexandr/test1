import React, { useState } from 'react';
import styles from './style.module.css';

const InputTagForm = ({
  setIsGroup,
  isGroup,
  setImageGroupObj,
  setImageArr,
  tag,
  setTag,
  imageArr,
  imageGroupObj,
}) => {
  const [disabled, setDisabled] = useState(false);
  const handlerInputTag = (e) => {
    setTag(e.target.value);
  };

  const handlerClear = () => {
    setImageArr([]);
    setImageGroupObj({});
    setTag('');
  };
  const handlerGetImage = (e) => {
    e.preventDefault();
    setDisabled(true);
    fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&tag=${tag}`
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.data.image_url) {
          result.tag = tag;
          setImageArr((prev) => [...prev, result]);
          setImageGroupObj((prev) => {
            if (Object.keys(prev).filter((el) => el === result.tag).length) {
              return {
                ...prev,
                [result.tag]: [...prev[result.tag], result.data.image_url],
              };
            } else {
              return {
                ...prev,
                [result.tag]: [result.data.image_url],
              };
            }
          });
          setDisabled(false);
        } else {
          alert('По данному тегу ничего не найдено!');
          setDisabled(false);
        }
      })
      .catch((error) => alert(error));
  };

  const handlerGroupImages = () => {
    setIsGroup((prev) => !prev);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handlerGetImage}>
        <input
          required
          onChange={handlerInputTag}
          value={tag}
          type='text'
          className='form-control'
        />
        <button disabled={disabled} type='submit' className='btn btn-success'>
          {disabled ? 'Загрузка...' : 'Загрузить'}
        </button>
        <button onClick={handlerClear} type='button' className='btn btn-danger'>
          Очистить
        </button>
        <button
          onClick={handlerGroupImages}
          type='button'
          className='btn btn-warning'
          style={{ backgroundColor: '#6f42c1', color: '#fff' }}
        >
          {isGroup ? 'Разруппировать' : 'Группировать'}
        </button>
      </form>
    </div>
  );
};
export default InputTagForm;
