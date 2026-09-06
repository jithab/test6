function home() {

    let html = "";
    let lang = getLang();
    for(let index in portions[lang]) {
        const portion = portions[lang][index];
        html += `<span data-index="${index}"><b>${portion.o.substring(0, 1)}</b>${portion.o.substring(1)}</span> `;
    }

    $("#main .body").html(html);
    $("#main").show();
    $("#submain").hide();
    $("#prev").invisible();
    $("#next").visible();
}

function plain(index) {

    $("#help").hide();   
    $("#home").text("Home");
    if(index>=9)
        $("#next").invisible();
    else
        $("#next").visible();

    if(index<=0)
        $("#prev").invisible();
    else
        $("#prev").visible();

    $('#count').html(`${index+1}`);
    $("#main").hide();
    let portion = portions[getLang()][index];
    $("#submain .ob").html(portion.o);
    $("#submain .pb").html(portion.p);
    $("#submain .ab").html(portion.a);
    $("#submain").show().data("index", index);
    $("footer div").visible();
}


function setHomeFont() {
    let articleHeight = $("article").height();
    let fontSize = Math.round($("#main").css("font-size").replace("px",""))
    while(true) {
        if(articleHeight - $("#main").height() - 2*fontSize <= 0) {
            $("#main").css("font-size", (fontSize-1)+"px");
            return;
        }
        fontSize+=0.5;
        $("#main").css("font-size", fontSize+"px");
    }
}


function init() {
    home();
    setHomeFont();
    setLangName();

    $("#next").click(function () {
        plain($("#submain").data("index") + 1);       
    });
    $("#prev").click(function () {
        plain($("#submain").data("index") - 1);       
    });
    $("#home").click(function () {
        let text = $("#home").text();
        $("#submain").data("index", -1);
        if(text=="Help") {
            $("footer div").invisible();
            $("#prev").invisible();
            $("#next").visible();
            $("#main").hide();            
            $("#home").text("Home");
            $("#help").show();            
        }
        else {
            $("footer div").visible();
            $("#help").hide();            
            $("#home").text("Help");
            home();
        }
    });

    $("#start").click(function () {
        if($(this).hasClass("disabled"))
            return;
        $("#buttongroup button").addClass("disabled");
        let portion = portions[getLang()][$("#submain").data("index")];
        portion.u.play();
    });

    $("#main").on("click", "span", function () {
        $("#main").hide();
        $("#submain").show();
        plain($(this).data("index"));
    });
    

    $("#change").click(function() {
        setLang(getLang()=="uk" ? "us" : "uk");
        setLangName();
        if($('#main:hidden').length==0)
            home();
        else
            plain($("#submain").data("index"));
    });
}

function setLangName() {
    $("#langname").text((getLang()=="uk" ? 'British' : 'American') + " English");
}

$(init);
