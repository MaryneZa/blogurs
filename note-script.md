> #### Model Migration
> - ```npx sequelize-cli model:generate --name User --attributes username:string,password:string```
> - <code>npx sequelize-cli db:migrate</code>
> - `npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js`

> #### Seed
> - `npx sequelize-cli seed:generate --name demo-user`
> - `npx sequelize-cli db:seed:all`
> - `npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data`

> #### Note
> - Better try : https://github.com/sequelize/umzug

