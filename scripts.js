$(document).ready(function() {
  $('button.add-row').click(function() {
    var newRow = $('.before-row').clone().removeClass('before-row');
    newRow.find('textarea').val('');
    $('tr').last().after(newRow);
  });
});
