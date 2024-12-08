'use client';

import Image from 'next/image';
import Trash from '@/public/img/trash.svg';

const CartItem = ({ item, onClickMinusDish, onClickPlusDish, onClickRemoveDish }) => {
  const { id, image, name, serving, price, options, quantity } = item;

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
          <span>{serving * quantity} г.</span>
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
      </div>
    </div>
  );
};

export default CartItem;