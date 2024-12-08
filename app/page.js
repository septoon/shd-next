'use client'

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
  const { deliveryStart, deliveryEnd, minDeliveryAmount, deliveryCost, paidDelivery } = delivery;
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
    </main>
  );
}
