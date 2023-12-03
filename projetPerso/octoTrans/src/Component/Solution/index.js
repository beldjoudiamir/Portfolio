import img1 from "../../Assets/imgBank/alexander-schimmeck-W3MXYIfyxno-unsplash.jpg";
import img2 from "../../Assets/imgBank/alin-andersen-87V6jfHXcW0-unsplash.jpg";
import img3 from "../../Assets/imgBank/fahrul-azmi-zN4mtLHkHn4-unsplash.jpg";
import img4 from "../../Assets/imgBank/gabriel-santos-GBVDilE8yvI-unsplash.jpg";
import img5 from "../../Assets/imgBank/nur-alamin-xifUN_Mkf8Y-unsplash.jpg";
import img6 from "../../Assets/imgBank/rodrigo-abreu-lq9PxpwDZUk-unsplash.jpg";
import img7 from "../../Assets/imgBank/seb-creativo-3jG-UM8IZ40-unsplash.jpg";

import "./style.scss";

export default function Solution() {
  return (
    <>
      <div className="bodyGallery">
        <ul className="gallery">
          <li>
            <img src={img3} alt="image" />
          </li>
          <li>
            <img src={img2} alt="image" />
          </li>
          <li>
            <img src={img1} alt="image" />
          </li>
          <li>
            <img src={img4} alt="image" />
          </li>
          <li>
            <img src={img5} alt="image" />
          </li>
          <li>
            <img src={img6} alt="image" />
          </li>
          <li>
            {" "}
            <img src={img7} alt="image" />
          </li>
        </ul>
      </div>
    </>
  );
}
