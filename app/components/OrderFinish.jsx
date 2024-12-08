'use client';

import React from 'react';

const OrderFinish = ({ orderValues, shortDate, shortTime }) => {
  const { orderType, address, phoneNumber, comment, items, paid, totalPrice, totalWithDeliveryPrice, pay, checked } = orderValues;

  return (
    <div className="w-full flex flex-col">
      <span className="mb-2">
        <b>Тип заказа: </b> {orderType}
      </span>
      {orderType === 'Доставка' && (
        <>
          <span className="mb-2">
            <b>Адрес:</b> {address}
          </span>
          <span className="mb-2">
            <b>Способ оплаты:</b> {pay ? pay : 'Не выбран'}
          </span>
        </>
      )}
      <span className="mb-2">
        <b>Номер телефона:</b> {phoneNumber}
      </span>
      <span className="mb-2">
        <b>Комментарий:</b> {comment ? comment : 'Не указан'}
      </span>
      <span className="mb-2">
        <b>Заказ:</b>
      </span>
      {items.map((i) => (
        <span key={i.id} className="w-full text-sm">
          {`${i.name} | ${i.price} ₽. | x ${i.quantity}${
            typeof i.serving === 'number' ? '00г.' : 'шт.'
          }`}
        </span>
      ))}
        {
          paid ? (
          <span className="my-2">
            <b>Сумма с учетом доставки:</b> {totalWithDeliveryPrice} ₽
          </span>
          ) : (
          <span className="my-2">
            <b>Сумма:</b> {totalPrice} ₽
          </span>
          )
        }
      <span className="mb-2">
        <b>Дата:</b> {checked ? shortDate : 'Сегодня'}
      </span>
      <span className="mb-2">
        <b>Время:</b> {checked ? shortTime : 'Ближайшее'}
      </span>
    </div>
  );
};

export default OrderFinish;