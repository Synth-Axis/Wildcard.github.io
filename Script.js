window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }


 /* Choose Form */

  const formJoin = document.getElementById("formJoinUs");
  const linkJoin = document.getElementById("showJoinUs");

  linkJoin.addEventListener("click", function(event) {
      formPartner.style.display = "none";
      event.preventDefault();
      formJoin.style.display = "block";
  });

  const formPartner = document.getElementById("formPartnership");
  const linkPartner = document.getElementById("showPartnership");

  console.log("formPartnership");
  console.log("showPartnership");

  linkPartner.addEventListener("click", function(event) {
      formJoin.style.display = "none";
      event.preventDefault();
      formPartner.style.display = "block";
  });


