// Importações essenciais
const express = require("express");
const path = require("path");
require("dotenv").config();
const nodemailer = require("nodemailer");

const porta = process.env.PORTA || 3000;
const servico = process.env.SERVICO;
const emailOrigem = process.env.EMAIL_ORIGEM;
const emailDestino = process.env.EMAIL_DESTINO;
const senha = process.env.SENHA;

// configurações do servidor
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const transportador = nodemailer.createTransport({
  service: servico,
  auth: {
    user: emailOrigem,
    pass: senha,
  },
});

async function enviarEmail(texto) {
  try {
    const mensagem = await transportador.sendMail({
      from: emailOrigem,
      to: emailDestino,
      subject: "FORMULÁRIO DE PESQUISA (teste)",
      html: `
      <!doctype html>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      @font-face {
        font-family: "montserrat-regular";
        src: url(./assets/Montserrat-Regular.ttf) format("truetype");
      }
      @font-face {
        font-family: "montserrat-bold";
        src: url(./assets/Montserrat-Bold.ttf) format("truetype");
      }
      @font-face {
        font-family: "montserrat-black";
        src: url(./assets/Montserrat-Black.ttf) format("truetype");
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "montserrat-regular";
        font-size: 1rem;
        color: black;
      }
    </style>
    <title>Formulario</title>
  </head>
  <body>
    <div id="main">
      <div id="caixa-separador">
        <h2>PERGUNTAS/RESPOSTAS</h2>
        <div class="caixa-info">
          <p>1-Já usou este tipo de serviço?</p>
          <div class="entradas-info" id="resposta1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque delectus, repellendus natus debitis soluta sequi quaerat ex et numquam voluptates eum repudiandae cupiditate in voluptatem vel assumenda ad nulla officiis impedit atque qui minus unde earum similique. Dolorem tenetur tempore sit mollitia veniam earum aliquid magnam sed doloremque possimus officiis quasi illum inventore molestias quod qui natus maiores alias, reiciendis dicta unde. Nihil quas totam, porro reiciendis voluptates dicta pariatur quidem ipsam minima fugiat laborum sequi laudantium tempora molestiae, incidunt nesciunt ut quos vitae sed nobis ab iure cumque unde. Facere fuga praesentium iste vero rerum impedit incidunt a. Laborum, nulla eum. Officiis, dolores blanditiis recusandae doloribus id perspiciatis modi dolorum nihil non excepturi fuga ipsa nesciunt ex expedita cum eligendi nostrum dignissimos, autem porro accusantium voluptate sed, unde delectus? Reprehenderit sunt odit voluptatibus nesciunt blanditiis temporibus necessitatibus, fugiat quisquam cum aspernatur esse, voluptatum laborum cupiditate explicabo maxime numquam fugit?
          </div>
        </div>
        <div class="caixa-info">
          <p>2-O que já ouviu sobre este tipo de serviço?</p>
          <div class="entradas-info" id="resposta2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ex fugiat molestiae perferendis tempore tempora rem quos, numquam expedita aut delectus, accusantium esse ipsum repudiandae officiis voluptatem harum facilis officia obcaecati amet, eaque est laboriosam aperiam voluptatibus. Quaerat perferendis quam quibusdam asperiores quod hic maxime sit incidunt consequuntur quasi nihil libero, unde cumque ducimus. Deleniti velit sunt ex itaque atque quos expedita reiciendis cumque cum ab, quisquam quidem? Fugiat temporibus ducimus pariatur iure distinctio earum, ex, id porro inventore aut labore. Velit animi a quod tempore voluptatem dolores, aspernatur sint nam mollitia natus aperiam ratione maiores sunt dolore architecto itaque.
          </div>
        </div>
        <div class="caixa-info">
          <p>
            3-Gostaria de ter um intermediario a controlar o prosseço de
            transporte da encomenda?
          </p>
          <div class="entradas-info" id="resposta3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis architecto et fugiat animi magni, distinctio voluptas, error fuga est laudantium laborum? Ratione esse dolorum eligendi sequi, a voluptate temporibus eaque deleniti incidunt aliquam, nostrum, doloribus eum dolor exercitationem tempora dolores ipsa obcaecati illum officiis? Nostrum quam officia accusamus, iure placeat a quia ex molestiae voluptate deleniti ipsum, magni possimus dolore quasi distinctio optio? Mollitia omnis doloremque dolores vitae quia illo distinctio iste accusamus autem alias nesciunt quod magnam voluptatibus laboriosam, minus aperiam libero quos quibusdam consectetur modi velit ut incidunt. Nobis alias doloribus soluta, recusandae deleniti culpa corporis ab magni?
          </div>
        </div>
        <div class="caixa-info">
          <p>
            4-Acha que trocar o contato é a maneira mais segura de garantir que
            a encomenda chegue?
          </p>
          <div class="entradas-info" id="resposta4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe delectus esse accusantium labore eveniet praesentium repellendus libero voluptatem modi perspiciatis soluta porro corrupti doloribus repudiandae cupiditate, fuga pariatur quo ad magnam dolore numquam tempora. Odio tempora quisquam amet corporis harum voluptates porro natus modi aspernatur blanditiis laboriosam eum perspiciatis, illo mollitia minima minus, quod culpa est nam obcaecati. Reiciendis delectus distinctio consequuntur aut sit veniam iste quod ea eaque neque enim, quisquam fugit animi ipsum omnis quidem perferendis dolore harum doloribus. Dolores libero natus quaerat consequuntur nihil totam dolorum repellendus, ratione eaque hic quisquam dignissimos ducimus! Quas porro minima numquam reprehenderit dolores. Laudantium molestias, quisquam tempora necessitatibus distinctio, rerum quaerat, ullam sit maxime dolorum dolore obcaecati labore quis eaque repellendus harum omnis earum pariatur. Ad atque voluptatibus, quasi voluptas possimus omnis facere reprehenderit recusandae voluptatem dicta ea mollitia, eos inventore velit sapiente incidunt placeat, a itaque. Modi ipsum a reprehenderit.
          </div>
        </div>
        <div class="caixa-info">
          <p>5-O que farias se a encomenda não chegasse ao destino?</p>
          <div class="entradas-info" id="resposta5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque qui quam, hic dolorum repudiandae unde reprehenderit cumque tempora ut. Voluptate suscipit deleniti rerum atque laboriosam fugit exercitationem pariatur quod aliquam corrupti facere consequuntur incidunt ullam obcaecati debitis repudiandae, voluptatibus sit cupiditate at! Reiciendis fugiat ea incidunt voluptate saepe itaque omnis assumenda quod facere aut, sint praesentium natus consequatur. Animi dolorum fugiat atque consequuntur excepturi fuga maiores, voluptates aliquid? Repellendus unde veniam, porro ipsa non sed commodi, amet vel, aspernatur eius facilis ratione exercitationem accusantium hic earum! Consequatur ducimus labore consequuntur officia dolorem! Esse dolorum tenetur iusto nostrum enim cupiditate doloremque?
          </div>
        </div>
        <div class="caixa-info">
          <p>6-Confiarias a tua encomenda a um total estranho?</p>
          <div class="entradas-info" id="resposta6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vitae iste consequatur, quas consectetur asperiores debitis perspiciatis, repudiandae voluptatum, id voluptas placeat nobis! Corrupti, reprehenderit. In saepe, voluptatum ducimus totam eveniet omnis, nam fuga porro consectetur labore aliquid. Atque neque libero voluptatum quibusdam, beatae blanditiis officiis ad minima consequuntur optio asperiores qui obcaecati et dolores aperiam provident ipsam debitis repellat sequi explicabo quod pariatur necessitatibus hic facilis? Non nobis modi explicabo dignissimos aliquid incidunt assumenda quos, est nesciunt cumque molestiae, repellat atque dolorum laborum itaque architecto, fugiat sit nam cum unde magnam. Rerum sint harum at culpa, laborum dicta molestias!
          </div>
        </div>
        <div class="caixa-info">
          <p>7-Aceitarias fazer um dinheiro extra durante a sua viagem?</p>
          <div class="entradas-info" id="resposta7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda labore enim sapiente inventore repellendus ipsum facere voluptas amet id, veritatis fugit quam delectus et in esse error quas saepe? Consectetur repellat id nemo temporibus illo iusto similique voluptas atque quis nisi, voluptate doloribus, autem nihil sint perferendis accusamus minima, tempore eum vel? Neque ut pariatur maxime ratione doloremque harum temporibus debitis. Eos, assumenda tempore, facere perspiciatis asperiores aliquam non sit officiis porro molestias repellendus minima minus consectetur optio quia soluta molestiae excepturi. Itaque, est enim debitis aperiam magnam, atque voluptate porro, sit numquam iste totam. Veniam ut laboriosam dolorum tempora!
          </div>
        </div>
        <div class="caixa-info">
          <p>8-Que garantias darias ao dono da encomenda?</p>
          <div class="entradas-info" id="resposta8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nisi, odit saepe ratione officia necessitatibus alias ut iste, vitae, sit culpa? Officia provident recusandae, dignissimos necessitatibus rem laborum doloremque cupiditate dolore reiciendis odit, eum aliquam qui! Vel nulla molestiae beatae, recusandae nesciunt inventore totam ut. Incidunt alias voluptas laboriosam, et sapiente, illo vero ullam autem quaerat explicabo quidem culpa fugit illum. Molestias possimus id sint facilis, nisi nam nihil sequi magnam fugiat, aspernatur itaque impedit vero minima. Quibusdam qui tempore doloremque voluptas, illo error laboriosam est aperiam repellat quis ipsam accusantium pariatur. At consectetur eligendi mollitia quas commodi voluptate consequatur.
          </div>
        </div>
        <div class="caixa-info">
          <p>9-Como tu defines que uma pessoa pode levar a sua encomenda?</p>
          <div class="entradas-info" id="resposta9">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit ipsam, natus sequi numquam doloremque, autem explicabo itaque consectetur, nisi nam aliquam. Est dicta architecto consequuntur maiores pariatur omnis quidem voluptate aliquid aspernatur reprehenderit, magnam vitae alias obcaecati doloremque voluptas impedit nihil. Deserunt ut eligendi, repellendus ad officia magni impedit necessitatibus asperiores voluptate, ipsum vitae consequuntur perspiciatis praesentium quas repudiandae adipisci quidem placeat sapiente modi quasi nisi fuga commodi omnis neque? Soluta, suscipit recusandae! Laudantium libero facere cum corrupti doloribus adipisci expedita! Dignissimos, laudantium. Sint pariatur excepturi error nemo sit mollitia quas autem consequatur deserunt nesciunt, adipisci fugiat laborum. Blanditiis eaque placeat mollitia rem obcaecati quibusdam fuga repudiandae quia iure at eveniet corrupti nesciunt dignissimos voluptatibus corporis, praesentium dicta vitae, voluptate accusamus incidunt ducimus necessitatibus! Nobis sed aut, facilis sapiente consectetur, delectus dolore, facere minus esse unde in blanditiis! Voluptate iusto enim quas temporibus quibusdam, libero deleniti aspernatur est quis error!
          </div>
        </div>
        <div class="caixa-info">
          <p>
            10-Dirias que existe um problema na forma como estes serviços são
            executados atualmente?
          </p>
          <div class="entradas-info" id="resposta10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error blanditiis fugiat quo fugit cupiditate cumque. Saepe illo facere harum, quam vero, eius rem odit commodi perferendis expedita ipsa. Quidem ex distinctio voluptatem quae. Officia ex a nobis facere commodi debitis tenetur harum porro reprehenderit cumque maiores atque delectus cum saepe eaque, aut et magni quae impedit iure voluptates ipsa ut nihil vitae? Modi, deserunt. Voluptate doloremque facere dolorem nihil impedit, nulla quia alias excepturi, perspiciatis laborum aspernatur doloribus, qui ad nobis commodi? Perspiciatis ipsum quibusdam architecto ratione earum veritatis nihil excepturi molestias, optio velit eligendi ea ullam tenetur vero ex.
          </div>
        </div>
        <div class="caixa-info">
          <p>11-Como poderias melhorar esse tipo de serviço?</p>
          <div class="entradas-info" id="resposta11">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ipsum dignissimos culpa nobis quibusdam modi quasi. Architecto corrupti, molestias eligendi illo voluptas recusandae nesciunt quasi. Hic quidem ratione corrupti culpa perferendis nostrum harum facere ut esse, totam repellat quibusdam, voluptatibus eaque. Enim autem inventore quibusdam qui, minima odit voluptatum delectus voluptas deserunt aperiam, ratione natus alias excepturi ipsa corporis sint nostrum fuga debitis, commodi magnam ipsam dolorem quis eum? Impedit, tenetur ullam adipisci libero suscipit dolorem aspernatur. Rerum, consectetur quos. Vero et eveniet aspernatur mollitia aliquid, fuga veniam est vel fugit accusantium molestiae nemo saepe fugiat exercitationem cum repudiandae eum.
          </div>
        </div>
      </div>
      <p id="devs">
        Desenvolvedores:<br />Alexandre Junqueiro / Yurivaldo Domingos
      </p>
    </div>
  </body>
</html>

      `,
    });

    console.log("email enviado", mensagem.messageId);
  } catch (error) {
    console.log(" erro [enviarEmail()]", error);
  }
}

// Rotas
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/enviar", (req, res) => {
  let conteudo = req.body;
  enviarEmail(conteudo.text);
  res.json({ message: "Email enviado com sucesso!" });
});

/* app.listen(porta, () => {
  console.log(`Servidor rodando na porta http://localhost:${porta}`);
}); */

module.exports = app;
