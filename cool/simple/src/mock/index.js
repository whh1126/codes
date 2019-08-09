import Mock from "mockjs";
import city from "./city.json"

let data = {};
// console.log(city.data)//所有数据
let title = [...new Set(city.data.map(item => item.Spelling.substr(0, 1)))];
console.log(title)//便利的A-z的数组
title.forEach((item, index) => {
    data[item] = city.data.filter((item1, index1) => item1.Spelling.substr(0, 1) == item)
}
)
console.log(data)
Mock.mock('/api/city', data);
Mock.mock("/api/login", ({ body }) => {
    let { name, pwd } = JSON.parse(body);
    if (name === "vk" && pwd === "123") {
        return {
            code: 1,
            msg: "登录成功"
        }
    } else {

        return{
            code:0,
            msg:"登录失败"
        }
    }
})
