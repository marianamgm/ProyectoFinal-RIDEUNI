fetch("/Functions/navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    document.getElementById("btnLogin").addEventListener("click", () => {
      window.location.href = "/Authentication/login.html";
    });

    document.getElementById("btnRegister").addEventListener("click", () => {
      window.location.href = "/Authentication/register.html";
    });
  });
