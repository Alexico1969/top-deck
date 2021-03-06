/* For debugging purposes :

/* setInterval(function(){$('.info1').text("State :" + state);},200); 
$('.info1').text("*** Checking ***");
$('.info2').text("");
$('.info3').text(""); 

*/

var imgDir = "img/";
var reel1 = [ "s_apple.png",
            "s_druif.png",
            "s_jackpot.png",
            "s_apple_f.png",
            "s_lemon.png",
            "s_kers.png",
            "s_orange.png",
            "s_kers.png",
            "s_lemon.png",
            "s_apple.png",
            "s_kers.png",
            "s_bar.png",
            "s_kers_e.png",
            "s_bell.png",
            "s_prune.png",
            "s_orange_f.png",
            "s_prune.png",
            "s_pear.png",
            "s_orange.png",
            "s_orange.png",
            "s_lemon.png",
            "s_apple_f.png",
            "s_melon.png",
            "s_kers.png" ];

var reel2 = ["s_bell.png",
            "s_lemon.png",
            "s_orange.png",
            "s_apple.png",
            "s_apple.png",
            "s_kers.png",
            "s_jackpot.png",
            "s_bar.png",
            "s_druif.png",
            "s_bell_f.png",
            "s_kers.png",
            "s_lemon.png",
            "s_prune.png",
            "s_kers.png",
            "s_lemon_e.png",
            "s_pear.png",
            "s_prune.png",
            "s_pear_f.png",
            "s_orange.png",
            "s_lemon.png",
            "s_melon.png",
            "s_apple_f.png",
            "s_orange.png",
            "s_kers.png"];

var reel3 = ["s_druif.png",
            "s_lemon.png",
            "s_orange.png",
            "s_apple.png",
            "s_prune.png",
            "s_kers.png",
            "s_melon.png",
            "s_kers.png",
            "s_druif_f.png",
            "s_apple.png",
            "s_kers.png",
            "s_orange.png",
            "s_jackpot.png",
            "s_orange_e.png",
            "s_prune.png",
            "s_lemon.png",
            "s_bar.png",
            "s_bell.png",
            "s_prune_f.png",
            "s_pear.png",
            "s_apple_f.png",
            "s_orange.png",
            "s_lemon.png",
            "s_kers.png"];

var reel_1 = $('.reel1');
var reel_2 = $('.reel2');
var reel_3 = $('.reel3');


var credits = 100;
var win = 0;
var win_bank = 0;
var credits_display = $('.credits');
var win_display = $('.win_amount');
var win_bank_display = $('.win_bank');

setInterval(function(){credits_display.text(credits)},200);
setInterval(function(){win_display.text(win)},200);
setInterval(function(){win_bank_display.text(win_bank)},200);

nrOfSymbols = reel1.length;

var canPlay = true;
var state = 0;

var hold_1 = false;
var hold_2 = false;
var hold_3 = false;

var prize = 0;

$(".f1").hide();
$(".f2").hide();
$(".f3").hide();

$(".h1").hide();
$(".h2").hide();
$(".h3").hide();

$(".hh1").hide();
$(".hh2").hide();
$(".hh3").hide();

$(".start-btn").hide();

$(".reset-btn").click(function(){reset()});
$(".reset-btn").hide();

$(".take_win-btn").click(function(){takeWin()});
$(".take_win-btn").hide();

$(".h1").click(function(){hold1()});
$(".h2").click(function(){hold2()});
$(".h3").click(function(){hold3()});

/* setInterval(function(){$('.info1').text("State :" + state);},200); */

function reset(){
    hold_1 = false;
    hold_2 = false;
    hold_3 = false;
    /* state = 0; */
    $(".h1").show();
    $(".h2").show();
    $(".h3").show();
    $(".hh1").hide();
    $(".hh2").hide();
    $(".hh3").hide();

    $(".reset-btn").hide();

    $("#snd_reset").get(0).play();
}

function takeWin(){
    win_bank += win;
    win = 0;
    $(".take_win-btn").hide();
}

function hold1(){
    $("#snd_hold").get(0).play();
    $(".h1").hide();
    $(".hh1").show();
    hold_1 = true;
    state = 1;
    $(".reset-btn").show();
}

function hold2(){
    $("#snd_hold").get(0).play();
    $(".h2").hide();
    $(".hh2").show();
    hold_2 = true;
    state = 1;
    $(".reset-btn").show();
}

function hold3(){
    $("#snd_hold").get(0).play();
    $(".h3").hide();
    $(".hh3").show();
    hold_3 = true;
    state = 1;
    $(".reset-btn").show();
}

go();

$(".start-btn").click(function(){
    $(".reset-btn").hide();
    if(canPlay){
        $(".start-btn").hide();
        $(".f1").hide();
        $(".f2").hide();
        $(".f3").hide();
        $(".h1").hide();
        $(".h2").hide();
        $(".h3").hide();
        credits -= 1;
        go();
    }
});


function go(){
    canPlay = false;
    $(".reset-btn").hide();    
    
    $("#snd_start").get(0).play();

    if(!hold_1){
        setTimeout(function(){showSpinning(reel_1)},10);
        var wait = Math.floor(Math.random()*800) + 1000;
        setTimeout(function(){showSymbols(1)}, wait);
    } 

    if(!hold_2){
        showSpinning(reel_2);
        var wait = Math.floor(Math.random()*1000) + 2000;
        setTimeout(function(){showSymbols(2)}, wait);
    } 

    if(!hold_3){
        showSpinning(reel_3);
        var wait = Math.floor(Math.random()*1000) + 3200;
        setTimeout(function(){showSymbols(3)}, wait);
    } 

    if(state == 0){
        resetHold();
    } else if (state == 1){
        state = 0;
    } else {
        console.log(state);
    }
}

