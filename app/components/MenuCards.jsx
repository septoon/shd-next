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
<<<<<<< HEAD
    return <div>Загрузка...</div>;
=======
    return (
      <div className="menu-grid">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="menu-card skeleton-card">
            <div className="skeleton shimmer" />
          </div>
        ))}
      </div>
    );
>>>>>>> 806ff73 (update)
  }

  if (status === 'failed') {
    return <div>Ошибка при загрузке данных.</div>;
  }

  return (
<<<<<<< HEAD
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
=======
    <div className="menu-grid">
      {Object.keys(data).map((category, index) => (
        <Link href="/menu/item" key={index} className="menu-card" onClick={() => handleClick(category)}>
          <div className="menu-card__image">
            <Image
              src={data[category][0].image}
              fill
              className="menu-card__img"
              sizes="(min-width: 1024px) 45vw, 100vw"
              alt="menu-item"
            />
            <div className="menu-card__overlay">
              <span className="menu-card__title">{category}</span>
              <span className="menu-card__count">{data[category].length} позиций</span>
            </div>
          </div>
>>>>>>> 806ff73 (update)
        </Link>
      ))}
    </div>
  );
};

<<<<<<< HEAD
export default MenuCards;
=======
export default MenuCards;
>>>>>>> 806ff73 (update)
