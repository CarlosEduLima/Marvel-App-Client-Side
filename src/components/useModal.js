import { useState} from 'react';

const useModal = () => {
  const [isCardComicOpen, closeCardComic] = useState(false);

  function toggleCardComic() {
    closeCardComic(!isCardComicOpen);
  }

  return {
    isCardComicOpen,
    toggleCardComic,
  }
};

export default useModal;