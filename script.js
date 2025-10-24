const form = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (nome && email && senha) {
    mensagem.textContent = `Usuário ${nome} cadastrado com sucesso!`;
    mensagem.style.color = "green";
    form.reset();
  } else {
    mensagem.textContent = "Por favor, preencha todos os campos.";
    mensagem.style.color = "red";
  }
});
