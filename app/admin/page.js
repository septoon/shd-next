// pages/admin.js
'use client';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { data } from '../api/data'; // Импортируйте свои данные
import Image from 'next/image';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';

export default function Admin() {
  const item = useSelector((state) => state.item.item);

  const [newProduct, setNewProduct] = useState({
    category: '',
    image: '',
    name: '',
    serving: '',
    price: 0,
    isChange: false,
    id: data['Холодные закуски'].length,
  });

  const handleAddProduct = async (category) => {
    const updatedData = { ...data };
    updatedData[category].push(newProduct);

    try {
      const response = await fetch('/api/updateData', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        console.log('Добавлен новый товар:', newProduct);
        setNewProduct({
          category: '',
          image: '',
          name: '',
          serving: '',
          price: 0,
          isChange: false,
          id: data['Холодные закуски'].length,
        });
      } else {
        console.error('Ошибка при обновлении данных на сервере');
      }
    } catch (error) {
      console.error('Ошибка при отправке запроса на сервер:', error);
    }
  };


  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-white overflow-auto w-full flex flex-col justify-start lg:px-[15%] pb-3">
      <h1 className="px-5 text-title font-bold font-comfortaa my-6">Админ панель</h1>
      <div>
        <div className="w-full flex flex-col justify-start mb-3">
          {Object.keys(data).map((category, index) => (
            <Panel
              collapsed={true}
              toggleable
              header={category}
              key={index}
              className="w-full flex flex-col flex-wrap justify-start md:justify-between px-1 pb-3">
              {item.map((i) => (
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
                      <Button
                        className="py-1 px-2 z-0 text-white bg-lightSlate-gray active:bg-light-gray"
                        label="Изменить"></Button>
                    </div>
                  </div>
                </div>
              ))}
            </Panel>
          ))}
        </div>
      </div>
      <div className="w-full px-6 lg:px-3">
        <Button className="py-2 w-auto" label="Добавить товар" />
      </div>
    </div>
  );
}
// Panel toggleable header={catalogName}
