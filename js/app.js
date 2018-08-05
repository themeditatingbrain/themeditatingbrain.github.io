var mainNav = $("#mainNav");
var mainNavWidth = mainNav.width();
console.log(mainNavWidth);

if(mainNavWidth < 350){
  console.log('It is less than 350!');
    $("#thetitle").addClass("addOutline");
}
