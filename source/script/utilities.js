function scrollTo(div_name,ancre_name){
    $('#'+div_name).click(function() {
        $('html,body').animate({scrollTop: $("#"+ancre_name).offset().top}, 'slow');
    });  
  }