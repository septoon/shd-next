import Link from 'next/link'
import Image from 'next/image'

import BurgerMenu from './BurgerMenu'
import ShdTitle from '@/public/img/title-shd.svg'
import ShdLogo from '@/public/img/logo-shd.png'

const Header = () => {
  return (
    <header className='flex h-20 items-center justify-around fixed top-0 left-0 right-0 lg:px-[20%] bg-dark z-50'>
      <Link href='/' className='flex flex-row justify-start sm:max-w-[100px]  md:w-1/2 lg:w-1/2 px-2'>
        <Image src={ShdTitle} alt="Шашлычный Дом" className='w-full max-w-[300px]' />
      </Link>
        <Image src={ShdLogo} alt="logo" className='h-14 w-10 self-center' />
      <BurgerMenu />
      
    </header>
  )
}

export default Header