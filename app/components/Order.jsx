'use client';

import React, { useState, useEffect } from 'react';
import { InputMask } from 'primereact/inputmask';
import { Calendar } from 'primereact/calendar';
import { isAfter, isBefore, setHours, setMinutes } from 'date-fns';

import { InputSwitch } from 'primereact/inputswitch';
import { addLocale } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import { useDispatch, useSelector } from 'react-redux';
import {
  addAddressToOrder,
  addCommentToOrder,
  addPhoneNumToOrder,
  setInitialOrderState,
} from '../GlobalRedux/Features/cart/orderSlice';
import { shortDates } from '../common/shortDates';
import { fetchDelivery } from '../GlobalRedux/Features/delivery/deliverySlice';
<<<<<<< HEAD
=======
import Link from 'next/link';
>>>>>>> 806ff73 (update)

const Order = ({
  checked,
  setChecked,
  setIsOrderFinish,
  datetime24h,
  setDateTime24h,
  setVisible,
  items,
  orderType,
  setOrderType,
  totalPrice,
  sendOrder,
}) => {
  const dispatch = useDispatch();

<<<<<<< HEAD
  

  useEffect(() => {
    dispatch(fetchDelivery());
=======
  const delivery = useSelector((state) => state.delivery);
  const deliveryStatus = delivery.status;

  useEffect(() => {
    if (deliveryStatus === 'idle') {
      dispatch(fetchDelivery());
    }
>>>>>>> 806ff73 (update)
    if (typeof window !== 'undefined') {
      const address = localStorage.getItem('address') ? JSON.parse(localStorage.getItem('address')) : '';
      const phoneNum = localStorage.getItem('phoneNum') ? JSON.parse(localStorage.getItem('phoneNum')) : '';
      const commentValue = localStorage.getItem('commentValue') ? JSON.parse(localStorage.getItem('commentValue')) : '';

      dispatch(setInitialOrderState({ address, phoneNum, commentValue }));
    }
<<<<<<< HEAD
  }, [dispatch]);

  const delivery = useSelector((state) => state.delivery)
=======
  }, [dispatch, deliveryStatus]);

>>>>>>> 806ff73 (update)
  const { address = '', phoneNum = '', commentValue = '' } = useSelector(
    (state) => ({
      address: state.order.address,
      phoneNum: state.order.phoneNum,
      commentValue: state.order.commentValue,
    })
  );

  const {paidDelivery, deliveryStart, deliveryEnd, minDeliveryAmount, deliveryCost, status} = delivery

  const totalWithDeliveryPrice = deliveryCost + totalPrice

  const paid = paidDelivery && totalPrice < minDeliveryAmount && orderType === 'Доставка'

  const [phoneMaskValue, setPhoneMaskValue] = useState(phoneNum);

  const [payValue, setPayValue] = useState('');

  const changeValue = (e) => {
    setPayValue(e.target.value);
  };

  const handleAddressChange = (event) => {
    dispatch(addAddressToOrder(event.target.value));
  };

  const handlePhoneNumChange = (event) => {
    dispatch(addPhoneNumToOrder(event.target.value));
  };

  const handleCommentChange = (event) => {
    dispatch(addCommentToOrder(event.target.value));
  };

  const dishesList = items
    .map((i) => {
      const count = i.quantity;
      const value = `${i.name} | x ${count}${
        typeof i.serving === 'number' ? '00г.,' : 'шт.,'
      }\n`;
      return value;
    })
    .join('');

  addLocale('ru', shortDates);

  const [loading, setLoading] = useState(false);

  const load = () => {
    setLoading(true);
    sendOrder(
      orderType,
      address,
      phoneMaskValue,
      commentValue,
      dishesList,
      items,
      paid,
      totalPrice,
      totalWithDeliveryPrice,
      payValue,
      checked
    );
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
      setIsOrderFinish(true);
    }, 1000);
  };

  const isDeliveryTimeValid = (time) => {
    if (!time) return true;

    const deliveryStartTime = setMinutes(setHours(new Date(), deliveryStart), 0);
    const deliveryEndTime = setMinutes(setHours(new Date(), deliveryEnd), 0);

    return isAfter(time, deliveryStartTime) && isBefore(time, deliveryEndTime);
  };

  const isButtonDisabled =
    orderType === 'Доставка'
      ? !phoneMaskValue ||
        !address ||
        totalPrice < minDeliveryAmount ||
        !isDeliveryTimeValid(datetime24h)
      : !phoneMaskValue || totalPrice < minDeliveryAmount;

  return (
<<<<<<< HEAD
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
              }}
            >
              Доставка
            </button>
            <button
              className={`text-white w-28 py-1 rounded-md transition-all ${
                orderType === 'Самовывоз' ? 'bg-lightSlate-gray' : 'bg-light-gray'
              }`}
              onClick={() => {
                setOrderType('Самовывоз');
              }}
            >
              Самовывоз
            </button>
          </div>
        </div>
        <div className="flex flex-col h-full overflow-y-scroll">
          <div className="max-h-32 overflow-y-auto flex flex-col mb-6 border-dashed border p-2 rounded-lg">
            {items.map((i) => (
              <span key={i.id} className="w-full text-sm">
                {`${i.name} | ${i.serving ? i.serving + ' |' : ''} ${
                  i.price
                } ₽ | x ${i.quantity}${
                  typeof i.serving === 'number' ? '00г.' : 'шт.'
                }`}
              </span>
            ))}
          </div>
          <div className="flex flex-col">
            {totalPrice < minDeliveryAmount && orderType === 'Доставка' && !paidDelivery ? (
              <span className="mb-2 text-[12px]">
                Минимальная сумма доставки: <b className="text-red">{minDeliveryAmount}</b> ₽
              </span>
            ) : paid && (
              <span className="mb-2 text-[12px]">
                Если сумма заказа ниже <b className="text-red">{minDeliveryAmount}</b> ₽, стоимость доставки составляет <b className="text-red">{deliveryCost}</b> ₽
                
              </span>
            )}
            <span className="mb-6">
              Итого: <b className="text-lightSlate-gray">{paid ? totalWithDeliveryPrice : totalPrice}</b> ₽
            </span>

            <div className="flex-auto w-auto">
              <div className="w-full flex justify-between">
                <label htmlFor="calendar-24h" className="font-bold block mb-2">
                  {`Выбрать время ${
                    orderType === 'Доставка' ? 'доставки' : 'самовывоза'
                  }`}
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
              type="tel"
              className="w-[60%]"
              onChange={(e) => {
                setPhoneMaskValue(e.target.value);
                handlePhoneNumChange(e);
              }}
              mask="+7(999)999-99-99"
              placeholder="+7(978)697-84-75"
            />

            <div className="w-full flex flex-col mb-6">
              <label className="mb-1">Введите комментарий:</label>
              <InputText
                value={commentValue}
                className="w-[60%]"
                onChange={handleCommentChange}
                placeholder="Комментарий"
              />
            </div>
            {orderType === 'Доставка' && (
              <div className="flex flex-col mb-6" name="checkbox">
                <label className="mb-3">Способ оплаты:</label>
                <div className="mb-2 pl-1">
                  <RadioButton
                    inputId="cash"
                    name="payment"
                    value="Наличные"
                    onChange={changeValue}
                    checked={payValue === 'Наличные'}
                  />
                  <label htmlFor="cash" className="ml-2">
                    Наличные
                  </label>
                </div>
                <div className="pl-1">
                  <RadioButton
                    inputId="card"
                    name="payment"
                    value="Карта"
                    onChange={changeValue}
                    checked={payValue === 'Карта'}
                  />
                  <label htmlFor="card" className="ml-2">
                    Карта
                  </label>
                </div>
              </div>
            )}

            <Button
              label={
                orderType === 'Доставка' && !isDeliveryTimeValid(datetime24h)
                  ? `Доставка работает с ${deliveryStart}:00 до ${deliveryEnd}:00`
                  : 'Заказать'
              }
              disabled={isButtonDisabled}
              icon={!isDeliveryTimeValid(datetime24h) ? '' : 'pi pi-check'}
              loading={loading}
              onClick={load}
              iconPos="right"
              className="w-auto h-auto px-4 py-2"
            />
          </div>
        </div>
      </div>
