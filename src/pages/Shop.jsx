const Shop = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Магазин</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Здесь будут карточки товаров */}
        <div className="border rounded-lg p-4 shadow-sm">
          <div className="h-48 bg-gray-200 rounded-md mb-3"></div>
          <h3 className="text-lg font-semibold">Товар 1</h3>
          <p className="text-gray-600 mb-2">Описание товара</p>
          <p className="font-bold text-orange-500">1500 ₽</p>
          <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
            В корзину
          </button>
        </div>
        <div className="border rounded-lg p-4 shadow-sm">
          <div className="h-48 bg-gray-200 rounded-md mb-3"></div>
          <h3 className="text-lg font-semibold">Товар 2</h3>
          <p className="text-gray-600 mb-2">Описание товара</p>
          <p className="font-bold text-orange-500">2300 ₽</p>
          <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
            В корзину
          </button>
        </div>
        <div className="border rounded-lg p-4 shadow-sm">
          <div className="h-48 bg-gray-200 rounded-md mb-3"></div>
          <h3 className="text-lg font-semibold">Товар 3</h3>
          <p className="text-gray-600 mb-2">Описание товара</p>
          <p className="font-bold text-orange-500">1800 ₽</p>
          <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
