import { TEST_REGION_CODE } from "@/constants";
import {
  calcInnUlCheckSum,
  calcOgrnCheckSum,
  calcOkpoCheckSum,
  calcSnilsCheckSum,
  celcInnFlCheckSum
} from "@/utils/checkSum";

/**
 * Сгенерировать ИНН ЮЛ
 * @returns случайный тестовый ИНН ЮЛ
 */
function generateInnUl(): string {
  // Шаблон - NNNN XXXXX C

  // NNNN (4 знака): для российских организаций и физических лиц - код налогового органа, который присвоил ИНН
  const regionCode = TEST_REGION_CODE;
  const inspectionCode = Math.floor((Math.random() * 99) + 1).toString().padStart(2, "0");

  // XXXXX: - порядковый номер записи о лице в территориальном разделе
  // Единого государственного реестра налогоплательщиков налогового органа,
  // который присвоил ИНН, 5 знаков - для ЮЛ
  const numba = Math.floor((Math.random() * 99999) + 1).toString().padStart(5, "0");

  // C - контрольное число (1 знак - для ЮЛ), рассчитанное по специальному алгоритму,
  // установленному Федеральной налоговой службой
  const number = regionCode + inspectionCode + numba;
  const checkSum = calcInnUlCheckSum(number);

  return number + checkSum;
}

/**
 * Сгенерировать ИНН ФЛ
 * @returns случайный тестовый ИНН ФЛ
 */
function generateInnFl(): string {
  // Шаблон - NNNN XXXXXX CC

  // NNNN (4 знака): для российских организаций и физических лиц - код налогового органа, который присвоил ИНН
  const regionCode = TEST_REGION_CODE;
  const inspectionCode = Math.floor((Math.random() * 99) + 1).toString().padStart(2, "0");

  // XXXXXX: - порядковый номер записи о лице в территориальном разделе
  // Единого государственного реестра налогоплательщиков налогового органа,
  // который присвоил ИНН, 6 знаков - для ФЛ
  const numba = Math.floor((Math.random() * 999999) + 1).toString().padStart(6, "0");

  // CC - контрольное число (2 знака - для физического лица), рассчитанное по специальному алгоритму,
  // установленному Федеральной налоговой службой
  const number = regionCode + inspectionCode + numba;
  const checkSum = celcInnFlCheckSum(number);

  return number + checkSum;
}

/**
 * Сгенерировать ОГРН ЮЛ
 * @returns случайный тестовый ОГРН ЮЛ
 */
function generateOgrnUl(): string {
  // Шаблон - С ГГ КК ХХХХХXX Ч

  // С (1-й знак) — признак отнесения государственного регистрационного номера записи:
  // к основному государственному регистрационному номеру (ОГРН)* — 1, 5 (присваивается юридическому лицу)
  let sign = Math.floor(Math.random() * 2) + 1;
  sign = sign == 2 ? 5 : 1;

  // ГГ (со 2-го по 3-й знак) — две последние цифры года внесения записи в государственный реестр
  const now = new Date();
  const yearReg = (Math.floor(Math.random() * (now.getFullYear() - 2000)) + 1).toString().padStart(2, "0");

  // КК (4-й, 5-й знаки) — порядковый номер субъекта Российской Федерации по перечню субъектов РФ,
  // установленному статьей 65 Конституции Российской Федерации
  const region = (Math.floor(Math.random() * 89) + 1).toString().padStart(2, "0");

  // ХХХХХXX (с 6-го по 12-й знак) — номер записи, внесенной в номер записи,
  // внесенной соответственно в ЕГРЮЛ в течение года
  const recording = (Math.floor(Math.random() * 9999999) + 1).toString().padStart(7, "0");
  const number = sign.toString() + yearReg + region + recording;

  // Ч (13-й знак) — контрольное число: младший разряд остатка от деления предыдущего 12-значного числа на 11,
  // если остаток от деления равен 10, то контрольное число равно 0 (нулю).
  const checkSum = calcOgrnCheckSum(number);

  return number + checkSum;
}

