import { CgWebsite } from "react-icons/cg";
import { FaGithub, FaLinkedin, FaLock, FaComments, FaCode } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineCleaningServices } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { Link as Link1 } from "react-scroll";
import client1 from '../../../assets/images/team/01.jpg'
import client2 from '../../../assets/images/team/02.jpg'
import client3 from '../../../assets/images/team/03.jpg'
import client4 from '../../../assets/images/team/04.jpg'
import client5 from '../../../assets/images/team/05.jpg'
import formation5 from '../../../assets/images/formation/formation05.jpg'
import formation6 from '../../../assets/images/formation/formation6.jpg'
import formation17 from '../../../assets/images/formation/formation17.jpg'
import formation8 from '../../../assets/images/formation/formation8.jpg'
import formation9 from '../../../assets/images/formation/formation9.jpg'
import formation10 from '../../../assets/images/formation/formation10.jpg'
import formation11 from '../../../assets/images/formation/formation11.jpg'
import formation12 from '../../../assets/images/formation/formation12.jpg'
import formation13 from '../../../assets/images/formation/formation13.jpg'
import formation14 from '../../../assets/images/formation/formation14.jpg'
import formation15 from '../../../assets/images/formation/15.jpg'
import formation16 from '../../../assets/images/formation/16.jpg'
import formation18 from '../../../assets/images/formation/formation18.jpg'
import formation19 from '../../../assets/images/formation/formation19.jpg'

import service1 from '../../../assets/images/service/service1.png'
import service2 from '../../../assets/images/service/service2.png'
import service3 from '../../../assets/images/service/service3.png'
import service4 from '../../../assets/images/service/service4.jpg'
import service5 from '../../../assets/images/service/service5.png'


import belgium from '../../../assets/images/job/belgium.png'
import allemagne from '../../../assets/images/job/germany.png'
import croatie from '../../../assets/images/job/croatie.png'
import italy from '../../../assets/images/job/italy.png'
import spain from '../../../assets/images/job/spain.png'
import facade from '../../../assets//images/job/facade.png'
import resume from '../../../assets/images/job/resume.png'
import recrutocean from '../../../assets/images/service/recrutocean.png'
import recrutinter from '../../../assets/images/service/recrutinter2.png'
import form from '../../../assets/images/form.pdf'
import heroImage1 from "../../../assets/images/home/nurse.png"


