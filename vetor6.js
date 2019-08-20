funticon exe6(){
    var nomes = []
    var vendas = []
    var comissoes = []
//
    for (var i=0;i<5;i++){
        nomes.push(prompt("Informe o nome: "));
        vendas.push(Number("Infome o total de vendas"))
        comissoes.push(Number("Informe a comissão"))
    }
//
    var receber = []
    for(var i=0;i<5;i++){
        receber.push(vendas[i] * comissoes[i] / 100)
    }
alert(nomes + "/n" + receber)
alert(nomes + "/n" + vendas)
    var maior = receber[0]
    var menor = receber[0]
    var NomeMaior = [0]
    var NomeMenor = [0]
        for(var i=0;i<5;i++){
            if(receber[i] > maior){
                maior = receber[i]
                NomeMaior = nomes[i]
            }
            if(receber[i] < menor){
                menor = receber[i]
                NomeMenor = nomes[i]
            }
        }
alert("Maior valor digitado" + NomeMaior + " - " + maior)
alert("Menor valor" + NomeMenor + " - " + menor)
}