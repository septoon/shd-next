'use client'

import MenuItem from '@/app/components/MenuItem';
import ToCartButton from '@/app/components/ToCartButton';
import { useSelector } from 'react-redux';

const page = () => {
  const catalogName = useSelector((state) => state.catalogName.name)

  return (
    <div className="w-full flex flex-col justify-start mt-6">
      <h3 className="px-5 text-title font-extrabold font-comfortaa text-dark mb-3">
        {catalogName ? catalogName : 'Холодные закуски'}
      </h3>
      {
        catalogName === 'Блюда на мангале' && (
          <div className="px-5 text-[14px] py-2 w-auto rounded-md font-extrabold font-comfortaa text-dark mb-8">
            <span className="px-2 text-[14px] border-[1px] border-dashed w-auto py-2 rounded-md font-extrabold font-comfortaa text-dark mb-8">
              Минимальный заказ от 300 грамм
            </span>
          </div>
        )
      }
      <MenuItem />
      <ToCartButton />
    </div>
  )
}

export default page