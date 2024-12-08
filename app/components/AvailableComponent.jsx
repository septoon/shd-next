'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AvailableComponent({ children }) {
  const [data, setData] = useState({ isNotAvailable: false, content: '' });

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/available.json?t=${Date.now()}`)
      .then((response) => setData(response.data))
      .catch((error) => console.error('Ошибка загрузки данных:', error));
  }, []);

  return (
    <>
      {data.isNotAvailable ? (
        <body className="flex items-center justify-center h-screen m-0 bg-gray-200 px-2 font-sans text-gray-800 text-center">
        <div className="container max-w-md p-5 rounded-lg shadow-lg bg-white">
          <h1 className="text-xl font-bold text-red-500">Доставка временно недоступна</h1>
          <p className="text-lg mt-5">
            {data.content}
          </p>
        </div>
      </body>
      ) : (
        children
      )}
    </>
  );
}