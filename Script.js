window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }


 /* Choose Form */

  const formJoin = document.getElementById("formJoinUs");
  const linkJoin = document.getElementById("showJoinUs");

  linkJoin.addEventListener("click", function(event) {
        formPartner.style.display = "none";
        formHi.style.display = "none";
        event.preventDefault();
        formJoin.style.display = "block";
  });

  const formPartner = document.getElementById("formPartnership");
  const linkPartner = document.getElementById("showPartnership");

  linkPartner.addEventListener("click", function(event) {
        formJoin.style.display = "none";
        formHi.style.display = "none";
        event.preventDefault();
        formPartner.style.display = "block";
  });

  const formHi = document.getElementById("formSayHi");
  const linkHi = document.getElementById("showSayHi");

  linkHi.addEventListener("click", function(event) {
        formJoin.style.display = "none";
        formPartner.style.display = "none";
        event.preventDefault();
        formHi.style.display = "block";
  });


