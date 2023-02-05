// 中文简历原始数据
const resumeJsonZH = {
    // 页眉信息: 可选的
    "header": "认真的许 - 嵌入式工程师",
    // 基本信息: 个人基本信息, 最终渲染时内容不得超过一页A4纸
    "head": {
        // 名字: 必填的
        "name": "认真的许",
        // 职业: 可选的
        "occupation": "嵌入式工程师<br>前端开发者", // 这里的<br>是换行符
        // 基本信息: 其中所有内容都是可选的
        "information": [
            // 每个{}是一块内容, 每块内容中可以包含icon/tag/msg, icon/tag是可选的, 可选的内容可以直接不写, 也可以直接内容为空("")
            // 你可以自行添加喜欢的条目, 这里的顺序就是渲染时的顺序
            {
                "icon": "./icons/location-fill.png", // 这填写的是图片路径, 这里相当于位于icons文件夹下的phoneiphone.png文件
                "msg": "上海市 普陀区"
            },
            {
                "icon": "./icons/phoneiphone.png",
                "msg": "XXX-XXXX-XXXX"
            },
            {
                "icon": "./icons/mail-fill.png",
                "msg": "naisuxu@qq.com"
            },
            {
                "icon": "./icons/github-fill.png",
                "tag": "",
                // 下面的 <a href=' url ' target='_blank'> message </a> 是一种输入链接的方式
                "msg": "<a href='https://github.com/NaisuXu' target='_blank'>https://github.com/NaisuXu</a>"
            },
            {
                "icon": "",
                "tag": "博客",
                "msg": "<a href='https://blog.csdn.net/Naisu_kun' target='_blank'>https://blog.csdn.net/Naisu_kun</a>"
            }
        ],
        // 肖像照: 可选的（48mm*33mm, 照片会自适应大小, 使用48:33比例照片时会获得最佳体验）
        "portrait": "./resume/portrait.png"
    },
    // 详细信息: 个人基本信息, 内容均为可选的
    "main": [
        // 每个{}是一块内容, 每块内容中最基础可以拥有type/icon/title/list, 其中icon是可选的
        // type有两个值可选, no-subdir表示该块内容中没有子目录，pri-subdir表示该块内容有子目录
        // list表示最末级内容的展示形式，有三个可选值
        // 接上条: div表示内容前没有符号，ul表示内容前会添加符号(默认为实心圆点)，ol表示内容前会添加序号(注意当内容位于不同页中编号会重置)
        // 你可以自行添加喜欢的条目, 这里的顺序就是渲染时的顺序
        {
            "type": "no-subdir",
            "icon": "./icons/me.png",
            "title": "关于我",
            "list": "ul",
            "contents": [
                // 你可以自行添加喜欢的条目, 这里的顺序就是渲染时的顺序
                "我是一名嵌入式工程师，从事相关工作十年左右。",
                "日常工作主要围绕单片机开发以及嵌入式Linux开发。此外工作中还进行基于嵌入式设备的Web后端开发，Web前端与用户应用程序（Windows、Android）开发。",
                "我喜欢探索各种技术，善于使用合适的技术来实现特定的需求，以此提升开发效率与用户体验。",
                "近些年大量输出<a href='https://blog.csdn.net/Naisu_kun' target='_blank'>技术文章</a>，截至目前已有130W+访问量。"
            ]
        },
        {
            "type": "no-subdir",
            "icon": "./icons/YUAN.png",
            "title": "求职期望",
            "list": "div",
            "contents": [
                "嵌入式开发相关工作， 35,000 RMB 每月。"
            ]
        },
        {
            "type": "pri-subdir",
            "icon": "./icons/tools-solid.png",
            "title": "掌握技能",
            // 子目录
            "subdir": [
                {
                    "title": "开发与应用",
                    "list": "div",
                    "contents": [
                        "Linux Kernel，Buildroot，U-Boot，FreeRTOS，Arduino，Node.js，koa，Electron，docsify，Vue。"
                    ]
                },
                {
                    "title": "硬件平台",
                    "list": "div",
                    "contents": [
                        "ST STM32 Series，Espressif ESP32 & ESP8266，WCH CH32V307。",
                        "Raspberry Pi，Nuvoton NUC980，Allwinner F1C100s。"
                    ]
                },
                {
                    "title": "编程语言",
                    "list": "div",
                    "contents": [
                        "C/C++，HTML/CSS/JavaScript，Go。"
                    ]
                },
                {
                    "title": "工具软件",
                    "list": "div",
                    "contents": [
                        "VS Code，KiCad EDA，Cadence，Eclipse(STM32CubeIDE，MounRiver)，Android Studio，Keil MDK。",
                    ]
                },
                {
                    "title": "其它技能",
                    "list": "div",
                    "contents": [
                        "英语，日语(JLPT-N1)。",
                    ]
                }
            ]
        },
        {
            "type": "pri-subdir",
            "icon": "./icons/work.png",
            "title": "工作经历",
            "subdir": [
                {
                    // 子目录的条目中是可以有time和note信息的，这在表达工作经历与受教育经历时比较好用
                    "title": "上海XXXX科技股份有限公司",
                    "time": "2013年7月 - 至今",
                    "note": "嵌入式工程师",
                    "list": "ul",
                    "contents": [
                        "新产品技术方案设计与文档编写。",
                        "嵌入式系统电路设计与开发 & 程序设计与开发。",
                        "前端应用程序开发。"
                    ]
                },
                {
                    "title": "优盛医疗电子(上海)有限公司",
                    "time": "2013年1月 - 2013年7月",
                    "note": "电子工程师",
                    "list": "ul",
                    "contents": [
                        "进行新产品的试做、试组、试产，制作产品组装作业指导书。",
                        "制作和维护产品生产及验证所需的相关工具。"
                    ]
                }
            ]
        },
        {
            "type": "pri-subdir",
            "icon": "./icons/study.png",
            "title": "教育背景",
            "subdir": [
                {
                    "title": "温州大学",
                    "time": "2008年9月 至 2012年6月",
                    "list": "div",
                    "contents": [
                        "应用化学专业，获得学士学位。"
                    ]
                },
                {
                    "title": "浙江省诸暨中学",
                    "time": "2005年9月 至 208年6月",
                    "list": "div",
                    "contents": [] // contents也可以是没有内容的
                }
            ]
        },
        {
            "type": "pri-subdir",
            "icon": "./icons/git.png",
            "title": "个人项目",
            "subdir": [
                {
                    "title": "Nice_Resume_Builder",
                    "list": "ul",
                    "contents": [
                        "<a href='https://github.com/NaisuXu/Nice_Resume_Builder' target='_blank'>https://github.com/NaisuXu/Nice_Resume_Builder</a>",
                        "这是一个使用JSON格式数据生成简历的工具，可一键切换中英文与排版样式，非开发者也可轻松上手使用。",
                        "<b>本简历就是使用该项目生成的。</b>" // 这里的 <b> ... </b> 中间的内容会被加粗
                    ]
                },
                {
                    "title": "front-end-web-examples",
                    "list": "ul",
                    "contents": [
                        "<a href='https://github.com/NaisuXu/front-end-web-examples' target='_blank'>https://github.com/NaisuXu/front-end-web-examples</a>",
                        "该项目是我在工作和学习过程中涉及的前端相关的部分内容示例的集合。"
                    ]
                },
                {
                    "title": "NUC980DKxxYx_Development_Board",
                    "list": "ul",
                    "contents": [
                        "<a href='https://github.com/NaisuXu/NUC980DKxxYx_Development_Board' target='_blank'>https://github.com/NaisuXu/NUC980DKxxYx_Development_Board</a>",
                        "这是新塘NUC980系列微处理器的开发板。可以用于LQFP128封装的芯片，比如NUC980DK61YC和NUC980DK71YC。",
                        "关于该开发板的实际使用情况可以参考<a href='https://so.csdn.net/so/search?q=NUC980&t=blog&u=Naisu_kun' target='_blank'>我的博文</a>。"
                    ]
                },
                {
                    "title": "STM32-tool-library-based-on-HAL-and-LL",
                    "list": "ul",
                    "contents": [
                        "<a href='https://github.com/NaisuXu/STM32-tool-library-based-on-HAL-and-LL' target='_blank'>https://github.com/NaisuXu/STM32-tool-library-based-on-HAL-and-LL</a>",
                        "这是一个基于ST官方HAL和LL库之上的工具库，为了更有效率的偷懒。"
                    ]
                }
            ]
        }
    ]
};