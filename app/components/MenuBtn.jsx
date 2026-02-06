'use client';

import { useDispatch } from 'react-redux';
import { setNavVisible } from '../GlobalRedux/Features/navVisible/navVisibleSlice';
import { setPosition } from '../GlobalRedux/Features/position/positionSlice';

const MenuBtn = () => {
  const dispatch = useDispatch();

  const showNav = (position) => {
    dispatch(setPosition(position));
    dispatch(setNavVisible(true));
  };
  return (
    <button
<<<<<<< HEAD
      className="w-16 h-16 bg-white flex justify-center items-center rounded-full shadow-3xl fixed bottom-main-btn right-6 lg:right-[20%]"
      onClick={() => showNav('bottom')}>
      <span className="text-lightSlate-gray font-bold">МЕНЮ</span>
=======
      className="menu-fab min-[960px]:hidden"
      onClick={() => showNav('bottom')}>
      <span>Меню</span>
>>>>>>> 806ff73 (update)
    </button>
  );
};

export default MenuBtn;
