/*
    Crie uma classe funcionário e apresente os atributos e métodos referentes esta classe, em seguida crie um objeto funcionário, defina as instâncias deste objeto e apresente as informações deste objeto no console.
*/

class Funcionario {
    nome: string;
    sobrenome: string;
    cargo: string;
    departamento: string;
    salario: number;

    mostrarInformacoes() {
        console.log(`Funcionário ${this.nome} ${this.sobrenome}, trabalha no departamento ${this.departamento} como ${this.cargo}, seu salário atual é R$${this.salario.toFixed(2)}`)
    }
}

const f1 = new Funcionario();

f1.nome = "João";
f1.sobrenome = "Souza";
f1.cargo = "Analista";
f1.departamento = "Financeiro";
f1.salario = 3500.00;

f1.mostrarInformacoes();