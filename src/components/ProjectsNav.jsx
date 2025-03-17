import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaMapMarkerAlt, FaTag } from 'react-icons/fa';

const projectsData = {
  agricultureFarming: {
    title: "Agriculture Farming",
    description: "Our agriculture farming project focuses on sustainable practices that maximize yield while minimizing environmental impact. We implement modern techniques and technologies to ensure efficient resource utilization.",
    image: "https://tplabs.co/agrios/wp-content/uploads/2022/07/agriculture-harvesting.jpg",
    client: "Eco Farms Inc.",
    date: "June 15, 2023",
    location: "California, USA",
    category: "Sustainable Farming"
  },
  easyHarvesting: {
    title: "Easy Harvesting Solutions",
    description: "We've developed innovative harvesting solutions that reduce labor costs and increase efficiency. Our mechanized systems are designed to handle delicate crops with minimal damage while significantly reducing harvest time.",
    image: "https://tplabs.co/agrios/wp-content/uploads/2022/07/easy-harvesting.jpg",
    client: "HarvestTech Solutions",
    date: "August 22, 2023",
    location: "Iowa, USA",
    category: "Agricultural Technology"
  },
  ecologicalFarming: {
    title: "Ecological Farming",
    description: "Our ecological farming project implements regenerative agriculture practices that improve soil health, increase biodiversity, and create resilient ecosystems. We focus on creating balanced agricultural systems that work with nature.",
    image: "https://tplabs.co/agrios/wp-content/uploads/2022/07/ecological-farming.jpg",
    client: "Green Earth Cooperative",
    date: "March 10, 2023",
    location: "Oregon, USA",
    category: "Regenerative Agriculture"
  },
  freshProducts: {
    title: "Fresh Products Distribution",
    description: "We've established an efficient farm-to-table distribution network that ensures fresh products reach consumers quickly. Our cold chain logistics and quality control measures maintain product freshness and nutritional value.",
    image: "https://tplabs.co/agrios/wp-content/uploads/2022/07/fresh-products.jpg",
    client: "Fresh Connect Ltd.",
    date: "October 5, 2023",
    location: "Washington, USA",
    category: "Food Distribution"
  },
  organicSolutions: {
    title: "Organic Solutions",
    description: "Our organic solutions project develops natural alternatives to synthetic agricultural inputs. We create organic fertilizers, pest control methods, and soil amendments that comply with organic certification standards.",
    image: "https://tplabs.co/agrios/wp-content/uploads/2022/07/organic-solutions.jpg",
    client: "Pure Organics Inc.",
    date: "January 18, 2023",
    location: "Vermont, USA",
    category: "Organic Farming"
  },
  healthyFood: {
    title: "Healthy Food Production",
    description: "This project focuses on producing nutrient-dense foods through optimized growing conditions and careful variety selection. We work with farmers to implement practices that enhance the nutritional profile of crops.",
    image: "https://tplabs.co/agrios/wp-content/uploads/2022/07/healthy-food.jpg",
    client: "Nutrient Harvest Group",
    date: "May 30, 2023",
    location: "Minnesota, USA",
    category: "Nutritional Agriculture"
  }
};

const ProjectsNav = ({ projectName }) => {
  const project = projectsData[projectName];
  
  if (!project) {
    return <div className="text-center py-20">Project not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Link to="/projects" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 transition-colors">
        <FaArrowLeft className="mr-2" />
        Back to Projects
      </Link>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-[400px] relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaUser className="text-green-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Client</p>
                  <p className="font-medium">{project.client}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaCalendarAlt className="text-green-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Date</p>
                  <p className="font-medium">{project.date}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-green-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="font-medium">{project.location}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, 
              nisl nunc euismod nisi, eu porttitor nisl nisl eu nisl. Sed euismod, urna eu tincidunt consectetur, 
              nisl nunc euismod nisi, eu porttitor nisl nisl eu nisl.
            </p>
          </div>
          
          <div className="flex items-center">
            <FaTag className="text-green-600 mr-2" />
            <span className="text-gray-700 font-medium">Category:</span>
            <span className="ml-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              {project.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsNav;
