document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MENU MOBILE
  ========================= */
  const menuMobile = document.getElementById("menu-mobile");
  const nav = document.getElementById("nav");

  if (menuMobile) {
    menuMobile.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  /* =========================
     NAVBAR AO SCROLL
  ========================= */
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.background = "#020617";
      header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
      header.style.background = "#0b1220";
      header.style.boxShadow = "none";
    }
  });

  /* =========================
     EFEITO DIGITAÇÃO (HERO)
  ========================= */
  const typing = document.querySelector(".typing");

  if (typing) {
    const text = "Olá, eu sou o Daniel";
    let i = 0;

    typing.innerHTML = "";

    function type() {
      if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 80);
      }
    }

    type();
  }

  /* =========================
     ANIMAÇÃO DE ENTRADA
  ========================= */
  const elements = document.querySelectorAll(".card, .skill, .section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));

  /* =========================
     VALIDAÇÃO FORMULÁRIO
  ========================= */
  const form = document.getElementById("formContato");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      if (!nome || !email || !mensagem) {
        alert("Preencha todos os campos!");
        return;
      }

      if (!email.includes("@")) {
        alert("Email inválido!");
        return;
      }

      alert("Mensagem enviada com sucesso!");
      form.reset();
    });
  }

});