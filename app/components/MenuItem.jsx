'use client';

import Image from 'next/image';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addDishToCart } from '../GlobalRedux/Features/cart/cartSlice';
import { fetchData } from '../GlobalRedux/Features/item/itemSlice';
import { Button } from 'primereact/button';
import { Skeleton } from 'primereact/skeleton';

const MenuItem = () => {
  const dispatch = useDispatch();

  const item = useSelector((state) => state.item.item);
  const status = useSelector((state) => state.item.status);

  const [loaded, setLoaded] = useState([]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  const onAddDishes = (id, name, image, serving, options, price) => {
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

  if (status === 'loading') {
    // Отображаем загрузочные скелеты
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
    // Отображаем сообщение об ошибке
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
  return null; // Или отобразите индикатор загрузки
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
              <span className="font-bold text-lightSlate-gray">{i.price} ₽</span>
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
                    onClick={() => onAddDishes(i.id, i.name, i.image, i.serving, i.options, i.price)}
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