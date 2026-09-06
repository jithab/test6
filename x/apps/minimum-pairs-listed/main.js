const VERSION = "1.1";

function array_includes(array, needle) {
    for (const key of array){
        if(key === needle)
            return true;
    }
    return false;
}

function isLanguageKey(key, lang) {
    return lang=="uk" || !NOT_US_KEYS.includes(key);
}

function isLanguageId(id, lang) {
    return isLanguageKey(id[1], lang) && (id[1]!="mp" || isLanguageKey(id[2], lang));
}

function showPickerPage(content, subtitle, id) {
    let picker = $("#picker");
    picker.data("page-id", id);
    picker.find(".subtitle").html(subtitle);
    picker.find(".body").html(content);
}

function buildKeyboard() {
    let lang = getLang();
    let table = '';
    for (val of PHONETICS_KEYS) {
        let className = "";
        if(val===null || !isLanguageKey(val, lang)) {
            val="";
            className = "disabled nochar";
        }
        table += `<div class="key ${className}">${val}</div>`;
    }
    showPickerPage(`<div id="kbctable">${table}</div>`, "Select a cell:", "addPage1");
}

function getLang() {
    return localStorage.getItem("lang") || "uk";
}

function setLang(lan) {
    localStorage.setItem("lang", lan);
}

function setLang(lang) {
    localStorage.setItem("lang", lang);
}

var defaultMpList = [
    ["mp", "θ", "ð"],
    ["mp", "v", "w"],
    ["mp", "l", "r"],
    ["mp", "k", "kw"],
    ["x..", "kw"],
    ["mp", "nd", "nt"],
    ["mp", "ŋ", "ŋk"],
    [".x.", "ŋɡ"],
    ["x..", "str"],
    ["mp", "ɪ", "iː"]
];


function getMP() {
    return JSON.parse(localStorage.getItem("mplist")) || defaultMpList;
}

function setMP(mplist) {
    localStorage.setItem("mplist", JSON.stringify(mplist));
}

function isEqual(id, dataId) {
    if(id[0] !== dataId[0])
        return false;
    
    if(id[0]=="mp") {
        return (id[1] === dataId[1] && id[2] === dataId[2])
            || (id[2] === dataId[1] && id[1] === dataId[2]);
    }
    return id[1] === dataId[1];
}

function getTitle(id) {
    if(id[0]=="mp") {
        return `${id[1]} <i>×</i> ${id[2]}`;
    }
    else if(id[0]=="x..") {
        return `${id[1]}<i>...</i>`;
    }
    else if(id[0]==".x.") {
        return `<i>...</i>${id[1]}<i>...</i>`;
    }
    
    return `${id[1]}`;
}

function getBr(word, pron, lang) {
    pron = pron.replace(lang=="us" ? /.*\|/ : /\|.*/, "");
    return (word.length>=10 || pron.length>=8) ? "<br/>" : "";
}

function show(id) {
    let selected = getMP();
    let lang = getLang();
    let html = `<div class="mainTitle"><div class="box">${getTitle(selected[id])}</div></div>`;
    let empty = true;
    for(let i=0; i<data.length; i++) {
        if(!isEqual(selected[id], data[i].id) || !isLanguageId(selected[id], lang))
            continue;

        let title = "";
        let dataList = [...data[i].ux];
        if(data[i].hasOwnProperty(lang))
            dataList.push(...data[i][lang]);
        
       let html2 = "";
        if(data[i].id[0]=="mp") {
            let first=0, second=2;
            if(selected[id][1] != data[i].id[1]) {
                first=2;
                second=0;
            }
            let itemsCount = 0;
            for(let da of dataList) {
                if(da[1][0]=="|"&& lang=="uk" || da[1][da[1].length-1]=="|" && lang=="us")
                    continue;
                    itemsCount++;
            }
            for(let da of dataList) {
                if(da[1][0]=="|"&& lang=="uk" || da[1][da[1].length-1]=="|" && lang=="us")
                    continue;
                let br = getBr(da[first], da[first+1], lang) || getBr(da[second], da[second+1], lang);
                html2 += `<div class="item"><span class="w">${tranWord(da[first])}</span>`
                html2 += `${br} <span class="p">${tranPron(da[first+1], lang)}</span></div>`
                if(itemsCount<5) {
                    html2 += `<div class="item">&nbsp;</div><div class="item">&nbsp;</div>`
                }
                let br2 = (da[second].length>=10 || da[second+1].length>=8) ? "<br/>" : "";
                html2 += `<div class="item"><span class="w">${tranWord(da[second])}</span>`;
                html2 += `${br} <span class="p">${tranPron(da[second+1], lang)}</span></div>`;
            }
        }
        else {
           
            for(let [index, da] of dataList.entries()) {
                if(dataList.length<10 && index%2==1) {
                    html2 += `<div class="item">&nbsp;</div>`
                }
                let br = getBr(da[0], da[1], lang);
                html2 += `<div class="item"><span class="w">${tranWord(da[0])}</span>`
                html2 += `${br} <span class="p">${tranPron(da[1], lang)}</span></div>`;
                if(dataList.length<10 && index%2==0) {
                    html2 += `<div class="item">&nbsp;</div>`
                }
            }
        }
        empty = false;
        html += `<div id="mplist">${html2}</div>`
        break;
    }

    if(empty)
        html += `<div id="nopage">Empty or only for British English.</div>`; // ɒ × ɔː

    $("#popup .body").html(html);
    $("#addremove").html(`<span class="remove" data-id="${id}">Remove</span>`);
    $(".page").hide();
    $("#popup").show(); 
    $("#help").invisible();
    $("#back").visible();
}

