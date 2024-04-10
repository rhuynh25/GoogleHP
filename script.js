function googleSearch() {
  event.preventDefault()
  window.location = "https://www.google.com/search?q=" + document.getElementById("search").value
}

function goImageSearch() {
  window.location = "https://www.google.com/search?tbm=isch&q=" + document.getElementById("search").value
}

// function goAdvancedSearch() {
//   window. location = "https://www.google.com/advanced_image_search?hl=en&fg=1";
// }


// window.open location ("https://www.google.com/search?q=" + document.querySelector("textarea").value)
