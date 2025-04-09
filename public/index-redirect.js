// This script helps with routing on GitHub Pages for single-page applications
(function () {
  // Parse the URL
  var redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;

  // If we have a redirect value, try to navigate to that page
  if (redirect && redirect !== location.href) {
    // Fix the URL if it was redirected from 404 page
    var redirectPath = redirect.split("?p=")[1];
    if (redirectPath) {
      // Extract just the path portion and redirect to it
      var pathOnly = redirectPath.split("&")[0];
      history.replaceState(null, null, pathOnly || "/");
    } else {
      // Normal redirect
      history.replaceState(null, null, redirect);
    }
  }

  // Check if we have a query param for handling 404 redirects
  var p = new URLSearchParams(window.location.search).get("p");
  if (p) {
    // When coming from the 404.html page
    var basePath = "/brandsip"; // Must match your repo name
    var path = p.startsWith("/") ? p : "/" + p;
    history.replaceState(null, null, basePath + path);
  }
})();
