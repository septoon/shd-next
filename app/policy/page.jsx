import React from 'react';

export const metadata = {
  title: 'Политика конфиденциальности - Шашлычный Дом',
  description: 'Узнайте, как мы собираем, используем и защищаем ваши данные при использовании сайта и приложения Шашлычный Дом.',
  keywords: 'Политика конфиденциальности, Шашлычный Дом, защита данных, персональные данные',
  author: 'ИП Адалян',
};

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#f0eef6] dark:bg-[#131922] text-[#000] dark:text-[#fff] p-4 sm:p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Политика конфиденциальности</h1>
      <p className="mb-4">
        Настоящая Политика конфиденциальности (далее — "Политика") разработана для информационного сайта и мобильного приложения «Шашлычный Дом», принадлежащих ИП Адалян (далее — "Мы" или "Компания"), и определяет, как мы собираем, используем и защищаем данные пользователей.
      </p>
      <p className="mb-4">Адрес сайта: <a href="https://shashlichny-dom.ru" className="text-blue-500 underline">https://shashlichny-dom.ru</a></p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Общие положения</h2>
        <p className="mb-2">1.1. Настоящая Политика разработана в соответствии с законодательством Российской Федерации в области обработки персональных данных.</p>
        <p>1.2. Пользователь, используя сайт и/или приложение, выражает согласие с условиями настоящей Политики.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Какие данные мы собираем</h2>
        <ul className="list-disc ml-6">
          <li>Контактный номер телефона;</li>
          <li>Адрес доставки.</li>
        </ul>
        <p className="mt-2">Эти данные отправляются в мессенджер Telegram для обработки заказа.</p>
        <p>Мы не обрабатываем и не сохраняем данные банковских карт.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Цели сбора данных</h2>
        <p className="mb-2">3.1. Данные используются исключительно для:</p>
        <ul className="list-disc ml-6">
          <li>Обработки и доставки заказов;</li>
          <li>Связи с клиентом в случае уточнения деталей заказа.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Хранение и защита данных</h2>
        <p className="mb-2">4.1. Личные данные хранятся только на устройстве пользователя до момента их отправки в Telegram. После отправки они обрабатываются исключительно для выполнения заказа.</p>
        <p>4.2. Мы применяем технические и организационные меры для защиты данных от утраты, несанкционированного доступа, изменения или раскрытия.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Передача данных третьим лицам</h2>
        <p className="mb-2">5.1. Мы не передаем персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством Российской Федерации.</p>
        <p>5.2. Отправка данных в Telegram осуществляется для обработки заказа.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Права пользователя</h2>
        <ul className="list-disc ml-6">
          <li>Получить информацию о своих персональных данных, которые обрабатываются Компанией;</li>
          <li>Отозвать свое согласие на обработку персональных данных, связавшись с нами через контактную информацию ниже.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Использование Cookies</h2>
        <p>7.1. На сайте могут использоваться файлы cookies для улучшения работы сайта.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Контактная информация</h2>
        <p>Если у вас возникли вопросы или жалобы, связанные с обработкой персональных данных, вы можете связаться с нами:</p>
        <ul className="list-disc ml-6">
          <li>Телефон: +79787600995</li>
          <li>Электронная почта: <a href="mailto:bhvfflfkzy@mail.ru" className="text-blue-500 underline">bhvfflfkzy@mail.ru</a></li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Изменения в Политике</h2>
        <p>9.1. Мы оставляем за собой право изменять настоящую Политику. Обновления будут опубликованы на сайте <a href="https://shashlichny-dom.ru" className="text-blue-500 underline">https://shashlichny-dom.ru</a> с указанием даты последнего изменения.</p>
        <p className="mt-2">Дата последнего обновления: 05.01.2025</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
