Сделано вместе с Урмат Бекбоев.

Attractor
Группы
Занятия
Ссылки
Результаты
Привет, Дуйшеналиев Максат Sign out
PDF Доп файл
jsLesson76

Занятие 76 - лабораторная работа
 

Реализуйте API для чата. С помощью файловой базы данных организуйте хранение сообщений.

 

У вас должны быть возможны следующие запросы:

Отправка нового сообщения
POST-запрос на /messages должен содержать следующие поля в JSON-формате:

author

message

 

Со стороны сервера вы должны проверить, что в этих полях содержится непустая информация, и если хотя бы одно из этих полей пустое, возвращаете ошибку 400 и JSON с ошибкой, например:

 

{"error": "Author and message must be present in the request"}

 

Если в этих полях данные присутствуют, то вы должны сохранить сообщение в базе данных, сгенерировав для этого сообщения ID и дату/время, когда это сообщение было создано.

Запрос сообщений
GET /messages

 

В этом случае вы получаете последние 30 сообщений в порядке времени, в которое они были созданы по возрастанию. То есть, последние сообщения по времени будут последними. Сообщения возвращаются в виде массива объектов, каждый из которых имеет дату и идентификатор: