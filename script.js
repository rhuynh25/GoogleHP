function googleSearch(){
    window.location = "https://www.google.com/search?q=" + document.getElementById("search").value
  }
  
    // window.open location ("https://www.google.com/search?q=" + document.querySelector("textarea").value)
  
  function goAdvancedSearch() {
    window.location.href = "https://www.google.com/advanced_image_search?hl=en&fg=1";
  }
  
  function goImageSearch() {
    window.location.href = "https://www.google.com/imghp?hl=en&authuser=0&ogbl";
  }