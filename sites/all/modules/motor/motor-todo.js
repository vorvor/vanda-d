(function($) {  

Drupal.behaviors.myBehavior = {
  attach: function (context, settings) {

  	init();

  	function init() {
  		$('#draggableviews-table-todo-list-block td.views-field-nid').each(function() {
  			if ($('.todo-pass', this).length == 0) {
  			  $(this).append('<input type="checkbox" class="todo-pass" data-nid="' + $(this).html() + '">');
  		    }
  		});

  		$('.todo-pass').click(function() {
  			if ($(this).attr('checked') == true) {
  			  $(this).parent().parent().children('.views-field-title').css("text-decoration", "line-through");
  		    } else {
  		    	$(this).parent().parent().children('.views-field-title').css("text-decoration", "none");
  		    }
  		})
  	}

  	}}
})(jQuery);