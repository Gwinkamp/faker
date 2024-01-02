import { DIGITS_REGEXP } from "../constants";

/**
 * Вычислить контрольную сумму ИНН ЮЛ
 * @param inn ИНН ЮЛ
 * @returns контрольная сумма
 */
export function calcInnUlCheckSum(inn: string): string {
  if (inn.length < 9 || !inn.match(DIGITS_REGEXP)) {
    throw new Error(
      "Для вычисления контрольной суммы ИНН ЮЛ нужна строка " +
      "длинной минимум из 9 символов, содержащая только цифры"
    );
  }

  return (
    (
      (
        2 * Number(inn[0]) + 4 * Number(inn[1]) + 10 * Number(inn[2]) +
        3 * Number(inn[3]) + 5 * Number(inn[4]) + 9 * Number(inn[5]) +
        4 * Number(inn[6]) + 6 * Number(inn[7]) + 8 * Number(inn[8])
      ) % 11
    ) % 10
  ).toString();
}

/**
 * Вычислить контрольную сумму ИНН ФЛ
 * @param inn ИНН ФЛ
 * @returns контрольная сумма
 */
export function celcInnFlCheckSum(inn: string): string {
  if (inn.length < 10 || !inn.match(DIGITS_REGEXP)) {
    throw new Error(
      "Для вычисления контрольной суммы ИНН ИП нужна строка " +
      "длинной минимум из 10 символов, содержащая только цифры"
    );
  }

  let csum1 = (
    (
      (
        7 * Number(inn[0]) + 2 * Number(inn[1]) + 4 * Number(inn[2]) +
        10 * Number(inn[3]) + 3 * Number(inn[4]) + 5 * Number(inn[5]) +
        9 * Number(inn[6]) + 4 * Number(inn[7]) + 6 * Number(inn[8]) + 8 * Number(inn[9])
      ) % 11
    ) % 10
  ).toString();

  csum1 = csum1[csum1.length - 1];
  inn = inn + csum1;

  const csum2 = (
    (
      (
        3 * Number(inn[0]) + 7 * Number(inn[1]) + 2 * Number(inn[2]) +
        4 * Number(inn[3]) + 10 * Number(inn[4]) + 3 * Number(inn[5]) +
        5 * Number(inn[6]) + 9 * Number(inn[7]) + 4 * Number(inn[8]) +
        6 * Number(inn[9]) + 8 * Number(inn[10])
      ) % 11
    ) % 10
  ).toString();

  return csum1 + csum2[csum2.length - 1];
}

/**
 * Вычислить контрольную сумму ОГРН
 * @param ogrn  ОГРН
 * @returns контрольная сумма
 */
export function calcOgrnCheckSum(ogrn: string): string {
  if (ogrn.length < 12 || !ogrn.match(DIGITS_REGEXP)) {
    throw new Error(
      "Для вычисления контрольной суммы ОГРН нужна строка " +
      "длинной минмум из 12, символов содержащая только цифры"
    );
  }

  let delimeter: number;
  if (ogrn.length == 12) {
    delimeter = 11;
  } else {
    delimeter = 13;
  }

  return (Number(ogrn) % delimeter % 10).toString();
}

/**
 * Вычислить контрольную сумму СНИЛС
 * @param snils СНИЛС
 * @returns контрольная сумма
 */
export function calcSnilsCheckSum(snils: string): number {
  if (snils.length != 9 || !snils.match(DIGITS_REGEXP)) {
    throw new Error(
      "Для вычисления контрольной суммы СНИЛС нужна строка " +
      "длинной минимум из 9 символов, содержащая только цифры"
    );
  }
  const k = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  let sum = 0;
  for (let i = 0; i < snils.length; i++) {
    sum += Number(snils[i]) * k[i];
  }

  if (sum < 100) {
    return sum;
  } else if (sum == 100 || sum == 101) {
    return 0;
  } else {
    return sum % 101;
  }
}

/**
 * Вычислить контрольную сумму ОКПО
 * @param okpo ОКПО
 * @returns контрольная сумма
 */
export function calcOkpoCheckSum(okpo: string): string {
  if (okpo.length < 7 || !okpo.match(DIGITS_REGEXP)) {
    throw new Error(
      "Для вычисления контрольной суммы ОКПО нужна строка " +
      "длинной минимум из 7 символов, содержащая только цифры"
    );
  }

  let sum = 0;

  for (let i = 0; i < okpo.length; i++) {
    sum += (i + 1) * Number(okpo[i]);
  }

  let control = sum % 11;

  if (control == 10) {
    sum = 0;

    for (let i = 0; i < okpo.length; i++) {
      let j = i + 3;

      if (j > 10) {
        j = j % 10;
      }

      sum += j * Number(okpo[i]);
    }

    control = sum % 11;

    if (control == 10) {
      control = 0;
    }
  }

  return control.toString();
}