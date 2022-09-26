// init Isotope
var $grid = $('.collection-list').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns();
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
  });
  
  var filterBtns = $('.filter-button-group').find('button');
  function resetFilterBtns(){
    filterBtns.each(function(){
      $(this).removeClass('active-filter-btn');
    });
  }
  document.getElementById("btnp").addEventListener("click",sub);

function sub(){
	var i1 = document.getElementById("validationCustom01").value;
	var i2 = document.getElementById("validationCustom03").value;
	var i3 = document.getElementById("validationCustom04").value;
	var i4 = document.getElementById("validationCustom05").value;
	
	if(i1 == "" && i2 == "" && i3 == "" && i4 == ""){
		document.getElementById("place1").innerHTML="ERROR!!!!";
		document.getElementById("place2").innerHTML="Please fill form first!";
		document.getElementById("place1").style.color="red";
		document.getElementById("place2").style.color="red";
		}
	else if(i1 != "" && i2 != "" && i3 != "" && i4 != ""){
		document.getElementById("place1").innerHTML="HURRRAYY!!!!";
		document.getElementById("place2").innerHTML="ORDER PLACED!!!!";
		document.getElementById("place1").style.color="green";
		document.getElementById("place2").style.color="green";
	}
}