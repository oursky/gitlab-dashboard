## gitlab-dashboard

Frontend:

- Nvida GTC registration website
  - React Web (https://github.com/facebook/create-react-app)
- CMS Websites (generated by Wagtail CMS)

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