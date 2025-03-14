import { useTranslation } from 'react-i18next';

import saudi from './flags/saudi.png';
import french from './flags/fr.jpeg';
import english from './flags/eng.png';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const storedDirection = localStorage.getItem('textDirection');
        const defaultLanguage = storedDirection === 'rtl' ? 'ar' : 'en';
        
        setSelectedLanguage(defaultLanguage);
        i18n.changeLanguage(defaultLanguage);
        document.documentElement.dir = storedDirection || 'ltr';
    }, [i18n]);

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        i18n.changeLanguage(language);

        const direction = language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.dir = direction;
        localStorage.setItem('textDirection', direction);

        setIsOpen(false); // Close dropdown after selection
    };
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
                <button 
                    onClick={toggleDropdown} 
                    className="flex items-center flex-row-reverse gap-2 space-x-2 border p-2 rounded-2xl"
                >
                <img 
                    src={selectedLanguage === 'ar' ? saudi : selectedLanguage === 'fr' ? french : english} 
                    alt="Language Flag"
                    className="w-7 h-7 rounded-lg"
                />
                <span>{selectedLanguage.toUpperCase()}</span>
                </button>

            {isOpen && (
                <div className={selectedLanguage == 'ar' ? "absolute w-48 -right-28 bg-white rounded-lg border border-gray-300 shadow-lg" : "absolute w-48 right-0 bg-white rounded-lg border border-gray-300 shadow-lg"}>
                    <button 
                        onClick={() => handleLanguageChange('en')} 
                        className="flex flex-row-reverse items-center p-2 w-full gap-2 hover:bg-gray-100"
                    >
                        <img src={english} alt="English" className="w-6 h-6  rounded-lg" />
                        English
                    </button>
                    <button 
                        onClick={() => handleLanguageChange('fr')} 
                        className="flex flex-row-reverse items-center p-2 w-full gap-2 hover:bg-gray-100"
                    >
                        <img src={french} alt="Français" className="w-6 h-6  rounded-lg" />
                        Français
                    </button>
                    <button 
                        onClick={() => handleLanguageChange('ar')} 
                        className="flex flex-row-reverse items-center p-2 w-full gap-2 hover:bg-gray-100"
                    >
                        <img src={saudi} alt="العربية" className="w-6 h-6 rounded-lg" />
                        العربية
                    </button>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
