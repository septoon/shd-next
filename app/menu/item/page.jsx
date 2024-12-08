'use client';

import { notFound } from 'next/navigation';

import MenuBtn from '@/app/components/MenuBtn';
import MenuItem from '@/app/components/MenuItem';
import ToCartButton from '@/app/components/ToCartButton';
import { useSelector } from 'react-redux';

const Page = () => {
  const catalogName = useSelector((state) => state.catalogName?.name || 'Холодные закуски');
  const item = useSelector((state) => state.item.item);

  // Если данных нет, возвращаем 404
  if (!item || item.length === 0) {
    notFound();
  }

  return (
    <div className="w-full flex flex-col justify-start mt-6">
      <h3 className="px-5 text-title font-extrabold font-comfortaa text-dark mb-3">
        {catalogName}
      </h3>
      <MenuItem />
      <MenuBtn />
      <ToCartButton />
    </div>
  );
};

export default Page;