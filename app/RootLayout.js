import Header from './components/Header';
import { Providers } from './GlobalRedux/provider';
import SidebarNav from './components/SidebarNav';

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="bg-shd w-full flex justify-center bg-cover bg-center bg-fixed min-h-screen">
        <div className="w-full max-w-[900px] flex flex-col items-center relative pt-20">
          <Providers>
            <Header />
            <SidebarNav />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
