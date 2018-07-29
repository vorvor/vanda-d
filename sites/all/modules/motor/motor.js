(function($) {  

Drupal.behaviors.myBehavior = {
  attach: function (context, settings) {

  	init();
			console.log('A');

			function init() {
				$('#time').bootstrapMaterialDatePicker
				({
					date: false,
					shortTime: false,
					format: 'HH:mm'
				});

				var dt = new Date();
				var hours = dt.getHours();
				if (hours < 10) {
					hours = '0' + hours;
				}
				var minutes = dt.getMinutes();
				if (minutes < 10) {
					minutes = '0' + minutes;
				}
				$('#time').val(hours +':' + minutes);
				$('#amount').val(1);
				$('input[data-dest="event"]').each(function() {
					$(this).val($(this).data('val'));
				})

			}

			$('.change').click(function() {

				dest = '#' + $(this).data('dest');
				console.log(dest);

				if (dest == '#time') {
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