var count=0;
var count1=0;
var homePosition = $("#home").offset().top;
var motoPosition = $("#motoid").offset().top;
var aboutPosition = $("#about").offset().top;
// console.log(homePosition+" "+motoPosition+" "+aboutPosition);
$(window).scroll(function(event){
  
  var scroll = $(window).scrollTop();

  if(scroll >= motoPosition - 200 && scroll <= aboutPosition){
    if (count == 0) {
      $("#moto").addClass("motoclass");
      // console.log("if "+motoPosition);
      count++;
    }
  }
  else if(count){
    // console.log("else");
    count=0;
  }
});

var navcol=$(".navbar.navbar-dark");
var dark="bg-dark";
var bannerimageheight=$('#home').height();

navcol.removeClass(dark);

$(document).ready(function(){

  $( ".card" ).hover(
    function() {
      $(this).addClass('shadow-lg').css('cursor', 'pointer');
    }, function() {
      $(this).removeClass('shadow-lg');
    });

    $(".switchit").click(function(){
      var getId=$(this).attr("id");
      myFunction(getId);
    })

    function myFunction(gotId) {
      // console.log(gotId);
      if(gotId=="html"){
        if ($("#htmlmore").css("display")=="inline") {
          $("#htmlmore").css("display", "none");
          $("#html").html("More");
        }
        else {
          $("#htmlmore").css("display", "inline");
          $("#html").html("Less");
        }
      }
      else if(gotId=="css"){
        console.log("into css");
        if ($("#cssmore").css("display")=="inline") {
          $("#cssmore").css("display", "none");
          $("#css").html("More");
        }
        else {
          $("#cssmore").css("display", "inline");
          $("#css").html("Less");
        }
      }
      else if(gotId=="javascript"){
        console.log("into js");
        if ($("#jsmore").css("display")=="inline") {
          $("#jsmore").css("display", "none");
          $("#javascript").html("More");
        }
        else {
          $("#jsmore").css("display", "inline");
          $("#javascript").html("Less");
        }
      }
      else if(gotId=="jquery"){
        if ($("#jquerymore").css("display")=="inline") {
          $("#jquerymore").css("display", "none");
          $("#jquery").html("More");
        }
        else {
          $("#jquerymore").css("display", "inline");
          $("#jquery").html("Less");
        }
      }
      else if(gotId=="mysql"){
        if ($("#mysqlmore").css("display")=="inline") {
          $("#mysqlmore").css("display", "none");
          $("#mysql").html("More");
        }
        else {
          $("#mysqlmore").css("display", "inline");
          $("#mysql").html("Less");
        }
      }
      else if(gotId=="php"){
        if ($("#phpmore").css("display")=="inline") {
          $("#phpmore").css("display", "none");
          $("#php").html("More");
        }
        else {
          $("#phpmore").css("display", "inline");
          $("#php").html("Less");
        }
      }
      else if(gotId=="java1"){
        if ($("#java1more").css("display")=="inline") {
          $("#java1more").css("display", "none");
          $("#java1").html("More");
        }
        else {
          $("#java1more").css("display", "inline");
          $("#java1").html("Less");
        }
      }
      else if(gotId == "java2"){
        if ($("#java2more").css("display") == "inline") {
          $("#java2more").css("display", "none");
          $("#java2").html("More");
        }
        else {
          $("#java2more").css("display", "inline");
          $("#java2").html("Less");
        }
      } else if(gotId == "ms_html_css"){
        if ($("#ms_html_css_more").css("display") == "inline") {
          $("#ms_html_css_more").css("display", "none");
          $("#ms_html_css").html("More");
        }
        else {
          $("#ms_html_css_more").css("display", "inline");
          $("#ms_html_css").html("Less");
        }
      } else if(gotId == "ms_js"){
        if ($("#ms_js_more").css("display") == "inline") {
          $("#ms_js_more").css("display", "none");
          $("#ms_js").html("More");
        }
        else {
          $("#ms_js_more").css("display", "inline");
          $("#ms_js").html("Less");
        }
      } else if(gotId == "ms_sql"){
        if ($("#ms_sql_more").css("display") == "inline") {
          $("#ms_sql_more").css("display", "none");
          $("#ms_sql").html("More");
        }
        else {
          $("#ms_sql_more").css("display", "inline");
          $("#ms_sql").html("Less");
        }
      }

      lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      })

    }
  });

  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 150)
    $("#mainNav").addClass("navbar-scrolled");
    else
    $("#mainNav").removeClass("navbar-scrolled");

    if ($("#mainNav").offset().top > 850)
    $("#hello").addClass("name-scrolled").text("Akshaya Amar");
    else
    $("#hello").removeClass("name-scrolled").text("");

  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);