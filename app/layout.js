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
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="yandex-verification" content="78aa700c47bf7bf0" />
        <meta name="google-site-verification" content="et7FgAkduvH-MnEIr8xMcwPIO216XHQhmPvcTg778Rk" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shashlichny-dom.ru" />
        <meta property="og:title" content="Шашлычный дом" />
        <meta property="og:description" content="Доставка вкусного шашлыка в Алуште. Бесплатная доставка от 1000 р. Наш адрес ул Ленина 13." />
        <meta property="og:image" content="https://shashlichny-dom.ru/image.jpg" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://shashlichny-dom.ru" />
        <meta property="twitter:title" content="Шашлычный дом" />
        <meta property="twitter:description" content="Доставка вкусного шашлыка в Алуште. Бесплатная доставка от 1000 р. Наш адрес ул Ленина 13." />
        <meta property="twitter:image" content="https://shashlichny-dom.ru/image.jpg" />

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
