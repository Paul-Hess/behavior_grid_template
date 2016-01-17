$(document).ready(function() {
  $('button.add-row').click(function() {
    var newRow = $('.before-row').clone(true).removeClass('before-row');
    $('#after-row').after(newRow);
  });
});
