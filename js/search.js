// function toggleSearch() {
//   searchVisible ? $("#dream-search").css("display", "") : ($("#dream-search").css("display", "block"), setTimeout(function() {
//       return $("#dream-search input").focus()
//   })), searchVisible = !searchVisible
// }
// $(document).ready(function() {
//   $(document).on("keydown", function(e) {
//       e.metaKey && "/" === e.key && !searchVisible && toggleSearch(), "Escape" === e.key && searchVisible && toggleSearch()
//   })
// });