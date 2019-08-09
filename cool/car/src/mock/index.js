import Mock from "mockjs";
let data = Mock.mock({
    "list|10": [{
        "title": "@ctitle",
        "price|5-10": 1,
        "img": "@image(100x100,@color)",
        "id":"@id"
    }]
})
Mock.mock('/api/list', data)
