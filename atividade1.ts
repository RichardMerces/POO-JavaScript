/*
Crie uma classe cliente e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto cliente, defina as instâncias deste objeto e apresente as informações deste objeto no console.
*/

class Cliente {
    nome: string;
    sobrenome: string
    idade: number;
    
    constructor(nome: string, sobrenome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
        this.sobrenome = sobrenome;
    }

    mostrarInformacoes():void {
        console.log(`Cliente: ${this.nome} ${this.sobrenome}\nIdade: ${this.idade}`)
    }
}

let cliente1 = {
    nome: "José",
    sobrenome: "Silva",
    idade: 26
}

let cl1 = new Cliente(cliente1.nome,cliente1.sobrenome,cliente1.idade);

cl1.mostrarInformacoes();