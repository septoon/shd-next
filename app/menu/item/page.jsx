'use client';

import { notFound } from 'next/navigation';
<<<<<<< HEAD

import MenuBtn from '@/app/components/MenuBtn';
import MenuItem from '@/app/components/MenuItem';
import ToCartButton from '@/app/components/ToCartButton';
import { useSelector } from 'react-redux';

const Page = () => {
  const catalogName = useSelector((state) => state.catalogName?.name || 'Холодные закуски');
  const item = useSelector((state) => state.item.item);
=======
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MenuBtn from '@/app/components/MenuBtn';
import MenuItem from '@/app/components/MenuItem';
import { fetchData } from '@/app/GlobalRedux/Features/item/itemSlice';

const Page = () => {
  const dispatch = useDispatch();
  const catalogName = useSelector((state) => state.catalogName?.name || 'Холодные закуски');
  const { item, status } = useSelector((state) => ({
    item: state.item.item,
    status: state.item.status,
  }));

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  if (status === 'loading' || status === 'idle') {
    return (
      <div className="page-section">
        <div className="section-headline">
          <h3 className="section-title">Загружаем меню...</h3>
          <p className="section-subtitle">Почти готово.</p>
        </div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="page-section">
        <div className="section-headline">
          <h3 className="section-title">Не удалось загрузить меню</h3>
          <p className="section-subtitle">Попробуйте обновить страницу или вернуться позже.</p>
        </div>
      </div>
    );
  }
>>>>>>> 806ff73 (update)

  // Если данных нет, возвращаем 404
  if (!item || item.length === 0) {
    notFound();
  }

<<<<<<< HEAD
  return (
    <div className="w-full flex flex-col justify-start mt-6">
      <h3 className="px-5 text-title font-extrabold font-comfortaa text-dark mb-3">
        {catalogName}
      </h3>
      <MenuItem />
      <MenuBtn />
      <ToCartButton />
=======
  const isGrillCategory = catalogName === 'Блюда на мангале';
  const subtitle = isGrillCategory
    ? 'Минимальный заказ по этой категории — от 300 г.'
    : 'Выбирайте порции, добавляйте в корзину — мы уже разогреваем мангал.';

  return (
    <div className="page-section">
      <div className="section-headline">
        <h3 className="section-title">{catalogName}</h3>
        <p className="section-subtitle">{subtitle}</p>
      </div>
      <MenuItem />
      <MenuBtn />
>>>>>>> 806ff73 (update)
    </div>
  );
};

<<<<<<< HEAD
export default Page;
=======
export default Page;
>>>>>>> 806ff73 (update)
