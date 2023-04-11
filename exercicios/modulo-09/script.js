$("form").on("submit", function (e) {
  e.preventDefault();

  const novaTarefa = $("#tarefa").val();
  const novoItem = $("<li></li>");
  $(`<li>${novaTarefa}</li>`).appendTo(novoItem);
  $(novoItem).appendTo("ul").val();
  $("#tarefa").val("");
  $("li").click(function () {
    $(this).css("text-decoration", "line-through");
  });
});
