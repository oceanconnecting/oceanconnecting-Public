import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Switcher() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Link
        to="#"
        onClick={() => scrollTop()}
        id="back-to-top"
        className={`back-to-top fixed text-lg rounded-full z-10 bottom-5 right-5 size-9 text-center bg-sky-500 text-white leading-9 flex justify-center items-center ${scroll ? 'block' : 'hidden'}`}
      >
        <i className="mdi mdi-arrow-up"></i>
      </Link>
    </>
  );
}