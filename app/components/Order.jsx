'use client'

import React, { useState } from 'react';

import { InputMask } from 'primereact/inputmask';
import { Calendar } from 'primereact/calendar';

import { InputSwitch } from 'primereact/inputswitch';
import { addLocale } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';

const Order = ({
  checked,
  setChecked,
  setIsOrderFinish,
  datetime24h,
  setDateTime24h,
  setVisible,
  items,
  countById,
  totalItems,
  orderType,
  setOrderType,
  totalPrice,
  sendOrder,
}) => {
  const [address, setAddress] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [commentValue, setCommentValue] = useState('');

  const [phoneMaskValue, setPhoneMaskValue] = useState();

  const [payValue, setPayValue] = useState('');

  function changeValue(e) {
    setPayValue(e.target.value);
  }

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneNumChange = (event) => {
    setPhoneNum(event.target.value);
  };

  const handleCommentChange = (event) => {
    setCommentValue(event.target.value);
  };

  const dishesList = items.map((i) => {
    const count = countById(totalItems, i.id, i.activeSize);
    const value = `${i.name} | ${i.serving ? i.serving + ' |' : ''} | ${i.price} ₽ | x ${count}шт.`;
    return value;
  });

  addLocale('ru', {
    firstDayOfWeek: 1,
    dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    dayNamesShort: ['Вск', 'Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    monthNames: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
    monthNamesShort: [
      'Янв',
      'Фев',
      'Мар',
      'Апр',
      'Май',
      'Июн',
      'Июл',
      'Авг',
      'Сен',
      'Окт',
      'Ноя',
      'Дек',
    ],
    today: 'Сегодня',
    clear: 'Отменить',
  });

  const [loading, setLoading] = useState(false);

  const load = () => {
    setLoading(true);
    sendOrder(orderType, address, phoneNum, commentValue, dishesList.toString(), items, countById, totalItems, payValue);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
      setIsOrderFinish(true)
    }, 1000);
  };
  return (
    <div className="w-full h-full">
      <div className="h-full">
        <div className="w-full flex justify-center my-3">
          <div className="bg-light-gray rounded-md">
            <button
              className={`text-white w-28 py-1 rounded-md transition-all ${
                orderType === 'Доставка' ? 'bg-lightSlate-gray' : 'bg-light-gray'
              }`}
              onClick={() => {
                setOrderType('Доставка');
              }}>
              Доставка
            </button>
            <button
              className={`text-white w-28 py-1 rounded-md transition-all ${
                orderType === 'Самовывоз' ? 'bg-lightSlate-gray' : 'bg-light-gray'
              }`}
              onClick={() => {
                setOrderType('Самовывоз');
              }}>
              Самовывоз
            </button>
          </div>
        </div>
        <div className=" flex flex-col h-full overflow-y-scroll">
          <div className="max-h-32 overflow-y-auto flex flex-col mb-6 border-dashed border p-2 rounded-lg">
            {items.map((i) => {
              const count = countById(totalItems, i.id, i.activeSize);
              return (
                <span key={i.id} className="w-full text-sm">{`${i.name} | ${
                  i.serving ? i.serving + ' |' : ''
                } ${i.price} ₽ | x ${count}шт.`}</span>
              );
            })}
          </div>
          <div className="flex flex-col">
            {
              totalPrice < 1000 && orderType === 'Доставка' ? (
                <>
                  <span className="mb-2  text-[12px]">
                    Стоимость товаров: <b className="text-lightSlate-gray">{totalPrice}</b> ₽
                  </span>
                  <span className='mb-2 text-[12px]'>Стоимость доставки: <b className="text-lightSlate-gray">200</b> ₽</span>
                  <span className='mb-6'>Итого: <b className="text-lightSlate-gray">{totalPrice + 200}</b> ₽</span>
                </>
              ) : (
                <span className="mb-6">
                  Итого: <b className="text-lightSlate-gray">{totalPrice < 1000 && orderType === 'Доставка' ? totalPrice + 200 : totalPrice}</b> ₽
                </span>
                )
            }
            
            <div className="flex-auto w-auto">
              <div className="w-full flex justify-between">
                <label htmlFor="calendar-24h" className="font-bold block mb-2">
                  {`Выбрать время ${orderType === 'Доставка' ? 'доставки' : 'самовывоза'}`}
                </label>
                <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
              </div>
              {checked && (
                <div className="w-auto h-auto bg-white">
                  <Calendar
                    id="calendar-24h"
                    value={datetime24h}
                    onChange={(e) => setDateTime24h(e.value)}
                    showIcon
                    showTime
                    locale="ru"
                    dateFormat="dd.mm.yy"
                    hourFormat="24"
                  />
                </div>
              )}
            </div>

            {orderType === 'Доставка' && (
              <div className="flex flex-col">
                <label className="mb-1">Введите ваш адрес:</label>
                <InputText
                  value={address}
                  className="w-[60%]"
                  onChange={handleAddressChange}
                  placeholder="ул. Ленина, 13"
                />
              </div>
            )}
            <label className="mb-1">Введите ваш номер телефона:</label>
            <InputMask
              value={phoneMaskValue}
              type='tel'
              className="w-[60%]"
              onChange={(e) => {
                setPhoneMaskValue(e.target.value);
                handlePhoneNumChange(e);
              }}
              mask="+7(999)999-99-99"
              placeholder="+7(978)879-62-20"
            />

            <div className="w-full flex flex-col mb-6">
              <label className="mb-1">Введите комментарий:</label>
              <InputText
                value={commentValue}
                className="w-[60%]"
                onChange={handleCommentChange}
                placeholder="Например: без лука"
              />
            </div>
              {orderType === 'Доставка' && (
                <div className="flex flex-col mb-6" name="checkbox">
                  <label className="mb-3">Спооб оплаты:</label>
                  <div className="mb-2 pl-1">
                    <RadioButton inputId="cash" name="cash" value="Наличные" onChange={changeValue} checked={payValue === 'Наличные' ? true : false} />
                    <label htmlFor="cash" className="ml-2">Наличные</label>
                  </div>
                  <div className="pl-1">
                    <RadioButton inputId="cart" name="cart" value="Карта" onChange={changeValue} checked={payValue === 'Карта' ? true : false} />
                    <label htmlFor="cart" className="ml-2">Карта</label>
                  </div>
                </div>
              )}
            
            <Button
                label="Заказать"
                disabled={orderType === 'Доставка' ? !phoneMaskValue || !address : !phoneMaskValue}
                icon="pi pi-check"
                loading={loading}
                onClick={load}
                iconPos="right"
                className=" w-auto h-auto px-4 py-2"
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
