'use client'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import PhoneIcon from '@/public/img/phone.svg'
import AddressIcon from '@/public/img/location.svg'
import ClockIcon from '@/public/img/clock.svg'
import Image from 'next/image'
import { fetchContacts } from '../GlobalRedux/Features/contacts/contactsSlice'

const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts);
  const { phoneNumber, address, scheduleStart, scheduleEnd } = contacts;

  const callToPhoneNumber = `tel:${phoneNumber}`

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  if (contacts.status === 'loading') {
    return (
      <div className='w-full h-full flex justify-center items-center'>
        <span className='text-dark dark:text-white'>Загрузка...</span>
      </div>
    );
  }
  return (
    <div className='pt-6 w-full h-full flex flex-col'>
      <h1 className="pl-6 mb-6 text-title font-bold font-comfortaa">Контакты</h1>

      <div className='w-full flex flex-col pl-3'>
        <div className='flex items-center mb-3'>
          <Image src={PhoneIcon} className='w-8 mr-4' alt="phone" />
          <div className='flex flex-col'>
            <span>Телефон</span>
            <span className='font-bold'><a href={callToPhoneNumber}>{phoneNumber}</a></span>
          </div>
        </div>

        <div className='flex items-center mb-3'>
          <Image src={AddressIcon} className='w-8 mr-4' alt="address" />
          <div className='flex flex-col'>
            <span>Адрес</span>
            <span className='font-bold'>{address}</span>
          </div>
        </div>

        <div className='flex items-center mb-3'>
          <Image src={ClockIcon} className='w-8 mr-4' alt="clock" />
          <div className='flex flex-col'>
            <span>Режим работы</span>
            <span className='font-bold'>{scheduleStart}:00 - {scheduleEnd}:00</span>
          </div>
        </div>

        <div className='mt-[10vh]'>
          <span className='font-comfortaa font-bold'>Мы в Яндексе</span>
        <iframe src="https://yandex.ru/sprav/widget/rating-badge/242441059425?type=rating" 
          className='w-[150] h-[50]' 
          frameborder="0">  
        </iframe> 
        </div>
      </div>
    </div>
  )
}

export default Contacts