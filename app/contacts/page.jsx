
import PhoneIcon from '@/public/img/phone.svg'
import AddressIcon from '@/public/img/location.svg'
import ClockIcon from '@/public/img/clock.svg'
import Image from 'next/image'

export const metadata = {
  title: 'Шашлычный дом | Контакты',
  description: 'Шашлычный дом, контктная информация',
}

const Contacts = () => {
  return (
    <div className='pt-6 w-full h-full flex flex-col'>
      <h1 className="pl-6 mb-6 text-title font-bold font-comfortaa">Контакты</h1>

      <div className='w-full flex flex-col pl-3'>
        <div className='flex items-center mb-3'>
          <Image src={PhoneIcon} className='w-8 mr-4' alt="phone" />
          <div className='flex flex-col'>
            <span>Телефон</span>
            <span className='font-bold'><a href="tel:+79788796220">+ 7 (978) 879-62-20</a></span>
          </div>
        </div>

        <div className='flex items-center mb-3'>
          <Image src={AddressIcon} className='w-8 mr-4' alt="address" />
          <div className='flex flex-col'>
            <span>Адрес</span>
            <span className='font-bold'>г. Алушта, ул. Ленина 13</span>
          </div>
        </div>

        <div className='flex items-center mb-3'>
          <Image src={ClockIcon} className='w-8 mr-4' alt="clock" />
          <div className='flex flex-col'>
            <span>Режим работы</span>
            <span className='font-bold'>11:00 - 23:00</span>
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