exports.seed = function(knex, Promise) {
  return knex('games').truncate()
    .then(function () {
      return knex('games').insert([
        {id: 1, title: 'Stardew Valley', genre: 'RPG', releaseYear: 2016},
        {id: 2, title: 'Animal Crossing New Leaf', genre: 'Social Simulation', releaseYear: 2012},
        {id: 3, title: 'Pokemon: Lets Go Pikachu!', genre: 'RPG', releaseYear: 2018},
      ]);
    });
};