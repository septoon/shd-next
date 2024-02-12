'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useDispatch } from 'react-redux';
import axios from 'axios';

import { setItem } from '../GlobalRedux/Features/item/itemSlice';
import { setCatalogName } from '../GlobalRedux/Features/catalogName/catalogNameSlice';
import { useEffect, useState } from 'react';

const MenuCards = () => {
  const dispatch = useDispatch();

  const [menuData, setMenuData] = useState({});

  const isBrowser = typeof window !== 'undefined';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://admin.septon-test.ru/getData');
        isBrowser && setMenuData(response.data);
      } catch (error) {
        console.error('Ошибка при выполнении GET-запроса:', error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (category) => {
    dispatch(setItem(menuData[category]));
    dispatch(setCatalogName(category));
  };
  console.log(Object.keys(menuData)[0]);
  return (
    <div className="flex flex-wrap">
      {Object.keys(menuData).map((category, index) => (
        <Link
          href="/menu/item"
          key={index}
          className="text-dark text-md font-semibold w-[50%] mb-3 flex flex-col items-center justify-around"
          onClick={(e) => {
            handleClick(category);
          }}>
          <Image
            src={menuData[category][0].image}
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
