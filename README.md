# @gwinkamp/faker

Библиотека для генерации фековых тетовых данных

## Установка

```shell
npm install @gwinkamp/faker
```

## API

#### ФИО

```javascript
import faker from "@gwinkamp/faker";

// Генерация случайного имени. Строка
faker.person.firstName();

// Генерация случайной фамилии. Строка
faker.person.lastName();

// Генерация случайного отчества. Строка
faker.person.middleName();

// Генерация случайного ФИО. Объект:
// {
//   firstName: "строка",
//   lastName: "строка",
//   middleName: "строка"
// }
faker.person.fullName();

// Генерация случайного ФИО. Строка в формате "Фамилия Имя Отчество"
faker.person.fullNameString();
```

При желании в каждый метод можно передать пол человека:

```javascript
import faker from "@gwinkamp/faker";
import { Gender } from "@gwinkamp/faker/types";

// Сгенерировать ФИО мужчины
faker.person.fullNameString(Gender.Male);

// Сгенерировать ФИО женщины
faker.person.fullNameString(Gender.Female);
```

#### Реквизиты

```javascript
import faker from "@gwinkamp/faker";

// Сгенерировать ИНН ЮЛ
faker.requisites.innUl();

// Сгенерировать ИНН ФЛ
faker.requisites.innFl();

// Сгенерировать ОГРН ЮЛ
faker.requisites.ogrnUl();

// Сгенерировать ОГРН ИП
faker.requisites.ogrnIp();

// Сгенерировать ОКПО ЮЛ
faker.requisites.okpoUl();

// Сгенерировать ОКПО ИП
faker.requisites.okpoIp();

// Сгенерировать СНИЛС
faker.requisites.snils();

// Сгенерировать СНИЛС в формате "ХХХ-ХХХ-ХХХ ХХ"
faker.requisites.formattedSnils();
```