function resetHold(){
    $(".h1").show();
    $(".h2").show();
    $(".h3").show();

    $(".hh1").hide();
    $(".hh2").hide();
    $(".hh3").hide();

    $(".reset-btn").hide();

    /* state = 0; */
}

function darkenHold(){
    $(".h1").hide();
    $(".h2").hide();
    $(".h3").hide();

    $(".hh1").hide();
    $(".hh2").hide();
    $(".hh3").hide();
}

function showSpinning(reel){
    reel.empty();
    var spinningImg = "<img class='spinning' src='" + imgDir + "/spinning.gif'>";
    reel.append(spinningImg); 
}

function showSymbols(r){
    var winAmount = 0;
    if (r == 1){
        var reel = reel_1;
    } else if(r == 2){
        var reel = reel_2;
    } else {
        var reel = reel_3;
    }

    $("#snd_stop").get(0).play();
    reel.empty();

    var id_str = "symb_" + r;
    var rnd_1 = Math.floor(Math.random()*nrOfSymbols);
    var rnd_2 = (rnd_1 + 1) % nrOfSymbols;
    var rnd_3 = (rnd_1 + 2) % nrOfSymbols;

    if(r == 1){
        var symbol_top = "<img class='symbol top_s' src='" + imgDir + "/" + reel1[rnd_1] + "'>";
        var symbol_mid = "<img id='" + id_str + "'class='symbol mid_s' src='" + imgDir + reel1[rnd_2] + "'>";
        var symbol_low = "<img class='symbol low_s' src='" + imgDir + "/" + reel1[rnd_3] + "'>";
    } else if(r == 2){
        var symbol_top = "<img class='symbol top_s' src='" + imgDir + "/" + reel2[rnd_1] + "'>";
        var symbol_mid = "<img id='" + id_str + "'class='symbol mid_s' src='" + imgDir + reel2[rnd_2] + "'>";
        var symbol_low = "<img class='symbol low_s' src='" + imgDir + "/" + reel2[rnd_3] + "'>";
    } else if(r == 3){
        var symbol_top = "<img class='symbol top_s' src='" + imgDir + "/" + reel3[rnd_1] + "'>";
        var symbol_mid = "<img id='" + id_str + "'class='symbol mid_s' src='" + imgDir + reel3[rnd_2] + "'>";
        var symbol_low = "<img class='symbol low_s' src='" + imgDir + "/" + reel3[rnd_3] + "'>";
    }

   

    reel.append(symbol_top);
    reel.append(symbol_mid);
    reel.append(symbol_low);

    var shouldCheck = false;

    if (r == 3){shouldCheck = true;}

    if (r == 2 && hold_3){shouldCheck = true;}

    if (r == 1 && hold_2 && hold_3){shouldCheck = true;}

    if (hold_1 && hold_2 && hold_3){shouldCheck = true;}

    if(shouldCheck){
        symb1 = $('#symb_1').attr('src');
        symb_1 = symb1.substring(4,9);
        symb2 = $('#symb_2').attr('src');
        symb_2 = symb2.substring(4,9);
        symb3 = $('#symb_3').attr('src');
        symb_3 = symb3.substring(4,9);
        checkWin(symb_1,symb_2,symb_3);
        checkFeature(symb1,symb2,symb3);
        if (prize > 0) {
            state = 0;
        }
        
        hold_1 = false;
        hold_2 = false;
        hold_3 = false;
        
    }
    
    canPlay = true;
    $(".start-btn").show();
}

function checkWin(s1,s2,s3){


    /*$('.info3').text("state: " + String(state));*/

    if(s1 != s2){
        prize = 0;
        return;
    }

    /* state = 1; */
    darkenHold();
   
    $("#snd_prize").get(0).play();
    var same;

    if(s2 == s3){
        same = 3;
    } else {
        same = 2;
    }

    prize = determineValue(s1,same);

    win += prize;
    $(".take_win-btn").show();
    

}

function determineValue(symbol, same){
    if(same == 2){
        if(symbol = "s_ker"){return 2;}
        if(symbol = "s_lem"){return 2;}
        if(symbol = "s_ora"){return 2;}
        if(symbol = "s_app"){return 2;}
        if(symbol = "s_pru"){return 2;}
        if(symbol = "s_dru"){return 2;}
        if(symbol = "s_bel"){return 4;}
        if(symbol = "s_pea"){return 4;}
        if(symbol = "s_bar"){return 4;}
        if(symbol = "s_jac"){return 4;}        
    } else {
        if(symbol = "s_ker"){return 8;}
        if(symbol = "s_lem"){return 10;}
        if(symbol = "s_ora"){return 8;}
        if(symbol = "s_app"){return 10;}
        if(symbol = "s_pru"){return 16;}
        if(symbol = "s_dru"){return 20;}
        if(symbol = "s_bel"){return 40;}
        if(symbol = "s_pea"){return 100;}
        if(symbol = "s_bar"){return 150;}
        if(symbol = "s_jac"){return 200;}   
    }

}

function checkFeature(s1,s2,s3){
    var totalFeatures = 0;
    if(s1.includes("_f")){
        $(".f1").show();
        totalFeatures +=1;
        $("#snd_ft1").get(0).play();
    }
    setTimeout(function(){
        if(s2.includes("_f")){
            $(".f2").show();
            totalFeatures +=1;
            $("#snd_ft2").get(0).play();
        }
    },300); 
    setTimeout(function(){
        if(s3.includes("_f")){
            $(".f3").show();
            totalFeatures +=1;
            $("#snd_ft3").get(0).play();
        }
    },600);
}