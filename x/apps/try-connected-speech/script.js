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
    recordingTime = 0;
    position = 0;

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
    $("#submain").show().data("index", index)
    position = -10;
    buttonReset();
    $("footer div").visible();
}

function buttonReset() {
    $('#audio_duration, #record_duration').text("");
    $("#buttongroup button").removeClass("disabled");
    $("#recording .text").text("Record");
    if(position==-10)
        $("#play").addClass("disabled");
    $("#play .text").text("Play");
}

function mediass() {
    $("#buttongroup button").addClass("disabled");
    mcap.play((counter) => {
        $("#play").removeClass("disabled").find(".text").text("Stop");
        position = counter;
        mediaTimer();
    }, (error) => {
        alert(error); 
        buttonReset();
    });
}

var position = -10;
var recordingTime = 0;

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


function stopRecordingAndPlay() {
    buttonReset();
    mcap.stopRecording(()=>{
        position = 0;
        mediass();
    }, function(error) {
        buttonReset();
        if(error)
            alert(error);
    });
}

function recordingTimer () {
    document.getElementById('record_duration').innerHTML =  recordingTime;        
    if(recordingTime<=0) {
        stopRecordingAndPlay();
        return;
    }
    setTimeout(recordingTimer, 1000);
    recordingTime--;
}

function mediaTimer () {
    document.getElementById('audio_duration').innerHTML =  Math.round(position/1000);        
    if(position<=0) {
        buttonReset();
        return;
    }
    setTimeout(mediaTimer, 500);
    position-=500;
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
        portion.u.onended = buttonReset;
    });

    $("#main").on("click", "span", function () {
        $("#main").hide();
        $("#submain").show();
        plain($(this).data("index"));
    });
    
    // start audio capture
    $("#recording").click(function() {
        if($(this).hasClass("disabled"))
            return;

        let record = $(this).find (".text").text() == "Record";
        $("#buttongroup button").addClass("disabled");
        if(record) {
            mcap.startRecording(function (starrted) {
                if(starrted) {
                    $("#recording").removeClass("disabled").find(".text").text("Stop");
                    recordingTime = 60;
                    recordingTimer();
                }
                else {
                    buttonReset();
                }
            }, function(error) {
                buttonReset();
                if(error)
                    alert(error);
            });
        }
        else {
            recordingTime=0;
        }
    });

    $("#play").click(function() {
        if($(this).hasClass("disabled"))
            return;
        let play = $(this).find (".text").text() == "Play";
        $("#buttongroup button").addClass("disabled");
        if(play) {
            mediass();
        }
        else {
            position=0;
            buttonReset();
            mcap.stop();
        }
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
