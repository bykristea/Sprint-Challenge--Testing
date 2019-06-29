const request = require("supertest");

const server = require("../api/server.js");
const db = require('../data/dbConfig');


afterEach(async () => {
    await db("games").truncate();
  });

  describe('server.js', () => {
    it('should set the test env', () => {
      expect(process.env.DB_ENV).toBe('testing');
    });

describe("the route handlers", () => {
  describe("get /games", () => {
    it("should hit endpoint and responds with 200", async () => {
        const response = await request(server).get("/games");
        expect(response.status).toBe(200);
      });

      it("responds with json", async () => {
        const response = await request(server).get("/games");
        expect(response.type).toMatch(/json/i);
      });
      
      it("should return array of games if games are in database, otherwise returns an empty array", async () => {
      const response = await request(server).get("/games");
      expect(response.body).toEqual([]);
    });
  });

  // describe("post /games", () => {

  // })
});

});