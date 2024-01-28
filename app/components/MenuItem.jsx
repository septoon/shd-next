'use client'

import Image from 'next/image'

import { useSelector, useDispatch } from 'react-redux';
import { addDishToCart } from '../GlobalRedux/Features/cart/cartSlice';
import pic from '@/public/img/pic.jpg'
import { Button } from 'primereact/button';


const MenuItem = () => {
const item = useSelector((state) => state.item.item)
const dispatch = useDispatch()

const onAddDishes = (id, name, image, serving, options, price,) => {
  const obj = {
    id,
    name,
    image,
    serving,
    options,
    price,
  };
  dispatch(addDishToCart(obj));
};

  return (
    <div className=" flex flex-wrap justify-start px-5 pb-[80px]">
      {item.map((i) => (
        <div key={i.id} className="w-full md:w-1/2 lg:w-1/3 flex flex-row items-center rounded-10 mb-5 bg-white rounded-md shadow-xl">
          <Image
            src={i.image ? i.image : pic}
            width={40}
            height={28}
            className="rounded-md min-w-40 min-h-28 max-w-40 max-h-28 object-cover"
            alt="pic"
          />
          <div className="flex flex-col w-full h-full justify-around pl-2">
            <div className="item_name">
              <span className="name">{i.name}</span>
            </div>
            <div className="columns">
              {i.options ? (
                <span className="font-comfortaa text-sm">{i.options}</span>
              ) : (
                <span className="text-metal">{i.serving ? i.serving : ``}</span>
              )}
            </div>
            <div className="w-full flex flex-row justify-between items-center pr-2">
              <span className="font-bold text-lightSlate-gray">{i.price} ₽</span>
              <Button className="py-1 px-2 z-0" label="В корзину" onClick={() => onAddDishes(i.id, i.name, i.image, i.serving, i.options, i.price,)}></Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItem;
