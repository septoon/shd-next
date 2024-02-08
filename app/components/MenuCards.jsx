'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useDispatch } from 'react-redux';
import axios from 'axios';

import { data } from '../api/data';
import { setItem } from '../GlobalRedux/Features/item/itemSlice';
import { setCatalogName } from '../GlobalRedux/Features/catalogName/catalogNameSlice';
import { useEffect, useState } from 'react';

const MenuCards = () => {
  const [menuData, setMenuData] = useState({});
  const dispatch = useDispatch();

  const handleClick = (category) => {
    dispatch(setItem(data[category]));
    dispatch(setCatalogName(category));
  };
  console.log(menuData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/data.json');

        if (response.status === 200) {
          setMenuData(response.data);
        } else {
          console.error('Ошибка при получении данных с сервера');
        }
      } catch (error) {
        console.error('Ошибка при выполнении GET-запроса:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap">
      {Object.keys(data).map((category, index) => (
        <Link
          href="/menu/item"
          key={index}
          className="text-dark text-md font-semibold w-[50%] mb-3 flex flex-col items-center justify-around"
          onClick={(e) => {
            handleClick(category);
          }}>
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
