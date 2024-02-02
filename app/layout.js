import Header from './components/Header'
import './globals.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primeicons/primeicons.css';

import { Providers } from './GlobalRedux/provider'
import { PrimeReactProvider } from 'primereact/api';
import SidebarNav from './components/SidebarNav'
import MenuBtn from './components/MenuBtn'
import MenuNav from './components/MenuNav';
import openGraphImage from '../public/image.jpg'

export const metadata = {
  title: 'Шашлычный дом',
  description: 'Доставка вкусного шашлыка в Алуште. Бесплатная доставка от 1000 р. Наш адрес ул Ленина 13.',
  ogTitle: 'Шашлычный дом | Доставка еды', 
  ogDescription: 'Доставка вкусного шашлыка в Алуште. Бесплатная доставка от 1000 р. Наш адрес ул Ленина 13.', 
  ogImage: {openGraphImage},
  ogUrl: 'septon-test.ru',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="description" content={metadata.description} />
        
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:url" content={metadata.ogUrl} />
        <script
            dangerouslySetInnerHTML={{
              __html: `
                const style = document.createElement('style')
                style.innerHTML = '@layer tailwind-base, primereact, tailwind-utilities;'
                style.setAttribute('type', 'text/css')
                document.querySelector('head').prepend(style)
              `,
            }}
          />
      </head>
      <body className='bg-shd w-full flex justify-center bg-cover bg-center bg-fixed min-h-screen'>
        <div className='w-full max-w-[900px] flex flex-col items-center relative pt-20'>
          <Providers>
            <PrimeReactProvider>
              <Header />
              <SidebarNav />
              {children}
              <MenuBtn />
              <MenuNav />
            </PrimeReactProvider>
          </Providers>
        </div>
      </body>
    </html>
  )
}
