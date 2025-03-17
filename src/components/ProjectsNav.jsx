import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaMapMarkerAlt, FaTag } from 'react-icons/fa';
import { PROJECTS_DATA } from '../utils/constants';

const ProjectsNav = ({ projectName }) => {
  const project = PROJECTS_DATA[projectName];
  
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
