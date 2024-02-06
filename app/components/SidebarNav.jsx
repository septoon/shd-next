'use client';

import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

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
import HistoryIcon from '../../public/img/icons/order-history.png';

const SidebarNav = () => {
  const selectBurgerState = (state) => state.burger;

  const isOpenSelector = createSelector([selectBurgerState], (burger) => burger.isOpen);
  const isOpen = useSelector(isOpenSelector);

  const dispatch = useDispatch();

  return (
    <Sidebar visible={isOpen} position="right" onHide={() => dispatch(setIsOpen(false))}>
      <div className="w-full h-full bg-white flex flex-col items-center transition-all z-50">
        <div className="w-full h-1/2 uppercase font-bold font-comfortaa text-lg text-dark flex flex-col items-start justify-between">
          <Link
            href="/"
            className="flex items-center w-full"
            onClick={() => dispatch(setIsOpen(false))}>
            <Image width="20" height="20" className="mr-4" src={MainIcon} alt="home-page" />
            <span>Главная</span>
          </Link>
          <Link
            href="/menu"
            className="flex items-center w-full"
            onClick={() => dispatch(setIsOpen(false))}>
            <Image
              width="20"
              height="20"
              className="mr-4"
              src={MenuIcon}
              alt="external-book-food-delivery-line-zulfa-mahendra"
            />
            <span>Меню</span>
          </Link>
          <Link
            href="/delivery"
            className="flex items-center w-full"
            onClick={() => dispatch(setIsOpen(false))}>
            <Image width="20" height="20" className="mr-4" src={DeliveryIcon} alt="delivery--v1" />
            <span>Доставка и оплата</span>
          </Link>
          <Link
            href="/contacts"
            className="flex items-center w-full"
            onClick={() => dispatch(setIsOpen(false))}>
            <Image
              width="20"
              height="20"
              className="mr-4"
              src={ContactsIcon}
              alt="apple-contacts"
            />
            <span>Контакты</span>
          </Link>
          <Link
            href="/cart"
            className="flex items-center w-full"
            onClick={() => dispatch(setIsOpen(false))}>
            <Image width="20" height="20" className="mr-4" src={CartIcon} alt="shopping-cart--v2" />
            <span>Корзина</span>
          </Link>
          <Link
            href="/vacancies"
            className="flex items-center w-full"
            onClick={() => dispatch(setIsOpen(false))}>
            <Image width="20" height="20" className="mr-4" src={VacanciesIcon} alt="vacancies" />
            <span>Вакансии</span>
          </Link>
        </div>
      </div>
    </Sidebar>
  );
};

export default SidebarNav;
