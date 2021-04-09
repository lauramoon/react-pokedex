import "./Pokecard.css";

function Pokecard({ info }) {
  const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${info.id}.png`;
  return (
    <div className="Pokecard">
      <h2 className="Pokecard-h2">{info.name}</h2>
      <img src={imgURL} />
      <p>Type: {info.type}</p>
      <p>EXP: {info.base_experience}</p>
    </div>
  );
}

export default Pokecard;
