import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="px-6 lg:px-[30%] w-screen h-screen flex flex-col justify-start items-start overflow-y-hidden bg-main text-white bg-cover bg-no-repeat bg-center bg-fixed">
      <div className="flex flex-col justify-around h-[calc(100dvh-80px)]">
        <div className=" flex flex-col">
          <span className="text-xl italic mb-4">Доставка вкусного шашлыка в Алуште</span>
        </div>
        <Link
          href="/menu"
          className="w-[200px] bg-lightSlate-gray text-white text-center border-2 rounded-2xl">
          <button className="w-auto text-xl px-4 py-2 rounded-2xl">Перейти в меню</button>
        </Link>
        <div className="flex flex-col">
          <span className="text-xl font-semibold my-3">Бесплатная доставка от 1000 рублей</span>
          <span className="text-xl shadow">Стоимость доставки:</span>
          <span className="text-xl font-semibold">200р</span>
        </div>
        <div className="w-full flex flex-col">
          <span className="text-lg font-semibold">Режим доставки </span>
          <span className="text-xl font-semibold">с 11:00 до 23:00 </span>
        </div>
        <div className="w-full flex flex-col">
          <span className="text-xl">Адрес:</span>
          <span className="text-xl font-semibold">г. Алушта</span>
          <span className="text-xl font-semibold">ул. Ленина 13</span>
        </div>
        <div className="flex flex-col w-auto">
          <span className="text-xl">Заказать можно по номеру:</span>
          <span className="font-extrabold text-white text-xl">
            <a href="tel:+79788796220">+7 (978) 879-62-20</a>
          </span>
        </div>
      </div>
    </main>
  );
}
