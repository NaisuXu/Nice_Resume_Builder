// 状态初始化 
const states = {
    "resume": {
        "theme": "",
        "language": ""
    }
};

states.resume.theme = config.default.theme;
states.resume.language = config.default.language;

if (window.name !== '') {
    try {
        let old = JSON.parse(window.name);
        if (((old?.resume?.theme || '') !== '') && (((old?.resume?.language || '') !== ''))) {
            states.resume.theme = old.resume.theme;
            states.resume.language = old.resume.language;
        }  
    } catch (error) {
        console.log(error);
    }
}

const resume = document.querySelector('#resume');

// 主题选择栏初始化
const themes = document.querySelector('#themes');
if (config.display.themes === true) {
    themes.style.display = 'block';
}

const themesTitle = document.querySelector('#themes>.themes-title');

const themeArray = {};
for (const theme of themesList) {
    const div = document.createElement('div');
    div.className = 'theme';
    div.innerText = theme;
    div.onclick = () => {
        themeArray[`${states.resume.theme}`].setAttribute('selected', 'false');
        states.resume.theme = theme;
        div.setAttribute('selected', 'true');
        resumeCreate(resume, (states.resume.language === 'zh') ? resumeJsonZH : resumeJsonEN, theme);
    };
    themeArray[`${theme}`] = div;
    themes.appendChild(div);

    if (states.resume.theme === theme) {
        states.resume.theme = theme;
        div.setAttribute('selected', 'true');
    }
}

// 语言选择栏初始化
const language = document.querySelector('#language');
if (config.display.language === true) {
    language.style.display = 'block';
}

const btnLangZH = document.querySelector('#lang-zh');
const btnLangEN = document.querySelector('#lang-en');

btnLangZH.onclick = () => {
    states.resume.language = 'zh';
    themesTitle.innerText = '样式';
    btnLangZH.setAttribute('selected', 'true');
    btnLangEN.setAttribute('selected', 'false');
    resumeCreate(resume, resumeJsonZH, states.resume.theme);
};

btnLangEN.onclick = () => {
    states.resume.language = 'en';
    themesTitle.innerText = 'style';
    btnLangZH.setAttribute('selected', 'false');
    btnLangEN.setAttribute('selected', 'true');
    resumeCreate(resume, resumeJsonEN, states.resume.theme);
};

// 工具栏初始化
const toolbar = document.querySelector('#toolbar');
if (config.display.toolbar === true) {
    toolbar.style.display = 'block';
}

document.querySelector('#tool-sync').onclick = () => {
    window.onbeforeunload = () => {
        window.name = JSON.stringify(states);
    };
    location.reload();
};

document.querySelector('#tool-print').onclick = () => {
    window.print();
};

// 初次渲染简历信息
if (states.resume.language === 'zh') {
    btnLangZH.click();
} else {
    btnLangEN.click();
}