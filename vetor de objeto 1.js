function funcao(){
// cria o vetor
    var vet = []
// cria o objeto
    var objeto = {}
// cira os produtos
    for(var i=0;i<5;i++){    
        objeto.codigo = Number(prompt("Informe o código: "))
        objeto.nome = prompt("Informe o nome do produto: ")
        objeto.qtnd = Number(prompt("Infome a quantidade: "))
        objeto.preco = Number(prompt("Informe o preço: "))

        vet.push(objeto)
    alert("Produto criado com sucesso")
    }
    var estoque = 0
        for(var i=0;i<5;i++){
            estoque = estoque + vet[1].qtnd
        }
        alert("A quantidade em estoque é de " + estoque)
}