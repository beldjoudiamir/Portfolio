import "./style.scss";
export default function Contact() {
  return (
    <>
      <div className="containerContact">
        <div className="leftDiv">
          <h1>
            Contactez notre entreprise de transport par téléphone ou par le
            formulaire ci-contre
          </h1>
          <h2>Nos horaires</h2>
          <p className="dateAndHour">Lun - Dim &nbsp; &nbsp; 06:00 - 23:30</p>
          <p>
            Les données personnelles communiquées sont nécessaires aux fins de
            vous contacter.
          </p>
        </div>
        <div className="rightDiv">
          <form>
            <label>
              Nom :
              <input type="text" name="name" />
            </label>
            <label>
              Prénom :
              <input type="text" name="name" />
            </label>
            <label>
              E-mail :
              <input type="email" name="email" />
            </label>
            <label>
              Message :
              <textarea name="message" />
            </label>
            <input type="submit" value="Envoyer" className="button" />
          </form>
        </div>
      </div>
    </>
  );
}
