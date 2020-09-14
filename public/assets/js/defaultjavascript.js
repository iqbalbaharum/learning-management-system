
    $(document).on("click", ".open-AddBookDialog", function () {
       var NotesID = $(this).data('id');
       var course = $(this).data('course');
       var topic = $(this).data('topic');
       var content = $(this).data('content');
       $("#NotesID").val( NotesID );
       $("#course").val( course );
       $("#topic").val( topic );
       $("#content").val( content );
       // As pointed out in comments, 
       // it is unnecessary to have to manually call the modal.
       $('#updateNotes').modal('show');
    });

  $(document).ready(function() {
	$('a[data-confirm]').click(function(ev) {
		var href = $(this).attr('href');
		if (!$('#dataConfirmModal').length) {
    $('body').append('<div id="dataConfirmModal" class="modal fade" role="dialog" tabindex="-1" aria-labelledby="dataConfirmLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-delete"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h3 id="dataConfirmLabel">Please Confirm</h3></div><div class="modal-body"></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal" aria-hidden="true">Cancel</button><a class="btn btn-primary" id="dataConfirmOK">Confirm</a></div></div></div></div>');
		} 
		$('#dataConfirmModal').find('.modal-body').text($(this).attr('data-confirm'));
		$('#dataConfirmOK').attr('href', href);
		$('#dataConfirmModal').modal({show:true});
		return false;
	});
});

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }



  $('#newNotes').on('hidden.bs.modal', function () {
    $(this).find("input,textarea,select").val('');

});
