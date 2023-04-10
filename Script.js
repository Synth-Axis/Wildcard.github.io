window.onbeforeunload = function () {
      window.scrollTo(0, 0);
      }

//Nav Links
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(element =>{
      if (element.href.includes(activePage)){
            element.classList.add("nav-link-active");
      }
})


//Contact Forms
let selectedTab = document.querySelectorAll(".form-link"); //Selecionar as opções
selectedTab.forEach(element => element.addEventListener("click", eventArg => { //Por cada uma,
      let contents = document.querySelectorAll(".form-content"); //selecionar o conteudo associado
      contents.forEach( content => content.classList.add("hidden")); //Por cada conteudo -> esconder
      let tabClicked = eventArg.target; // Opção cliclada é igual ao target do array das opções
      let tabId = tabClicked.id; // Criar variavel auxiliar com o ID da opção clicada
      let showContent = document.querySelector("." + tabId); // Associar o ID da opção clicada à classe do conteudo com o mesmo nome
      showContent.classList.remove("hidden"); // Remover o hide do conteudo selecionado
      eventArg.preventDefault(); //Impedir o comportamento do link
}));




