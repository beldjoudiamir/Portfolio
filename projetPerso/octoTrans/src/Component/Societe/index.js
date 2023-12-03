import imgSociété from "../../Assets/transport-projet-industriel.jpg";
import "./style.scss";
export default function Societe() {
  return (
    <>
      <div className="BodyPage">
        <div className="row">
          <div className="left">
            <img src={imgSociété} alt="Logo" className="imgSociété" />
          </div>
          <div className="right">
            <div className="content">
              <p>
                Laborum commodo consequat exercitation est anim nostrud
                reprehenderit occaecat culpa. Consequat veniam in amet id veniam
                labore officia aliquip ad aute. Deserunt incididunt pariatur
                occaecat ullamco ullamco. Enim commodo labore fugiat esse velit
                pariatur veniam eu qui et in fugiat. Tempor exercitation
                consequat commodo eiusmod ut laboris nisi do.
              </p>
              <p>
                Cupidatat veniam eu eiusmod nisi tempor. Deserunt officia anim
                velit minim aliqua esse ipsum. Eiusmod do magna excepteur qui
                ipsum in adipisicing dolor ea laborum. Cillum Lorem cupidatat
                pariatur est officia sunt nostrud tempor ullamco pariatur. Sint
                dolor reprehenderit fugiat ullamco eiusmod adipisicing dolor
                pariatur dolor minim. Enim veniam est ex nulla. Minim aute
                cupidatat ea elit id dolore eu duis do labore.
              </p>
              <p>
                In velit aliqua culpa amet. Ullamco officia irure aliquip
                consectetur. Deserunt ad exercitation id commodo cupidatat.
                Commodo deserunt cillum amet non culpa. Duis laborum deserunt
                cupidatat culpa officia laboris occaecat anim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
