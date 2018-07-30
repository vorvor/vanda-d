(function($) {  

Drupal.behaviors.myBehavior = {
  attach: function (context, settings) {

  	init();

			function init() {
				$('#time').bootstrapMaterialDatePicker
				({
					date: false,
					shortTime: false,
					format: 'HH:mm'
				});

				$('#time').val(getNow());
				$('#amount').val(1);
				$('input[data-dest="event"]').each(function() {
					$(this).val($(this).data('val'));
				})

				var handleHour = $("#slider-hour #custom-handle");
			    $("#slider-hour").slider({
			      range: "max",
				  min: 1,
				  max: 24,
				  value: getHour(),
			      create: function() {
			        handleHour.text($(this).slider("value"));
			      },
			      slide: function(event, ui) {
			        handleHour.text(ui.value);
			      },
			      stop: function(event, ui) {
			      	time = $('input[name="time"]').val().split(':');
			      	if (ui.value < 10) {
						ui.value = '0' + ui.value;
					}
			      	$('input[name="time"]').val(ui.value + ':' + time[1]);
			      }
			    });

			    var handleMin = $("#slider-min #custom-handle");
			    $("#slider-min").slider({
			      range: "max",
				  min: 1,
				  max: 59,
				  value: getMin(),
			      create: function() {
			        handleMin.text($(this).slider("value"));
			      },
			      slide: function(event, ui) {
			        handleMin.text(ui.value);
			      },
			      stop: function(event, ui) {
			      	time = $('input[name="time"]').val().split(':');
			      	if (ui.value < 10) {
						ui.value = '0' + ui.value;
					}
			      	$('input[name="time"]').val(time[0] + ':' + ui.value);
			      }
			    });

			}

			function getNow() {
				var dt = new Date();
				var hours = dt.getHours();
				if (hours < 10) {
					hours = '0' + hours;
				}
				var minutes = dt.getMinutes();
				if (minutes < 10) {
					minutes = '0' + minutes;
				}
				return hours +':' + minutes;
			}

			function getHour() {
				var dt = new Date();
				var hours = dt.getHours();
				if (hours < 10) {
					hours = '0' + hours;
				}
				
				return hours;
			}

			function getMin() {
				var dt = new Date();
				var minutes = dt.getMinutes();
				if (minutes < 10) {
					minutes = '0' + minutes;
				}
				return minutes;
			}


			$('.change').click(function() {

				dest = '#' + $(this).data('dest');
				console.log(dest);

				if (dest == '#time') {
					if ($(this).val() == 'now') {
						$('#time').val(getNow());
						return 1;
					}
					time = $(dest).val().split(':');
					min = parseInt(time[1]) + parseInt($(this).data('val'));
					if (min > 59) {
						min = '00';
					}
					if (min < 0) {
						min = 59;
					}
					if (min < 10 && min !== '00') {
						min = '0' + min;
					}

					$(dest).val(time[0] + ':' + min);
			    }
			    if (dest == '#amount') {
			    	$(dest).val(parseInt($(dest).val()) + parseInt($(this).data('val')));
			    }


			})

			$('.reset').click(function() {
				dest = '#' + $(this).data('dest');
				$(dest).val($(dest).data('default'));
			})

			$('.change-event').click(function() {
				$('#event').val($(this).data('val'));
				$('#event-tid').val($(this).data('tid'));
				if ($(this).data('val') == 'egyéb') {
					$('#event').val("").focus();
				}
			})

}}
})(jQuery);