'use client';
import { useSelector } from 'react-redux';

import Link from 'next/link'
import Image from 'next/image'

import CartIcon from '@/public/img/cart-logo.svg';

const ToCartButton = () => {
  const { items, totalCount, totalPrice } = useSelector(({ cart }) => ({
    items: cart.items,
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount,
  }));
  
  return (
    <>
      {items.length > 0 && (
        <Link
          href="/cart"
          className="w-[120px] h-10 px-2 flex justify-around items-center animate-pulse rounded-md text-white bg-lightSlate-gray shadow-xl bg-cover bg-center fixed bottom-main-btn left-6">
          <span className="text-white font-bold">{totalCount}</span>
          <Image className="h-6" src={CartIcon} alt="icon" />
          <span className="font-bold w-auto">{totalPrice} ₽</span>
        </Link>
      )}
    </>
  );
};

export default ToCartButton;
