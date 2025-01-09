import React, { Suspense, lazy, useMemo, useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";


import Navbar from "./navbar";
import Footer from "./foooter";
import Switcher from "./switcher";
import WhatsAppFloatingButton from "./WhatsAppFloatingButton";

const About = lazy(() => import("./about"));
const Services = lazy(() => import("./services"));
const AgencyTab = lazy(() => import("./agencyTab"));
const Blogs = lazy(() => import("./blog"));
const GetInTouch = lazy(() => import("./getInTuoch"));

// Images
import heroImage1 from "../assets/images/home/nurse.png";
import heroImage4 from "../assets/images/home/dev.png";
import heroImage2 from "../assets/images/home/buisness.jpg";

// Styled Components
const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
  color: #0f172a;
`;

const CTA = styled.button`
  background-color: var(--white);
  color: #fff;
  background-color: #3a86ff;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

// Load Client Data
const loadClientData = async (lang) => {
  try {
    switch (lang) {
      case "fr":
        return (await import("./locales/fr/translation")).Titlefr;
      case "ar":
        return (await import("./locales/ar/translation")).TitleAR;
      case "en":
      default:
        return (await import("./locales/en/translation")).TitleEN;
    }
  } catch (error) {
    console.error("Error loading client data:", error);
    return [];
  }
};

const Index = React.memo(() => {
  const { i18n } = useTranslation();
  const [clientData, setClientData] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [metaData, setMetaData] = useState({
    title: "Ocean Connecting",
    description: "",
    keywords: "",
  });

  const images = useMemo(() => [heroImage1, heroImage2, heroImage4], []);

  // Fetch Meta Data
  useEffect(() => {
    const fetchMetaData = async () => {
      try {
        const response = await axios.get(
          `https://hono-on-vercel123-54cp.vercel.app/api/meta`,
          {
            params: { page: "home", lang: i18n.language },
          }
        );
        setMetaData(response.data);
      } catch (error) {
        console.error("Error fetching metadata:", error);
      }
    };

    fetchMetaData();
  }, [i18n.language]);

  // Load Client Data
  useEffect(() => {
    loadClientData(i18n.language).then(setClientData);

    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, [i18n.language]);

  // Image Carousel
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [currentImage, images.length]);

  const aggregateRating = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Ocean Connecting Service",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "25",
    },
  };

  return (
    <Suspense fallback={<Loader>Loading Ocean Connecting...</Loader>}>
      <Helmet>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <script type="application/ld+json">
          {JSON.stringify(aggregateRating)}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section
        style={{ backgroundImage: `url(${heroImage2})` }}
        className="overflow-hidden flex items-center bg-cover mt-10 bg-center h-screen bg-teal-500/5 dark:bg-sky-500/20" id="home">
        <div className="bg-black h-full bg-opacity-75 py-0 px-5 w-full flex justify-center text-center">
          <div className="grid gap-6 max-w-[128] items-center">
            {clientData.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <h1 className="font-semibold tajawal text-white leading-[1.15] tracking-wide text-3xl lg:px-44 px-4 lg:text-5xl mb-5">
                  {i18n.t(item.Title)}
                </h1>
                <p className="text-slate-100 text-lg max-w-xl">{item.description}</p>                <div className="mt-6">
                  <CTA>
                    <ScrollLink to="contact">
                      {i18n.t(item.button)}{" "}
                      <i className="mdi mdi-chevron-right ms-1"></i>
                    </ScrollLink>
                  </CTA>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <Blogs />
      <AgencyTab />
      <About />
      <GetInTouch />
      <WhatsAppFloatingButton />
      <Switcher />
      <Footer />
    </Suspense>
  );
});

export default Index;
