'use client';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
<<<<<<< HEAD
import Image from 'next/image';
=======
import { ShoppingCart, Trash2 } from 'lucide-react';
>>>>>>> 806ff73 (update)

import {
  setInitialCartState,
  clearDishCart,
  removeDish,
  decrementDish,
  addDishToCart,
} from '../GlobalRedux/Features/cart/cartSlice';

<<<<<<< HEAD
import Trash from '../../public/img/trash.svg';
import CartIcon from '@/public/img/cart-logo.svg';

=======
>>>>>>> 806ff73 (update)
import axios from 'axios';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import OrderFinish from '../components/OrderFinish';
import Order from '../components/Order';
import CartItem from '../components/CartItem';

const Cart = () => {
  const dispatch = useDispatch();

  // Загрузка данных из localStorage на клиенте
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedItems = localStorage.getItem('items');
      const savedTotalCount = localStorage.getItem('totalCount');
      const savedTotalPrice = localStorage.getItem('totalPrice');

      if (savedItems && savedTotalCount && savedTotalPrice) {
        dispatch(
          setInitialCartState({
            items: JSON.parse(savedItems),
            totalCount: parseInt(savedTotalCount, 10),
            totalPrice: parseFloat(savedTotalPrice),
          })
        );
      }
    }
  }, [dispatch]);

  const { items, totalCount, totalPrice } = useSelector((state) => ({
    items: state.cart.items,
    totalCount: state.cart.totalCount,
    totalPrice: state.cart.totalPrice,
  }));

  const [isOrderFinish, setIsOrderFinish] = useState(false);
  const [visible, setVisible] = useState(false);
<<<<<<< HEAD
  const [position, setPosition] = useState('center');
=======
  const [position, setPosition] = useState('right');
>>>>>>> 806ff73 (update)

  const show = (position) => {
    setPosition(position);
    setVisible(true);
  };

<<<<<<< HEAD
=======
  useEffect(() => {
    const syncPosition = () => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 961;
      setPosition(isMobile ? 'bottom' : 'right');
    };
    syncPosition();
    window.addEventListener('resize', syncPosition);
    return () => window.removeEventListener('resize', syncPosition);
  }, []);

