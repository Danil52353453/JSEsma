// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// Работа должна быть выполнена с API: https://reqres.in/

async function getUserData(id) {
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(await response.text());
  }
}
getUserData(1)
  .then((result) => console.log(result))
  .catch((err) => console.log(`Error: ${err.message}`));

//   Задание 2. Отправка данных на сервер.

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

async function saveUserData(userData) {
  const path = `https:reqres.in/api/users/`;
  await fetch(path, {
    method: "POST",
    body: JSON.stringify(userData),
  }).catch(() => new Error("Ошибка"));
}
getUserData(1)
   .then((user) => saveUserData(user)
   .then(() => console.log("Сообщение отпрвлено"))
);


// Задание 3. Изменение стиля элемента через заданное время (выполняем, если знакомы с DOM).

// Напишите функцию changeStyleDelayed, которая принимает id элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль (любой, например - цвет текста) элемента через указанное время.

function changeStyleDelayed(id,time){
   setTimeout(() => id.style.cssText = `
      width: 1000px;
      height : 500px;
      background : green;
   `,time );
}
const id = document.querySelector('.myElement');

// Пример использования функции
changeStyleDelayed(id, 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

