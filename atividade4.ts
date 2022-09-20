/*
    Crie uma classe funcionário e apresente os atributos e métodos referentes esta classe, em seguida crie um objeto funcionário, defina as instâncias deste objeto e apresente as informações deste objeto no console.
*/

class Funcionario {
    nome: string;
    sobrenome: string;
    cargo: string;
    departamento: string;
    salario: number;
    
    constructor(nome: string, sobrenome: string, cargo: string, departamento: string, salario: number) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cargo = cargo;
        this.departamento = departamento;
        this.salario = salario;
    }

    mostrarInformacoes():void {
        console.log(`Funcionário ${this.nome} ${this.sobrenome}, trabalha no departamento ${this.departamento} como ${this.cargo}, seu salário atual é R$${this.salario.toFixed(2)}`)
    }
}

let funcio1 = {
    nome: "João",
    sobrenome: "Souza",
    cargo: "Analista",
    departamento: "Financeiro",
    salario: 3500.00
}

let f1 = new Funcionario(funcio1.nome, funcio1.sobrenome, funcio1.cargo, funcio1.departamento, funcio1.salario);

f1.mostrarInformacoes();