import seedrandom from "seedrandom";
import person from "./person";
import { describe, test, expect, beforeAll } from "vitest";
import { Gender } from "../types";

beforeAll(async () => {
  seedrandom("1234567890", { global: true });
});

describe("Генерация имени человека", () => {
  test("Имя мужчины", () => {
    expect(person.firstName(Gender.Male)).toBe("Будимир");
  });
  test("Имя женщины", () => {
    expect(person.firstName(Gender.Female)).toBe("Василиса");
  });
  test("Случайное имя", () => {
    expect(person.firstName()).toBe("Олимпиада");
  });
});

describe("Генерация фамилии человека", () => {
  test("Фамилия мужчины", () => {
    expect(person.lastName(Gender.Male)).toBe("Гусев");
  });
  test("Фамилия женщины", () => {
    expect(person.lastName(Gender.Female)).toBe("Григорьева");
  });
  test("Случайная фамилия", () => {
    expect(person.lastName()).toBe("Орлов");
  });
});

describe("Генерация отчества человека", () => {
  test("Отчество мужчины", () => {
    expect(person.middleName(Gender.Male)).toBe("Жоресович");
  });
  test("Отчество женщины", () => {
    expect(person.middleName(Gender.Female)).toBe("Захаровна");
  });
  test("Случайное отчество", () => {
    expect(person.middleName()).toBe("Тимофеевна");
  });
});

describe("Генерация ФИО человека", () => {
  test("ФИО мужчины", () => {
    expect(person.fullName(Gender.Male)).toStrictEqual({
      firstName: "Любомир",
      lastName: "Русаков",
      middleName: "Трифонович",
    });
  });
  test("ФИО женщины", () => {
    expect(person.fullName(Gender.Female)).toStrictEqual({
      firstName: "Майя",
      lastName: "Крылова",
      middleName: "Мироновна",
    });
  });
  test("Случайное ФИО", () => {
    expect(person.fullName()).toStrictEqual({
      firstName: "Зинаида",
      lastName: "Белякова",
      middleName: "Анатольевна",
    });
  });
});

describe("Генерация ФИО человека в формате строки", () => {
  test("ФИО мужчины", () => {
    expect(person.fullNameString(Gender.Male)).toBe("Любосмысл Назаров Эдуардович");
  });
  test("ФИО женщины", () => {
    expect(person.fullNameString(Gender.Female)).toBe("Иванна Кириллова Тарасовна");
  });
  test("Случайное ФИО", () => {
    expect(person.fullNameString()).toBe("Анна Комиссарова Яковлевна");
  });
});