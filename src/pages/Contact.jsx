const Contact = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Связаться с нами</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Наши контакты</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Адрес:</p>
              <p className="text-gray-600">ул. Примерная, д. 123, г. Москва, 123456</p>
            </div>
            <div>
              <p className="font-medium">Телефон:</p>
              <p className="text-gray-600">+7 (123) 456-78-90</p>
            </div>
            <div>
              <p className="font-medium">Email:</p>
              <p className="text-gray-600">info@example.com</p>
            </div>
            <div>
              <p className="font-medium">Часы работы:</p>
              <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
              <p className="text-gray-600">Сб-Вс: Выходной</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Форма обратной связи</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Имя
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Введите ваше имя"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Введите ваш email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">
                Сообщение
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Введите ваше сообщение"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-colors"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
