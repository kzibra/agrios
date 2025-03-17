import { PROJECT_CATEGORIES } from '../utils/constants';

const Projects = () => {
  return (
    <div className="container mx-auto px-20 max-w-6xl py-30">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECT_CATEGORIES.map((category) => (
          <a
            key={category.id}
            href={category.href}
            className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="aspect-[3/4] w-full relative">
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl font-bold leading-tight">
                  {category.title.split(" ").map((word, i) => (
                    <div key={i}>{word}</div>
                  ))}
                </h3>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