>>>>>>> 806ff73 (update)
  const footerContent = (
    <div className="flex justify-between items-center">
      <span className="text-sm text-left w-1/2">
        В течение 10-ти минут с вами свяжется оператор для подтверждения заказа.
      </span>
      <Button
        label="Ok"
        className="py-2 px-4 h-10"
        icon="pi pi-check"
        onClick={() => setIsOrderFinish(false)}
        autoFocus
      />
    </div>
  );

  const onClickRemoveDish = (dishObj) => {
    dispatch(removeDish(dishObj));
  };
  const onClickClearCart = () => {
    dispatch(clearDishCart());
  };

  const onClickMinusDish = (dishObj) => {
    dispatch(decrementDish(dishObj));
  };

  const onClickPlusDish = (dishObj) => {
    dispatch(addDishToCart(dishObj));
  };

  const [datetime24h, setDateTime24h] = useState(new Date());
  const shortDate = datetime24h.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const shortTime = datetime24h.toLocaleTimeString('ru-RU', {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
  });

  const [checked, setChecked] = useState(false);

  const [orderType, setOrderType] = useState('Доставка');
  const ordersCount = Math.floor(Math.random() * 99999999);

  const [orderValues, setOrderValues] = useState({});

  const sendOrder = async (
    orderType,
    address,
    phoneNumber,
    comment,
    dishes,
    items,
    paid,
    totalPrice,
    totalWithDeliveryPrice,
    pay,
    checked
  ) => {
    const message =
      orderType === 'Доставка'
        ? `
Заказ # ${ordersCount}\n\n${orderType}\n\n${dishes}\n\nСумма: ${paid ? totalWithDeliveryPrice : totalPrice} ₽\nАдрес Доставки: ${address}\nНомер телефона: ${phoneNumber}\n\n${
            checked
              ? `Дата доставки: ${shortDate}\nВремя доставки: ${shortTime}`
              : `Дата доставки: Сегодня\nВремя доставки: Сейчас`
          }\nКомментарий: ${comment}\nСпособ оплаты: ${pay ? pay : 'Не выбран'}`
        : `Заказ # ${ordersCount}\n\n${orderType}\n\n${dishes}\n\nСумма: ${totalPrice} ₽\nНомер телефона: ${phoneNumber}\n${
            checked
              ? `Дата: ${shortDate}\nВремя: ${shortTime}`
              : `Дата: Сегодня\nВремя: Сейчас`
          }\nКомментарий: ${comment}`;

    setOrderValues({
      orderType,
      address,
      phoneNumber,
      comment,
      dishes,
      paid,
      totalPrice,
      totalWithDeliveryPrice,
      items,
      pay,
      checked,
    });

    try {
<<<<<<< HEAD
      await axios.post(`https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TOKEN}/sendMessage`, {
        chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
=======
      await axios.post('https://api.telegram.org/bot6588296927:AAFEdBfmYFTQKRPOXc_I6hX4aDOCU5hhOp8/sendMessage', {
        chat_id: '-1002117927304',
>>>>>>> 806ff73 (update)
        text: message,
      });
      onClickClearCart();
    } catch (err) {
      console.warn(err);
    }
  };

  return (
<<<<<<< HEAD
    <div className="py-6 w-full">
      <h1 className="pl-6 text-title font-bold font-comfortaa">Корзина</h1>
=======
    <div className="page-section cart-page">
      <div className="section-headline">
        <h1 className="section-title">Корзина</h1>
        <p className="section-subtitle">Проверьте заказ и подтвердите доставку — кухня уже работает.</p>
      </div>
>>>>>>> 806ff73 (update)
      <Dialog
        header="Ваш заказ"
        visible={visible}
        position={position}
<<<<<<< HEAD
        className="w-screen lg:w-[40vw]"
        onHide={() => setVisible(false)}
        draggable={false}
        resizable={false}
=======
        className="order-shell"
        contentClassName="order-shell__content"
        headerClassName="order-shell__header"
        onHide={() => setVisible(false)}
        blockScroll
        draggable={false}
        resizable={false}
        dismissableMask
>>>>>>> 806ff73 (update)
      >
        <Order
          checked={checked}
          setChecked={setChecked}
          setIsOrderFinish={setIsOrderFinish}
          datetime24h={datetime24h}
          setDateTime24h={setDateTime24h}
          setVisible={setVisible}
          onClickClearCart={onClickClearCart}
          items={items}
          totalCount={totalCount}
          totalPrice={totalPrice}
          sendOrder={sendOrder}
          orderType={orderType}
          setOrderType={setOrderType}
        />
      </Dialog>
      <Dialog
        header="Спасибо за заказ"
        visible={isOrderFinish}
        position={position}
<<<<<<< HEAD
        className="w-screen lg:w-[40vw]"
=======
        className="order-shell"
        contentClassName="order-shell__content"
        headerClassName="order-shell__header"
>>>>>>> 806ff73 (update)
        footer={footerContent}
        onHide={() => setIsOrderFinish(false)}
        draggable={false}
        resizable={false}
      >
        <OrderFinish orderValues={orderValues} shortDate={shortDate} shortTime={shortTime} />
      </Dialog>
      <div className="px-1">
        {items && items.length ? (
          // Если в корзине что-то есть
          <>
<<<<<<< HEAD
            <div className="w-full flex justify-end text-lightSlate-gray pr-6">
              <div
                className="flex mt-2 mb-4 cursor-pointer"
=======
            <div className="cart-actions">
              <button
                className="clear-cart"
>>>>>>> 806ff73 (update)
                onClick={() => {
                  let popup = window.confirm('Вы уверены, что хотите очистить корзину?');
                  popup && dispatch(clearDishCart());
                }}
              >
<<<<<<< HEAD
                <Image className="text-lightSlate-gray" src={Trash} alt="trash" />
                <span>Очистить корзину</span>
              </div>
            </div>
            <div className="px-2 h-auto pt-2 mb-6">
=======
                <Trash2 className="w-4 h-4" />
                <span>Очистить корзину</span>
              </button>
            </div>
            <div className="cart-list">
>>>>>>> 806ff73 (update)
              {items.map((item, index) => (
                <CartItem
                  key={index}
                  item={item}
                  onClickMinusDish={() =>
                    onClickMinusDish({ id: item.id, price: item.price })
                  }
                  onClickPlusDish={() => onClickPlusDish(item)}
                  onClickRemoveDish={() => onClickRemoveDish({ id: item.id })}
                />
              ))}
            </div>
<<<<<<< HEAD
            <div className="">
              <div className="mb-3 w-full flex flex-col justify-between px-3 transition-all">
                <span>
                  Всего блюд:{' '}
                  <b className="font-bold text-lg text-lightSlate-gray">{totalCount} шт.</b>
                </span>
                <span>
                  Сумма заказа: <b className="text-lightSlate-gray text-lg">{totalPrice} ₽</b>
                </span>
              </div>
              <div className="w-full pl-3">
                <Button
                  className="px-4 py-2 bg-lightSlate-gray text-white rounded-md"
                  onClick={() => show('bottom')}
                  label="Оформить заказ"
                />
              </div>
=======
            <div className="cart-summary">
              <div className="cart-summary-row">
                <span>Всего блюд</span>
                <b className="cart-summary-value">{totalCount} шт.</b>
              </div>
              <div className="cart-summary-row">
                <span>Сумма заказа</span>
                <b className="cart-summary-value">{totalPrice} ₽</b>
              </div>
              <Button
                className="primary-btn w-full justify-center"
                onClick={() => show('bottom')}
                label="Оформить заказ"
              />
>>>>>>> 806ff73 (update)
            </div>
          </>
        ) : (
          // Если корзина пустая
<<<<<<< HEAD
          <div className="px-6 pt-6 w-full flex flex-col items-center justify-around">
            <h2 className="mb-6 self-start">Корзина пустая</h2>
            <Image src={CartIcon} className="opacity-50 w-1/2 max-w-[300px]" alt="cart" />
            <span className="mt-6">
              Вероятней всего, вы ещё ничего не заказали. Для того, чтобы сделать заказ, перейдите на
              страницу меню.
            </span>
            <Link href="/menu" className="">
              <Button
                className="px-4 py-2 bg-lightSlate-gray text-white rounded-md fixed bottom-main-btn left-6 lg:left-[20%]"
                label="Вернуться в меню"
              />
=======
          <div className="cart-empty">
            <h2 className="section-title">Корзина пустая</h2>
            <ShoppingCart className="empty-icon" />
            <p className="section-subtitle text-center">
              Добавьте блюда из меню и вернитесь — мы сохраняем всё, пока вы выбираете.
            </p>
            <Link href="/menu">
              <Button className="primary-btn mt-4" label="Вернуться в меню" />
>>>>>>> 806ff73 (update)
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Cart;
=======
export default Cart;
>>>>>>> 806ff73 (update)
