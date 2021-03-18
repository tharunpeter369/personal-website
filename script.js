$(document).ready(function(){
    $("#contact-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:3
            },
            email:{
                required:true,
                email:true
            }
        },
        messages:{
            // fname:{
            //     required:"min 3 letter"
            // }

        }

    })
})


anime.timeline({loop: false})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: .5,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  