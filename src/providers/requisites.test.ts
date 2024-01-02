import seedrandom from "seedrandom";
import requisites from "./requisites";
import { describe, test, expect, beforeAll } from "vitest";

beforeAll(async () => {
  seedrandom("1234567890", { global: true });
});

describe("Генерация ИНН", () => {
  test("ИНН ЮЛ", () => {
    expect(requisites.innUl()).toBe("9615208930");
  });
  test("ИНН ФЛ", () => {
    expect(requisites.innFl()).toBe("969513165649");
  });
});

describe("Генерация ОГРН", () => {
  test("ОГРН ЮЛ", () => {
    expect(requisites.ogrnUl()).toBe("1025541471977");
  });
  test("ОГРН ИП", () => {
    expect(requisites.ogrnIp()).toBe("323469425603101");
  });
});

describe("Генерация ОКПО", () => {
  test("ОКПО ЮЛ", () => {
    expect(requisites.okpoUl()).toBe("77299676");
  });
  test("ОКПО ИП", () => {
    expect(requisites.okpoIp()).toBe("5786080455");
  });
});

describe("Генерация СНИЛС", () => {
  test("СНИЛС", () => {
    expect(requisites.snils()).toBe("25461298481");
  });
  test("Форматированный СНИЛС", () => {
    expect(requisites.formattedSnils()).toBe("395-548-119 28");
  });
});