export const clientDataEN = [
    {
        image:client1,
        clientitle:"What Our Users Say",
        name:'Calvin Carlo',    
        title:'Manager',
        desc:'" I was blown away by the personalized support I received from this team. Their expertise in global job placement helped me land a fantastic position abroad. Highly recommend their services! "'
    },
    {
        image: client2,
        name: 'Christa Smith',
        title: 'Manager',
        desc: '"Navigating international job markets can be daunting, but this company made it so much easier. Their multilingual support and document assistance were top-notch. I couldn’t have done it without them!"'
    },
    {
        image: client3,
        name: 'Jemina CLone',
        title: 'Manager',
        desc: '" needed help with job placements in several countries, and their tailored support was exceptional. The team’s attention to detail and professionalism made the entire process smooth and stress-free."'
    },
    {
        image: client4,
        name: 'Smith Vodka',
        title: 'Manager',
        desc: '" The document assistance was a lifesaver for my international job search. Their guidance was clear and effective, and their ability to support in multiple languages was a huge bonus."'
    },
    {
        image: client5,
        name: 'Cristino Murfi',
        title: 'Manager',
        desc: '"I was impressed with how well they understood the complexities of global job placement. The support was personalized, and their multilingual team made sure I was well-prepared for every step of the process."'
    },
]
export const blogDataEN = [
    {
        id: 1,
        image: formation6,
        Title: "Training",
        text: "This administrative management course teaches participants the essential skills to excel in administrative tasks, covering documentation management, optimization of organizational processes, and professional communication. It combines theory and practice for skills that can be applied immediately in the workplace.",
        resrvedatail: "Welcome to our platform tailored for",
        register:"To register, simply click here ",
        resrveButton:"For reservation",
        title: 'Language Training Programs',
        desc: 'Ocean Connecting offers expert language training in English, Spanish, German, French, and Italian to help you excel.',
        detail: "At Ocean Connecting, we offer specialized language training programs designed to help individuals and professionals master five essential languages: English, Spanish, German, French, and Italian.",
        why_choose_us: {
          expert_instructors: "- Expert Instructors: Learn from certified professionals with extensive teaching experience.",
          customized_learning: "- Customized Learning: Our courses are tailored to meet your unique needs and proficiency levels.",
          flexible_formats: "- Flexible Formats: Choose from online, in-person, or hybrid classes that fit your schedule."
        },
        language_courses: [
          {
            language: "English",
            description: "Enhance your communication skills for personal and professional growth.",
            title:"Language Courses Offered:",
          },
          {
            language: "Spanish",
            description: "Open doors to new cultures and business opportunities with Spanish proficiency."
          },
          {
            language: "German",
            description: "Gain confidence in speaking and writing German for travel or work."
          },
          {
            language: "French",
            description: "Master French for cultural appreciation or career advancement."
          },
          {
            language: "Italian",
            description: "Discover the beauty of the Italian language and connect with its rich heritage."
          }
        ],
        cta: {
          message: "Ready to elevate your language skills? Contact us to learn more about our training programs and find the perfect course for you!"
        },
        type: 'language',
        button: "Learn more",
        show: "show all",
        Link:"https://oceanconnecting.com" 
    },
    {
        id: 2,
        image: formation9,
        resrvedatail: "Welcome to our platform tailored for",
        register: "To register, simply click here ",
        resrveButton: "For reservation",
        title: 'Airport Check-in Agent Training',
        desc: 'The training for an Airport Check-in Agent prepares professionals...',
        detail: 'Elevate your career in the aviation industry with our comprehensive Airport Check-in Agent Training at Ocean connecting. This program equips professionals with the essential skills and knowledge to manage passenger check-in efficiently, ensuring smooth airport operations.What You Will Learn',
        type: 'Formation',
        button: "Learn more",
        show: "show all",
        Link:"agent-checkin-aeroport-agadir" 
    },
    {
        id: 3,
        image: formation8,
        resrvedatail: "Welcome to our platform tailored for",
        register: "To register, simply click here ",
        resrveButton: "For reservation",
        title: 'DJ Training Program',
        desc: 'DJ training teaches the skills necessary to become a DJ...',
        detail: 'Transform your passion for music into a professional career with our comprehensive DJ Training at Ocean connecting. This program is designed to equip aspiring DJs with the skills necessary to thrive in the music industry, whether you’re just starting or looking to refine your craft.What You Will Learn',
        type: 'Formation',
        button: "Learn more",
        show: "show all",
        Link:"dj-agadir" 
    },
    {
        id: 4,
        image: formation15,
        resrvedatail: "Welcome to our platform tailored for",
        register: "To register, simply click here ",
        resrveButton: "For reservation",
        title: 'Boat and Sailboat Driving Training',
        desc: 'This training offers a comprehensive experience for sailing enthusiasts...',
        detail: 'This training offers a comprehensive experience for sailing enthusiasts, including theoretical and practical courses on safety, sailing techniques, and coastal and offshore navigation. Sessions are led by experienced instructors and include intensive sea practice. Participants can obtain recognized certifications, allowing them to pilot various types of boats and sailboats. Join us to develop your nautical skills and experience an unforgettable maritime adventure!',
        type: 'Formation',
        button: "Learn more",
        show: "show all",
        Link:"conduitendes-bateaux-voliers-agadir" 

    },
    {
        id: 5,
        image: formation16,
        resrvedatail: "Welcome to our platform tailored for",
        register: "To register, simply click here ",
        resrveButton: "For reservation",
        title: 'HOME & FAMILY',
        desc: 'The Home & Family training is designed to provide practical skills and...',
        detail: 'The Home & Family training is designed to provide practical skills and in-depth knowledge on managing domestic life and family relationships. It covers various topics from home organization to family financial management, communication techniques, and conflict resolution. The goal is to provide participants with the necessary tools to create a harmonious and well-organized family environment.',
        type: 'Formation',
        button: "Learn more",
        show: "show all",
        Link:"home-family-agadir"  
    },
    {
        id: 6,
        image: formation14,
        resrvedatail: "Welcome to our platform tailored for",
        register: "To register, simply click here ",
        resrveButton: "For reservation",
        title: 'VAR Installation and Usage Training',
        desc: 'The VAR installation and usage training...',
        detail: 'The VAR (Value Added Resellers) installation and usage training aims to provide professionals with the skills needed to install, configure, and use VAR technology solutions effectively. It covers hardware and software installation steps, advanced configuration, and daily use of tools and applications. Participants also learn to provide technical support, diagnose and resolve issues, perform preventive maintenance, and optimize solution performance. This training is essential for effective VAR solution management and ensuring optimal system performance.',
        type: 'Formation',
        button: "Learn more",
        show: "show all",
        Link:"installation-usilisation-var-agadir" 
    },
    {
        id: 7,
        image: formation12,
        resrvedatail: "Welcome to our platform tailored for",
        register:"To register, simply click here ",
        resrveButton:"For reservation",
        title: 'Maritime Navigat Training',
        desc: 'Maritime navigation training teaches participants the skills...',
        detail: 'Maritime navigation training teaches participants the essential skills to navigate safely at sea, covering the use of navigation tools such as nautical charts and GPS systems, as well as understanding international regulations. Participants learn to plan routes, manage weather conditions, and ensure the safety of the vessel and crew. The training also includes rescue techniques and emergency management, ensuring effective and safe navigation while adhering to maritime rules.',
        type: 'Formation',
        button: "Learn more",
        show: "show all",
        Link:"navigation-maritime-agadir"
    },
    {
        id: 8,
        image: formation13,
        resrvedatail: "Welcome to our platform tailored for",
        register:"To register, simply click here ",
        resrveButton:"For reservation",
        title: 'Precious Stones',
        desc: 'The training on precious stones and metals provides an understanding...',
        detail: 'The training on precious stones and metals provides an in-depth understanding of the characteristics, evaluation, and maintenance of these valuable materials. Participants learn to identify and evaluate precious stones and metals using quality and certification criteria. The training also covers treatment and maintenance techniques to preserve their value, as well as market trends and business practices. Additionally, it addresses ethical issues and sustainable practices related to the extraction and trade of these resources.',
        type: 'Formation',
        button: "Learn more",
        show: "show all",
        Link:"pierres-métaux-précieux-agadir"
    },
    {
        id: 9,
        image: formation11,
        resrvedatail: "Welcome to our platform tailored for",
        register: "To register, simply click here ",
        resrveButton: "For reservation",
        title: 'Agriculture and Fishing Development',
        desc: 'The training to develop agriculture and fishing aims to optimize...',
        type: 'Formation',
        button: "Learn more",
        show: "show all",
        Link:"argriculture-pêche-agadir"
    },
    {
        id: 10,
        image: formation10,
        resrvedatail: "Welcome to our platform tailored for",
        register: "To register, simply click here ",
        resrveButton: "For reservation",
        title: 'Earth Sciences and Seismology',
        desc: 'The training in Earth sciences and seismology offers an understanding...',
        detail: 'The training in Earth sciences and seismology offers an in-depth understanding of geological processes, earthquake mechanisms, and techniques for assessing seismic risks. It covers fundamental principles of geology, tectonic plate movements, and earthquake causes, as well as methods for monitoring and predicting earthquakes. Participants also learn to assess seismic risks, develop strategies to reduce risks, and prepare infrastructure and communities for the impacts of earthquakes. This training is essential for researchers, engineers, and risk management professionals looking to enhance their expertise in seismology and risk reduction.',
        type: 'Formation',
        button: "Learn more",
        show: "show all",
       Link:"sciences-terre-séismes-agadir"
    },
    {
        id: 11,
        image: formation19,
        resrvedatail: "Welcome to our platform tailored for",
        register: "To register, simply click here ",
        resrveButton: "For reservation",
        title: 'National and International Recruitment Training',
        desc: 'National and International Recruitment Studies and Training (EFRNI) is...',
        detail: 'National and International Recruitment Studies and Training (EFRNI) is a specialized training program aimed at developing advanced skills in the recruitment field, both nationally and internationally. It covers the challenges related to recruitment in various cultural and legal contexts, while teaching the use of modern tools to identify and attract talent. The training also emphasizes optimizing selection processes and the importance of talent management to ensure employee retention and development from a global perspective.',
        type: 'Formation',
        button: "Learn more",
        show: "show all",
        Link:"national-Et-international-agadir"
    },
    {
        id: 12,
        image: formation17,
        resrvedatail: "Welcome to our platform tailored for",
        register: "To register, simply click here ",
        resrveButton: "For reservation",
        title: 'Theatre Training for Children',
        desc: 'The training "Learning Theatre for Children" introduces young...',
        detail: 'The training "Learning Theatre for Children" introduces young people to the art of drama by developing their self-confidence, communication skills, and creativity. Through role-playing, improvisations, and creative exercises, children learn to express their emotions and ideas while enhancing their teamwork and group work skills. The training also covers the basics of theatre, such as public speaking and managing stage fright, offering an enriching experience that stimulates both personal development and social skills.',
        type: 'Formation',
        button: "Learn more",
        show: "show all",
        Link:"national-Et-international-agadir"
    },
    {
        id: 13,
        image: formation18,
        resrvedatail: "Welcome to our platform tailored for",
        register: "To register, simply click here ",
        resrveButton: "For reservation",
        title: 'Elevator Training',
        desc: 'The elevator training is designed to provide participants...',
        detail: 'The elevator training is designed to provide participants with a comprehensive understanding of elevator systems, from installation to maintenance. It covers the principles of elevator operation, safety procedures, and troubleshooting techniques. Participants will learn to install, maintain, and repair elevators while adhering to safety and regulatory standards. The training is ideal for technicians, engineers, and anyone involved in the elevator sector, offering the skills needed to ensure the proper functioning and safety of equipment.',
        type: 'Formation',
        button: "Learn more",
        show: "show all",
        Link:"théatre-enfants-agadir"
    },
    {
        id: 14,
        image: formation5,
        resrvedatail: "Welcome to our platform tailored for",
        register: "To register, simply click here ",
        resrveButton: "For reservation",
        title: 'Train and Tramway Driving Training',
        desc: 'The training for driving trains and trams prepares participants...',
        detail: 'The training for driving trains and trams prepares participants to operate these vehicles safely and efficiently. It covers the technical aspects of driving, including handling controls, managing signaling systems, and adhering to safety procedures. Participants also learn to manage emergency situations, optimize energy consumption, and ensure passenger comfort. The training includes practical and theoretical simulations to develop in-depth skills in driving and managing railway and tramway operations while complying with current regulations.',
        type: 'Formation',
        button: "Learn more",
        show: "show all",
          Link:"train-tramway-agadir"
    },
];

