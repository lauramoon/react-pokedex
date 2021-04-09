import defaultCards from "./defaultCards";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

function Pokedex({ cards = defaultCards, title = "Pokedex" }) {
  return (
    <div className="Pokedex">
      <h1>{title}</h1>
      <div className="Pokedex-cards">
        {cards.map((c) => (
          <Pokecard info={c} />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
