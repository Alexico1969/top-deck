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
var credits_display = $('.credits');
credits_display.text(credits);


var winline1="";
var winline2="";
var winline3="";


nrOfSymbols = reel1.length;

var canPlay = true;

go();

$(".start-btn").click(function(){
    if(canPlay){
        credits -= 1;
        credits_display.text(credits);
        go();
    }
    
});


function go(){
    canPlay = false;
    $("#snd_start").get(0).play();
    setTimeout(function(){showSpinning(reel_1)},10);
    var wait = Math.floor(Math.random()*800) + 2000;
    setTimeout(function(){showSymbols(1)}, wait);
    showSpinning(reel_2);
    var wait = Math.floor(Math.random()*1000) + 3000;
    setTimeout(function(){showSymbols(2)}, wait);
    showSpinning(reel_3);
    var wait = Math.floor(Math.random()*1000) + 4200;
    setTimeout(function(){showSymbols(3)}, wait);
}

function showSpinning(reel){
    reel.empty();
    var spinningImg = "<img class='spinning' src='" + imgDir + "/spinning.gif'>";
    reel.append(spinningImg); 
}

function showSymbols(r){
    var winAmount = 0;
    var winSymbol = [];
    if (r == 1){
        var reel = reel_1;
    } else if(r == 2){
        var reel = reel_2;
    } else {
        var reel = reel_3;
        var one = 

        
        canPlay = true;

    }

    $("#snd_stop").get(0).play();
    reel.empty();
    var rnd_1 = Math.floor(Math.random()*nrOfSymbols);
    var rnd_2 = (rnd_1 + 1) % nrOfSymbols;
    var rnd_3 = (rnd_1 + 2) % nrOfSymbols;
    var symbol_top = "<img class='symbol top_s' src='" + imgDir + "/" + reel1[rnd_1] + "'>";
    var symbol_mid = "<img class='symbol mid_s' src='" + imgDir + "/" + reel1[rnd_2] + "'>";
    var symbol_low = "<img class='symbol low_s' src='" + imgDir + "/" + reel1[rnd_3] + "'>";

    reel.append(symbol_top);
    reel.append(symbol_mid);
    reel.append(symbol_low);
}