import "./app.css";
import "./assets/css/tailwind.css";
import "./assets/css/materialdesignicons.min.css";
import "leaflet/dist/leaflet.css";
import React from "preact/compat";
import Index from "./components/IndexPage.jsx";
import Formation from "./components/formationPage.jsx";
import Jobs from "./components/recruitment/Jobs";
import IndexFive from "./components/index-fivePage.jsx";
import Gallery from "./components/Gallery/gallery";
import GalleryDetail from "./components/Gallery/detailgallery";
import TeamNurse from "./components/TeamNurse";
import ContractPage from "./components/ContractPage";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react"
import { useLocation,Route,Router ,Routes} from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";

const App=React.memo( function App() {

  const location = useLocation();
    useEffect(() => {
        // Add Google Analytics script
        const script = document.createElement("script");
        script.src = `https://www.googletagmanager.com/gtag/js?id=G-LHCVR17P5K`;
        script.async = true;
        document.body.appendChild(script);

        // Initialize Google Analytics
        window.dataLayer = window.dataLayer || [];
        function gtag(...args) {
            window.dataLayer.push(args);
        }
        gtag("js", new Date());
        gtag("config", "G-LHCVR17P5K"); // Replace with your Measurement ID

        return () => {
            // Cleanup script if needed
            document.body.removeChild(script);
        };
    }, []);

    const pageVariants = {
    initial: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      y: -50,
      scale: 0.95,
    },
  };

  const pageTransition = {
    duration: 0.8,
    ease: [0.42, 0, 0.58, 1],
  };

  const pageStyle = {
    position: "absolute",
    width: "100%",
  };
  const submitUrlToBing = async () => {
    const apiKey = "sampleapikeyEDECC1EA4AE341CC8B6"; // Replace with your actual API key
    const url = "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch";
    
    const data = {
      siteUrl: "https://oceanconnecting.ma/"
    };
  
    try {
      const response = await fetch(`${url}?apikey=${apiKey}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("Bing API Response:", result);
    } catch (error) {
      console.error("Error submitting URL to Bing:", error);
    }
  };
  useEffect(() => {
    submitUrlToBing();
  }, []);
  return (
    
    <HelmetProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
    
          <Route
            path="/"
            element={
              <motion.div
                style={pageStyle}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Index/>
              </motion.div>
            }
          />
          <Route
            path="/formation-professionnelle-agadir"
            element={
              <motion.div
                style={pageStyle}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{
                  ...pageTransition,
                  duration: 1,
                }}
              >
                <Formation />
              </motion.div>
            }
          />
           <Route
            path="*"
            element={
              <motion.div
                style={pageStyle}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{
                  duration: 0.6,
                  ease: [0.42, 0, 0.58, 1],
                }}
              >
                <NotFoundPage />
              </motion.div>
            }
          />
          <Route
            path="/formation-professionnelle-agadir/:name"
            element={
              <motion.div
                style={pageStyle}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <IndexFive/>
              </motion.div>
            }
          />
          <Route
            path="/offres-emploi/:type"
            element={
              <motion.div
                style={pageStyle}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.8,
                  ease: [0.42, 0, 0.58, 1],
                }}
              >
                <Jobs/>
              </motion.div>
            }
          />
          <Route
            path="/offres-emploi"
            element={
              <motion.div
                style={pageStyle}
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{
                  duration: 0.5,
                  ease: [0.42, 0, 0.58, 1],
                }}
              >
                <Jobs />
              </motion.div>
            }
          />
          <Route
            path="/gallery"
            element={
              <motion.div
                style={pageStyle}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Gallery />
              </motion.div>
            }
          />
          <Route
            path="/gallery/:id"
            element={
              <motion.div
                style={pageStyle}
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 150 }}
                transition={{
                  duration: 0.8,
                  ease: [0.42, 0, 0.58, 1],
                }}
              >
                <GalleryDetail />
              </motion.div>
            }
          />
         
          <Route path="/soins-infirmiers-agadir" element={<TeamNurse />} />
          <Route path="/recrutement-international-agadir" element={<ContractPage />} />
        
        </Routes>
        <Analytics/> 
      
      </AnimatePresence>
     
    </HelmetProvider>
  );
})

export default App;
