## gitlab-dashboard

Frontend:

- React.js

Backend:

- Server: django

Design:

- Design File:
  - Layout: https://drive.google.com/file/d/107VrSX3Bo01ifwOcA2H2b42kpKbcqzA0/view?usp=sharing

## Backend setup:

```
docker-compose up
```

## Backend setup:

```
cd frontend
yarn start
```

## Setup user Id and private token for individual gitlab account:

1. create a file named '.env' under '/backend/', this is where hte account id and private token would be read from
2. copy from '/backend/.envExample' to the '/backend.env' in step(1), enter your gitlab account id and private token

## Architecture:
### System Diagram:

```

+------------------+                 +-------------------------+    +------------------+
|                  |                 |                         |    |                  |
|                  |                 |                         |    |    DB(sqlite)    |
|    Web App       +<--------------->+    Server(django)       +<-->+  (Django default)|
|                  |                 |                         |    |                  |
+------------------+                 |                         |    +------------------+
                                     |                         |
+-----------------+                  |                         |
|                 |                  |                         |
|    Gitlab API   |                  |                         |
|                 +<---------------->+                         |
+-----------------+                  +-------------------------+


```