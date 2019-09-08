$(window).scroll(function() {
  $(window).scrollTop() > $(window).height()*0.5 ? $("#rocket").addClass("show") : $("#rocket").removeClass("show");
});

$("#rocket").click(function() {
  $("#rocket").addClass("launch");
  $("html, body").animate({
      scrollTop: 0
  }, 1000, function() {
      $("#rocket").removeClass("show launch");
  });
  return false;
});

var toc = document.getElementById('toc')

if (toc != null) {
	window.addEventListener("scroll", scrollcatelogHandler);
	var tocPosition = toc.offsetTop;
	var height_header = $("#signature").height();
	function scrollcatelogHandler(e) {
		 var event = e || window.event,
		     target = event.target || event.srcElement;
		 var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		 if (scrollTop >  tocPosition -60) {
		     toc.classList.add("toc-fixed");
		 } else {
		     toc.classList.remove("toc-fixed");
		 }
	}
}