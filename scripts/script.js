$(".phone .input").keydown(function(event) {
    if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
        (event.keyCode == 65 && event.ctrlKey === true) ||
        (event.keyCode >= 35 && event.keyCode <= 39)) {
    return;
    } else {
        if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
            event.preventDefault();
        }
    }
});

$(".form .input+.hint").fadeTo(1, 0, function(){})

$(".form .input").on("focus", function(){
    var hintId = $(this).prop('id')
    console.log(hintId)
    $(".form #" + hintId + "+ .hint").fadeTo(200, 1, function(){})
})


$(".form .input").on("focusout", function(){
    $(".form .input + .hint").fadeTo(200, 0, function(){})
})

var countdown = (30 * 60 * 1000);
var timerTimer = setInterval(function(){
  countdown -= 1000;
  var min = Math.floor(countdown / (60 * 1000));
  var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000); 

  if (countdown <= 0) {
     clearInterval(timerId);
  } else {
    if (sec>=10){$(".timer").html(min + ":" + sec);}
    else {$(".timer").html(min + ":0" + sec)}
  }

}, 1000)

var i=0
var timerPrice = setInterval(function(){
    if (i==0){
        $(".price").animate({"font-size": "1.3em"}, 1000);
        i=1
    }
    else {
        $(".price").animate({"font-size": "1.2em"}, 1000); 

        i=0
    }
}, 1)

item1=$(".reviews .item1")
item2=$(".reviews .item2")
item3=$(".reviews .item3")

l=1, r=3

$('.carousel.left').click(function(){
    console.log('left')
    movingItem = $(".reviews .item"+l)
    movingItem.appendTo(".reviews>.flex:first-child")
    if (l<3) l+=1
    else l=1
    if (r>1) r-=1
    else r=3
})

$('.carousel.right').click(function(){
    console.log('right')
    movingItem = $(".reviews .item"+r)
    movingItem.prependTo(".reviews>.flex:first-child")
    if (l<3) l+=1
    else l=1
    if (r>1) r-=1
    else r=3
})