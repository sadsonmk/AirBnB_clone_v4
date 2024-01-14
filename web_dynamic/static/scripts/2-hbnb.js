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
	$.ajax({
		url: "http://0.0.0.0:5001/api/v1/status/",
		success: function(response) {
			if (response.status === "OK") {
				$("#api_status").addClass("available");
			} else {
				$("#api_status").removeClass("available");
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
        		$("#api_status").removeClass("available");
    }
	});
});
