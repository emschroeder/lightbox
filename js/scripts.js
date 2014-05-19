// Foundation 5 Activate! 
$(document).foundation();


// On page load, do this
$(document).ready(function(){
  
  // Your Scripts
  $('.gallery').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {enabled:true}
  // other options
});

});
