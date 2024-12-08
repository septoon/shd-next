'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Dialog } from 'primereact/dialog';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { setNavVisible } from '../GlobalRedux/Features/navVisible/navVisibleSlice';
import { setItem, fetchData } from '../GlobalRedux/Features/item/itemSlice';
import { setCatalogName } from '../GlobalRedux/Features/catalogName/catalogNameSlice';

import { icons } from '../api/icons';

const MenuNav = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.item.data);
  const status = useSelector((state) => state.item.status);

  const navVisible = useSelector((state) => state.navVisible.navVisible);
  const position = useSelector((state) => state.position.position);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  const handleClick = (category) => {
    dispatch(setItem(data[category]));
    dispatch(setCatalogName(category));
    dispatch(setNavVisible(false));
  };

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl">Загрузка...</p>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Упс, кажется произошла ошибка</h2>
        <p className="mb-4">Попробуйте зайти позже. Либо закажите по номеру:</p>
        <a href="tel:+79788796220" className="text-blue-500 text-xl underline">
          +7 (978) 879-62-20
        </a>
      </div>
    );
  }

  return (
    <Dialog
      header="Меню"
      visible={navVisible}
      position={position}
      className="w-[90vw] h-[70vh] lg:w-[40vw]"
      onHide={() => dispatch(setNavVisible(false))}
      draggable={false}
      resizable={false}
    >
      <div className="w-full flex justify-start relative bg-white font-comfortaa font-bold items-start rounded-t-lg h-half-screen pb-10">
        <div className="w-[22px] mr-2.5 pt-1">
          {icons.map((item, index) => (
            <Image src={item.icon} alt="icon" width={20} height={20} className="w-auto mb-4" key={index} />
          ))}
        </div>
        <div className="flex flex-col items-start">
          {Object.keys(data).map((category, index) => (
            <Link href="/menu/item" key={index} className="mb-2">
              <button
                className="text-dark text-xl font-semibold w-full"
                onClick={() => handleClick(category)}
              >
                {category}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </Dialog>
  );
};

export default MenuNav;