function getSounds(text) {
    let ret = [];
    for(let i=0; i<text.length; i++) {
        if(i<text.length-1 && PHONETICS_KEYS.includes(text.substr(i,2))) {
            ret.push(text.substr(i,2));
            i++;
        }
        else {
            ret.push(text[i]);
        }
    }
    return ret;
}

function getDataSecondChar(ch) {

    let ret = [];
    for(let i=0; i<data.length; i++) {

        if(data[i].id[0]=="mp") {
            if(getSounds(data[i].id[1]).includes(ch))
                ret.push(data[i].id);
            else if(getSounds(data[i].id[2]).includes(ch))
                ret.push([data[i].id[0], data[i].id[2], data[i].id[1]]);
        }
        else { 
            if(getSounds(data[i].id[1]).includes(ch))
                ret.push(data[i].id);
        }
    }

    let lang = getLang(); 
    return [...new Set(ret)].filter(id => isLanguageId(id, lang));
}

function tranWord(word) {
    return word.replace(/\(/g, `<span class="t">`).replace(/\)/g, `.</span>`);
}

function tranPron(word, lang) {
    const rhotic = lang=="us";
    return word
        .replace(/@/g, `<span class="r">ə</span>`)
        .replace(/R/g, rhotic ? 'r' : `<span class="r">r</span>`)
        .replace(/#/g, rhotic ? 'r' : '')
        .replace(/!/g, 'ᵻ')
        .replace(/U/g, 'ʉ')
        .replace(rhotic ? /.*\|/ : /\|.*/, "");
}


function isArrayInArray(arr, item){
    let item_as_string = JSON.stringify(item);
  
    let contains = arr.some(function(ele){
        return JSON.stringify(ele) === item_as_string;
    });

    if(contains)
        return true;

    if(item[0]!="mp")
        return false;
    
    item_as_string = JSON.stringify([item[0], item[2], item[1]]);
    contains = arr.some(function(ele){
        return JSON.stringify(ele) === item_as_string;
    });
    return contains;
}

function help() {
    $("#popup .body").html($("#helpPage").html());
    $("#addremove").html(``);
    $("#help").invisible();
    $("#back").visible();
    $(".page").hide();
    $("#popup").show(); 
}

function home(){
    let selected = getMP();
    let lang = getLang();
    $("#help").visible();
    $("#back").invisible();
    let html = "";
    for(const [index, selec] of selected.entries()) {
        let boxClass = "box";
        if(!isLanguageId(selec, lang)) {
            boxClass += " disabled";
        }
        html += `<div class="item">`;
        html += `<div class="${boxClass}" data-id="${index}">${getTitle(selec)}</div>`;
        html += `</div>`;
    }
    if(selected.length==0)
        html = `<div id="nopage">No pages added.</div>`;
    if(selected.length==1) // just to fix align issue
        html += `<div class="item" style="visibility:hidden"><div class="box">${getTitle(selected[0])}</div></div>`;

    $("#home .body").html(html);
    $("#addremove").html(`<span class="add">Add</span>`);
    $(".page").hide();   
    $("#home").show();
    setLangName();
}

function openKB() {
    buildKeyboard();
    $(".page").hide();   

    $("#help").invisible();
    $("#back").visible();
    $("#picker").show();  
    $("#addremove").html(" &nbsp; ");
}

function init() {

    let cVersion = localStorage.getItem("version");
    if(cVersion!=VERSION) {
        localStorage.setItem("version", VERSION);
    }

    $("#home").on("click", "[data-id]", function() { show($(this).data("id")); });
    home();

    $("#help").click(help);
    // popup close button
    $("#back").click(function() {
        // TODO :visible wont work for visibility:hidden https://api.jquery.com/visible-selector/
        let pickerVisible = $("#picker:visible"); 
        if(pickerVisible.length==1 && pickerVisible.data("page-id")=='addPage2')
            openKB();
        else
            home();  
    });

    // home add button
    $("#addremove").on("click", ".add", openKB);

    $("#addremove").on("click", ".remove", function (e) {
        let id = $(this).data("id");
        home();
        let el = $(`#home .box[data-id=${id}]`);
        el.removeAttr("data-id");
        el.css("border-color", "red").animate({opacity: '0'}, 1500, "linear", () => el.closest(".item").remove());
        let selected = getMP();
        selected.splice(id, 1)
        setMP(selected);
    });

    $("#picker").on("click", " #kbctable .key:not(.disabled)", function () {
        let firstChar = $(this).text().trim();
        let entireList = getMP();
        let list  = getDataSecondChar(firstChar);
        let html = "";
        for (const li of list){
            if(isArrayInArray(entireList, li))
                continue;
            html += `<div class="item"><div class="box" data-selected='${JSON.stringify(li)}'>${getTitle(li)}</div></div>`;
        }

        let pageId = "addPage2";
        let subtitle = "Select a page:";

        if(html) {
            html = `<div id="slists">${html}</div>`;
        }
        else {
            subtitle = "<p>&nbsp;</p>";
            html = `<div id="nopage">No pages left to add for <b>${firstChar}</b>.</div>`;
        }

        showPickerPage(html, subtitle, pageId);
    });

    $("#picker").on("click", " #slists .box", function () {
        let selected = $(this).data("selected"); 
        let list = getMP();
        list.push(selected);
        setMP(list);
        show(list.length-1);
        $("#popup").append(`<div id="tootltip"><span> &nbsp; Page Added!  &nbsp; </span></div>`);
        let el = $("#tootltip");
        el.animate({opacity: '0.6'}, 2000, "linear", () => el.remove());
    });

    $("#change").click(function() {
        setLang(getLang()=="uk" ? "us" : "uk");
        setLangName();
        let id = $(".remove").data("id");
        let pickerVisible = $("#picker:visible");
        if(pickerVisible.length==1)
            openKB();
        else if(typeof id !== 'undefined')
            show(id);
        else
          home();
    });

    // Back button
    document.addEventListener("backbutton", () => {
        console.log("there");
        let backbutton = $("#back");
        if(backbutton.css("visibility")=="visible") {
            console.log("here");
            backbutton.click();
            return;
        }
        navigator.app.exitApp(); // TODO android specific
    }, true); 
}

function setLangName() {
    $("#langname").text((getLang()=="uk" ? 'British' : 'American') + " English");
}

jQuery.fn.visible = function() {
    return this.css('visibility', 'visible');
};

jQuery.fn.invisible = function() {
    return this.css('visibility', 'hidden');
};

if (typeof cordova === 'undefined') {
    cordova = null;
    $.getJSON('words.json', function(sampleData) {
        data = sampleData;
        $(init);
    });
}
else {  
    document.addEventListener('deviceready', function() { 
        tts(function(_data) {
            data = JSON.parse(_data);
            init();
    })}, false);  
}
const PHONETICS_KEYS = [
    "ʌ", "ɑː", null, "æ", "e", null, "iː", "ɪ",
    "uː", "ʊ", null, "ə", "ɒ", null, "ɔː", "ɜː",
    "p", "f", "k", "θ", "t", "tʃ", "ʃ", "s",
    "b", "v", "ɡ", "ð", "d", "dʒ", "ʒ", "z",
    "m", "n", "ŋ", "h", "l", "r", "j", "w",
    "aɪ", "aʊ", "eə", "eɪ", "ɪə", "ɔɪ", "ʊə", "əʊ"
];

const NOT_US_KEYS = ["ɒ", "eə", "ɪə", "ʊə"];

const SPEAKERS = {
    "Arabic": [
        ["mp", "ɪ", "e"],
        ["mp", "æ", "ɑː"],
        ["mp", "ɔː", "əʊ"]
    ]
};