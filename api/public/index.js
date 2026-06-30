//Elementos html
let respostasPtontas=[];
let respotas = document.querySelectorAll(".entradas-info");
respotas = [...respotas];
const btnEnviar = document.getElementById("btn-enviar");

 async function enviarResposta(conteudo) {
  const resposta = await fetch("https://formulario-de-pesquisa-psi.vercel.app/enviar",{
    method: "POST",
    headers:{
      "content-type": "application/json"
    },
    body: conteudo
  })
  
  alert("enviado com sucesso");
  console.log("enviado com sucesso");
  console.table(conteudo);
}

function filtrar_respostas(filhasRespostas){
  if(filhasRespostas!=""){
    var especial = /[^a-zA-Z0-9 ,.ç~`´;:\s]/.test(filhasRespostas);
  } 
  return especial;
}

function verificarTextos(conteudo) {
  let conteudos =  JSON.stringify(conteudo);  
  enviarResposta(conteudos);
  ApagarCampos(respotas);
}

function ApagarCampos(respostas){
  respostas.map((filhasRespostas)=>{
    filhasRespostas.value="";
  })
}

function verificarContiudo(){
  let conteudoVasio=false;
  respotas.map((conteudo)=>{
    if(conteudo.value==""){
      conteudoVasio=true;
    }
  });
  if(conteudoVasio==true){
    alert("Algum campo está vazio");
  }else{
    analizarCampos();
  }
}

function montarObjeto(conteudo) {
  let preRespostas = {
    respota1:conteudo[0],
    respota2:conteudo[1],
    respota3:conteudo[2],
    respota4:conteudo[3],
    respota5:conteudo[4],
    respota6:conteudo[5],
    respota7:conteudo[6],
    respota8:conteudo[7],
    respota9:conteudo[8],
    respota10:conteudo[9],
    respota11:conteudo[10]
  }
  
  verificarTextos(preRespostas);
}

function analizarCampos() {
  let analizeRespostas = [];
  for (let i=0;i<respotas.length;i++){
    analizeRespostas[i]=filtrar_respostas(respotas[i].value);
  }
  let resanalizeRespostas;
 for (let i=0;i<analizeRespostas.length-1;i++){
    resanalizeRespostas=(analizeRespostas[i]||analizeRespostas[i+1]);
  }
  if(resanalizeRespostas==true){
    alert("Problemas com as respostas.");
  }else{
    for (let i = 0;i<respotas.length; i++) {
      respostasPtontas[i]=respotas[i].value;
    }
    montarObjeto(respostasPtontas);
    
  }
}

btnEnviar.addEventListener("click", () => {
  verificarContiudo();
});
