import Mock from "mockjs";
Mock.mock('/api/list',{
    "list|2-6":[{
        key:"@id",
        firstName: '@cname',
        lastName: '@name',
        "age|20-30":20,
        address: '@ctitle',
        tags: ['nice', 'developer'],
    }]
})