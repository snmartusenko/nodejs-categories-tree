# nodejs-categories-tree
###Binary tree of categories with variable nesting
used: Nodejs + Express + MySQL8 + JSTree

### Enviroment

* [NodeJS](https://nodejs.org)

* [MySQL v8](https://dev.mysql.com/downloads/installer/)

### Installing

Clone repository

```
git clone https://github.com/snmartusenko/nodejs-categories-tree.git
cd nodejs-categories-tree
```

Install npm modules

```
npm install
```

DB create and init data (run sql in your DB client from sql/category.sql file).
Also you can use any desktop client

```
mysql -u yourusername -p yourpassword
mysql> source projectRootFolder/sql/category.sql;
```

Set your DB credentials to config.json file (in project root folder)

````
  "MySQL_user": "yourusername",
  "MySQL_pass": "yourpassword",
````

### Running

```
npm run start
```
