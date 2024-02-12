export const fetchData = async (isBrowser, setMenuData) => {
  try {
    const response = await axios.get('https://admin.septon-test.ru/getData');
    isBrowser && setMenuData(response.data);
  } catch (error) {
    console.error('Ошибка при выполнении GET-запроса:', error);
  }
};
