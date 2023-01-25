var x,
    staticX,
    click,
    offset_left = 0,
    offset_left_img = 0,
    xPos,
    idPos = 1,
    idPos2,
    idPosCheck,
    mobile = false,
    prev,
    prev2,
    prevIdPos,
    ///////
    IMG_DIMENSTION = "16:9",
    ///////
    imgDim = IMG_DIMENSTION.split(":");
$(".slide-wrap-2 img").each(function () {

    $(".idPos2").append("<div class='idPosItem'></div>")
});
$(".slide-wrap-2 img:last-child").clone().prependTo(".slide-wrap-2");
$(".slide-wrap-2 img:nth-child(2)").clone().appendTo(".slide-wrap-2");
ismobile();
$(".slide-wrap-2, .slide-wrap, .slide-wrap-2 img, #slideshow, #slideshow-outer").on("touchstart mousedown", function (e) {
    prevIdPos = Math.round(idPos);
    idPosCheck = true;
    prev = parseInt($(".slide-wrap-2").css("left").replace(/px|-/gi, ""));
    if (mobile == true) {
        xPos = e.changedTouches[0].pageX;
        //console.log(xPos);
        offset_left = staticX = xPos - $(".slide-wrap").offset().left;
        offset_left_img = staticX = xPos - $(".slide-wrap-2").offset().left;
        offset_left = offset_left - offset_left_img;
        staticX = xPos - $(".slide-wrap").offset().left;
    } else {
        offset_left = staticX = e.pageX - $(".slide-wrap").offset().left;
        offset_left_img = staticX = e.pageX - $(".slide-wrap-2").offset().left;
        offset_left = offset_left - offset_left_img;
        staticX = e.pageX - $(".slide-wrap").offset().left;
    }
    click = true;
    $(".slide-wrap-2").removeClass("slide-wrap-2-not-dragging");
    click = true;
});
$(".slide-wrap-2, .slide-wrap, .slide-wrap-2 img, #slideshow, body, #slideshow-outer").on("touchend mouseup", function (e) {
    prev2 = parseInt($(".slide-wrap-2").css("left").replace(/px|-/gi, ""));
    idPosCheck = false;
    click = false;
    $(".slide-wrap-2").addClass("slide-wrap-2-not-dragging");
    if (Math.round(idPos) != $(".slide-wrap-2 img").length && Math.round(idPos) != -1) {
        if (prev < prev2) {
            if (Math.ceil(idPos) - 0.8 < idPos) {
                //console.log(Math.ceil(idPos) - 0.9 < idPos)
                //console.log(idPos)
                $(".slide-wrap-2-not-dragging").css("left", "-" + $(".slide-wrap-2 img").width() * Math.ceil(idPos) + "px");
            } else {
                $(".slide-wrap-2-not-dragging").css("left", "-" + $(".slide-wrap-2 img").width() * Math.floor(idPos) + "px");
            }
        } else {
            if (Math.ceil(idPos) - 0.2 > idPos) {
                $(".slide-wrap-2-not-dragging").css("left", "-" + $(".slide-wrap-2 img").width() * Math.floor(idPos) + "px");
            } else {
                //console.log(idPos);
                //console.log(Math.ceil(idPos) - 0.1);
                $(".slide-wrap-2-not-dragging").css("left", "-" + $(".slide-wrap-2 img").width() * Math.ceil(idPos) + "px");
            }
        }
    }
});
$(".slide-wrap-2, .slide-wrap, .slide-wrap-2 img, #slideshow, #slideshow-outer").on("touchmove mousemove", function (e) {
    e.preventDefault();
    //console.log(idPos);
    if (mobile == true) {
        xPos = e.changedTouches[0].pageX;
        x = xPos - $(".slide-wrap").offset().left - staticX;
    } else {
        x = e.pageX - $(".slide-wrap").offset().left - staticX;
    }
    //console.log(e.pageX - $(".slide-wrap").offset().left - staticX + "\nxPos: " + e.pageX + "\noffsetLeft : " + $(".slide-wrap").offset().left + "\nstaticX: " + staticX);
    if (click == true) {
        //console.log(x);
        if (parseInt($(".slide-wrap-2").css("left").replace("px", "")) < 1) {
            if (parseInt($(".slide-wrap-2").css("left").replace("px", "")) > parseInt("-" + $(".slide-wrap-2 img").width() * ($(".slide-wrap-2 img").length - 1)) - 1) {
                $(".slide-wrap-2").css("left", x + offset_left + "px");
            }
            //console.log(parseInt($(".slide-wrap-2").css("left").replace("px", "")))
        } else if (Math.floor(idPos) === 0) {
            console.log(true);
            $(".slide-wrap-2").css("left", "-" + $(".slide-wrap-2 img").width() * ($(".slide-wrap-2 img").length - 2) + "px");
            prevIdPos = Math.round(idPos);
            idPosCheck = true;
            prev = parseInt($(".slide-wrap-2").css("left").replace(/px|-/gi, ""));
            if (mobile == true) {
                xPos = e.changedTouches[0].pageX;
                //console.log(xPos);
                offset_left = staticX = xPos - $(".slide-wrap").offset().left;
                offset_left_img = staticX = xPos - $(".slide-wrap-2").offset().left;
                offset_left = offset_left - offset_left_img;
                staticX = xPos - $(".slide-wrap").offset().left;
            } else {
                offset_left = staticX = e.pageX - $(".slide-wrap").offset().left;
                offset_left_img = staticX = e.pageX - $(".slide-wrap-2").offset().left;
                offset_left = offset_left - offset_left_img;
                staticX = e.pageX - $(".slide-wrap").offset().left;
            }
            prevIdPos = Math.round(idPos);
            idPosCheck = true;
            prev = parseInt($(".slide-wrap-2").css("left").replace(/px|-/gi, ""));
            if (mobile == true) {
                xPos = e.changedTouches[0].pageX;
                x = xPos - $(".slide-wrap").offset().left - staticX;
            } else {
                x = e.pageX - $(".slide-wrap").offset().left - staticX;
            }
            idPos = $(".slide-wrap-2 img").length - 1;
        } else if (parseInt($(".slide-wrap-2").css("left").replace("px", "")) === 0) {}
        if (parseInt($(".slide-wrap-2").css("left").replace("px", "")) < parseInt("-" + $(".slide-wrap-2 img").width() * ($(".slide-wrap-2 img").length - 1))) {
            $(".slide-wrap-2").css("left", "-" + $(".slide-wrap-2 img").width() + "px");

            prevIdPos = Math.round(idPos);
            idPosCheck = true;
            prev = parseInt($(".slide-wrap-2").css("left").replace(/px|-/gi, ""));
            if (mobile == true) {
                xPos = e.changedTouches[0].pageX;
                //console.log(xPos);
                offset_left = staticX = xPos - $(".slide-wrap").offset().left;
                offset_left_img = staticX = xPos - $(".slide-wrap-2").offset().left;
                offset_left = offset_left - offset_left_img;
                staticX = xPos - $(".slide-wrap").offset().left;
            } else {
                offset_left = staticX = e.pageX - $(".slide-wrap").offset().left;
                offset_left_img = staticX = e.pageX - $(".slide-wrap-2").offset().left;
                offset_left = offset_left - offset_left_img;
                staticX = e.pageX - $(".slide-wrap").offset().left;
            }
            //console.log("hellow")
        }
        //nsole.log((x + offset_left + "px"));
    } else {
        click = false;
        click2 = staticX + x;
    }
    id();
    idImg();
    //console.log(idPos)
});

