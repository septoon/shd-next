'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { setItem, fetchData } from '../GlobalRedux/Features/item/itemSlice';
import { setCatalogName } from '../GlobalRedux/Features/catalogName/catalogNameSlice';

const MenuCards = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.item.data);
  const status = useSelector((state) => state.item.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  const handleClick = (category) => {
    dispatch(setItem(data[category]));
    dispatch(setCatalogName(category));
  };

  if (status === 'loading') {
    return <div>Загрузка...</div>;
  }

  if (status === 'failed') {
    return <div>Ошибка при загрузке данных.</div>;
  }

  return (
    <div className="flex flex-wrap">
      {Object.keys(data).map((category, index) => (
        <Link
          href="/menu/item"
          key={index}
          className="text-dark text-md font-semibold w-[50%] mb-3 flex flex-col items-center justify-around"
          onClick={() => handleClick(category)}
        >
          <Image
            src={data[category][0].image}
            width={40}
            height={28}
            sizes="50%"
            className="w-[95%] min-h-28 max-h-28 object-cover rounded-md"
            alt="menu-item"
          />
          <span>{category}</span>
        </Link>
      ))}
    </div>
  );
};

export default MenuCards;