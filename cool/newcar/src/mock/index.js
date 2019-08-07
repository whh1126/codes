import Mock from "mockjs";
// Mock.mock('/api/left', {
//     "left|10": [{
//         title: "@ctitle",
//         id: "@guid",
//         name: "@cname"
//     }
//     ]
// })
// Mock.mock('/api/right', {
//     "right|10": [{
//         "list|5-8": [{
//             img: "@image(100x100,@color)",
//             title: "@ctitle",
//             id: "@guid",
//             "price|+1": ["7.58-14.69", '6.89-11.38', '4.99-11.38', '4.99-7.39', '6.89-10.48'],
//         }]
//     }],

// })
Mock.mock('/api/list', {
    "left|8": {
        "left": ['紧凑车型', '小型车', '中型车', '豪华车', 'MVP', '跑车', '面包车','小轿车','电动车','单车']
    },
    "right|10": [{
        id: "@guid",
        img: "@image(100x100,@color)",
        title: "@ctitle"
    }]
})
