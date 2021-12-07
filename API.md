## 기술 방안

* 데이터 저장

- API 설계

### 데이터 저장：

- **블로그**

| id   | title  | content  | createtime | author |
| ---- | ------ | -------- | ---------- | ------ |
| 1    | title1 | content1 | 123        | YANG   |
| 2    | title2 | content2 | 123        | WANG   |

- **사용자**

| id   | username | password | realname |
| ---- | -------- | -------- | -------- |
| 1    | YANGYANG | 123456   | 양양     |
| 2    | WANGWANG | 123456   | 왕왕     |

###  API 설계

| 내용                        | API              | 방법 | url 参数（parameter） | 설명                                                |
| --------------------------- | ---------------- | ---- | --------------------- | --------------------------------------------------- |
| 블로그 목록 가져오기        | /api/blog/list   | get  | author,Keyword search | **parameter**가 비어 있으면 조회 필터링을 하지 않다 |
| 블로그의 내용을 가져오다    | /api/blog/detail | get  | id                    |                                                     |
| 블로그를 한 편 추가하다     | /api/blog/new    | post |                       | **post**에 새로운 정보가 있다                       |
| 블로그 한 편을 업데이트하다 | /api/blog/update | post | id                    | **postData**에 업데이트된 내용이 있다               |
| 블로그 한 편을 삭제하다     | /api/blog/del    | post | id                    |                                                     |
| 로그인 登录                 | /api/user/login  | post |                       | **postData**에 아이디와 비밀번호가 있습니다         |