/**
 * Сгенерировать ОГРН ИП
 * @returns случайный тестовый ОГРН ИП
 */
function generateOgrnIp(): string {
  // Шаблон - С ГГ КК ХХХХХXXXX Ч

  // С (1-й знак) - признак отнесения государственного регистрационного номера записи: к основному
  // государственному регистрационному номеру записи о государственной регистрации
  // индивидуального предпринимателя (ОГРНИП) - 3
  const sign = "3";

  // ГГ (со 2-го по 3-й знак) — две последние цифры года внесения записи в государственный реестр
  const now = new Date();
  const yearReg = (Math.floor(Math.random() * (now.getFullYear() - 2000)) + 1).toString().padStart(2, "0");

  // КК (4-й, 5-й знаки) — порядковый номер субъекта Российской Федерации по перечню субъектов РФ,
  // установленному статьей 65 Конституции Российской Федерации
  const region = (Math.floor(Math.random() * 89) + 1).toString().padStart(2, "0");

  // ХХХХХXX (6-й - 14-й знаки) - номер записи, внесенной в номер записи,
  // внесенной соответственно в ЕГРИП в течение
  const recording = (Math.floor(Math.random() * 999999999) + 1).toString().padStart(9, "0");
  const number = sign + yearReg + region + recording;

  // Ч (15-й знак) - контрольное число: младший разряд остатка от деления предыдущего 14-значного числа на 13
  const checkSum = calcOgrnCheckSum(number);

  return number + checkSum;
}

/**
 * Сгенерировать ОКПО ЮЛ
 * @returns случайный тестовый ОКПО ЮЛ
 */
function generateOkpoUl(): string {
  const nums = (Math.floor(Math.random() * 9999999) + 1).toString().padStart(7, "0");
  const checkSum = calcOkpoCheckSum(nums);
  return nums + checkSum;
}

/**
 * Сгенерировать ОКПО ИП
 * @returns случайный тестовый ИНН ИП
 */
function generateOkpoIp(): string {
  const nums = (Math.floor(Math.random() * 999999999) + 1).toString().padStart(9, "0");
  const checkSum = calcOkpoCheckSum(nums);
  return nums + checkSum
}

/**
 * Сгенерировать СНИЛС
 * @returns случайный тестовый СНИЛС
 */
function generateSnils(): string {
  const r1 = (Math.floor(Math.random() * 998) + 2).toString().padStart(3, "0");
  const r2 = (Math.floor(Math.random() * 999) + 1).toString().padStart(3, "0");
  const r3 = (Math.floor(Math.random() * 999) + 1).toString().padStart(3, "0");
  const r = r1 + r2 + r3;

  let checkSum = calcSnilsCheckSum(r);

  while (checkSum > 101) {
    checkSum %= 101;
  }
  if ([100, 101].includes(checkSum)) {
    checkSum = 0;
  }

  return r + checkSum.toString().padStart(2, "0");
}

/**
 * Сгенерировать СНИЛС
 * @returns случайный тестовый снилс в формате "XXX-XXX-XXX XX"
 */
function generateFormattedSnils(): string {
  const snils = generateSnils();
  return (
    snils.substring(0, 3) + "-" +
    snils.substring(3, 6) + "-" +
    snils.substring(6, 9) + " " +
    snils.substring(9)
  );
}

export default {
  /** Сгенерировать ИНН ЮЛ */
  innUl: generateInnUl,
  /** Сгенерировать ИНН ФЛ */
  innFl: generateInnFl,
  /** Сгенерировать ОГРН ЮЛ */
  ogrnUl: generateOgrnUl,
  /** Сгенерировать ОГРН ИП */
  ogrnIp: generateOgrnIp,
  /** Сгенерировать ОКПО ЮЛ */
  okpoUl: generateOkpoUl,
  /** Сгенерировать ОКПО ИП */
  okpoIp: generateOkpoIp,
  /** Сгенерировать СНИЛС */
  snils: generateSnils,
  /** Сгенерировать СНИЛС в формате "XXX-XXX-XXX XX" */
  formattedSnils: generateFormattedSnils
}
