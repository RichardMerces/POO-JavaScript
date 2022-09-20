/*
Crie uma classe produto eletrônico e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto produto eletrônico, defina as instâncias deste objeto e apresente as informações deste objeto no console.
*/

class ProdutoEletronico {
    nome: string;
    preco: number;
    
    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    mostrarInformacoes():void {
        console.log(`Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}`)
    }
}

let produto1 = {
    nome: "Televisão",
    preco: 4799.99
}

let pro1 = new ProdutoEletronico(produto1.nome, produto1.preco);

pro1.mostrarInformacoes();
