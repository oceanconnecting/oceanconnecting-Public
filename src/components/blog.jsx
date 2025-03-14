import React from "preact/compat"; 
import styled, { keyframes } from "styled-components";
import {  FiShare2, FiArrowRight } from 'react-icons/fi'; // Import the arrow icon

// Share button styled component  
const ShareButton = styled.button`
  background-color: transparent;
  color: #3a86ff;
  padding: 0.3rem 0.6rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: rgba(58, 134, 255, 0.1);
    transform: scale(1.1);
  }
`;

// Light follow cursor effect
const LightEffect = styled.div`
  position: relative;
  transition: box-shadow 0.3s;
  overflow: hidden;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Content Slide-In on hover
const SlideInContent = styled.div`
  animation: ${slideIn} 0.5s ease forwards;
`;

const loadClientData = (lang) => {
  switch (lang) {
    case 'fr':
      return import('./locales/fr/translation').then(module => module.blogDataFR);
    case 'ar':
      return import('./locales/ar/translation').then(module => module.blogDataAR);
    case 'en':
    default:
      return import('./locales/en/translation').then(module => module.blogDataEN);
  }
};

const Blogs=React.memo( function Blogs() {
  const { i18n, t } = useTranslation();
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    loadClientData(i18n.language).then(data => setBlogData(data));
  }, [i18n.language]);

  const limitedItems = blogData.slice(0, 3);

  // Share content function
  const handleShare = (item) => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.desc,
        url: window.location.origin + `/formation-professionnelle-agadir/${item.Link}`,
      }).catch((error) => console.error('Error sharing', error));
    } else {
      alert('Share feature is not supported in this browser. Please copy the link manually.');
    }
  };

  return (
    <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-gray-900" id="blog">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          {blogData.map((item) => (
            <h3 className="text-4xl tajawal font-bold text-gray-900 dark:text-white mb-4" key={item.id}>
              {t(item.Title)}
            </h3>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {limitedItems.map((item, index) => (
            <LightEffect key={index} className="group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  className="w-full h-48 object-cover transition-transform duration-500"
                  alt={t(item.title)}
                />
              </div>
              <SlideInContent className="p-6">
        
              {index === 0 ? (
  <a
    href="https://oceanconnecting.com"
    target="_blank"
  rel="noopener" noreferrer
  >
    <h4 className="text-xl tajawal font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
      {t(item.title)}
    </h4>
  </a>
) : (
  <Link
    to={`/formation-professionnelle-agadir/${item.Link}`}
    className="block"
  >
    <h4 className="text-xl font-semibold tajawal text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
      {t(item.title)}
    </h4>
  </Link>
)}

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t(item.desc)}
                </p>

                <div className="flex items-center justify-between">
                {index === 0 ? (
          <a
            href="https://oceanconnecting.com"
            target="_blank"
            rel="noopener noreferrer" 
           className="bg-blue-500 text-white rounded-full px-4 py-2 mt-2 hover:bg-blue-600 transition"
          >
            {t(item.button)} <i className="mdi mdi-chevron-right align-middle"></i>
          </a>
        ) : (
                  <Link to={`/formation-professionnelle-agadir/${item.Link}`}>
                    <button className="bg-blue-500 text-white rounded-full px-4 py-2 mt-2 hover:bg-blue-600 transition">
                      {t(item.button)} <i className="mdi mdi-chevron-right align-middle ml-1"></i>
                    </button>
                  </Link>)}
                  
                  {/* Share Button */}
                  <ShareButton onClick={() => handleShare(item)} aria-label="Share">
                    <FiShare2 />
                  </ShareButton>
                </div>
              </SlideInContent>
            </LightEffect>
          ))}
        </div>

        {/* Button to view all trainings with an arrow icon, centered */}
        <div className="flex justify-center mt-12">
          <Link to="https://www.oceanconnecting.info">
            <button className="bg-blue-500 text-white rounded-full px-6 py-3 hover:bg-blue-600 transition flex items-center justify-center">
              {t('See All Trainings')}
              <FiArrowRight className="ml-2" /> {/* Icon added next to the text */}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
})
export default Blogs