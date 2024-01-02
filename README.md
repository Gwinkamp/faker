# @gwinkamp/faker

Библиотека для генерации фековых тетовых данных

## Установка

```shell
npm install @gwinkamp/faker
```

## API

#### ФИО

```javascript
import person from "@gwinkamp/faker";

// Генерация случайного имени. Строка
person.firstName();

// Генерация случайной фамилии. Строка
person.lastName();

// Генерация случайного отчества. Строка
person.middleName();

// Генерация случайного ФИО. Объект:
// {
//   firstName: "строка",
//   lastName: "строка",
//   middleName: "строка"
// }
person.fullName();

// Генерация случайного ФИО. Строка в формате "Фамилия Имя Отчество"
person.fullNameString();
```

При желании в каждый метод можно передать пол человека:

```javascript
import person from "@gwinkamp/faker";
import { Gender } from "@gwinkamp/faker/types";

// Сгенерировать ФИО мужчины
person.fullNameString(Gender.Male);

// Сгенерировать ФИО женщины
person.fullNameString(Gender.Female);
```

#### Реквизиты

```javascript
import requisites from "@gwinkamp/faker";

// Сгенерировать ИНН ЮЛ
requisites.innUl();

// Сгенерировать ИНН ФЛ
requisites.innFl();

// Сгенерировать ОГРН ЮЛ
requisites.ogrnUl();

// Сгенерировать ОГРН ИП
requisites.ogrnIp();

// Сгенерировать ОКПО ЮЛ
requisites.okpoUl();

// Сгенерировать ОКПО ИП
requisites.okpoIp();

// Сгенерировать СНИЛС
requisites.snils();

// Сгенерировать СНИЛС в формате "ХХХ-ХХХ-ХХХ ХХ"
requisites.formattedSnils();
```