'use client';

import Image from 'next/image';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addDishToCart } from '../GlobalRedux/Features/cart/cartSlice';
import { fetchData } from '../GlobalRedux/Features/item/itemSlice';
import { Button } from 'primereact/button';
import { Skeleton } from 'primereact/skeleton';
import { fetchDelivery } from '../GlobalRedux/Features/delivery/deliverySlice';

const MenuItem = () => {
  const dispatch = useDispatch();

  const item = useSelector((state) => state.item.item);
  const status = useSelector((state) => state.item.status);
  const {promotion, promotionCount} = useSelector((state) => state.delivery);

  const [loaded, setLoaded] = useState([]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDelivery())
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  const onAddDishes = (id, name, image, serving, options, price, gram) => {
    const obj = {
      id,
      name,
      image,
      serving,
      options,
      price: promotion ? price * (1 - promotionCount / 100) : price,
      gram
    };
    dispatch(addDishToCart(obj));
  };

  if (status === 'loading') {
    return (
      <div className="flex flex-wrap justify-start md:justify-between px-5 pb-[80px]">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="w-full md:w-[48%] lg:w-[48%] flex flex-row items-center rounded-10 mb-5 bg-white rounded-md shadow-xl"
          >
            <Skeleton width="17rem" height="7rem" className="rounded-md"></Skeleton>
            <div className="flex flex-col w-full h-full justify-around pl-2">
              <Skeleton width="80%" height="1.25rem"></Skeleton>
              <div className="columns">
                <Skeleton width="30%" height="1.25rem"></Skeleton>
              </div>
              <div className="w-full flex flex-row justify-between items-center pr-2">
                <Skeleton width="30%" height="1.25rem"></Skeleton>
                <Skeleton width="40%" height="2rem"></Skeleton>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Упс, кажется произошла ошибка</h2>
        <p className="mb-4">Попробуйте зайти позже. Либо закажите по номеру:</p>
        <a href="tel:+79788796220" className="text-blue-500 text-xl underline">
          +7 (978) 879-62-20
        </a>
      </div>
    );
  }
  
  if (!item || !Array.isArray(item)) {
  return null;
  }

  return (
    <div className="flex flex-wrap justify-start md:justify-between px-5 pb-[80px]">
      {item.map((i) => (
        <div
          key={i.id}
          className="w-full md:w-[48%] lg:w-[48%] flex flex-row items-center rounded-10 mb-5 bg-white rounded-md shadow-xl"
        >
          <div className="relative w-40 h-28 min-w-40 min-h-28 max-w-40 max-h-28">
            <Image
              src={i.image}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
              alt="pic"
              onLoadingComplete={() => setLoaded((prev) => [...prev, i.id])}
            />
            {
              promotion && (
                <div className='absolute flex items-center justify-center top-1 right-1 w-10 rounded-lg bg-red-500'>
                  <span className='text-white text-sm'>-{promotionCount}%</span>
                </div>
              )
            }
            {!loaded.includes(i.id) && (
              <div className="absolute inset-0">
                <Skeleton width="100%" height="100%" className="rounded-md"></Skeleton>
              </div>
            )}
          </div>
          <div className="flex flex-col w-full h-full justify-around pl-2">
            <div className="item_name">
              <span className="name">{i.name}</span>
            </div>
            {i.weight && (
              <div>
                <span className="font-comfortaa text-sm">Средний вес: {i.weight}г.</span>
              </div>
            )}
            <div className="columns">
              {i.options ? (
                <span className="font-comfortaa text-sm">{i.options}</span>
              ) : (
                <span className="text-metal">{i.serving ? i.serving : ``}</span>
              )}
            </div>
            <div className="w-full flex flex-row justify-between items-center pr-2">
              <div className='flex flex-col'>
                <span className="font-normal text-black"><s>{i.price} ₽</s></span>
                <span className="font-bold text-lightSlate-gray">{i.price * (1 - promotionCount / 100)}  ₽</span>
              </div>
              {
                i.onStop ? (
                    <Button
                    className="py-1 px-2 z-0 text-white bg-lightSlate-gray active:bg-light-gray"
                    label="Недоступно"
                    disabled
                  ></Button>
                ) : (
                  <Button
                    className="py-1 px-2 z-0 text-white bg-lightSlate-gray active:bg-light-gray"
                    label="В корзину"
                    onClick={() => onAddDishes(i.id, i.name, i.image, i.serving, i.options, i.price, i.gram)}
                  ></Button> 
                )
              }
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItem;