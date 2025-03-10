import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppFloatingButton = () => {
  const phoneNumber = '+212704309787'; // Replace with your WhatsApp number
  const message = 'Hi *oceanconnecting*! I need more info about oceanconnecting https://oceanconnecting.ma'; // Replace with your default message

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed text-lg rounded-full z-10 bottom-6 left-6 size-10 text-center bg-green-500 text-white leading-9 flex justify-center items-center"
      style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', transition: 'transform 0.3s ease-in-out', animation: 'pulse 2s infinite' }}
    >
      <FaWhatsapp className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppFloatingButton;