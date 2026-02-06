'use client';
import { useSelector } from 'react-redux';

<<<<<<< HEAD
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
=======
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

const ToCartButton = ({ variant = 'floating' }) => {
  const { items, totalCount, totalPrice } = useSelector((state) => ({
    items: state.cart.items,
    totalPrice: state.cart.totalPrice,
    totalCount: state.cart.totalCount,
  }));

  if (!items || items.length === 0) {
    return null;
  }

  const className =
    variant === 'header'
      ? 'to-cart-button to-cart-button--header'
      : 'to-cart-button to-cart-button--floating';

  return (
    <Link href="/cart" className={className}>
      <span className="to-cart-count">{totalCount}</span>
      <ShoppingCart className="h-5 w-5 mx-2" />
      <span className="to-cart-price max-[960px]:hidden">{totalPrice} ₽</span>
    </Link>
>>>>>>> 806ff73 (update)
  );
};

export default ToCartButton;
