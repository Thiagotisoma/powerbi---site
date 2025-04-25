// Recupera os dados do usuário salvos no login
const user = JSON.parse(sessionStorage.getItem("loggedUser"));

if (!user) {
  alert("Você precisa estar logado!");
  window.location.href = "index.html";
}

const reportList = document.getElementById("report-list");

// Lista os relatórios disponíveis para o usuário
user.reports.forEach(report => {
  const button = document.createElement("button");
  button.textContent = report;

  // Quando o botão é clicado, vai para a página de visualização
  button.onclick = () => {
    window.location.href = `view.html?report=${report}`;
  };

  // Adiciona o botão na tela
  reportList.appendChild(button);
});
