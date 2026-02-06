'use client'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
<<<<<<< HEAD

import PhoneIcon from '@/public/img/phone.svg'
import AddressIcon from '@/public/img/location.svg'
import ClockIcon from '@/public/img/clock.svg'
import Image from 'next/image'
=======
import { Phone, MapPin, Clock } from 'lucide-react'
>>>>>>> 806ff73 (update)
import { fetchContacts } from '../GlobalRedux/Features/contacts/contactsSlice'

const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts);
  const { phoneNumber, address, scheduleStart, scheduleEnd } = contacts;

  const callToPhoneNumber = `tel:${phoneNumber}`

  useEffect(() => {
<<<<<<< HEAD
    dispatch(fetchContacts());
  }, [dispatch])
=======
    if (contacts.status === 'idle') {
      dispatch(fetchContacts());
    }
  }, [contacts.status, dispatch])
>>>>>>> 806ff73 (update)

  if (contacts.status === 'loading') {
    return (
      <div className='w-full h-full flex justify-center items-center'>
        <span className='text-dark dark:text-white'>Загрузка...</span>
      </div>
    );
  }
  return (
<<<<<<< HEAD
    <div className='pt-6 w-full h-full flex flex-col'>
      <h1 className="pl-6 mb-6 text-title font-bold font-comfortaa">Контакты</h1>

      <div className='w-full flex flex-col pl-3'>
        <div className='flex items-center mb-3'>
          <Image src={PhoneIcon} className='w-8 mr-4' alt="phone" />
=======
    <div className='page-section'>
      <div className="section-headline">
        <h1 className="section-title">Контакты</h1>
        <p className="section-subtitle">Всегда на связи и ждём гостей в зале.</p>
      </div>

      <div className='w-full flex flex-col pl-3 mb-8'>
        <div className='flex items-center mb-3'>
          <Phone className='w-6 h-6 mr-3' />
>>>>>>> 806ff73 (update)
          <div className='flex flex-col'>
            <span>Телефон</span>
            <span className='font-bold'><a href={callToPhoneNumber}>{phoneNumber}</a></span>
          </div>
        </div>

        <div className='flex items-center mb-3'>
<<<<<<< HEAD
          <Image src={AddressIcon} className='w-8 mr-4' alt="address" />
=======
          <MapPin className='w-6 h-6 mr-3' />
>>>>>>> 806ff73 (update)
          <div className='flex flex-col'>
            <span>Адрес</span>
            <span className='font-bold'>{address}</span>
          </div>
        </div>

        <div className='flex items-center mb-3'>
<<<<<<< HEAD
          <Image src={ClockIcon} className='w-8 mr-4' alt="clock" />
=======
          <Clock className='w-6 h-6 mr-3' />
>>>>>>> 806ff73 (update)
          <div className='flex flex-col'>
            <span>Режим работы</span>
            <span className='font-bold'>{scheduleStart}:00 - {scheduleEnd}:00</span>
          </div>
        </div>
<<<<<<< HEAD

        <div className='mt-[10vh]'>
          <span className='font-comfortaa font-bold'>Мы в Яндексе</span>
        <iframe src="https://yandex.ru/sprav/widget/rating-badge/242441059425?type=rating" 
          className='w-[150] h-[50]' 
          frameborder="0">  
        </iframe> 
=======
      </div>
      <span className='font-comfortaa font-bold'>Мы в Яндексе</span>

      <div className='mt-[2vh]'>
        <div className='w-full max-w-[560px] overflow-hidden relative'
          style={{
            height: 800,
          }}
        >
          <iframe
            src="https://yandex.ru/maps-reviews-widget/19231840463?comments"
            style={{
              width: '100%',
              height: '100%',
              border: '1px solid #e6e6e6',
              borderRadius: 8,
              boxSizing: 'border-box',
            }}
          />

          <a
            href="https://yandex.ru/maps/org/shashlychny_dom/19231840463/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              boxSizing: 'border-box',
              textDecoration: 'none',
              color: '#b3b3b3',
              fontSize: 10,
              fontFamily: 'YS Text, sans-serif',
              position: 'absolute',
              bottom: 8,
              left: 0,
              width: '100%',
              textAlign: 'center',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              padding: '0 16px',
              maxHeight: 14,
            }}
          >
            Шашлычный дом на карте Алушты — Яндекс Карты
          </a>
>>>>>>> 806ff73 (update)
        </div>
      </div>
    </div>
  )
}

<<<<<<< HEAD
export default Contacts
=======
export default Contacts
>>>>>>> 806ff73 (update)
