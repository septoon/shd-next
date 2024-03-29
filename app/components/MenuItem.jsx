'use client';

import Image from 'next/image';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addDishToCart } from '../GlobalRedux/Features/cart/cartSlice';
import { Button } from 'primereact/button';
import { Skeleton } from 'primereact/skeleton';
import axios from 'axios';
import { setItem } from '../GlobalRedux/Features/item/itemSlice';

const MenuItem = () => {
  const item = useSelector((state) => state.item.item);
  const [loaded, setLoaded] = useState([]);
  console.log(item);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://admin.septon-test.ru/getData');
        dispatch(setItem(response.data[Object.keys(response.data)[0]]));
      } catch (error) {
        console.error('Ошибка при выполнении GET-запроса:', error);
      }
    };

    fetchData();
  }, []);

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

  return (
    <div className=" flex flex-wrap justify-start md:justify-between px-5 pb-[80px]">
      {item &&
        item.map((i) =>
          loaded.includes(i.id) ? (
            <div
              key={i.id}
              className="w-full md:w-[48%] lg:w-[48%] flex flex-row items-center rounded-10 mb-5 bg-white rounded-md shadow-xl">
              <Image
                src={i.image}
                width={40}
                height={28}
                quality={100}
                sizes="50%"
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
                  {i.isChange ? (
                    <Button
                      className="py-1 px-2 z-0 text-white bg-lightSlate-gray active:bg-light-gray"
                      disabled={true}
                      label="Недоступно"
                      onClick={() =>
                        onAddDishes(i.id, i.name, i.image, i.serving, i.options, i.price)
                      }></Button>
                  ) : (
                    <Button
                      className="py-1 px-2 z-0 text-white bg-lightSlate-gray active:bg-light-gray"
                      label="В корзину"
                      onClick={() =>
                        onAddDishes(i.id, i.name, i.image, i.serving, i.options, i.price)
                      }></Button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div
              key={i.id}
              className="w-full md:w-[48%] lg:w-[48%] flex flex-row items-center rounded-10 mb-5 bg-white rounded-md shadow-xl">
              <Image
                src={i.image}
                width={0}
                height={0}
                quality={100}
                sizes="50%"
                onLoadingComplete={(e) => setLoaded((prev) => [...prev, i.id])}
                className="w-0  h-0"
                alt="pic"
              />
              <Skeleton width="17rem" height="7rem"></Skeleton>
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
          ),
        )}
    </div>
  );
};

export default MenuItem;
