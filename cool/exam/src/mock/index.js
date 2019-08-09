import Mock from "mockjs";
import img from "./img.json";
import exam from "./exam"
Mock.mock('/api/img',img);
Mock.mock('/api/exam',exam)