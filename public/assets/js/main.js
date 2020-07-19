
// search script

$(document).ready(function () {

	$(".search-wrapper").click(function () {

		$(".open-search").fadeIn(600);

	});

	$(".search-wrapper01").click(function () {

		$(".open-search").fadeOut(600);

	});

	// fixed menu bar after scrooling

	$(document).on('scroll', function () {


		if ($(this).scrollTop() > 47) {

			$('.main-header').addClass('sticky');

		} else {

			$('.main-header').removeClass('sticky');
		}


	});

	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function (e) {
				$('#image_upload_preview').attr('src', e.target.result);
			}

			reader.readAsDataURL(input.files[0]);
		}
	}

	$("#inputFile").change(function () {
		readURL(this);
	});




});


function slide_menu() {

	document.getElementById("sliding").classList.toggle("active");
	document.getElementById("sliding2").classList.toggle("active");
	document.getElementById("sliding3").classList.toggle("active");

}

function blockUi() {
	$.blockUI({
		css: {
			border: 'none',
			padding: '15px',
			backgroundColor: '#000',
			'-webkit-border-radius': '10px',
			'-moz-border-radius': '10px',
			opacity: 0.5,
			color: '#fff'
		}
	});
}

