//Elementos html
const respotas = document.getElementById("resposta1");
const btnEnviar = document.getElementById("btn-enviar");

function enviarResposta(texto) {
    alert("Resposta: " + texto);
}

function verificarTextos(texto = "") {
  if (texto != "") {
    enviarResposta(texto);
  }else{
    alert("Problemas com as respostas.");
  }
}

function obterResposta() {
  let texto = respotas.value;
  verificarTextos(texto);
}

btnEnviar.addEventListener("click", () => {
    obterResposta();
});
