import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PageHeader = () => {
  const { pathname } = useLocation();

  // Объект с информацией о страницах
  const pageData = {
    '/about': { title: 'About', backgroundImage: 'src/assets/wheat.header.jpg' },
    '/services': { title: 'Services', backgroundImage: 'src/assets/wheat.header.jpg' },
    '/projects': { title: 'Projects', backgroundImage: 'src/assets/wheat.header.jpg' },
    '/news': { title: 'News Grid', backgroundImage: 'src/assets/wheat.header.jpg' },
    '/shop': { 
      navTitle: 'Shop', 
      displayTitle: 'Our Shop', 
      backgroundImage: 'src/assets/wheat.header.jpg' 
    },
    '/contact': { title: 'Contact', backgroundImage: 'src/assets/wheat.header.jpg' },
  };

  // Получаем данные страницы или дефолтные значения
  const pageInfo = pageData[pathname] || {
    title: 'Page',
    backgroundImage: 'https://tplabs.co/agrios/wp-content/uploads/2022/07/page-header-2.webp',
  };

  // Не рендерим компонент на главной странице
  if (pathname === '/') return null;

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