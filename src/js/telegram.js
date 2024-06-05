document.addEventListener('DOMContentLoaded', () => {
    const botToken = '6509747559:AAFtLmMzzygB6rIO7WirTDsk6kIgBaBU934';
    const chatId = '578752920';

    // Нахождение формы и добавление обработчика события отправки формы
    const form = document.querySelector('.modal__form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Предотвращение стандартного поведения отправки формы

        // Получение значений полей формы
        const fullName = document.querySelector('.modal__input[placeholder="ФИО:"]').value;
        const phone = document.querySelector('.modal__input[placeholder="Телефон:"]').value;
        const email = document.querySelector('.modal__input[placeholder="Email:"]').value;

        // Создание сообщения для отправки в Telegram
        const message = `Новая заявка:\nФИО: ${fullName}\nТелефон: ${phone}\nEmail: ${email}`;

        // Отправка сообщения в Telegram с использованием Axios
        axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            chat_id: chatId,
            text: message,
        })
            .then(function (response) {
                console.log('Сообщение успешно отправлено в Telegram', response.data);
            })
            .catch(function (error) {
                console.error('Ошибка при отправке сообщения в Telegram', error);
                // Обработка ошибки, если не удалось отправить сообщение
            });
    });
});
