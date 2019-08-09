import Mock from "mockjs";
//主页接口
Mock.mock('/api/list', {
    "list|10": [{
        name: "@cname",
        img: "@image(100x100,@color)",
        "price|+1": 1,
        "salce|300-500": 1,
        id: "@id"
        // "id|+1": 1
    }]
})
//old页接口(better-sroll)
Mock.mock('/api/old', {
    "old|10": [{
        name: "@cname",
        img: "@image(100x100,@color)",
        "title|+1": A_Z(),
        "price|+1": 1,
        "salce|300-500": 1,
        "id|+1": 1
    }]
})
function A_Z() {
    let arr = [];
    for (var i = 0; i < 26; i++) {
        arr.push(String.fromCharCode(65 + i))
    }
    return arr
}
//加载页面的接口
const data = [
    {
        "id": 1,
        "title": "包子店1",
        "img": "http://dummyimage.com/100x100/7980f2"
    }, {
        "id": 2,
        "title": "包子店2",
        "img": "http://dummyimage.com/100x100/7980f2"
    }, {
        "id": 3,
        "title": "包子店3",
        "img": "http://dummyimage.com/100x100/7980f2"
    }, {
        "id": 4,
        "title": "包子店4",
        "img": "http://dummyimage.com/100x100/7980f2"
    }, {
        "id": 5,
        "title": "包子店5",
        "img": "http://dummyimage.com/100x100/7980f2"
    }, {
        "id": 6,
        "title": "包子店6",
        "img": "http://dummyimage.com/100x100/7980f2"
    }
]
const list = [
    {
        "id": 7,
        "title": "米粉店7",
        "img": "http://dummyimage.com/100x100/7980f2"
    }, {
        "id": 8,
        "title": "米粉店8",
        "img": "http://dummyimage.com/100x100/7980f2"
    }, {
        "id": 9,
        "title": "米粉店9",
        "img": "http://dummyimage.com/100x100/7980f2"
    }
]
Mock.mock('/api/page', ({ body }) => {
    const { page } = JSON.parse(body)
    if (page === 1) {
        return data
    }
    return data.concat(list)
})
Mock.mock('/api/login', ({ body }) => {
    let { name, pwd } = JSON.parse(body);
    console.log(pwd, name)
    if (name == "zs" && pwd == "123") {
        return {
            code: 1,
            msg: "登录成功"
        }
    } else {
        return {
            code: 0,
            msg: "登录失败"
        }
    }
})