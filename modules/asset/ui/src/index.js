import bootstrap from 'bootstrap';



export default () => {
  // Your own project level JS may go here
  // console.log('Hello World');
  
  $(document).ready(function(){
    $('#cross-icon').click(function(){
      $('.top-header').hide()
    });
  });

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
    });
  });


};
