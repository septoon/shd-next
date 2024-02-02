import Link from 'next/link'
import Image from 'next/image'

import BurgerMenu from './BurgerMenu'
import ShdTitle from '@/public/img/title-shd.svg'
import ShdLogo from '@/public/img/logo-shd.png'

const Header = () => {
  return (
    <header className="flex h-20 items-center fixed top-0 left-0 right-0 lg:px-[20%] bg-dark z-50">
      <Link href='/' className='flex flex-row justify-start w-1/2 md:w-1/2 lg:w-1/2 pl-3'>
        <Image src={ShdTitle} alt="Шашлычный Дом" className='w-full max-w-[300px]' />
      </Link>
      <div className='flex items-center justify-between w-1/2 pl-2 pr-6'>
        <Image src={ShdLogo} alt="logo" className='h-14 w-10 self-center' />
        <BurgerMenu />
      </div>
      
    </header>
  )
}

export default Header