import defaultCards from "./defaultCards";
import Pokedex from "./Pokedex";
import { splitDeck, deckScore } from "./helpers";

function Pokegame({ cards = defaultCards }) {
  const { deck1, deck2 } = splitDeck(cards);
  const deck1Wins = deckScore(deck1) > deckScore(deck2);
  return (
    <div>
      <Pokedex title="Player 1" cards={deck1} isWinner={deck1Wins} />
      <Pokedex title="Player2" cards={deck2} isWinner={!deck1Wins} />
    </div>
  );
}

export default Pokegame;
