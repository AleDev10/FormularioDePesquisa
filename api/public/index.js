//Elementos html
const respotas = document.getElementById("resposta1");
const btnEnviar = document.getElementById("btn-enviar");

 async function enviarResposta(texto) {
  const resposta = await fetch("http://localhost:5000/enviar",{
    method: "POST",
    headers:{
      "content-type": "application/json"
    },
    body: JSON.stringify({ text: texto })
  })
  console.log("Resposta: ", texto);
}

function verificarTextos(texto = "") {
  if (texto != "") {
    enviarResposta(texto);
  } else {
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
