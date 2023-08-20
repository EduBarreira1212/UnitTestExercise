const { number } = require("yargs");

function CalcularKM(distancia, combustivel) {
    if(Number.isInteger(distancia) && distancia>0){
        if(combustivel == "gasolina"){
            let quant = Math.round(distancia/16);
            return quant;
        }
        else if(combustivel == "etanol"){
            let quant = Math.round(distancia/11);
            return quant;
        }
    }
    return false;
}

module.exports = {CalcularKM};