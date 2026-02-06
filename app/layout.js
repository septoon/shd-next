import Header from './components/Header'
<<<<<<< HEAD
import './globals.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primeicons/primeicons.css';

import { Providers } from './GlobalRedux/provider'
import { PrimeReactProvider } from 'primereact/api';
import SidebarNav from './components/SidebarNav'
import MenuBtn from './components/MenuBtn'
import MenuNav from './components/MenuNav';
import AvailableComponent from './components/AvailableComponent';

export const metadata = {
  title: 'Шашлычный дом',
  description: 'Доставка вкусного шашлыка в Алуште. Бесплатная доставка по городу. Наш адрес ул Ленина 13.',
=======
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primeicons/primeicons.css';
import './globals.css'

import { Providers } from './GlobalRedux/provider'
import { PrimeReactProvider } from 'primereact/api';
import SidebarNav from './components/SidebarNav';
import MenuNav from './components/MenuNav';
import AvailableComponent from './components/AvailableComponent';
import AppBootstrap from './components/AppBootstrap';

export const metadata = {
  title: 'Шашлычный дом',
  description: 'Доставка вкусного шашлыка в Алуште. Бесплатная доставка по городу. Наш адрес ул. Парковая, 2В.',
>>>>>>> 806ff73 (update)
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
<<<<<<< HEAD
        <meta name="viewport" content="width=device-width, initial-scale=1" />
=======
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0" />
>>>>>>> 806ff73 (update)
        <meta name="description" content={metadata.description} />
        <meta name="yandex-verification" content="78aa700c47bf7bf0" />
        <meta name="google-site-verification" content="et7FgAkduvH-MnEIr8xMcwPIO216XHQhmPvcTg778Rk" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shashlichny-dom.ru" />
        <meta property="og:title" content="Шашлычный дом" />
<<<<<<< HEAD
        <meta property="og:description" content="Доставка вкусного шашлыка в Алуште. Бесплатная доставка по городу. Наш адрес ул Ленина 13." />
        <meta property="og:image" content="https://shashlichny-dom.ru/image.jpg" />
=======
        <meta property="og:description" content="Доставка вкусного шашлыка в Алуште. Бесплатная доставка по городу. Наш адрес ул Парковая, 2В." />
        <meta property="og:image" content="https://shashlichny-dom.ru/image.webp" />
>>>>>>> 806ff73 (update)
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://shashlichny-dom.ru" />
        <meta property="twitter:title" content="Шашлычный дом" />
<<<<<<< HEAD
        <meta property="twitter:description" content="Доставка вкусного шашлыка в Алуште. Бесплатная доставка по городу. Наш адрес ул Ленина 13." />
        <meta property="twitter:image" content="https://shashlichny-dom.ru/image.jpg" />
=======
        <meta property="twitter:description" content="Доставка вкусного шашлыка в Алуште. Бесплатная доставка по городу. Наш адрес ул. Парковая, 2В." />
        <meta property="twitter:image" content="https://shashlichny-dom.ru/image.webp" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#0b0f16" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="ШД" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
>>>>>>> 806ff73 (update)

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
<<<<<<< HEAD
      <body className='bg-[#f0eef6] dark:bg-[#131922] w-full flex justify-center bg-cover bg-center bg-fixed min-h-screen'>
        <div className='bg-shd w-full max-w-[900px] flex flex-col items-center relative pt-20'>
          <Providers>
            <PrimeReactProvider>
              <Header />
              <SidebarNav />
                <AvailableComponent>{children}</AvailableComponent>
=======
      <body className="body-texture">
        <div className="app-shell">
          <Providers>
            <PrimeReactProvider>
              <AppBootstrap />
              <Header />
              {/* mobile / tablet overlay */}
              <SidebarNav className="mobile-nav" />

              <div className="app-layout">
                <div className="sidebar-column">
                  <SidebarNav persistent className="desktop-nav" />
                </div>
                <div className="content-column">
                  <AvailableComponent>{children}</AvailableComponent>
                </div>
              </div>
>>>>>>> 806ff73 (update)
              <MenuNav />
            </PrimeReactProvider>
          </Providers>
        </div>
      </body>
    </html>
  )
}
