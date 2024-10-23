/* function defaultCurry, which curries two objects. It mergers the objects together */
const defaultCurry = obj1 => obj2 => ({...obj1,...obj2});

/* function mapCurry, which replicates function .map (but for an object). The first entry is the function, and the second entry is the object */
const mapCurry = fn => obj =>Object.fromEntries(Object.entries(obj).map(fn));

/*function  reduceCurry, which replicates the .reduce method (but from an objct) */
const reduceCurry = fn => (obj,initial) => Object.entries(obj).reduce(fn,initial);

/* function  filterCurry which replicates the .filter method (but for an object) */
const filterCurry = fn => obj =>Object.fromEntries(Object.entries(obj).filter(fn));

/*  additional function that will return the total value of the scores of the people who use the force */
const reduceScore = (personnel, initialScore = 0) =>
  Object.values(personnel).filter((person) => person.isForceUser).reduce((acc, person) => acc + person.pilotingScore + person.shootingScore, initialScore);

/*filterForce */
const filterForce = personnel =>
  filterCurry(([_, person]) => person.isForceUser && person.shootingScore >= 80)(personnel);

/*mapAverage */
const mapAverage = personnel =>
  mapCurry(([name, person]) => [
    name,
    {
      ...person,
      averageScore: (person.pilotingScore + person.shootingScore) / 2,
    }
  ])(personnel);

