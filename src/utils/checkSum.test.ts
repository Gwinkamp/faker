import { expect, test, describe } from "vitest";
import {
  calcInnUlCheckSum,
  celcInnFlCheckSum,
  calcOgrnCheckSum,
  calcSnilsCheckSum,
  calcOkpoCheckSum
} from "./checkSum";

describe("Вычисление контрольной суммы ИНН ЮЛ", () => {
  test.each(
    [
      ["963522201", "0"],
      ["968572434", "3"],
      ["963727193", "6"],
    ]
  )(
    "%s[%s]",
    (inn: string, csum: string) => {
      expect(calcInnUlCheckSum(inn)).toBe(csum);
    }
  );

  test.each(
    [
      ["123"],
      ["96352220a"],
      ["96?852601"],
      ["96 352601"],
    ]
  )(
    "невалидное значение: %s",
    (inn: string) => {
      expect(() => calcInnUlCheckSum(inn)).toThrow(
        "Для вычисления контрольной суммы ИНН ЮЛ нужна строка " +
        "длинной минимум из 9 символов, содержащая только цифры"
      );
    }
  );
});

describe("Вычисление контрольной суммы ИНН ИП", () => {
  test.each(
    [
      ["9650163434", "14"],
      ["9667961824", "39"],
    ]
  )(
    "%s[%s]",
    (inn: string, csum: string) => {
      expect(celcInnFlCheckSum(inn)).toBe(csum);
    }
  );

  test.each(
    [
      ["123"],
      ["966796182a"],
      ["96?3852601"],
      ["96 3852601"],
    ]
  )(
    "невалидное значение: %s",
    (inn: string) => {
      expect(() => celcInnFlCheckSum(inn)).toThrow(
        "Для вычисления контрольной суммы ИНН ИП нужна строка " +
        "длинной минимум из 10 символов, содержащая только цифры"
      );
    }
  );
});

describe("Вычисление контрольной суммы ОГРН", () => {
  test.each(
    [
      ["139230112701", "9"],
      ["151070729700", "0"],
      ["44702273543581", "4"],
      ["31888609105041", "0"],
    ]
  )(
    '%s[%s]',
    (ogrn: string, csum: string) => {
      expect(calcOgrnCheckSum(ogrn)).toBe(csum);
    }
  );

  test.each(
    [
      ["123"],
      ["13923011270a"],
      ["1510707?9700"],
      ["4470227 543581"],
    ]
  )(
    "невалидное значение: %s",
    (ogrn: string) => {
      expect(() => calcOgrnCheckSum(ogrn)).toThrow(
        "Для вычисления контрольной суммы ОГРН нужна строка " +
        "длинной минмум из 12, символов содержащая только цифры"
      );
    }
  );
});

describe("Вычисление контрольной суммы СНИЛС", () => {
  test.each(
    [
      ["168117607", 76],
      ["160564491", 63],
      ["112233445", 95],
      ["021234567", 0],
    ]
  )(
    '%s[%s]',
    (snils: string, csum: number) => {
      expect(calcSnilsCheckSum(snils)).toBe(csum);
    }
  );

  test.each(
    [
      ["123"],
      ["16811760a"],
      ["16?564491"],
      ["160-564-491"],
    ]
  )(
    "невалидное значение: %s",
    (snils: string) => {
      expect(() => calcSnilsCheckSum(snils)).toThrow(
        "Для вычисления контрольной суммы СНИЛС нужна строка " +
        "длинной минимум из 9 символов, содержащая только цифры"
      );
    }
  );
});

describe("Вычисление контрольной суммы OKPO", () => {
  test.each(
    [
      ["7305913", "6"],
      ["954808083", "4"],
      ["796067560", "0"],
    ]
  )(
    '%s[%s]',
    (ogrn: string, csum: string) => {
      expect(calcOkpoCheckSum(ogrn)).toBe(csum);
    }
  );

  test.each(
    [
      ["123"],
      ["730591a"],
      ["73/5913"],
      ["79606 560"],
    ]
  )(
    "невалидное значение: %s",
    (okpo: string) => {
      expect(() => calcOkpoCheckSum(okpo)).toThrow(
        "Для вычисления контрольной суммы ОКПО нужна строка " +
        "длинной минимум из 7 символов, содержащая только цифры"
      );
    }
  )
});