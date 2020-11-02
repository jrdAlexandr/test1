import { useState } from 'react';
import './App.css';
import ImagesContainer from './components/ImagesContainer';
import InputTagForm from './components/InputTagForm';
import ImagesGroupContainer from './components/ImagesGroupContainer';

function App() {
  const [imageArr, setImageArr] = useState([]);
  const [imageGroupObj, setImageGroupObj] = useState({});
  const [isGroup, setIsGroup] = useState(false);
  const [tag, setTag] = useState('');

  return (
    <div className='wrapper'>
      <InputTagForm
        tag={tag}
        setTag={setTag}
        isGroup={isGroup}
        setIsGroup={setIsGroup}
        imageArr={imageArr}
        imageGroupObj={imageGroupObj}
        setImageGroupObj={setImageGroupObj}
        setImageArr={setImageArr}
      />
      {isGroup ? (
        <ImagesGroupContainer setTag={setTag} imageGroupObj={imageGroupObj} />
      ) : (
        <ImagesContainer setTag={setTag} imageArr={imageArr} />
      )}
    </div>
  );
}

export default App;
