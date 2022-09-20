/*
Crie uma classe produto eletrônico e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto produto eletrônico, defina as instâncias deste objeto e apresente as informações deste objeto no console.
*/

class ProdutoEletronico {
    nome: string;
    marca: string;
    preco: number;

    mostrarInformacoes(){
        console.log(`Produto: ${this.nome}\nMarca: ${this.marca}\nPreço: R$${this.preco.toFixed(2)}\n`)
    }
}

const prod1 = new ProdutoEletronico();
prod1.nome = "TV 4k";
prod1.marca = "Samsung"
prod1.preco = 4799.99;

prod1.mostrarInformacoes();

const prod2 = new ProdutoEletronico();
prod2.nome = "Iphone";
prod2.marca = "Apple";
prod2.preco = 8999.99;

prod2.mostrarInformacoes();
