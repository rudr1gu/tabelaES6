import { Clubes } from "./modules/timesData.mjs";
import { ordemGols, ordemPontos, ordemNome, ordemVitoria, ordemDerrota } from "./modules/ordem.mjs";

const btnPontos = document.getElementById("btnPontos");
const btnGols = document.getElementById("btnGols");
const btnNome = document.getElementById("btnNome");
const btnVitoria = document.getElementById("btnVitoria");
const btnDerrota = document.getElementById("btnDerrota");
 let res = document.getElementById("dadosTime")

btnPontos.addEventListener("click", () => {
  ordemPontos()
  gerarTabela()
  console.log("funcionou")
});

btnGols.addEventListener("click", () => {
  ordemGols()
  gerarTabela()
  console.log("funcionou")
});

btnNome.addEventListener("click", () => {
  ordemNome()
  gerarTabela()
  console.log("funcionou")
});

btnVitoria.addEventListener("click", () => {
  ordemVitoria()
  gerarTabela()
  console.log("funcionou")
});

btnDerrota.addEventListener("click", () => {
  ordemDerrota()
  gerarTabela()
  console.log("funcionou")
});


let gerarTabela = () =>{
  res.innerHTML = ""

  let i;

  for(i = 0; i < Clubes.length; i++){
      res.innerHTML += `<tr>
                              <td>${i+1}</td>
                              <td>${Clubes[i].nome}</td>
                              <td>${Clubes[i].vitoria}</td>
                              <td>${Clubes[i].empate}</td>
                              <td>${Clubes[i].derrota}</td>
                              <td>${Clubes[i].gp}</td>
                              <td>${Clubes[i].gs}</td>
                              <td>${Clubes[i].pontos}</td>
                          </tr>`
  }
}

gerarTabela();