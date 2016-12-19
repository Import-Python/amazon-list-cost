var name = $("#profile-list-name").html();

$('body').append('<div id="amazon_cost_calc"></div>');
$('#amazon_cost_calc').css('bottom', 0);
$('#amazon_cost_calc').css('left', 0);
$('#amazon_cost_calc').css('width', 100);
$('#amazon_cost_calc').css('height', 75);
$('#amazon_cost_calc').css('position', 'fixed');
$('#amazon_cost_calc').css('background-color', 'gray');
$('#amazon_cost_calc').css('border-top-right-radius', '10px');
$('#amazon_cost_calc').css('text-align', 'center');
function getCost(name_of_list) {
	var data = "";
  var corner = "";
	var total_cost = 0;

	$('.a-color-price.a-text-bold').each(function(i, obj) {
	  var text = $(obj).text();
		var id = $(obj).attr('id')
		id = id.replace('itemPrice_', '');
		text = text.replace(/ /g,'');
		text = text.replace('$','');
		cost = parseFloat(text)
		if($("#itemRequested_" + id).length > 0) {
			cost = cost * parseFloat($("#itemRequested_" + id).text());
		}


 	  total_cost = cost + total_cost;
	});
	data = name_of_list + ' - <span style="color: gray;">Total List Cost: </span> <span class="a-color-price">$' + total_cost.toFixed(2) + '</span>';
  corner = '<h2><span style="color: black;">List Cost</span><br/> <span class="a-color-price">$' + total_cost.toFixed(2) + '</span><h2>';

	$("#profile-list-name").html(data);
  $("#amazon_cost_calc").html(corner);

}
getCost(name);
setInterval(
  function()
  {
    getCost(name);
  }, 500
);
