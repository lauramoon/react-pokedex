import defaultCards from "./defaultCards";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

function Pokedex({ cards = defaultCards, title = "Pokedex", isWinner }) {
  return (
    <div className="Pokedex">
      <h1>{title}</h1>
      <div className="Pokedex-cards">
        {cards.map((c) => (
          <Pokecard key={c.id} info={c} />
        ))}
      </div>
      <h2>{isWinner ? "THIS HAND WINS!" : ""}</h2>
    </div>
  );
}

export default Pokedex;
