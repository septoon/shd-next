'use client';

import MenuBtn from '@/app/components/MenuBtn';
import MenuItem from '@/app/components/MenuItem';
import ToCartButton from '@/app/components/ToCartButton';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const page = () => {
  const [menuData, setMenuData] = useState({});

  const isBrowser = typeof window !== 'undefined';

  const categories = Object.keys(menuData);
  const objectCategories = categories.reduce((acc, name) => {
    acc[name] = { name };
    return acc;
  }, {});

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

  return (
    <div className="w-full flex flex-col justify-start mt-6">
      <h3 className="px-5 text-title font-extrabold font-comfortaa text-dark mb-3">
        {objectCategories.name ? objectCategories.name : 'Холодные закуски'}
      </h3>
      {objectCategories.name === 'Блюда на мангале' && (
        <div className="px-5 text-[14px] py-2 w-auto rounded-md font-extrabold font-comfortaa text-dark mb-8">
          <span className="px-2 text-[14px] border-[1px] border-dashed w-auto py-2 rounded-md font-extrabold font-comfortaa text-dark mb-8">
            Минимальный заказ от 300 грамм
          </span>
        </div>
      )}
      <MenuItem />
      <MenuBtn />
      <ToCartButton />
    </div>
  );
};

export default page;