export const serviceDataEN = [

    {
        id: 1,
        icon: <SlNote />,
        Servicetitle: "Services",
        title: "Training",
        title2: "OUR SERVICES",
        desc2: "We offer you professional training at all levels, a facade cleaning service to ensure safety and cleanliness in winter, a prestigious address and streamlined administrative management of your business.",
        desc: "Boost your skills with tailored training from experienced professionals. Our expert trainers provide personalized programs to help you achieve your goals confidently and effectively.",
        image: service1,
        para1: "Training Service",
        desc_para1: "We offer high-quality professional training tailored to all levels of expertise. Our programs are designed to provide practical and theoretical skills, enabling you to advance in your career and achieve your professional goals. Whether you're a beginner or an expert, our experienced trainers will support you throughout your learning journey.",
        para2: "Benefits",
        desc_para2: "Our training offers practical expertise tailored to the specific needs of each participant, enhancing their skills and employability.",
        para3: "Target Audience",
        desc_para3: "These training programs are aimed at professionals looking to advance their careers, companies seeking to develop their teams' skills, and individuals undergoing professional transition.",
        para4: "Process or Methodology",
        desc_para4: "Each training begins with a needs analysis, followed by a personalized program delivered by experts. We combine theory and practice to ensure effective knowledge absorption.",
        para5: "Added Value",
        desc_para5: "Our training stands out for its flexibility and practical approach, incorporating the latest trends and technologies to offer relevant and immediately applicable solutions on the field.",
        Bouton : "Learn more",
        link:"https://www.oceanconnecting.info",

    },
    {
        id: 2,
        icon: <MdOutlineCleaningServices />,
        title: " Cleaning",
        desc: "Enhance the appearance and longevity of your building with professional facade cleaning services. Ensure your property makes a strong first impression, reflecting the quality and professionalism of your business.",
        image: service2,
        para1: "Facade Cleaning Service",
        desc_para1: "Our facade cleaning service ensures impeccable results to restore the shine and cleanliness of your buildings. Using professional techniques and environmentally friendly products, we effectively remove dirt, mold, and pollutants. Trust our expertise to maintain the appearance and durability of your facades.",
        para2: "Benefits",
        desc_para2: "This service restores the appearance of your facades, extends their lifespan, and improves the image of your property by offering a clean and well-maintained look.",
        para3: "Target Audience",
        desc_para3: "This service is intended for owners of residential, commercial, and industrial buildings, as well as property managers wishing to maintain the cleanliness and integrity of their facades.",
        para4: "Process or Methodology",
        desc_para4: "We use cleaning techniques suitable for each type of surface, including high-pressure washing and eco-friendly products. We start with a detailed assessment, followed by thorough cleaning and a final quality check.",
        para5: "Added Value",
        desc_para5: "Our expertise in facade cleaning guarantees lasting results and prompt service, while adhering to the strictest environmental and safety standards.",
        Bouton : "Learn more",
       link: "https://oceanconnecting.net"
    },
    {
        id: 3,
        icon: <IoHomeOutline />,
        title: " Domiciliation",
        desc: "Take advantage of a professional business domiciliation in Agadir to strengthen your corporate image and your presence on the market.",
        image: service3,
        para1: "Business Domiciliation Service",
        desc_para1: "Our domiciliation service provides you with a prestigious business address for your company. In addition to simplifying administrative management, we ensure the reception of your mail and provide comprehensive support for all your procedures. Use our address for your business to enhance your image and optimize your organization.",
        para2: "Benefits",
        desc_para2: "By using our address, you benefit from an enhanced professional image and simplified mail management while maintaining your privacy.",
        para3: "Target Audience",
        desc_para3: "This service is ideal for entrepreneurs, freelancers, startups, and small businesses looking to establish a professional presence without needing a physical office.",
        para4: "Process or Methodology",
        desc_para4: "We offer an easy registration process, including mail reception and management, as well as mail forwarding options according to your specific needs. You can access your documents securely via our online platform.",
        para5: "Added Value",
        desc_para5: "Our service stands out for its flexibility, personalized support, and ability to offer a prestigious address that enhances your company's credibility while optimizing your administrative operations.",
        Bouton: "Learn more",
        link: <Link1 to="contact" className="text-sky-500" smooth={true} duration={1000} activeClass='active' spy={true}>Contact Us <i className="mdi mdi-chevron-right align-middle"></i></Link1>,
    },
    {
        id: 4,
        title: "Development",
        icon: <CgWebsite />,
        desc: "Boost your online presence with our expert web development services. Our individual providers craft tailored, responsive websites that align perfectly with your brand and business goals.",
        image: service4,
        para1: "Development Service",
        desc_para1: "We offer a comprehensive custom website creation service to meet your specific needs. From design to launch, our team of experts uses the latest technologies to develop aesthetically pleasing, functional, and search-engine-optimized websites. Whether you need a showcase site, an online store, or a custom platform, we are here to realize your project.",
        para2: "Benefits",
        desc_para2: "Our websites are designed to provide an optimal user experience, modern design, and full functionality, enhancing online visibility and visitor engagement.",
        para3: "Target Audience",
        desc_para3: "This service is aimed at businesses, entrepreneurs, and professionals looking to establish or enhance their online presence with a website that reflects their brand and achieves their business goals.",
        para4: "Process or Methodology",
        desc_para4: "We start with a thorough analysis of your needs, followed by the creation of a custom design. Then we develop and test the site to ensure optimal performance before launching.",
        para5: "Added Value",
        desc_para5: "Our personalized approach and technical expertise ensure results that not only meet but exceed your expectations, offering a functional, aesthetically pleasing, and search-engine-optimized website.",
        Bouton : "Learn more",
        link: "https://www.oceanconnecting.dev" ,
    },
    {
        id: 5,
        title: "Recruitment",
        desc: "We offer employment contract services in Europe. Contact us today to start your journey toward a bright professional future ! ",
        image: service5,
        para1: "Recruitment Service",
        desc_para1: "Our international recruitment service helps companies identify and hire the best talent worldwide. Through our extensive network and HR expertise, we find qualified candidates who perfectly meet your specific requirements. Simplify your recruitment process and strengthen your team with talented professionals from diverse backgrounds.",
        para2: "Benefits",
        desc_para2: "This service facilitates access to a pool of highly qualified candidates, improves the efficiency of the recruitment process, and reduces hiring times, while ensuring hires that match each company's specific needs.",
        para3: "Target Audience",
        desc_para3: "This service is intended for multinational companies, businesses expanding internationally, and organizations looking to strengthen their team with talented professionals from various global markets.",
        para4: "Process or Methodology",
        desc_para4: "We use advanced search methods and a global network to source candidates. The process includes a thorough skills assessment, targeted interviews, and proactive management of applications to ensure an optimal match.",
        para5: "Added Value",
        Bouton : "Learn more",
        desc_para5: "Our expertise in international recruitment allows us to find talent suited to your company's specific requirements, while offering personalized service and support throughout the recruitment process to ensure a successful integration.",
        link:"/jobs",
    },
    {
        id: 6,
        title: "Nurse",
        desc: "We offer employment contract services in Europe. Contact us today to start your journey toward a bright professional future ! ",
        image: heroImage1,
        para1: "Recruitment Service",
        desc_para1: "Our international recruitment service helps companies identify and hire the best talent worldwide. Through our extensive network and HR expertise, we find qualified candidates who perfectly meet your specific requirements. Simplify your recruitment process and strengthen your team with talented professionals from diverse backgrounds.",
        para2: "Benefits",
        desc_para2: "This service facilitates access to a pool of highly qualified candidates, improves the efficiency of the recruitment process, and reduces hiring times, while ensuring hires that match each company's specific needs.",
        para3: "Target Audience",
        desc_para3: "This service is intended for multinational companies, businesses expanding internationally, and organizations looking to strengthen their team with talented professionals from various global markets.",
        para4: "Process or Methodology",
        desc_para4: "We use advanced search methods and a global network to source candidates. The process includes a thorough skills assessment, targeted interviews, and proactive management of applications to ensure an optimal match.",
        para5: "Added Value",
        Bouton : "Learn more",
        desc_para5: "Our expertise in international recruitment allows us to find talent suited to your company's specific requirements, while offering personalized service and support throughout the recruitment process to ensure a successful integration.",
        link:"/soins-infirmiers-agadir",
    },
    {
        id: 7,
        title: "language",
        link:"https://oceanconnecting.com",
    }
]
export const TitleEN = [
    {
        Title: "Language Learning, Training & International Recruitment Services ",
        button: "Contact Us",
        description:"A comprehensive platform for learning and training that prepares you for national and international job markets, offering global employment opportunities and assistance with document preparation to enhance your skills and achieve your professional ambitions.",
        Learn: "Learn More",
    }
]
export const NavbarEN = [{
    Home: "Home",
    Services: "Services",
    Formation: "Training",
    Jobs: "Jobs",
    gallery: "GALLERY",
    About: "About",
    Contact_us: "Contact us"
}]
export const AboutEN=[{
    h1 : 'About Us ',
    ask:"Who Are We ?",
    title:"We specialize in international job placement and document assistance, providing customized support in multiple languages to help you navigate global career opportunities.",
    desc:"Our company provides international job placement services and expert support in multiple languages. We assist clients in finding global career opportunities and offer comprehensive help with document preparation in various languages. Our goal is to facilitate a smooth and effective transition to international careers.",
    year:"YearsExperience",
    International:"International Career Support",
    Services:"Services"
}]
export const recruitmentEN = [
    {
        id: 1,
        h1: "Recruitment",
        title: 'International Recruitment',
        desc: 'Connecting global talent with opportunities across borders. We simplify international hiring to help you find the best candidates worldwide.',
        image: recrutinter,
        title2: 'International Recruitment Services',
        desc2: 'Our company specializes in connecting top talent with global opportunities. We provide comprehensive international recruitment solutions, including candidate sourcing, screening, and placement. By leveraging our extensive network and expertise in diverse markets, we help businesses find the right talent to drive their growth and success across borders.',
        button: "Apply Now",

        type: "International",

    },
    {
        id: 2,
        title: 'Recruitment OceanConnecting',
        desc: 'Connecting top talent with leading organizations nationwide. Streamlining your hiring process for effective, efficient results.',
        image: recrutocean,
        title2: 'Recruitment OceanConnecting',
        desc2: 'We’re excited to invite you to apply for a position at our company. Join our team and contribute to our dynamic environment while advancing your career. Explore opportunities for growth, innovation, and impact with us.',
        button: "Apply Now",
        type: "National"

    },

];
export const jobsEN = [
    {
        id: 1,
        h1:"Job Listings",
        Find:"Find your dream job with us",
        image: resume,
        title: 'Application for an overseas work contract',
        type: 'International',
        menu1: "Required documents : ",
        secteur: "  The judicial record is obtained from the court and the signature is corrected at the Ministry of Foreign Affairs (Apostil) and translated into English .",
        menu2: "Required images :",
        niveaulanguage: "A photo of yourself, a copy of your passport, a video and a photo of yourself practicing your chosen profession." ,
        menu6:"More information :",
        more:' You can obtain the form by clicking on the Download button , 🙏🏻 and, for your convenience, you can send us the original documents (PDF).',
        action : 'To apply',
        link: form ,
        model:true
    },
    {
        id: 2,
        job: "Job Placement Agencies",
        ocean: "Ocean connect",
        image: croatie,
        title: 'Employment contract in Croatia',
        type: 'International',
        secteur: 'Construction / Blacksmithing / Joinery / Painting / Electrical mechanic / Air conditioning / Driver license D / Butcher / hotel service .',
        niveaulanguage: 'Language not required .',
        timevisa: 'The visa is valid for 5 months .',
        contratime: '1-year employment contract.',
        pricecontrat: 'The contract price is 60,000 DH.',
        more: 'The contract includes free accommodation and medical treatment...',
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D9%83%D8%B1%D9%88%D8%A7%D8%AA%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1: "Secteur :",
        menu2: "Niveau Langue :",
        menu3: "Time Visa :",
        menu4: "Contrat :",
        menu5: "Price Contrat :",
        menu6: "More :",
        action: 'To apply',
    },
    {
        id: 3,
        image: allemagne,
        title: 'Employment contract in Germany',
        type: 'International',
        secteur: 'Health and nursing/hotels/programming ',
        niveaulanguage: 'Required language B1 .',
        timevisa: 'The visa is valid for 8 months .',
        contratime: '1-year employment contract.',
        pricecontrat: 'The contract price is 80,000 DH.',
        more: 'The contract includes free accommodation and medical treatment...',
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A3%D9%84%D9%85%D8%A7%D9%86%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1: "Secteur :",
        menu2: "Niveau Langue :",
        menu3: "Time Visa :",
        menu4: "Contrat :",
        menu5: "Price Contrat :",
        menu6: "More :",
        action: 'To apply',

    },
    {
        id: 4,
        image: belgium,
        title: 'Employment contract in Belgium',
        type: 'International',
        secteur: 'Health and nursing/hotels/programming',
        niveaulanguage: 'Language B1 is necessary .',
        timevisa: 'The visa is valid for 8 months .',
        contratime: '1-year employment contract.',
        pricecontrat: 'The contract price is 60,000 DH.',
        more: 'The contract includes free accommodation and medical treatment...',
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A8%D9%84%D8%AC%D9%8A%D9%83%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1: "Secteur :",
        menu2: "Niveau Langue :",
        menu3: "Time Visa :",
        menu4: "Contrat :",
        menu5: "Price Contrat :",
        menu6: "More :",
        action: 'To apply',
    },
    {
        id: 5,
        image: italy,
        title: 'Employment contract in Italy',
        type: 'International',
        secteur:'Health and nursing/hotels/agriculture',
        niveaulanguage:'Language B1 is necessary .',
        timevisa:'The visa is valid for 8 months .',
        contratime:'1-year employment contract.',
        pricecontrat:'The contract price is 60,000 DH.',
        more:'The contract includes free accommodation and medical treatment...',
        link:"https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1:"Secteur :",
        menu2:"Niveau Langue :",
        menu3:"Time Visa :",
        menu4:"Contrat :",
        menu5:"Price Contrat :",
        menu6:"More :",
        action : 'To apply',
    },
    {
        id: 6,
        image: spain,
        title: 'Employment contract in Spain',
        type: 'International',
        secteur: 'Health and nursing/hotels/agriculture',
        niveaulanguage: 'Language B1 is necessary .',
        timevisa: 'The visa is valid for 8 months .',
        contratime: '1-year employment contract.',
        pricecontrat: 'The contract price is 60,000 DH.',
        more: 'The contract includes free accommodation and medical treatment...',
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A5%D8%B3%D8%A8%D8%A7%D9%86%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1: "Secteur :",
        menu2: "Niveau Langue :",
        menu3: "Time Visa :",
        menu4: "Contrat :",
        menu5: "Price Contrat :",
        menu6: "More :",
        action: 'To apply',
    },
    {
        id: 7,
        image: facade,
        title: 'Building Facade Cleaner',
        type: 'National',
        secteur:'cleaning service',
        niveaulanguage:'Language is not necessary .',
        timevisa:'niveau BAC.',
        contratime:'contrat CDI - CDD .',
        pricecontrat:'Agadir',
        more:'Knowledge of chemicals - Psychological tolerance - Good communication - Ability to use equipment - Accuracy and attention to detail - Working at height - Physical ability - Safety awareness',
        link:"https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A5%D8%B3%D8%A8%D8%A7%D9%86%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1:"Secteur :",
        menu2:"Niveau Langue :",
        menu3:"Level of education :",
        menu4:"Type Contrat :",
        menu5:"Region :",
        menu6:"Key skills :",
        action : 'To apply',
    },
    // Ensure each job has a unique id
];
export const ContactEN = [{
    title: "CONTACT US",
    desc: " We’d love to hear from you! Fill out the form below with your name, email, and message, and we’ll get back to you shortly. Thanks for reaching out!",
    name: "Your Name:",
    email: "Your Email:",
    question: "Your Question:",
    comment: "Your Comment:",
    Message: "Send Message"
}]
export const NurseEN = [{
    title: "Nursing Care",
    desc: "Discover compassionate nursing care you can trust. Our dedicated team provides quality healthcare with empathy and respect, prioritizing your health and comfort.",
    contact: "Contact Us Today",
    about: "About Us",
    descab: "We are a team of licensed and experienced nurses dedicated to providing exceptional care in the comfort ofyour own home. From post-surgical care to chronic disease management, our goal is to improve your quality of life with personalized, compassionate services."
}]
export const CardEn = [{
    title: "Highlights of Our Nursing Care",
    Comfort: "Patient Comfort",
    textCom: "Ensuring the utmost comfort for our patients through personalized and compassionate care.",
    detail: "DETAIL",
    Caregiver: "Caregiver Support",
    textCare: "Supporting family caregivers with the resources and respite they need to care for loved ones.",
    Safety: "Safety and Security",
    textsafe: "Maintaining a safe and secure environment for all patients through rigorous safety measures."
}]
export const ServicesSectionEN = [{
    title: "Our Care Services",
    Patient: "Patient Care",
    descp: " Taking care of the patient during their illness.",
    Dressing: "Dressing Changes",
    descd: " Changing dressings (surgical and dermatological, etc.).",
    Injections: "Injections",
    desci: "Types of intramuscular and subcutaneous injections.",
    Medical: "Medical Prescription",
    decsm: " With a medical prescription (mandatory).",
    Umbilical: "Umbilical Care",
    descu: "Umbilical care for babies.",
    Postpartum: 'Postpartum Care',
    decccp: " Caring for the mother after childbirth.",
    IV: "IV Fluid Change",
    descI: " Changing IV fluids.",
    Blood: "Blood Pressure & Glucose",
    decsB: "Monitoring blood pressure and blood glucose levels."
}]
export const GalleryEN = [
    {
        id:1,
        title:"Welcome to Our Gallery!",
        desc:"Discover the creativity and passion behind our work through these images. Enjoy the view!",
        image:"https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F2.jpg?alt=media&token=2edf1832-c447-46f8-88af-b496cbaa46fe",
        numberimage:"10 images",
        datealbum:"",
        titlealbum:"Event - Nurses ",
        img: [
            { alt: 'image1', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F1.jpg?alt=media&token=e00fef12-3166-4135-ba8e-cc244533f9c9' },
            { alt: 'image2', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F2.jpg?alt=media&token=2edf1832-c447-46f8-88af-b496cbaa46fe' },
            { alt: "image3", url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F3.jpg?alt=media&token=1ee28e5c-4382-43a8-8486-70a300389152' },
            { alt: "image4", url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F4.jpg?alt=media&token=c743a9a4-fd9f-402a-aac8-2a43344d72c8' },
            { alt: "image5", url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F5.jpg?alt=media&token=3db9b4fe-05de-49e4-a3ba-0c56756ab4b9' },
            { alt: "image6", url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F6.jpg?alt=media&token=cd3f5727-dd69-495d-be36-a476990c0a1e' },
            { alt: "image7", url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F7.jpg?alt=media&token=0832fc09-a5ec-4a4c-9a71-e6463c6d9244' },
            { alt: "image8", url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F8.jpg?alt=media&token=8addc46f-e121-4456-a129-5e44f4bff1c9' },
            { alt: "image9", url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F9.jpg?alt=media&token=530b17a3-fc1e-4e22-99ec-d8cfa51f71b4' },
            { alt: "image10", url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F10.jpg?alt=media&token=f840572c-7b17-42da-a413-565daf589f3e' },
        ]
    },
    {
        id:2,
        image:"https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FglassCleaning-team1%2F1.png?alt=media&token=42c92a0a-9bfe-4b1e-8bb2-5799ba69a1ee",
        numberimage:"5 images",
        datealbum:"",
        titlealbum:"glassCleaning-team ",
        img: [
            { alt: 'image1', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FglassCleaning-team1%2F6.jpg?alt=media&token=a6ef683e-9250-4147-acb2-b6a538f16790' },
            { alt: 'image2', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FglassCleaning-team1%2F2.jpg?alt=media&token=89f41d86-0294-4ac9-a646-e8127f751d4a' },
            { alt: 'image3', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FglassCleaning-team1%2F3.jpg?alt=media&token=d9c0d25e-8db6-4ac7-b07d-7641dd174f15' },
            { alt: 'image4', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FglassCleaning-team1%2F4.jpg?alt=media&token=8e6de772-41b2-4905-aa7e-8f81d3d73c86' },
            { alt: 'image5', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FglassCleaning-team1%2F5.jpg?alt=media&token=083fe0ff-6226-492c-9974-3f8423efd177' },
        ]
    },
    {
        id:3,
        image:"https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2Faffiche%20center.png?alt=media&token=0ecace4a-a5c0-453a-acd2-401cdbb8bb84",
        numberimage:"27 images",
        datealbum:"",
        titlealbum:"Center-pictures ",
        img: [
            { alt: 'image1', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4075.jpg?alt=media&token=0fbbc107-22b2-4fed-bbfb-f680799d7075' },
            { alt: 'image2', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4076.jpg?alt=media&token=4c3ee7dd-e27e-468d-8917-980f9423b292' },
            { alt: 'image3', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4079.jpg?alt=media&token=da9ea1e6-91f5-4e5d-8fa5-af4503e5eff5' },
            { alt: 'image4', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4080.jpg?alt=media&token=7ef19b40-51b6-4aca-b2b6-d950aebdcbd0' },
            { alt: 'image5', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4083.jpg?alt=media&token=2fd8f1ee-3826-46eb-995f-86ac7641fda6' },
            { alt: 'image6', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4084.jpg?alt=media&token=0cf65c9e-d52f-491d-840e-11a43c5d1f70' },
            { alt: 'image7', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4085.jpg?alt=media&token=a291f227-32d8-44be-ae30-f67e25bebf1f' },
            { alt: 'image8', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4086.jpg?alt=media&token=a917d76e-03a1-4d1f-93b7-f68491b61d8b' },
            { alt: 'image9', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4088.jpg?alt=media&token=a47dee19-cee1-4ccc-a3d1-c9c9f85bb833' },
            { alt: 'image10', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4089.jpg?alt=media&token=ccdf637c-b9dd-462f-a7d3-3a4fb32ed37f' },
            { alt: 'image11', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4090.jpg?alt=media&token=4100faca-4836-46bf-b0e9-2ba295540019' },
            { alt: 'image12', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4091.jpg?alt=media&token=fc57e36f-28bd-47c5-aa8e-822cd088c906' },
            { alt: 'image13', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4092.jpg?alt=media&token=74d75869-278f-4f3b-bd04-9ef4419c5b93' },
            { alt: 'image14', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4093.jpg?alt=media&token=c3efdf66-6e8e-4913-a027-413e5db4be98' },
            { alt: 'image15', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4094.jpg?alt=media&token=3b685692-20e7-4b17-a850-4665d25f5d4f' },
            { alt: 'image16', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4095.jpg?alt=media&token=9f76d06d-02ca-4970-82e9-459ad1f7ba49' },
            { alt: 'image17', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4096.jpg?alt=media&token=8906c50e-9cd9-414c-bf53-55fa1eb2a400' },
            { alt: 'image18', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4097.jpg?alt=media&token=1d2807bf-78f9-4740-9e13-c80cca55c584' },
            { alt: 'image19', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4098.jpg?alt=media&token=a2ae568e-d258-4db4-a418-f5a87cf7cb84' },
            { alt: 'image20', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4099.jpg?alt=media&token=a737a81f-e776-4d3d-8f99-4e833a1e10e4' },
            { alt: 'image21', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4100.jpg?alt=media&token=4cd635f4-66d8-4971-b6e5-a8f76f63cb6d' },
            { alt: 'image22', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4102.jpg?alt=media&token=86e6047e-7132-46a0-aafb-d4c87fdfbe6d' },
            { alt: 'image23', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4105.jpg?alt=media&token=d8ee1dc3-59b9-4ef9-819f-0df491aeb3a3' },
            { alt: 'image24', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4106.jpg?alt=media&token=f7966a7d-ec7b-4de7-8a3c-371e470b163d' },
        ]
    },

];
export const DevelopmentEN=[{
    title:"Meet Our Development Team",
    desc:"  We are a passionate team of experts dedicated to crafting innovativesolutions. Explore more about each team member below and learn about the technologies they excel in.",
    title2:" Our Development Services",
    services : [
        {
          title: "Security",
          description:
            "Ensure your applications are secure with the latest security protocols and best practices. We provide penetration testing, secure coding practices, and compliance assessments.",
          icon: <FaLock className="text-blue-600" />,
        },
        {
          title: "Consultation",
          description:
            "Get expert advice on technology strategy, system architecture, and more. Our consultation services are tailored to help you navigate complex technical challenges.",
          icon: <FaComments className="text-green-600" />,
        },
        {
          title: "Development",
          description:
            "From front-end to back-end development, our team excels in building robust and scalable applications tailored to your business needs.",
          icon: <FaCode className="text-purple-600" />,
        },
      ]
  
}];
export const footerDataEn = {
    "socialLinks": [ // Changed from array to object
        { "id": 1, "label": "Facebook", "to": "https://www.facebook.com/the.ocean.connecting/" },
        { "id": 2, "label": "Instagram", "to": "https://www.instagram.com/oceanconnecting.ma/" },
        { "id": 3, "label": "YouTube", "to": "https://www.youtube.com/@OceanConnecting" },
        { "id": 4, "label": "LinkedIn", "to": "https://www.linkedin.com/company/ocean-connecting/?originalSubdomain=ma" }
    ],
    "contactInfo": [
        {
            "id": 1,
            "Icon": "HiLocationMarker",
            "title": "Address",
            "content": "Immeubles Coralia, 2ème étage, ISLAN, Hay Mohammadi, AGADIR"
        },
        {
            "id": 2,
            "Icon": "PiPhoneCallFill",
            "title": "Call Us",
            "content": "+212 704-309787"
        },
        {
            "id": 3,
            "Icon": "MdMarkEmailRead",
            "title": "Email Us",
            "content": "oceanconnecting.ma@gmail.com"
        }
    ],
    "pageElements": [
        { "id": 1, "label": "Home", "link": "/" },
        { "id": 2, "label": "Formation", "link": "/formation-professionnelle-agadir" },
        { "id": 3, "label": "jobs", "link": "/offres-emploi" },
        { "id": 4, "label": "Gallery", "link": "/gallery" },
        { "id": 5, "label": "About Us", "link": "/" },
        { "id": 6, "label": "Contact", "link": "/Contact" },

    ],
    "pagelangague": [
        { "id": 1, "label": "English", "link": "https://oceanconnecting.com/english/learn" },
        { "id": 2, "label": "Spanish", "link": "https://oceanconnecting.com/Spain/learn" },
        { "id": 3, "label": "Germany", "link": "https://oceanconnecting.com/German/learn" },
        { "id": 4, "label": "Italy", "link": "https://oceanconnecting.com/Italie/learn" },
        { "id": 5, "label": "Frances", "link": "https://oceanconnecting.com/french/learn" },
    ],
    "ourServices": [

        { "id": 1, "label": "Development Informatique", "link": "https://www.oceanconnecting.dev" },
        { "id": 2, "label": "Formation", "link": "/formation-professionnelle-agadir" },
        { "id": 3, "label": "Clean facades", "link": "https://www.oceanconnecting.net/en" },
        { "id": 4, "label": "Recruitment", "link": "/offres-emploi" },
        { "id": 5, "label": "Domiciliation", "link": "/Domiciliation" },
        { "id": 6, "label": "Nurs", "link": "/soins-infirmiers-agadir" },
    ],
    "ourFormation": [
        { "id": 2, "label": "Dj training", "link": "/formation-professionnelle-agadir/agent-checkin-aeroport-agadir" },
        { "id": 3, "label": "elevator training", "link": "/formation-professionnelle-agadir/théatre-enfants-agadir" },
        { "id": 4, "label": "airport checkin agent training", "link": "/formation-professionnelle-agadir/agent-checkin-aeroport-agadir" },
        { "id": 5, "label": "training in cinematography and directing", "link": "/formation-professionnelle-agadir/train-tramway-agadir" },
    ],
    "footerText": {
        "logoAlt": "RAKAR Logo",
        "mainDescription": "WE ARE PROFESSIONAL",
        "detailedDescription": "We specialize in global job placement and document assistance,offering tailored support in multiple languagesto help you navigate international career opportunities.",
        "ourServicesTitle": "Our services",
        "ourPageTitle": "Our pages",
        "ourlangagueTitle": "Languages we teach",
        "ourFormationTitle":"Training",
    },
    "footerCopyright": {
        "text": "Copyright © ",
        "company": "Ocean Connecting",
        "allRightsReserved": "All Rights Reserved.",
        "message": "Thank you for visiting our website and welcome to ",

    }
};
      

     



