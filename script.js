$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:3
            },
            email:{
                required:true,
                email:true
            },
            subject:{
                required:true,
                minlength:5
            },
            message:{
                required:true,
                minlength:10
            }
        },
        messages:{
            fname:{
                required:"Minimum Three letter required"
            }

        },
        
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



//   $("#submit-form").submit((e)=>{
//     e.preventDefault()
//     $.ajax({
//         url:"https://script.google.com/macros/s/AKfycbynwqh4FsWhKv1vMhLXQMdxyAhj8P6FSXAPc5Rk8S6nib8IhotFEV1F7OnHzNOr5RcE/exec",
//         data:$("#submit-form").serialize(),
//         method:"post",
//         success:function (response){
//             alert("Form submitted successfully")
//             window.location.reload()
//             //window.location.href="https://google.com"
//         },
//         error:function (err){
//             alert("Something Error")

//         }
//     })
// })

  