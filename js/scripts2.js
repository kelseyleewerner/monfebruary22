var leetSpeak = function(leet) {
  if ((leet === "e")||(leet === "E")) {
  return true;
} else {
  return false;
}
};


$(document).ready(function() {
  $("form#leetSpeak").submit(function(event) {
    var leet = $("input#inputText").val();
    var result = leetSpeak(leet);

    if (result) {
      $("#result").text("3");
    } else {
      alert("Type e's");
    }

    $("#result").show();
    event.preventDefault();
  });
});
