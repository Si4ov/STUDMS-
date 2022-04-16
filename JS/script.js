
$(".img-gall").click(function(){
  $("#"+this.id).toggleClass("opas1", 600, "easeOutSine");
})

$(".sup").click(function(){
  $(".num").hide();
  $(".num").text('4149 6293 8660 3419');
  $(".num").show('slow');
})
