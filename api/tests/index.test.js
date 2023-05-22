const app = require("../src/app");
const session = require("supertest");
const request = session(app);


describe("testing ROUTES", () => {
  describe("GET /recipes", () => {
    beforeAll(() => {
      // Configuración adicional antes de ejecutar las pruebas
    });

    it("responde con status 200", async () => {
      const response = await request.get("/recipes?name=beef");
      expect(response.statusCode).toBe(200);
    });

    it("responde un objeto con las propiedades", async () => {
      const response = await request.get("/recipes?name=soup");
      const recipe = {
        id: expect.any(Number),
        image: expect.stringMatching(/^http(s)?:\/\/.+/),
        name: expect.any(String),
        summary: expect.any(String),
        steps: expect.arrayContaining([expect.any(String)]),
        diets: expect.arrayContaining([
          "gluten free",
          "dairy free",
          "lacto ovo vegetarian",
          "vegan",
          "paleolithic",
          "primal",
          "whole 30",
          "pescatarian",
          "ketogenic",
          "fodmap friendly",
        ]),
      };
      expect(response.body[0]).toEqual(expect.objectContaining(recipe));
    });

    it("si hay un error responde con status 400", async () => {
      const response = await request.get("/recipes?name=");
      expect(response.statusCode).toBe(400);
    });
  });
});