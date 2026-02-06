'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from '../GlobalRedux/Features/item/itemSlice';
import { fetchDelivery } from '../GlobalRedux/Features/delivery/deliverySlice';
import { fetchContacts } from '../GlobalRedux/Features/contacts/contactsSlice';
import { setInitialCartState } from '../GlobalRedux/Features/cart/cartSlice';

const AppBootstrap = () => {
  const dispatch = useDispatch();

  const itemStatus = useSelector((state) => state.item.status);
  const deliveryStatus = useSelector((state) => state.delivery.status);
  const contactsStatus = useSelector((state) => state.contacts.status);

  useEffect(() => {
    if (itemStatus === 'idle') {
      dispatch(fetchData());
    }
  }, [itemStatus, dispatch]);

  useEffect(() => {
    if (deliveryStatus === 'idle') {
      dispatch(fetchDelivery());
    }
  }, [deliveryStatus, dispatch]);

  useEffect(() => {
    if (contactsStatus === 'idle') {
      dispatch(fetchContacts());
    }
  }, [contactsStatus, dispatch]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const savedItems = localStorage.getItem('items');
    const savedTotalCount = localStorage.getItem('totalCount');
    const savedTotalPrice = localStorage.getItem('totalPrice');

    if (savedItems || savedTotalCount || savedTotalPrice) {
      dispatch(
        setInitialCartState({
          items: savedItems ? JSON.parse(savedItems) : [],
          totalCount: savedTotalCount ? parseInt(savedTotalCount, 10) : 0,
          totalPrice: savedTotalPrice ? parseFloat(savedTotalPrice) : 0,
        })
      );
    }
  }, [dispatch]);

  return null;
};

export default AppBootstrap;
