import { Clubes } from "./timesData.mjs";

export let ordemPontos = () => {
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

export let ordemGols = () => {
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

export let ordemNome = () => {
    Clubes.sort(function (a, b){
        if(a.nome > b.nome){
            return 1;
        }
        if(a.nome < b.nome){
            return -1
        }
        return 0;
    })
}

export let ordemVitoria = () => {
    Clubes.sort(function (a, b){
        if(a.vitoria < b.vitoria){
            return 1;
        }
        if(a.vitoria > b.vitoria){
            return -1
        }
        return 0;
    })
}

export let ordemDerrota = () => {
    Clubes.sort(function (a, b){
        if(a.derrota < b.derrota){
            return 1;
        }
        if(a.derrota > b.derrota){
            return -1
        }
        return 0
    })
}