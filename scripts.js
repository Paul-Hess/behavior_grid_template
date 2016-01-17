$(document).ready(function() {
  $('button.add-row').click(function() {
    var newRow = $('.before-row').clone().removeClass('before-row');
    $('tr').last().after(newRow);
  });
});
