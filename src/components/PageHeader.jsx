import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { PAGE_HEADERS } from '../utils/constants';

const PageHeader = () => {
  const { pathname } = useLocation();

  // Не рендерим компонент на главной странице
  if (pathname === '/') return null;

  // Получаем данные страницы или дефолтные значения
  const pageInfo = PAGE_HEADERS[pathname] || {
    title: 'Page',
    backgroundImage: 'https://tplabs.co/agrios/wp-content/uploads/2022/07/page-header-2.webp',
  };

  // Определяем текст для навигации и заголовка
  const navText = pageInfo.navTitle || pageInfo.title;
  const displayText = pageInfo.displayTitle || pageInfo.title;

  return (
    <div
      className="relative py-16 md:py-22 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${pageInfo.backgroundImage})` }}
    >
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div className="flex items-center justify-center space-x-3">
          <Link
            to="/"
            className="text-white hover:text-green-400 transition-colors text-base uppercase"
          >
            HOME
          </Link>
          <span className="text-gray-400 font-bold">/</span>
          <span className="text-white uppercase font-bold">{navText}</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{displayText}</h1>
      </div>
    </div>
  );
};

export default PageHeader;