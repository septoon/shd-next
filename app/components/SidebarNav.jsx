'use client';

import { useSelector, useDispatch } from 'react-redux';
import { setIsOpen } from '../GlobalRedux/Features/burger/burgerSlice';

import Link from 'next/link';
import Image from 'next/image';
import { Sidebar } from 'primereact/sidebar';

import MainIcon from '../../public/img/icons/home-page.png';
import MenuIcon from '../../public/img/icons/menu.png';
import DeliveryIcon from '../../public/img/icons/delivery--v1.png';
import ContactsIcon from '../../public/img/icons/apple-contacts.png';
import CartIcon from '../../public/img/icons/shopping-cart--v2.png';
import VacanciesIcon from '../../public/img/icons/lawyer.png';

const SidebarNav = () => {
  const isOpen = useSelector((state) => state.burger.isOpen);
  const dispatch = useDispatch();

  return (
    <Sidebar visible={isOpen} position="right" onHide={() => dispatch(setIsOpen(false))}>
      <div className="w-full h-full bg-white flex flex-col items-center transition-all z-50">
        <div className="w-full h-1/2 uppercase font-bold font-comfortaa text-lg text-dark flex flex-col items-start justify-between">
          <div className="flex items-center">
            <Image width="20" height="20" className="mr-4" src={MainIcon} alt="home-page" />
            <Link href="/" onClick={() => dispatch(setIsOpen(false))}>
              Главная
            </Link>
          </div>
          <div className="flex items-center">
            <Image
              width="20"
              height="20"
              className="mr-4"
              src={MenuIcon}
              alt="external-book-food-delivery-line-zulfa-mahendra"
            />
            <Link href="/menu" onClick={() => dispatch(setIsOpen(false))}>
              Меню
            </Link>
          </div>
          <div className="flex items-center">
            <Image width="20" height="20" className="mr-4" src={DeliveryIcon} alt="delivery--v1" />
            <Link href="/delivery" onClick={() => dispatch(setIsOpen(false))}>
              Доставка и оплата
            </Link>
          </div>
          <div className="flex items-center">
            <Image
              width="20"
              height="20"
              className="mr-4"
              src={ContactsIcon}
              alt="apple-contacts"
            />
            <Link href="/contacts" onClick={() => dispatch(setIsOpen(false))}>
              Контакты
            </Link>
          </div>
          <div className="flex items-center">
            <Image width="20" height="20" className="mr-4" src={CartIcon} alt="shopping-cart--v2" />
            <Link href="/cart" onClick={() => dispatch(setIsOpen(false))}>
              Корзина
            </Link>
          </div>
          <div className="flex items-center">
            <Image width="20" height="20" className="mr-4" src={VacanciesIcon} alt="vacancies" />
            <Link href="/vacancies" onClick={() => dispatch(setIsOpen(false))}>
              Вакансии
            </Link>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default SidebarNav;
