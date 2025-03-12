AOS.init();

let botao = document.getElementById("botaoNav");
let logo = document.getElementById("logo");
let perfil = document.getElementById("profile");

botao.addEventListener("click", () => {
  const navbarExpanded = botao.getAttribute("aria-expanded") === "true";

  if (navbarExpanded) {
    logo.classList.remove("mt-5");
    perfil.classList.remove("mt-5");
    perfil.classList.remove("mb-5"); 
  } else {
    logo.classList.add("mt-5");
    perfil.classList.add("mt-5");
    perfil.classList.add("mb-5"); 
  }
});


let siteLivia = document.getElementById("livia");
siteLivia.addEventListener('click', () => {
  window.location.href = "https://liviamakeupartist.com.br/"
})

