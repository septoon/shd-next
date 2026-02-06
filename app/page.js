'use client'

<<<<<<< HEAD
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDelivery } from './GlobalRedux/Features/delivery/deliverySlice';
import { fetchContacts } from './GlobalRedux/Features/contacts/contactsSlice';

export default function Home() {
  const dispatch = useDispatch();

  const delivery = useSelector((state) => state.delivery);
  const contacts = useSelector((state) => state.contacts);
  const { deliveryStart, deliveryEnd, minDeliveryAmount, deliveryCost, paidDelivery, promotion, promotionCount } = delivery;
  const { phoneNumber, address } = contacts;

  const callToPhoneNumber = `tel:${phoneNumber}`

  useEffect(() => {
    dispatch(fetchDelivery());
    dispatch(fetchContacts());
  }, [dispatch]);

  if (delivery.status === 'loading' && contacts.status === 'loading') {
    return <div>Обновляем данные...</div>;
  }

  if (delivery.status === 'failed' || contacts.status === 'loading') {
    return <div>Ошибка: {delivery.error}</div>;
  }


  return (
    <main className="px-6 lg:px-[30%] w-screen h-screen flex flex-col justify-start items-start overflow-y-hidden bg-main text-white bg-cover bg-no-repeat bg-center bg-fixed">
      <div className="flex flex-col justify-around h-[calc(100dvh-80px)]">
        <div className=" flex flex-col">
          <span className="text-xl italic mb-4">Доставка вкусного шашлыка в Алуште</span>
        </div>
        {
          promotion && (
            <div className="flex flex-col">
              <span className="text-2xl font-semibold">СКИДКА <b>{promotionCount} %</b></span>
              <span className="text-xl font-semibold">На доставку и самовывоз</span>
            </div>
          )
        }
        <Link
          href="/menu"
          className="w-[200px] bg-lightSlate-gray text-white text-center border-2 rounded-2xl">
          <button className="w-auto text-xl px-4 py-2 rounded-2xl">Перейти в меню</button>
        </Link>
        <div className="flex flex-col">
          {
            paidDelivery ? (
              <span className="text-xl font-semibold my-3">При заказе на сумму меньше {minDeliveryAmount} рублей, стоимость доставки составляет {deliveryCost} рублей</span>
            ) : (
              <span className="text-xl font-semibold my-3">Доставка при заказе от {minDeliveryAmount} рублей</span>
            )
          }
          
        </div>
        <div className="w-full flex flex-col">
          <span className="text-lg font-semibold">Режим доставки </span>
          <span className="text-xl font-semibold">с {deliveryStart}:00 до {deliveryEnd}:00 </span>
        </div>
        <div className="w-full flex flex-col">
          <span className="text-xl">Адрес:</span>
          <span className="text-xl font-semibold">{address}</span>
        </div>
        <div className="flex flex-col w-auto">
          <span className="text-xl">Заказать можно по номеру:</span>
          <span className="font-extrabold text-white text-xl">
            <a href={callToPhoneNumber}>{phoneNumber}</a>
          </span>
        </div>
      </div>
=======
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function Home() {
  const delivery = useSelector((state) => state.delivery);
  const contacts = useSelector((state) => state.contacts);
  const {
    deliveryStart,
    deliveryEnd,
    minDeliveryAmount,
    deliveryCost,
    paidDelivery,
    promotion,
    promotionCount,
  } = delivery;
  const { phoneNumber, address } = contacts;

  const callToPhoneNumber = `tel:${phoneNumber}`;
  const isLoading = delivery.status === 'loading' || contacts.status === 'loading';

  if (delivery.status === 'failed' || contacts.status === 'failed') {
    return (
      <main className="page-content">
        <div className="section-headline">
          <h1 className="section-title">Что-то пошло не так</h1>
          <p className="section-subtitle">Не удалось загрузить данные. Попробуйте обновить страницу или позвоните нам напрямую.</p>
        </div>
        <a className="primary-btn" href={callToPhoneNumber}>Позвонить {phoneNumber}</a>
      </main>
    );
  }

  const renderDeliveryText = () => {
    if (isLoading) {
      return 'Обновляем условия доставки...';
    }
    if (paidDelivery) {
      return `При заказе на сумму меньше ${minDeliveryAmount} ₽, доставка стоит ${deliveryCost} ₽`;
    }
    return `Бесплатно от ${minDeliveryAmount} ₽`;
  };

  return (
    <main className="page-content">
      <section className="hero-card">
        <div className="eyebrow">Доставка свежего шашлыка по Алуште</div>
        <h1 className="hero-title">Готовим на углях</h1>
        <p className="hero-lede">
          Тёплый дым, живой огонь и большие порции, приготовленные прямо перед доставкой.
          Выбирайте любимые блюда — мы привезём без промедления.
        </p>

        {promotion && (
          <div className="promo-chip">
            <span className="promo-highlight">-{promotionCount}%</span>
            <span>на доставку и самовывоз</span>
          </div>
        )}

        <div className="cta-row">
          <Link href="/menu" className="primary-btn">
            Перейти в меню
          </Link>
          <div className="pill muted-pill">{renderDeliveryText()}</div>
        </div>

        <div className="info-grid">
          <div className="info-tile">
            <span className="label">Режим доставки</span>
            <span className="value">
              {isLoading ? '...' : `с ${deliveryStart}:00 до ${deliveryEnd}:00`}
            </span>
          </div>
          <div className="info-tile">
            <span className="label">Адрес</span>
            <span className="value">{address}</span>
          </div>
          <div className="info-tile highlight">
            <span className="label">Заказать по телефону</span>
            <a className="value phone-link" href={callToPhoneNumber}>
              {phoneNumber}
            </a>
          </div>
        </div>
      </section>
>>>>>>> 806ff73 (update)
    </main>
  );
}
