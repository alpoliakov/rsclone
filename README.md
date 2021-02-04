# rsclone
### Deploy: https://rsclone-stream.herokuapp.com/

### Описание
  - Приложение представляет из себя стриминговый сервис и имеет следующий функционал:
    - Аутентификация (Пользователи могут войти или зарегистрироваться и создать свой каталог).
    - Переключение тем (темная и светлая).
    - Возможность делиться потоками (музыка, видео или контент из социальных сетей).
    - Делиться потоковым контентом со встроенными ссылками.
    - Используемые сервисы:
      - https://twitch.tv
      - https://youtube.com
      - https://giphy.com
      - https://www.spotify.com
      - https://soundcloud.com
      - https://music.apple.com
    
### Используемые технологии:
  - Next.js
  - React
  - Routing
  - Material UI
  - GraphQL
  - TypeScript
  - Apollo Server
  - JSON Web Tokens
  - Encryption (bcrypt)
  - Monorepo
  - Express
  - MongoDB
  - Heroku
  
### UI:
  - Изменение цветовой схемы приложения (Switch)
  - Пользователю необходимо зарегесрироваться (SignUp)
  - Создать новый стрим (Create). При создании стрима указываем в форме название стрима, его описание и ссылку на стрим (ссылки добавляются стриминговые, т.е. вида:     - http://www.youtube.com/embed/VIDEO_ID,
    - https://player/twitch.tv/,
    - https://giphy.com/embed/ID,
    - https://open/spotify.com/embed/{?playlist/ID},
    - https://soundcloud.com/,
    - https://embed.music.apple.com/)
  - Возможность редактирования стримов (изменить название, описание, ссылку) (Edit)
  - Удаление стрима (Delete)
  - Выход из приложения (SignOut)
  - Вход зарегистрированнного ползователя (SignUp)
  - Легкая кастомизация приложения.
  
### Использование (кастомизация)
  - клонировать
  - установить зависимости
  - создать **.env** файл в корне директории **api**, в котором необходимо разместить ссылку на вашу учетную запись MongoDB Atlas и сервер по умолчанию, в виде:
    - MONGO_URL=REPLACE_WITH_MONGO_URL
    - URL_APP=http://localhost:3000
  - запуск приложения в режиме develop: **npm run dev**
  - сборка: **npm run build**
  - сервер запускается по адресу: http://localhost:8000 (отобразится в терминале)
  - проверка своих запросов: на http://localhost:8000/graphql
