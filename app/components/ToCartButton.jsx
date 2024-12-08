'use client';
import { useSelector } from 'react-redux';

import Link from 'next/link'
import Image from 'next/image'

import CartIcon from '@/public/img/shopping-cart.svg';

const ToCartButton = () => {
const isBrowser = typeof window !== 'undefined';
  const { items, totalCount, totalPrice } = isBrowser && useSelector(({ cart }) => ({
    items: cart.items,
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount,
  }));
  
  return (
    <>
      {items.length > 0 && (
        <Link
          href="/cart"
          className="w-auto h-10 px-2 flex justify-around items-center animate-pulse rounded-md text-white bg-lightSlate-gray shadow-xl bg-cover bg-center fixed bottom-main-btn left-6 lg:left-[20%]">
          <span className="text-white font-bold">{totalCount}</span>
          <Image className="h-6 w-6 mx-2" src={CartIcon} alt="icon" />
          <span className="font-bold w-auto">{totalPrice} ₽</span>
        </Link>
      )}
    </>
  );
};

export default ToCartButton;
