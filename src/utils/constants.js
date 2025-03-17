import { FaTwitter, FaFacebook, FaPinterest, FaInstagram } from "react-icons/fa";
import phoneIcon from '/src/assets/phone-icon.svg';
import emailIcon from '/src/assets/email-icon.svg';
import locationIcon from '/src/assets/location-icon.svg';
/**
 * Social media links used across the application
 */
export const SOCIAL_MEDIA = [
  { icon: FaTwitter, alt: "Twitter Logo", href: "#" },
  { icon: FaFacebook, alt: "Facebook Logo", href: "#" },
  { icon: FaPinterest, alt: "Pinterest Logo", href: "#" },
  { icon: FaInstagram, alt: "Instagram Logo", href: "#" },
];

/**
 * Contact information used across the application
 */
export const CONTACT_INFO = {
  phone: "666 888 0000",
  email: "needhelp@company.com",
  address: "80 broklyn golden street line New York, USA",
  icons: [
    {
      type: 'phone',
      icon: phoneIcon,
      alt: "Phone Icon",
      label: "Call anytime",
      value: "+ 98 (000) - 9630"
    },
    {
      type: 'email',
      icon: emailIcon,
      alt: "Email Icon",
      label: "Send email",
      value: "ambed@agrios.com"
    },
    {
      type: 'location',
      icon: locationIcon,
      alt: "Location Icon",
      label: "380 St Kilda Road",
      value: "Melbourne, Australia"
    },
  ]
};

/**
 * Navigation links used in header and footer
 */
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Services', 
    path: '/services',
    dropdown: true,
    children: [
      { name: 'Services', path: '/services' },
      { name: 'Agriculture Products', path: '/agriculture-products' },
      { name: 'Organic Products', path: '/organic-products' },
    ]
  },
  { name: 'Projects', path: '/projects' },
  { name: 'News', path: '/news' },
  { name: 'Shop', path: '/shop' },
  { name: 'Contact', path: '/contact' },
];

/**
 * Page header information for each route
 */
export const PAGE_HEADERS = {
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

/**
 * Projects data used in ProjectsNav component
 */
export const PROJECTS_DATA = {
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

/**
 * Blog posts data used in News component
 */
export const BLOG_POSTS = [
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

/**
 * Project categories used in Projects component
 */
export const PROJECT_CATEGORIES = [
  {
    id: 1,
    title: "Easy Harvesting",
    image: "src/assets/projects/grid1.jpg",
    href: "#easy-harvesting",
  },
  {
    id: 2,
    title: "Agriculture Farming",
    image: "src/assets/projects/grid2.jpg",
    href: "#agriculture-farming",
  },
  {
    id: 3,
    title: "Ecological Farming",
    image: "src/assets/projects/grid3.jpg",
    href: "#ecological-farming",
  },
  {
    id: 4,
    title: "Organic Solutions",
    image: "src/assets/projects/grid4.jpg",
    href: "#organic-solutions",
  },
  {
    id: 5,
    title: "Fresh Products",
    image: "src/assets/projects/grid5.jpg",
    href: "#fresh-products",
  },
  {
    id: 6,
    title: "Healthy Food",
    image: "src/assets/projects/grid6.jpg",
    href: "#healthy-food",
  },
];
