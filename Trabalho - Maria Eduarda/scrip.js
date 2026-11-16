const formulario = document.getElementById("formulario");


formulario.addEventListener("submit", function(event) {
    event.preventDefault();


    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();


    if (nome === "" || email === "") {
        alert("Preencha todos os campos!");
    } else if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um e-mail válido!");
    } else {
        alert("Formulário enviado com sucesso!");
        formulario.reset();
    }
});
