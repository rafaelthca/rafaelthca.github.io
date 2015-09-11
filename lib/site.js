//var v_colors = ['#23BB85','#E8760E','#5A64FF','#8E5FE2','#39C1BD','#D44B4B'];
var v_colors = ['rgb(228, 154, 102)'];
window.onload = function() {

  var v_colored = document.getElementsByClassName('colored');

  //var v_random = Math.floor((Math.random() * 5) );

  for (var i=0; i<v_colored.length; i++)
  {
    v_colored[i].style.color = v_colors[0];

  }
};
