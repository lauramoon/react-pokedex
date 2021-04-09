function splitDeck(cards) {
  let choice;
  const num = cards.length;
  for (let i = 0; i < num - 1; i++) {
    choice = Math.floor(Math.random() * (num - i)) + i;
    [cards[i], cards[choice]] = [cards[choice], cards[i]];
  }
  const deck1 = cards.slice(0, num / 2);
  const deck2 = cards.slice(num / 2, num);
  return { deck1, deck2 };
}

function deckScore(deck) {
  const deckEXP = deck.map((c) => c.base_experience);
  return deckEXP.reduce((acc, cv) => acc + cv);
}

export { splitDeck, deckScore };
