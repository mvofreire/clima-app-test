import { getWeathers, cacheWasExpired } from "./index";
import { cities } from "config";
import moment from 'moment'

describe("Testando Servico de API Weather", () => {

  it(" GetWeathers 3 Cidades ", async () => {
    const result = await getWeathers(cities);
    expect(result.data.lenght).toBe(cities.lenght);
  });

  it("GetWeathers Teste de cache ", async () => {
    const result = await getWeathers(cities);

    expect(result.load).toBe('cache');
  });

  it("cacheWasExpired Teste de 5min", async () => {
    const timer = moment().subtract(5, 'minutes')
    expect(cacheWasExpired(timer)).toBe(false);
  });

  it("cacheWasExpired Teste de 10min", async () => {
    const timer = moment().subtract(11, 'minutes')

    expect(cacheWasExpired(timer)).toBe(true);
  });
});
