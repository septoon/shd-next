'use client';

import Image from 'next/image';
<<<<<<< HEAD
import Trash from '@/public/img/trash.svg';

const CartItem = ({ item, onClickMinusDish, onClickPlusDish, onClickRemoveDish }) => {
  const { id, image, name, serving, price, options, quantity, gram } = item;
  
=======
import { Trash2 } from 'lucide-react';

const CartItem = ({ item, onClickMinusDish, onClickPlusDish, onClickRemoveDish }) => {
  const { id, image, name, serving, price, options, quantity, gram } = item;

>>>>>>> 806ff73 (update)
  const onMinusDish = () => {
    onClickMinusDish({ id, price });
  };

  const onPlusDish = () => {
    onClickPlusDish(item);
  };

  const onRemoveDish = () => {
    onClickRemoveDish({ id });
  };

  return (
<<<<<<< HEAD
    <div className="h-20 px-1.5 lg:p-3 flex justify-between items-center mb-2 bg-white font-comfortaa rounded-xl">
      <div>
        <Image
          className="w-10 h-8 lg:w-[4rem] lg:h-[90%] object-fill rounded-md"
          sizes="20%"
          width={40}
          height={28}
          src={image}
          alt="картинка"
        />
      </div>
      <div className="flex flex-col w-[30%]">
        <span className="text-[10px] md:text-[14px] lg:text-xl">{name}</span>
        <span className="text-xs opacity-40">{serving}</span>
      </div>
      <button className="w-4" onClick={onMinusDish}>
        -
      </button>
      <div>
        {options ? (
          <span>{gram * quantity} г.</span>
        ) : (
          <span>{quantity} шт.</span>
        )}
      </div>
      <button className="w-4" onClick={onPlusDish}>
        +
      </button>
      <div>
        <b>{(price * quantity).toFixed(2)}₽</b>
      </div>
      <div onClick={onRemoveDish} className="cursor-pointer">
        <Image src={Trash} className="w-4 h-4 lg:w-6 lg:h-6" width={24} height={24} alt="closeCart" />
=======
    <div className="cart-item">
      <div className="cart-item__row">
        <div className="cart-item__image">
          <Image
            className="cart-item__img"
            sizes="20%"
            width={72}
            height={72}
            src={image}
            alt="картинка"
          />
        </div>
        <div className="cart-item__details flex flex-col">
          <span className="cart-item__name">{name}</span>
          <div className="cart-item__meta">{serving}</div>
        </div>
      </div>

      <div className="cart-item__row cart-item__row--controls mt-2">

        <div className="cart-item__qty">
          <button className="qty-btn" onClick={onMinusDish}>
            -
          </button>
          <div className="cart-item__quantity">
            {options ? (
              <span>{gram * quantity} г.</span>
            ) : (
              <span>{quantity} шт.</span>
            )}
          </div>
          <button className="qty-btn" onClick={onPlusDish}>
            +
          </button>
        </div>

        <div className="cart-item__price">
          <b>{(price * quantity).toFixed(2)}₽</b>
        </div>

        <button onClick={onRemoveDish} className="remove-btn" aria-label="Удалить">
          <Trash2 className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>
>>>>>>> 806ff73 (update)
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default CartItem;
=======
export default CartItem;
>>>>>>> 806ff73 (update)
