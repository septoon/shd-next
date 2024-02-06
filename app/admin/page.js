// pages/admin.js
'use client'
import React, { useState } from 'react';
import { data } from '../api/data'; // Импортируйте свои данные

export default function Admin() {
  const [newProduct, setNewProduct] = useState({
    category: '',
    image: '',
    name: '',
    serving: '',
    price: 0,
    isChange: false,
    id: data['Холодные закуски'].length, // Генерация уникального ID
  });

  const handleAddProduct = (category) => {
    const updatedData = { ...data };
    updatedData[category].push(newProduct);
    // Отправьте обновленные данные на сервер или в ваш JSON файл
    // Можно использовать API запросы (например, с помощью fetch)
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
  };

  return (
    <div>
      <h1>Админ Панель</h1>

      {/* Форма для добавления нового товара */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddProduct(newProduct.category);
        }}
      >
        <label>
          Категория:
          <select
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            required
          >
            <option value="">Выберите категорию</option>
            {Object.keys(data).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Название:
          <input
            type="text"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Сервировка:
          <input
            type="text"
            value={newProduct.serving}
            onChange={(e) => setNewProduct({ ...newProduct, serving: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Цена:
          <input
            type="number"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
            required
          />
        </label>
        <br />
        <label>
          Изображение (URL):
          <input
            type="url"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            required
          />
        </label>
        <br />
        <button type="submit">Добавить товар</button>
      </form>
    </div>
  );
}
