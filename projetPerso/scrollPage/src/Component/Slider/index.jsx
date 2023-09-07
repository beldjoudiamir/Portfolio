import imgStudio from "../../../public/studio.png"
import imgText from "../../../public/appMusicText.png"
import "./style.scss"

function Slider() {


    
  return (
    <div className="imgGlob">
        <img className="imgStudio" src={imgStudio} alt="image-01" />
        <img className="imgText" src={imgText} alt="image-02" />
    </div>
  )
}
export default Slider