// a script to select some amenities
$(function(){
  if ($(':checkbox').prop('checked', true)) {
	  let arr = [];
	  let value = $(':checkbox').data('id');
	  arr.push(value);
	  let index = arr.indexOf($(':checkbox').data('id'));
	  if ($(':checkbox').prop('checked', false)) {
		  arr.splice(index, 1);
	  }
  }
});
