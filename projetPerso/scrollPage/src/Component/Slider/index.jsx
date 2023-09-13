import { useEffect, useRef } from "react";

import imgStudio from "../../../public/studio.png";
import imgText from "../../../public/appMusicText.png";

import "./style.scss";

function Slider() {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const viewportHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const scrollRatio = window.scrollY / (docHeight - viewportHeight);

        // Ici, nous utilisons une valeur arbitraire pour la largeur de l'image, disons 2000px.
        // Vous pouvez ajuster cette valeur selon la largeur de votre image.
        const maxOffset = 2900 - window.innerWidth;
        const horizontalScroll = maxOffset * scrollRatio;

        imageRef.current.style.transform = `translateX(-${horizontalScroll}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="imgGlob">
      <img className="imgStudio" src={imgStudio} alt="image-01" />
      <img ref={imageRef} src={imgText} alt="Défilement Horizontal" />
    </div>
  );
}

export default Slider;
