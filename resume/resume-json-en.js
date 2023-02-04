// 英文简历原始数据
const resumeJsonEN = {
    // 页眉信息: 可选的
    "header": "Naisu Xu - Embedded Engineer",
    // 基本信息: 个人基本信息, 最终渲染时内容不得超过一页A4纸
    "head": {
        // 名字: 必填的
        "name": "Naisu Xu",
        // 职业: 可选的
        "occupation": "Embedded Engineer<br>Web Developer",
        // 基本信息: 其中所有内容都是可选的
        "information": [
            // 每个{}是一块内容, 每块内容中可以包含icon/tag/msg, icon/tag是可选的
            // 你可以自行添加喜欢的条目, 这里的顺序就是渲染时的顺序
            {
                "icon": "./icons/phoneiphone.png", // 这填写的是图片路径, 这里相当于位于icons文件夹下的phoneiphone.png文件
                "msg": "XXX-XXXX-XXXX"
            },
            {
                "icon": "./icons/mail-fill.png",
                "msg": "naisuxu@qq.com"
            },
            {
                "icon": "./icons/location-fill.png",
                "msg": "Putuo District, Shanghai, China"
            },
            {
                "icon": "./icons/github-fill.png",
                "tag": "",
                // 下面的 <a href=' url ' target='_blank'> message </a> 是一种输入链接的方式
                "msg": "<a href='https://github.com/NaisuXu' target='_blank'>https://github.com/NaisuXu</a>"
            },
            {
                "icon": "",
                "tag": "Blog", 
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
            "title": "About",
            "list": "ul", 
            "contents": [
                // 你可以自行添加喜欢的条目, 这里的顺序就是渲染时的顺序
                "I am an embedded engineer and have been engaged in relevant work for about ten years.",
                "The daily work mainly focuses on the development of microcontroller and embedded linux. In addition, i also carry out the development of web back-end based on embedded devices, web front-end and user applications (Windows, Android).",
                "I like to explore various technologies and be good at using appropriate technologies to achieve specific needs, so as to improve development efficiency and user experience.",
                "In recent years, a large number of <a href='https://blog.csdn.net/Naisu_kun' target='_blank'>technical articles</a> have been exported. Up to now, there have been 130W+ page views."
            ]
        },
        {
            "type": "no-subdir",
            "icon": "./icons/YUAN.png",
            "title": "Expectation",
            "list": "div",
            "contents": [
                "Embedded development, 35,000 RMB per month."
            ]
        },
        {
            "type": "pri-subdir",
            "icon": "./icons/tools-solid.png",
            "title": "Skills",
            // 子目录
            "subdir": [
                {
                    "title": "Development and Application",
                    "list": "div",
                    "contents": [
                        "Linux Kernel, Buildroot, U-Boot, FreeRTOS, Arduino, Node.js, koa, Electron, docsify, Vue."
                    ]
                },
                {
                    "title": "Hardware Platforms",
                    "list": "div",
                    "contents": [
                        "ST STM32 Series, Espressif ESP32 & ESP8266, WCH CH32V307.",
                        "Raspberry Pi, Nuvoton NUC980, Allwinner F1C100s."
                    ]
                },
                {
                    "title": "Programming Languages",
                    "list": "div",
                    "contents": [
                        "C/C++, HTML/CSS/JavaScript, Go."
                    ]
                },
                {
                    "title": "Tools",
                    "list": "div",
                    "contents": [
                        "VS Code, KiCad EDA, Cadence, Eclipse(STM32CubeIDE, MounRiver), Android Studio, Keil MDK.",
                    ]
                },
                {
                    "title": "Others",
                    "list": "div",
                    "contents": [
                        "English, Japanese(JLPT-N1).",
                    ]
                }
            ]
        },
        {
            "type": "pri-subdir",
            "icon": "./icons/work.png",
            "title": "Experience",
            "subdir": [
                {
                    // 子目录的条目中是可以有time和note信息的，这在表达工作经历与受教育经历时比较好用
                    "title": "Shanghai XXXX Technology Co.,Ltd",
                    "time": "Jul 2013 - Current",
                    "note": "Embedded Engineer",
                    "list": "ul",
                    "contents": [
                        "New product technical scheme design and document writing.",
                        "Embedded system circuit design and layout.",
                        "Embedded system program design and development.",
                        "Front-end web development."
                    ]
                },
                {
                    "title": "Rossmax (SHANGHAI) Incorporation Ltd",
                    "time": "Jan 2013 - Jul 2013",
                    "note": "Electronics Engineer",
                    "list": "ul",
                    "contents": [
                        "New product assembly, production test, compile assembly guide.",
                        "Making and maintaining production tools."
                    ]
                }
            ]
        },
        {
            "type": "pri-subdir",
            "icon": "./icons/study.png",
            "title": "Education",
            "subdir": [
                {
                    "title": "Wenzhou University",
                    "time": "Sept 2008 - Jul 2013",
                    "list": "div",
                    "contents": [
                        "Bachelor's degree - Applied Chemistry"
                    ]
                }
            ]
        },
        {
            "type": "pri-subdir",
            "icon": "./icons/git.png",
            "title": "Projects",
            "subdir": [
                {
                    "title": "Nice_Resume_Builder",
                    "list": "ul",
                    "contents": [
                        "<a href='https://github.com/NaisuXu/Nice_Resume_Builder' target='_blank'>https://github.com/NaisuXu/Nice_Resume_Builder</a>",
                        "This project uses JSON data to generate resume. It can easy change language and styles, and can be easily used by non-developers.",
                        "<b>This resume is generated by this project.</b>" // 这里的 <b> ... </b> 中间的内容会被加粗
                    ]
                },
                {
                    "title": "front-end-web-examples",
                    "list": "ul",
                    "contents": [
                        "<a href='https://github.com/NaisuXu/front-end-web-examples' target='_blank'>https://github.com/NaisuXu/front-end-web-examples</a>",
                        "This project is a collection of some content examples related to the front end involved in my work and study."
                    ]
                },
                {
                    "title": "NUC980DKxxYx_Development_Board",
                    "list": "ul",
                    "contents": [
                        "<a href='https://github.com/NaisuXu/NUC980DKxxYx_Development_Board' target='_blank'>https://github.com/NaisuXu/NUC980DKxxYx_Development_Board</a>",
                        "This is a development board project for Nuvoton NUC980 Series. It can be used for LQFP128 package chips such as NUC980DK61YC, NUC980DK71YC.",
                        "For the actual use of this development board, please refer to <a href='https://so.csdn.net/so/search?q=NUC980&t=blog&u=Naisu_kun' target='_blank'>my blog</a>."
                    ]
                },
                {
                    "title": "STM32-tool-library-based-on-HAL-and-LL",
                    "list": "ul",
                    "contents": [
                        "<a href='https://github.com/NaisuXu/STM32-tool-library-based-on-HAL-and-LL' target='_blank'>https://github.com/NaisuXu/STM32-tool-library-based-on-HAL-and-LL</a>",
                        "This library is based on the official HAL and LL libraries of ST, in order to be more efficient."
                    ]
                }
            ]
        }
    ]
};