import { TempTypes, getTempType } from "./weather-temp";
describe("Weather Temp", () => {
  // #region Temperaturas COLD
  it("Teste de temperatura menor do que 5 (int) graus", () => {
    const temp = 4;
    expect(getTempType(temp)).toBe(TempTypes.COLD);
  });
  it("Teste de temperatura menor do que 5 (string) graus", () => {
    const temp = "4";
    expect(getTempType(temp)).toBe(TempTypes.COLD);
  });
  it("Teste de temperatura menor do que 5 (double) graus", () => {
    const temp = 3.5;
    expect(getTempType(temp)).toBe(TempTypes.COLD);
  });
  // #endregion

  // #region Temperaturas medias
  it("Teste de temperatura > 5 (int)", () => {
    const temp = 7;
    expect(getTempType(temp)).toBe(TempTypes.NORMAL);
  });
  it("Teste de temperatura > 5 (string) < 25 graus", () => {
    const temp = "19";
    expect(getTempType(temp)).toBe(TempTypes.NORMAL);
  });
  it("Teste de temperatura > 5 (double) < 25 graus", () => {
    const temp = 10.55;
    expect(getTempType(temp)).toBe(TempTypes.NORMAL);
  });
  // #endregion

  // #region Temperaturas HOT
  it("Teste de temperatura >= 25 (int)", () => {
    const temp = 44;
    expect(getTempType(temp)).toBe(TempTypes.HOT);
  });
  it("Teste de temperatura > 25 (string)", () => {
    const temp = '27';
    expect(getTempType(temp)).toBe(TempTypes.HOT);
  });
  it("Teste de temperatura > 25 (double)", () => {
    const temp = 30.55;
    expect(getTempType(temp)).toBe(TempTypes.HOT);
  });
  // #endregion
});
