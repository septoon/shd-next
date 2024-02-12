'use client';

import React, { useEffect, useState } from 'react';

import { InputSwitch } from 'primereact/inputswitch';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

const AdminForm = ({ menu, addProduct, setVisible }) => {
  const categories = Object.keys(menu);
  
  const [newImage, setNewImage] = useState('');
  const [newName, setNewName] = useState('');
  const [newServing, setNewServing] = useState('');
  const [newOptions, setNewOptions] = useState('');
  const [newPrice, setNewPrice] = useState(0);
  
  const objectCategories = categories.reduce((acc, name) => {
    acc[name] = { name };
    return acc;
  }, {});
  console.log(objectCategories);
  const [category, setCategory] = useState(objectCategories.name);
  const categoriesArray = Object.values(objectCategories);

  const handleAddProduct = () => {
    addProduct(category.name, newImage, newName, newServing, parseFloat(newPrice), newOptions);
    // Сбросить значения формы после добавления продукта
    setNewImage('');
    setNewName('');
    setNewServing('');
    setNewOptions('');
    setNewPrice(0);
    setVisible(false);
  };
  return (
    <div className="w-full h-full">
      <div className="h-full">
        <div className=" flex flex-col h-full overflow-y-scroll">
          <div className="flex flex-col">
            <div className="w-full flex flex-col mb-3">
              <div className="card flex justify-content-center">
                <span className="p-float-label w-full md:w-[60%] md:w-14rem">
                  <Dropdown
                    inputId="dd-city"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    options={categoriesArray}
                    optionLabel="name"
                    className="w-full"
                  />
                  <label htmlFor="dd-city">Выбрать категорию</label>
                </span>
              </div>
            </div>
            <div className="w-full flex flex-col mb-3">
              <label className="mb-1">Картинка:</label>
              <InputText
                type="tel"
                className="w-full md:w-[60%]"
                onChange={(e) => setNewImage(e.target.value)}
                placeholder="Ссылка в формате url"
              />
            </div>
            <div className="w-full flex flex-col mb-3">
              <label className="mb-1">Название:</label>
              <InputText
                className="w-full md:w-[60%]"
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Название блюда"
              />
            </div>

            <div className="w-full flex flex-col mb-3">
              <label className="mb-1">Вес:</label>
              <InputText
                className="w-full md:w-[60%]"
                onChange={(e) => setNewServing(e.target.value)}
                placeholder="Вес блюда"
              />
            </div>

            <div className="w-full flex flex-col mb-3">
              <label className="mb-1">Опциональность:</label>
              <InputText
                className="w-full md:w-[60%]"
                onChange={(e) => setNewOptions(e.target.value)}
                placeholder="Опциональность блюда"
              />
            </div>

            <div className="w-full flex flex-col mb-3">
              <label className="mb-1">Цена:</label>
              <InputText
                className="w-full md:w-[60%]"
                onChange={(e) => setNewPrice(e.target.value)}
                placeholder="Стоимость блюда"
              />
            </div>

            <div className="w-full md:w-[60%] flex justify-between mb-3">
              <label htmlFor="calendar-24h" className="font-bold block mb-2">
                На стопе
              </label>
              <InputSwitch />
            </div>

            <Button
              label="Добавить"
              icon="pi pi-check"
              iconPos="right"
              className="w-full md:w-[60%] h-auto px-4 py-2"
              onClick={handleAddProduct}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminForm;