=======
    <div className="order-panel p-4 max-[960px]:p-2">
      <div className="order-toggle">
        <button
          className={`toggle-btn ${orderType === 'Доставка' ? 'toggle-btn--active' : ''}`}
          onClick={() => {
            setOrderType('Доставка');
          }}
        >
          Доставка
        </button>
        <button
          className={`toggle-btn ${orderType === 'Самовывоз' ? 'toggle-btn--active' : ''}`}
          onClick={() => {
            setOrderType('Самовывоз');
          }}
        >
          Самовывоз
        </button>
      </div>

      <div className="form-card">
        <span className="label">Ваш заказ</span>
        <div className="order-list">
          {items.map((i) => (
            <span key={i.id} className="order-line">
              {`${i.name} | ${i.serving ? i.serving + ' |' : ''} ${i.price} ₽ | x ${i.quantity}${
                typeof i.serving === 'number' ? '00г.' : 'шт.'
              }`}
            </span>
          ))}
        </div>
        {totalPrice < minDeliveryAmount && orderType === 'Доставка' && !paidDelivery ? (
          <span className="hint">
            Минимальная сумма доставки: <b>{minDeliveryAmount}</b> ₽
          </span>
        ) : (
          paid && (
            <span className="hint">
              Если сумма заказа ниже <b>{minDeliveryAmount}</b> ₽, доставка: <b>{deliveryCost}</b> ₽
            </span>
          )
        )}
        <div className="total-line">
          <span>Итого:</span>
          <b>{paid ? totalWithDeliveryPrice : totalPrice} ₽</b>
        </div>
      </div>

      <div className="form-card">
        <div className="form-row">
          <label htmlFor="calendar-24h" className="label">
            {`Выбрать время ${orderType === 'Доставка' ? 'доставки' : 'самовывоза'}`}
          </label>
          <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
        </div>
        {checked && (
          <div className="calendar-shell">
            <Calendar
              id="calendar-24h"
              value={datetime24h}
              onChange={(e) => setDateTime24h(e.value)}
              showIcon
              showTime
              locale="ru"
              dateFormat="dd.mm.yy"
              hourFormat="24"
              className="input-field"
            />
          </div>
        )}
      </div>

      {orderType === 'Доставка' && (
        <div className="form-card">
          <label className="label">Адрес</label>
          <InputText
            value={address}
            className="input-field"
            onChange={handleAddressChange}
            placeholder="ул. Парковая, 2"
          />
        </div>
      )}

      <div className="form-card">
          <label className="label">Номер телефона</label>
          <InputMask
            value={phoneMaskValue}
            type="tel"
            className="input-field prime-field"
            onChange={(e) => {
              setPhoneMaskValue(e.target.value);
              handlePhoneNumChange(e);
            }}
            mask="+7(999)999-99-99"
          placeholder="+7(978)459-69-35"
        />
      </div>

      <div className="form-card">
        <label className="label">Комментарий</label>
        <InputText
          value={commentValue}
          className="input-field prime-field"
          onChange={handleCommentChange}
          placeholder="Комментарий"
        />
      </div>

      {orderType === 'Доставка' && (
        <div className="form-card">
          <label className="label">Способ оплаты</label>
          <div className="radio-row">
            <RadioButton
              inputId="cash"
              name="payment"
              value="Наличные"
              onChange={changeValue}
              checked={payValue === 'Наличные'}
            />
            <label htmlFor="cash" className="radio-label">
              Наличные
            </label>
          </div>
          <div className="radio-row">
            <RadioButton
              inputId="card"
              name="payment"
              value="Карта"
              onChange={changeValue}
              checked={payValue === 'Карта'}
            />
            <label htmlFor="card" className="radio-label">
              Карта
            </label>
          </div>
        </div>
      )}

      <div className="my-3 text-[12px] text-gray-500">
        Оформляя заказ, вы соглашаетесь с{' '}
        <Link
          href="/privacy"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2 text-gray-600 hover:text-gray-800"
        >
          Политикой конфиденциальности
        </Link>
        .
      </div>

      <Button
        label={
          orderType === 'Доставка' && !isDeliveryTimeValid(datetime24h)
            ? `Доставка работает с ${deliveryStart}:00 до ${deliveryEnd}:00`
            : 'Заказать'
        }
        disabled={isButtonDisabled}
        icon={!isDeliveryTimeValid(datetime24h) ? '' : 'pi pi-check'}
        loading={loading}
        onClick={load}
        iconPos="right"
        className="primary-btn w-full justify-center"
      />
>>>>>>> 806ff73 (update)
    </div>
  );
};

<<<<<<< HEAD
export default Order;
=======
export default Order;
>>>>>>> 806ff73 (update)
