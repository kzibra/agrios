const News = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Новости</h1>
      <div className="space-y-6">
        <div className="border rounded-lg p-4 shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Открытие нового филиала</h3>
          <p className="text-gray-500 mb-3">15 марта 2025</p>
          <p className="mb-4">
            Мы рады сообщить об открытии нового филиала нашей компании в центре города.
            Теперь наши клиенты смогут получить все услуги в более удобном месте.
          </p>
          <button className="text-orange-500 font-medium hover:underline">
            Читать далее
          </button>
        </div>
        
        <div className="border rounded-lg p-4 shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Новая коллекция товаров</h3>
          <p className="text-gray-500 mb-3">5 марта 2025</p>
          <p className="mb-4">
            В нашем магазине появилась новая коллекция товаров весна-лето 2025.
            Спешите приобрести новинки по специальным ценам.
          </p>
          <button className="text-orange-500 font-medium hover:underline">
            Читать далее
          </button>
        </div>
        
        <div className="border rounded-lg p-4 shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Акция месяца</h3>
          <p className="text-gray-500 mb-3">1 марта 2025</p>
          <p className="mb-4">
            Весь март действует специальная акция: при покупке двух товаров третий в подарок.
            Предложение ограничено, не упустите свой шанс!
          </p>
          <button className="text-orange-500 font-medium hover:underline">
            Читать далее
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
