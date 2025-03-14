import React from 'preact/compat';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../navbar';
import Footer from '../foooter';
import { FaAngleRight, FaBriefcase, FaGlobeAmericas, FaLanguage, FaClock, FaFileAlt } from 'react-icons/fa'; // Professional icons
import Whatp from '../WhatsAppFloatingButton';
import { Helmet } from 'react-helmet-async';
import Modal from 'react-modal'; 
import styled from 'styled-components';
import { motion } from 'framer-motion'; // For smooth animations
import axios from 'axios';
Modal.setAppElement("#root");
// Function to load client data based on the language
const loadClientData = (lang) => {
  switch (lang) {
    case 'fr':
      return import('../locales/fr/translation').then(module => module.jobsFR);
    case 'ar':
      return import('../locales/ar/translation').then(module => module.jobsAR);
    case 'en':
    default:
      return import('../locales/en/translation').then(module => module.jobsEN);
  }
};
Modal.setAppElement('#root');
// Styled Components for JobListings
const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f9fb;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;


const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const FilterSelect = styled.select`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 1rem;
  min-width: 300px;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #3b82f6;
    outline: none;
  }
`;

const JobGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
`;

const JobCard = styled(motion.div)`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensure the content is spaced evenly */
  height: 100%; /* Ensure all cards have equal height */
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

const JobImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const JobContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1; /* Ensures the content grows to fill the available space */
`;

const JobTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const JobDetail = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: #6b7280;
  font-size: 0.875rem;

  svg {
    min-width: 1.25rem; /* Ensures all icons have the same size */
    min-height: 1.25rem;
  }

  span {
    flex: 1;
    line-height: 1.5;
    word-break: break-word; /* Ensures long text wraps properly */
  }
`;


const ButtonWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const ButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2563eb;
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const JobListings = React.memo(() => {
  const [selectedType, setSelectedType] = useState('All');
  const { type } = useParams();
  const navigate = useNavigate();
  const [metaData, setMetaData] = useState({
    title: 'Jobs | Ocean Connecting',
    description: 'Discover the global career opportunities we offer.',
    keywords: '',
  });

  const [jobs, setJob] = useState([]);
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await loadClientData(i18n.language);
      setJob(data);
    };
    fetchData();
  }, [i18n.language]);
  useEffect(() => {
    const fetchMetaData = async () => {
      try {
        const response = await axios.get(`https://hono-on-vercel123-54cp.vercel.app/api/meta`, {
          params: {
            page: 'jobs',
            lang: i18n.language,
          },
        });
        setMetaData(response.data);
      } catch (error) {
        console.error('Error fetching metadata:', error);
      }
    };

    fetchMetaData();
  }, [i18n.language]);

  // Get unique job types for dropdown options
  const jobTypes = [...new Set(jobs.map(job => job.type)), 'All'];

  // Filter jobs based on selected type
  const filteredJobs = selectedType === 'All' ? jobs : jobs.filter(job => job.type === selectedType);

  // Effect to set the selected type based on URL parameter
  useEffect(() => {
    if (type && jobTypes.includes(type)) {
      setSelectedType(type);
    } else {
      setSelectedType('All');
    }
  }, [type, jobTypes]);

  // Handle dropdown change and update URL
  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setSelectedType(newType);
    navigate(`/offres-emploi/${newType}`);
  };
  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };
  console.log(metaData)
  return (
    <>
      <Helmet>
      <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords}/>
      </Helmet>
      <Navbar />
      <Section>
        <Container>
         
          <FilterContainer className='m-10'>
            <FilterSelect value={selectedType} oninput={handleTypeChange}>
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </FilterSelect>
          </FilterContainer>

          {/* Job Listings Grid */}
          <JobGrid>
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <JobImage src={job.image} alt={`${job.title} company logo`} />
                <JobContent>
                  <JobTitle>{t(job.title)}</JobTitle>

                  {/* Conditionally render Job Details with Icons */}
                  {job.secteur && (
                    <JobDetail>
                      <FaBriefcase />
                      <span>{t(job.secteur)}</span>
                    </JobDetail>
                  )}
                  {job.niveaulanguage && (
                    <JobDetail>
                      <FaLanguage />
                      <span>{t(job.niveaulanguage)}</span>
                    </JobDetail>
                  )}
                  {job.timevisa && (
                    <JobDetail>
                      <FaClock />
                      <span>{t(job.timevisa)}</span>
                    </JobDetail>
                  )}
                  {job.contratime && (
                    <JobDetail>
                      <FaFileAlt />
                      <span>{t(job.contratime)}</span>
                    </JobDetail>
                  )}
                 
                </JobContent>
                
                {/* Button placed at the bottom */}
                <ButtonWrapper>
                  {job.model ? (
                    <ButtonLink as="button" onClick={() => openModal(job)}>
                      {t(job.action)} <FaAngleRight />
                    </ButtonLink>
                  ) : (
                    <ButtonLink href={job.link} download="form">
                      {t(job.action)} <FaAngleRight />
                    </ButtonLink>
                  )}
                </ButtonWrapper>
              </JobCard>
            ))}
          </JobGrid>
        </Container>
      </Section>
      <Whatp />
      <Footer />
      <Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  contentLabel="Job Steps Modal"
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
    content: {
      margin: 'auto',
      width: '90%',  // Responsive width
      maxWidth: '600px', // Max width for larger screens
      height: '80vh',  // Responsive height (80% of viewport height)
      padding: '1rem',
      borderRadius: '10px',
      overflowY: 'auto',  // Enable scrolling if content overflows
      boxSizing: 'border-box',
      display: 'flex', // Make it a flex container to structure content
      flexDirection: 'column', // Align items vertically
      '@media (max-width: 768px)': {
        width: '90%',  // Smaller width on mobile
        height: '40vh',  // Slightly smaller height on mobile
        padding: '1rem',
        margin:"40px"
      },
      '@media (min-width: 769px)': {
        width: '60%',  // Larger width for tablets and up
        height: '40vh',  // Height set for larger devices
      },
    },
  }}
>
  {selectedJob && (
    <>
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{t(selectedJob.title)}</h2>
<p className="text-gray-600 mb-6">{t('Follow these steps to complete the job application:')}</p>
<ul className="space-y-4 mb-4">
  <li className="flex items-start space-x-2">
    <span className="font-bold text-indigo-600">{t("Step 1:")}</span> 
    <p className="text-gray-600">{t('Download and fill out the form')}</p>
  </li>
  <li className="flex items-start space-x-2">
    <span className="font-bold text-indigo-600">{t("Step 2:")}</span> 
    <p className="text-gray-600">{t('Upload required documents')}</p>
  </li>
  <li className="flex items-start space-x-2">
    <span className="font-bold text-indigo-600">{t("Step 3:")}</span> 
    <p className="text-gray-600">{t('Send the form')}</p>
  </li>
  <li className="flex items-start space-x-2">
    <span className="font-bold text-indigo-600">{t("Step 4:")}</span> 
    <p className="text-gray-600">{t('Contact us')}</p>
  </li>
</ul>
      <ButtonLink  href={selectedJob.link} download="form">
        {t('Download Form')} <FaAngleRight />
      </ButtonLink>
    </>
  )}
  <ButtonLink as="button" onClick={closeModal} className='m-5'>
    {t('Close')}
  </ButtonLink>
</Modal>
    </>
  );
});

export default JobListings;
