const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
  alert('Служит для вывода информации в консоль')
  let name = prompt("Текст на странице не изменяется",
   " Введите текст");
alert(name);

})

const Alert = document.querySelector('#alert');

Alert.addEventListener('click', () => {
    alert('Служит для отображения информации пользователям');
})

const Prompt = document.querySelector('#prompt');

Prompt.addEventListener('click', () => {
    alert('Служит для ввода пользователем текста в консоль');
    let name = prompt("Служит для ввода пользователем текста в консоль",
   "Текст на странице не изменяется");
alert(name);
})