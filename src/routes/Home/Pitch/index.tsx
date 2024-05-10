import "./styles.css";
import { Link } from "react-router-dom";

export default function Pitch() {
  return (
    <div className="box4">
      <div className="box5">

        <iframe
          className="video"
          width="660"
          height="315"
          src="https://www.youtube.com/embed/wqBp51SxpoM?si=qc8o6o4b-9Y-IPoB"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div className="button">
          <Link to="/">
            <h4>VOLTAR</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}
