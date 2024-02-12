'use client';
import React, { useState } from 'react';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import axios from 'axios';

import Admin from '../components/Admin';

const Auth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [value, setValue] = useState('');

  const authenticateUser = async (password) => {
    try {
      const response = await axios.post(
        'https://admin.septon-test.ru/authenticate',
        {
          password: password,
        },
        { withCredentials: true, mode: 'cors' },
      );

      if (response.status === 200) {
        setIsAuth(true);
      } else {
        console.error('Ошибка при аутентификации:', response.statusText);
      }
    } catch (error) {
      console.error('Ошибка при отправке запроса на сервер:', error);
      // Добавим вывод ошибки в консоль для отладки
    }
  };

  return (
    <>
      {isAuth ? (
        <Admin />
      ) : (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-white overflow-auto w-full flex flex-col justify-start lg:px-[15%] pb-3">
          <div className="card flex justify-content-center">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                authenticateUser(value);
              }}
              className="flex flex-col gap-2">
              <label htmlFor="value">Password</label>
              <Password
                inputId="in_value"
                name="value"
                rows={5}
                cols={30}
                value={value}
                feedback={false}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button label="Submit" type="submit" icon="pi pi-check" />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Auth;
