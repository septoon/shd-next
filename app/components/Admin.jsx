'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import AdminForm from './AdminForm';

export default function Admin() {
  const [menuData, setMenuData] = useState({});
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://admin.septon-test.ru/getData');
        setMenuData(response.data);
      } catch (error) {
        console.error('Ошибка при выполнении GET-запроса:', error);
      }
    };

    fetchData();
  }, []);

  const handleUpdateProduct = async (category, id) => {
    const updatedData = { ...menuData };

    const updatedCategory = updatedData[category].map((item) => {
      if (item.id === id) {
        return {
          ...item,
          image: newImage || item.image,
          name: newName || item.name,
          serving: newServing || item.serving,
          options: newOptions || item.options,
          price: newPrice > 0 ? parseFloat(newPrice) : item.price,
          isChange: onStop || item.isChange,
        };
      }
      return item;
    });

    updatedData[category] = updatedCategory;

    try {
      const response = await axios.put('https://admin.septon-test.ru/updateData', updatedData);

      if (response.status === 200) {
        console.log('Товар успешно изменен:', updatedCategory);
        setMenuData(updatedData);
      } else {
        console.error('Ошибка при обновлении данных на сервере:', response.statusText);
        res.status(response.status).send(response.statusText);
      }
    } catch (error) {
      console.error('Ошибка при отправке запроса на сервер:', error);
    }
  };

  const handleAddProduct = async (category, image, name, serving, price, options) => {
    const updatedData = { ...menuData };

    // Проверим, существует ли категория, и если нет, создадим ее
    if (!updatedData[category]) {
      updatedData[category] = [];
    }

    const newProduct = {
      image,
      name,
      serving,
      options,
      price: parseFloat(price),
      isChange: onStop !== undefined ? onStop : false,
      id: Math.random(), // Генерация случайного ID (можно использовать другой метод)
    };

    updatedData[category] = [...updatedData[category], newProduct];

    try {
      const response = await axios.put('https://admin.septon-test.ru/updateData', updatedData);

      if (response.status === 200) {
        console.log('Товар успешно добавлен:', newProduct);
        setMenuData(updatedData);
      } else {
        console.error('Ошибка при обновлении данных на сервере:', response.statusText);
        res.status(response.status).send(response.statusText);
      }
    } catch (error) {
      console.error('Ошибка при отправке запроса на сервер:', error);
    }
  };

  const [newImage, setNewImage] = useState('');
  const handleImageChange = (event) => {
    setNewImage(event.target.value);
  };

  const [newName, setNewName] = useState('');
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const [newServing, setNewServing] = useState('');
  const handleServingChange = (event) => {
    setNewServing(event.target.value);
  };

  const [newOptions, setNewOptions] = useState('');
  const handleOptionsChange = (event) => {
    setNewOptions(event.target.value);
  };

  const [newPrice, setNewPrice] = useState(0);
  const handlePriceChange = (event) => {
    setNewPrice(event.target.value);
  };

  const [onStop, setOnStop] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-white overflow-auto w-full flex flex-col justify-start lg:px-[15%] pb-3">
      <h1 className="px-5 text-title font-bold font-comfortaa my-6">Админ панель</h1>
      <div>
        <div className="w-full flex flex-col justify-start mb-3">
          {menuData &&
            Object.keys(menuData).map((category, index) => (
              <Panel
                collapsed={true}
                toggleable
                header={category}
                key={index}
                className="w-full flex flex-col flex-wrap justify-start md:justify-between px-1 pb-3">
                <div className="flex flex-col flex-wrap justify-between lg:flex-row">
                  {menuData[category].map((i) => (
                    <div
                      key={i.id}
                      className="w-full md:w-[48%] lg:w-[48%] flex flex-row items-center rounded-10 mb-5 bg-white rounded-md shadow-xl">
                      <div className="flex flex-col w-40">
                        <Image
                          src={i.image}
                          width={40}
                          height={26}
                          quality={100}
                          sizes="50%"
                          className="rounded-md min-w-40 min-h-28 max-w-40 max-h-28 object-cover"
                          alt="pic"
                        />
                        <InputText
                          className="w-full h-3"
                          placeholder={i.image}
                          onChange={handleImageChange}
                        />
                      </div>
                      <div className="flex flex-col w-full h-full justify-between lg:justify-around pl-2">
                        <div>
                          <InputText
                            className="h-4 w-[90%]"
                            placeholder={i.name}
                            onChange={handleNameChange}
                          />
                        </div>
                        <div className="flex w-full justify-between my-2 pr-2">
                          {i.options ? (
                            <InputText
                              className="h-4 w-[40%]"
                              placeholder={i.options}
                              onChange={handleOptionsChange}
                            />
                          ) : (
                            <InputText
                              className="h-4 w-[40%]"
                              placeholder={i.serving ? i.serving : ``}
                              onChange={handleServingChange}
                            />
                          )}
                          <Button
                            onClick={(e) => setOnStop(!onStop)}
                            className={`py-0.5 px-2 z-0 text-white text-sm ${
                              i.isChange ? 'bg-light-gray' : 'bg-lightSlate-gray'
                            } active:bg-light-gray`}
                            label={i.isChange ? 'В наличии' : 'На стоп'}
                          />
                        </div>
                        <div className="w-full flex flex-row justify-between items-center pr-2">
                          <InputText
                            className="h-4 w-[30%]"
                            type="tel"
                            placeholder={i.price.toString()}
                            onChange={handlePriceChange}
                          />
                          <Button
                            onClick={() => handleUpdateProduct(category, i.id)}
                            className="py-1 px-2 z-0 text-white bg-lightSlate-gray active:bg-light-gray"
                            label="Изменить"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>
            ))}
        </div>
      </div>
      <div className="w-full px-6 lg:px-3">
        <Button className="py-2 w-auto" onClick={() => setVisible(true)} label="Добавить товар" />
      </div>
      <Dialog
        header="Добавить товар"
        visible={visible}
        position="bottom"
        className="w-screen lg:w-[40vw]"
        onHide={() => setVisible(false)}
        draggable={false}
        resizable={false}>
        <AdminForm menu={menuData} setVisible={setVisible} addProduct={handleAddProduct} />
      </Dialog>
    </div>
  );
}
