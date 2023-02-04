const resumeCreate = (resume, json, theme) => {
    // 清空当前文档内容
    resume.innerHTML = '';

    // 用于创建DOM元素节点
    const createEl = (tag, className = '', attribute = {}) => {
        const el = document.createElement(tag);

        if (className !== '') {
            el.className = className;
        }

        if (Object.keys(attribute).length === 2) {
            el.setAttribute(attribute.name, attribute.value);
        }

        return el;
    };

    // 新建页面
    const newPage = () => {
        page = createEl('div', 'page', { name: 'theme', value: theme });
        resume.appendChild(page);
        pageNumber++;
        const header = createEl('header');
        page.appendChild(header);
        header.innerHTML = `<div>${json.header}</div>`;
    };

    // 完成一个页面
    const endPage = () => {
        page.style.height = '1123px';
        const footer = createEl('footer');
        page.appendChild(footer);
        footer.innerHTML = `<div>${pageNumber}</div>`;
    };

    // 页码
    let pageNumber = 1;
    // 创建第一个页面并添加到文档中，变量名称page在后面生成新页面时会重用
    let page = createEl('div', 'page', { name: 'theme', value: theme });
    resume.appendChild(page);
    const header = createEl('header');
    page.appendChild(header);
    header.innerHTML = `<div>${json.header}</div>`;

    // 用于创建文档基本信息区块
    const createHead = (json) => {
        const head = createEl('section', 'head');

        if ((json?.name || '') === '') {
            alert('Name cannot be empty or null!');
            return;
        }

        let div = createEl('div');
        head.appendChild(div);

        // 创建名字节点
        const name = createEl('div', 'name');
        div.appendChild(name);
        name.innerHTML = json.name;

        // 创建职业节点
        const occupation = createEl('div', 'occupation');
        div.appendChild(occupation);
        if ((json?.occupation || '') !== '') {
            occupation.innerHTML = json.occupation;
        }

        // 创建基本信息节点
        div = createEl('div', 'information');
        head.appendChild(div);
        for (const item of json.information) {
            const label = createEl('div', 'label');
            div.appendChild(label);

            if ((item?.icon || '') !== '') {
                const icon = createEl('img', 'icon');
                label.appendChild(icon);
                icon.src = item.icon;  
            }
            if ((item?.tag || '') !== '') {
                const tag = createEl('div', 'tag');
                label.appendChild(tag);
                tag.innerHTML = item.tag;
            }

            const msg = createEl('div', 'msg');
            label.appendChild(msg);
            msg.innerHTML = item.msg;
        }

        // 创建肖像照节点
        const img = createEl('img', 'portrait');
        head.appendChild(img);
        if ((json?.portrait || '') !== '') {
            img.src = json.portrait;
        }

        return head;
    };

    // 创建基本信息块填充到第一个页面，该块内容理论上不会超出一页大小
    const head = createHead(json.head);
    page.appendChild(head);

    // 创建并填充详细信息
    for (const item of json.main) {
        const type = item?.type || '';
        // 没有子目录的情况
        if (type === 'no-subdir') {
            let section = createEl('section', 'main no-subdir');
            page.appendChild(section);

            let mainhead = createEl('div', 'mainhead');
            section.appendChild(mainhead);

            if ((item?.icon || '') !== '') {
                let icon = createEl('img', 'icon');
                mainhead.appendChild(icon);
                icon.src = item.icon;
            }

            let t1 = createEl('h1', 't1');
            mainhead.appendChild(t1);
            t1.innerHTML = item.title;
            if (page.scrollHeight >= 1123) {
                page.removeChild(section);
                endPage();
                newPage();
                page.appendChild(section);
            }

            let list = item.list;
            let contents = createEl(list, 'contents');
            section.appendChild(contents);
            for (const content of item.contents) {
                let cont = createEl((list === 'div') ? 'div' : 'li');
                contents.appendChild(cont);
                cont.innerHTML = content;
                if (page.scrollHeight >= 1123) {
                    contents.removeChild(cont);
                    endPage();
                    newPage();
                    section = createEl('section', 'main no-subdir');
                    page.appendChild(section);
                    contents = createEl(list, 'contents');
                    section.appendChild(contents);
                    contents.appendChild(cont);
                }
            }
        }
        // 有一层子目录的情况
        else if (type === 'pri-subdir') {
            let section = createEl('section', 'main pri-subdir');
            page.appendChild(section);

            let mainhead = createEl('div', 'mainhead');
            section.appendChild(mainhead);

            if ((item?.icon || '') !== '') {
                let icon = createEl('img', 'icon');
                mainhead.appendChild(icon);
                icon.src = item.icon;
            }

            let t1 = createEl('h1', 't1');
            mainhead.appendChild(t1);
            t1.innerHTML = item.title;
            if (page.scrollHeight >= 1123) {
                page.removeChild(section);
                endPage();
                newPage();
                page.appendChild(section);
            }

            for (const subdir of item.subdir) {
                let subhead = createEl('div', 'subhead');
                section.appendChild(subhead);

                let t2 = createEl('h2', 't2');
                subhead.appendChild(t2);
                t2.innerHTML = subdir.title;
                if (page.scrollHeight >= 1123) {
                    section.removeChild(subhead);
                    endPage();
                    newPage();
                    section = createEl('section', 'main pri-subdir');
                    page.appendChild(section);
                    section.appendChild(subhead);
                }

                let time = createEl('div', 'time');
                subhead.appendChild(time);

                time.innerHTML = subdir?.time || '';
                if (page.scrollHeight >= 1123) {
                    section.removeChild(subhead);
                    endPage();
                    newPage();
                    section = createEl('section', 'main pri-subdir');
                    page.appendChild(section);
                    section.appendChild(subhead);
                }

                let note = createEl('div', 'note');
                subhead.appendChild(note);
                note.innerHTML = subdir?.note || '';
                if (page.scrollHeight >= 1123) {
                    section.removeChild(subhead);
                    endPage();
                    newPage();
                    section = createEl('section', 'main pri-subdir');
                    page.appendChild(section);
                    section.appendChild(subhead);
                }

                let list = subdir.list;
                let contents = createEl(list, 'contents');
                section.appendChild(contents);
                for (const content of subdir.contents) {
                    let cont = createEl((list === 'div') ? 'div' : 'li');
                    contents.appendChild(cont);
                    cont.innerHTML = content;
                    if (page.scrollHeight >= 1123) {
                        contents.removeChild(cont);
                        endPage();
                        newPage();
                        section = createEl('section', 'main pri-subdir');
                        page.appendChild(section);
                        contents = createEl(list, 'contents');
                        section.appendChild(contents);
                        contents.appendChild(cont);
                    }
                }
            }
        }
    }

    // 对最后一个页面进行收处理
    page.style.height = '1123px';
    const footer = createEl('footer');
    page.appendChild(footer);
    footer.innerHTML = `<div>${pageNumber}</div>`;
};
