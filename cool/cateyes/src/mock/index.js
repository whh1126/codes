import Mock from "mockjs";
import data from "./data.json"
Mock.mock("/api/list", data);
Mock.mock('/api/login', ({ body }) => {
    let { name, pwd } = JSON.parse(body);
    if (name === "vk" && pwd === "123") {
        return {
            code: 1,
            msg: "成功"
        }
    } else {
        return {
            code: 0,
            msg: "失败"
        }
    }
})