function load() {

    $(".slide-wrap img").width($("#slideshow").width());
    $(".slide-wrap img").height($("#slideshow").width() / parseInt(imgDim[0]) * parseInt(imgDim[1]));
    $(".slide-wrap-2").width($(".slide-wrap img").width() * $(".slide-wrap img").length + 1);
    prev2 = parseInt($(".slide-wrap-2").css("left").replace(/px|-/gi, ""));
    idPosCheck = false;
    click = false;
    $(".slide-wrap-2").addClass("slide-wrap-2-not-dragging");
    if (Math.round(idPos) != $(".slide-wrap-2 img").length && Math.round(idPos) != -1) {
        if (prev < prev2) {
            if (Math.ceil(idPos) - 0.8 < idPos) {
                //console.log(Math.ceil(idPos) - 0.9 < idPos)
                //console.log(idPos)
                $(".slide-wrap-2-not-dragging").css("left", "-" + $(".slide-wrap-2 img").width() * Math.ceil(idPos) + "px");
            } else {
                $(".slide-wrap-2-not-dragging").css("left", "-" + $(".slide-wrap-2 img").width() * Math.floor(idPos) + "px");
            }
        } else {
            if (Math.ceil(idPos) - 0.2 > idPos) {
                $(".slide-wrap-2-not-dragging").css("left", "-" + $(".slide-wrap-2 img").width() * Math.floor(idPos) + "px");
            } else {
                //console.log(idPos);
                //console.log(Math.ceil(idPos) - 0.1);
                $(".slide-wrap-2-not-dragging").css("left", "-" + $(".slide-wrap-2 img").width() * Math.ceil(idPos) + "px");
            }
        }
    }
    if ($(window).width() > 800) {
        $("#slideshow").width(800);
        //console.log(true);
    } else {
        $("#slideshow").css("width", "100vw");
    }
    $(".idPos").css("top", ($(".slide-wrap-2 img").height()) - 25 + "px")
}
$(".idPosItem").click(function () {
    $(".idPosItem").css("borderRadius", "50%")
    $(this).css("borderRadius", "4px")
    idPos = $(this).index() + 1;
    move2()
});

