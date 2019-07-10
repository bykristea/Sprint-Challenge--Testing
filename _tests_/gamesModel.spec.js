const games = require("../games/gamesModel.js");
const db = require("../data/dbConfig.js");


//afterEach
beforeEach(async () => {
    await db("games").truncate();
  });

describe("the games model", () => {

    it('should retrieve the rows/array of games', async () => {
        const rows = await games.fetch();
        expect(rows).toEqual([]);
    });

    it('should insert/add a game to database', async () => {
        const ids = await games.insert({title: 'The Elder Scrolls V: Skyrim', genre: 'Action RPG', releaseYear: 2011});

        expect(ids.length).toBe(1);
        expect(ids[0]).toBe(1);
    });
});

//afterEach 