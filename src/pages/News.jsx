import { FaUser, FaCommentAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const News = () => {
  const blogPosts = [
    {
      id: 1,
      image: "src/assets/news/grid1.jpg",
      date: "05 July 2022",
      author: "Kevin Martin",
      comments: 1,
      title: "Bringing Food Production Back To Cities",
    },
    {
      id: 2,
      image: "src/assets/news/grid2.jpg",
      date: "05 July 2022",
      author: "Kevin Martin",
      comments: 0,
      title: "The Future of Farming, Smart Irrigation Solutions",
    },
    {
      id: 3,
      image: "src/assets/news/grid3.jpg",
      date: "05 July 2022",
      author: "Kevin Martin",
      comments: 0,
      title: "Agronomy and relation to Other Sciences",
    },
    {
      id: 4,
      image: "src/assets/news/grid4.jpg",
      date: "05 July 2022",
      author: "Kevin Martin",
      comments: 0,
      title: "We grow products with the organic farming",
    },
    {
      id: 5,
      image: "src/assets/news/grid5.jpg",
      date: "05 July 2022",
      author: "Kevin Martin",
      comments: 0,
      title: "A Quick Solution to Low Milk Production in Zimbabwe",
    },
    {
      id: 6,
      image: "src/assets/news/grid6.jpg",
      date: "05 July 2022",
      author: "Kevin Martin",
      comments: 0,
      title: "Winter wheat harvest organic gather nice moment",
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-20 max-w-6xl py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div 
            key={post.id} 
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          >
            {/* Фото */}
            <div className="relative h-64 w-full overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>

            {/* Дата */}
            <div className="relative -mt-6 flex justify-center z-10">
              <span className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium">
                {post.date}
              </span>
            </div>

            {/* Текстовая часть */}
            <div className="p-6 text-center">
              <div className="flex justify-center items-center text-gray-500 mb-3 space-x-4">
                <div className="flex items-center">
                  <FaUser className="h-4 w-4 mr-1" />
                  <span className="text-sm">by {post.author}</span>
                </div>
                <div className="flex items-center">
                  <FaCommentAlt className="h-4 w-4 mr-1" />
                  <span className="text-sm">
                    {post.comments} {post.comments === 1 ? "Comment" : "Comments"}
                  </span>
                </div>
              </div>
              <h3 className="text-gray-900 text-xl font-bold mb-4">{post.title}</h3>
              <div>
                <Link 
                  to={`/news/${post.id}`} 
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                >
                  Read More
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-1" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
