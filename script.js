// Função de login
async function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  try {
    const response = await fetch("data/users.json");
    const users = await response.json();

    const found = users.find(u => u.username === user && u.password === pass);

    if (found) {
      sessionStorage.setItem("user", JSON.stringify(found));
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("error-message").textContent = "Usuário ou senha incorretos.";
    }
  } catch (error) {
    console.error("Erro ao buscar o arquivo users.json", error);
    alert("Erro ao fazer login. Verifique o console.");
  }
}

// Ao carregar dashboard
if (window.location.pathname.includes("dashboard.html")) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (!user) {
    window.location.href = "index.html";
  }

  const container = document.getElementById("report-list");
  user.reports.forEach(id => {
    const link = document.createElement("a");
    link.href = `view.html?id=${id}`;
    link.textContent = `Relatório: ${id}`;
    link.className = "report-link";
    container.appendChild(link);
    container.appendChild(document.createElement("br"));
  });
}
