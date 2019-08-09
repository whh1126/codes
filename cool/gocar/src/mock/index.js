import Mock from "mockjs";
import shop from "./shop.json"
Mock.mock('/api/list',{
    shop
    
})