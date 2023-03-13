//G-LIGHT BOX

const lightbox = GLightbox({
  href: "video/jonrich.mp4",
  type: "video",
  source: "local", //vimeo, youtube or local
  width: 900,
  "autoPlayVideo s": "true",
});

// FILTERABLE BUTTONS

$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $(".filter").show("1000");
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
});

// EMAILJS

// function validate(event) {
//   event.preventDefault();
//   const firstName = document.querySelector(".firstname").value;
//   const lastName = document.querySelector(".lastname").value;
//   const email = document.querySelector(".email").value;
//   const message = document.querySelector(".message").value;
//   const company = document.querySelector(".company").value;

//   if (
//     firstName === "" ||
//     lastName === "" ||
//     email === "" ||
//     company === "" ||
//     message === ""
//   ) {
//     inputEmpty();
//   } else {
//     const name = `${firstName} ${lastName}`;
//     sendMail(name, email, company, message);
//   }
// }

// document.querySelector("#contact-form").addEventListener("submit", validate);

// function success() {
//   swal({
//     title: "Good job!",
//     text: "You successfully sent a message",
//     icon: "success",
//     button: "OK",
//   });
// }

// function error() {
//   swal({
//     title: "Oops!",
//     text: "Something went wrong, message could not be sent!",
//     icon: "error",
//     button: "OK",
//   });
// }

// function inputEmpty() {
//   swal({
//     title: "Oops!",
//     text: "All input fields are required!",
//     icon: "error",
//     button: "OK",
//   });
// }

// function sendMail(name, email, message, company) {
//   fetch("http://localhost:4000/send-email", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       to: email,
//       subject: "Congrats! You've got a new message!",
//       name: name,
//       email: email,
//       company: company,
//       message: message,
//     }),
//   })
//     .then(() => {
//       success();
//     })
//     .catch(() => {
//       error();
//     });
// }
