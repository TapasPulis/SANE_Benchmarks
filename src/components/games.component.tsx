import { Link } from "react-router-dom";

const GamesComponent = () => {
  return (
    <div className="games-container">
      <div className="game">
        <Link to="/black-ops-7">
          <img
            src="/src/assets/blackops.webp"
            alt="Cover Image of Call of Duty: Black Ops 7"
          />
        </Link>
      </div>
      <div className="game">
        <Link to="/god-of-war">
          <img
            src="/src/assets/godofwarragnarok.jpg"
            alt="Cover Image of God of War"
          />
        </Link>
      </div>
      <div className="game">
        <Link to="/ghost-of-tsushima">
          <img
            src="/src/assets/ghostoftsushima.webp"
            alt="Cover Image of Ghost of Tsushima"
          />
        </Link>
      </div>

      <div className="game">
        <Link to="/resident-evil-4">
          {" "}
          <img
            src="/src/assets/ResidentEvil4.jpg"
            alt="Cover Image of Resident Evil 4"
          />
        </Link>
      </div>
      <div className="game">
        <Link to="/resident-evil-4">
          {" "}
          <img
            src="/src/assets/ResidentEvil4.jpg"
            alt="Cover Image of Resident Evil 4"
          />
        </Link>
      </div>
      <div className="game">
        <Link to="/resident-evil-4">
          {" "}
          <img
            src="/src/assets/ResidentEvil4.jpg"
            alt="Cover Image of Resident Evil 4"
          />
        </Link>
      </div>
    </div>
  );
};

export default GamesComponent;
