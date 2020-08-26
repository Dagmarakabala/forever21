import $ from 'jquery';

function CheckPositions() {
  var positions = document.querySelectorAll('input[name="position"]');
  var i;
  var checks = 0;
  for (i = 0; i < positions.length; i++) {
    if (positions[i].checked) {
      checks++;
    }
  }
  alert(" fefffwf" + checks);
}