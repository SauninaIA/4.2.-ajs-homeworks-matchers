export default function sortHeroes(heroesList) {
    const result = heroesList.sort((hero1, hero2) => (hero1.health < hero2.health ? 1 : -1));
    return result;
  }