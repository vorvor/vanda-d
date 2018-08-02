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

  		 $('#draggableviews-table-todo-list-block td.views-field-field-status').each(function() {
  		 	$(this).hide();
  		 	state = parseInt($(this).html());
  			if (state == 0) {
  				console.log(state);
  			  $(this).parent().children('.views-field-title').css("text-decoration", "line-through");
  			  parent = $(this).parent();
  			  $('.todo-pass',parent).attr("checked", "checked");

  			}
  		 });


  		$('.todo-pass').click(function() {
  			nid = $(this).data('nid');
  			if ($(this).attr('checked') == true) {
  			  $(this).parent().parent().children('.views-field-title').css("text-decoration", "line-through");
  			  passTodo(nid, 0);
  		    } else {
  		      $(this).parent().parent().children('.views-field-title').css("text-decoration", "none");
  		      passTodo(nid, 1);
  		    }
  		})

  		function passTodo(nid, state) {
  			$.ajax
		        ({ 
		          url: '/ajax/pass-todo/' + nid + '/' + state,
		          type: 'post',
		          success: function(result)
		          {
		              consolelog(result);
		          }
		        });
  		}
  	}

  	}}
})(jQuery);