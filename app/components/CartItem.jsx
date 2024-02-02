'use client'

import Image from 'next/image';
import Trash from '@/public/img/trash.svg'

const CartItem = ({
  id,
  image,
  name,
  serving,
  price,
  options,
  countById,
  onClickMinusDish,
  onClickPlusDish,
  onClickRemoveDish,
}) => {
  
  const onMinusDish = () => {
    const dishObj = {
      dishId: id
    };
    onClickMinusDish(dishObj);
  };
  
  const onPlusDish = () => {
    const dishObj = {
      dishId: id
    };
    onClickPlusDish(dishObj);
  };
  
  const onRemoveDish = () => {
    const dishObj = {
      dishId: id,
      serving: serving,
    };
    onClickRemoveDish(dishObj);
  };
  return (
    <div className="h-20 px-1.5 lg:p-3 flex justify-between items-center mb-2 bg-white font-comfortaa rounded-xl">
      <div className="">
        <Image className="w-10 h-8 lg:w-[4rem] lg:h-[90%] object-fill rounded-md" sizes='20%' width={10} height={8} src={image} alt="картинка" />
      </div>
      <div className="flex flex-col w-[30%]">
        <span className='text-[10px] md:text-[14px] lg:text-xl '>{name}</span>
        <span className='text-xs opacity-40'>{serving}</span>
      </div>
      <button className="w-4" onClick={onMinusDish}>-</button>
      <div className="">
        {
          options ? (
            <span>{serving  * countById} г.</span>
          ) : (
            <span>{countById}шт.</span>
          )
        }
      </div>
      <button className="w-4" onClick={onPlusDish}>+</button>
      <div className="">
        <b>{price * countById}₽</b>
      </div>
      <div className="">
        <div className="" onClick={onRemoveDish}>
          <Image src={Trash} className="w-4 h-4 lg:w-6 lg:h-6" width={4} height={4} alt="closeCart" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
