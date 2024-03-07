import { Clubes } from "./modules/timesData.mjs";

let ordemPontos = () => {
    Clubes.sort(function (a, b) {
      if (a.pontos < b.pontos) {
        return 1;
      }
      if (a.pontos > b.pontos) {
        return -1;
      }
      
      return 0;
    })
}

let ordemGols = () => {
  Clubes.sort(function (a, b) {
    if (a.gp < b.gp) {
      return 1;
    }
    if (a.gp > b.gp) {
      return -1;
    }
    
    return 0;
  })
}

const btnPontos = document.getElementById("btnPontos");
const btnGols = document.getElementById("btnGols");
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

let gerarTabela = () =>{
  res.innerHTML = ""

  let i;

  for(i = 0; i <= Clubes.length; i++){
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