function move2() {
    spam()
    $(".slide-wrap-2").css("left", "-" + $(".slide-wrap-2 img").width() * idPos + "px");
}
$(window).resize(function () {
    load();
    /*$(".slide-wrap-2-not-dragging").css("transition", "none");
    
    setTimeout(function() {
    	$(".slide-wrap-2-not-dragging").css("transition", "left .3s ease-out");
    	
    }, 250);*/
    ismobile();
});
load();
load();

function id() {
    idPos = parseInt($(".slide-wrap-2").css("left").replace(/px|-/gi, "")) / $(".slide-wrap-2 img").width();
    //console.log("Position of slider: " + (parseInt(idPos) + 1));
    idPos2 = parseInt($(".slide-wrap-2").css("left").replace(/px|-/gi, "") / $(".slide-wrap-2 img").width() * 10) / 10;
    //console.log("idPos: " + idPos)
    //console.log("idPos2: " + idPos2)
    //idPosCheck =
    //console.log(parseInt($(".slide-wrap-2").css("left").replace(/px|-/gi, "")) / $(".slide-wrap-2 img").width() * 10);
}
$(".rightBtn").click(function () {
    //$(".slide-wrap-2 img").length - 2
    move("-")
    console.log(idPos);
});
$(".leftBtn").click(function () {
    //$(".slide-wrap-2 img").length - 2
    move("")
    console.log(idPos);
    idImg();
});

function move(a) {
    spam();
    if (a == "-") {
        idPos = idPos + 1;
        if (idPos > $(".slide-wrap-2 img").length - 1) {
            idPos = 2;
        } else if (idPos > $(".slide-wrap-2 img").length - 2) {
            idPos = 1;
        }
    } else {
        idPos = idPos - 1;
        if (idPos < 0) {
            idPos = $(".slide-wrap-2 img").length - 3;
        } else if (idPos < 1) {
            idPos = $(".slide-wrap-2 img").length - 2;
        }
    }
    $(".slide-wrap-2").css("left", "-" + $(".slide-wrap-2 img").width() * idPos + "px");

}

function spam() {
    $("#slideshow").append("<div class='spam'></div>");
    setTimeout(function () {
        $(".spam").remove();
    }, 301);
}
idImg();

function idImg() {
    $(".idPosItem").css("borderRadius", "50%")
    document.getElementsByClassName("idPosItem")[idPos - 1].style.borderRadius = "4px";
}

function ismobile() {
    mobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) mobile = true;
}