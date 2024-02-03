import Header from './components/Header'
import './globals.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primeicons/primeicons.css';

import { Providers } from './GlobalRedux/provider'
import { PrimeReactProvider } from 'primereact/api';
import SidebarNav from './components/SidebarNav'
import MenuBtn from './components/MenuBtn'
import MenuNav from './components/MenuNav';

export const metadata = {
  title: 'Шашлычный дом',
  description: 'Доставка вкусного шашлыка в Алуште. Бесплатная доставка от 1000 р. Наш адрес ул Ленина 13.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="description" content={metadata.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://septon-test.ru" />
        <meta property="og:title" content="Шашлычный дом" />
        <meta property="og:description" content="Доставка вкусного шашлыка в Алуште. Бесплатная доставка от 1000 р. Наш адрес ул Ленина 13." />
        <meta property="og:image" content="http://septon-test.ru/image.jpg" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://septon-test.ru" />
        <meta property="twitter:title" content="Шашлычный дом" />
        <meta property="twitter:description" content="Доставка вкусного шашлыка в Алуште. Бесплатная доставка от 1000 р. Наш адрес ул Ленина 13." />
        <meta property="twitter:image" content="http://septon-test.ru/image.jpg" />

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
