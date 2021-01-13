$(document).ready(function() {
  $("button#cat-talk").click(function()  {
    $("ul#cat").prepend("<li>~mrawwwwwant to go catch mice?</li>");
    $("ul#dog").prepend("<li>~growwwwllike you even have to ask!");
  });

  $("button#dog-talk").click(function()  {
    $("ul#dog").prepend("<li>Woof woof woof</li>");
    $("ul#cat").prepend("<li>Mee-yoww</li>");
  });
});