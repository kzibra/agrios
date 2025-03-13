import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PageHeader = () => {
    const location = useLocation();
    const path = location.pathname;
    
    // Определение заголовка и подзаголовка в зависимости от текущего пути
    const getPageInfo = () => {
        switch (path) {
            case '/about':
                return {
                    title: 'About',
                    backgroundImage: 'https://tplabs.co/agrios/wp-content/uploads/2022/07/page-header-2.webp'
                };
            case '/services':
                return {
                    title: 'Services',
                    backgroundImage: 'https://tplabs.co/agrios/wp-content/uploads/2022/07/page-header-2.webp'
                };
            case '/projects':
                return {
                    title: 'Projects',
                    backgroundImage: 'https://tplabs.co/agrios/wp-content/uploads/2022/07/page-header-2.webp'
                };
            case '/news':
                return {
                    title: 'News',
                    backgroundImage: 'https://tplabs.co/agrios/wp-content/uploads/2022/07/page-header-2.webp'
                };
            case '/shop':
                return {
                    title: 'Shop',
                    backgroundImage: 'https://tplabs.co/agrios/wp-content/uploads/2022/07/page-header-2.webp'
                };
            case '/contact':
                return {
                    title: 'Contact',
                    backgroundImage: 'https://tplabs.co/agrios/wp-content/uploads/2022/07/page-header-3.webp'
                };
            default:
                // Если путь не соответствует ни одному из кейсов, возвращаем дефолтный заголовок
                return {
                    title: 'Page',
                    backgroundImage: 'https://tplabs.co/agrios/wp-content/uploads/2022/07/page-header-2.webp'
                };
        }
    };

    const pageInfo = getPageInfo();

    // Проверяем, не находимся ли мы на главной странице
    if (path === '/') {
        return null; // На главной странице не показываем PageHeader
    }

    return (
        <div 
            className="relative py-20 md:py-36 bg-cover bg-center bg-no-repeat"
            style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${pageInfo.backgroundImage})`,
            }}
        >
            <div className="container mx-auto px-4 relative z-10 text-center text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{pageInfo.title}</h1>
                <div className="flex items-center justify-center space-x-3">
                    <Link to="/" className="text-white hover:text-green-400 transition-colors text-base uppercase">
                        HOME
                    </Link>
                    <span className="text-gray-400 font-bold">|</span>
                    <span className="text-white uppercase font-bold">{pageInfo.title}</span>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
