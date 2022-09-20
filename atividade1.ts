/*
Crie uma classe cliente e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto cliente, defina as instâncias deste objeto e apresente as informações deste objeto no console.
*/

class Cliente {
    nome: string;
    sobrenome: string;
    endereco: string;
    idade: number;

    mostrarInformacoes() {
        console.log(`Cliente: ${this.nome} ${this.sobrenome}\nIdade: ${this.idade}\nEndereço: ${this.endereco}.\n`)
    }
}

const cl1 = new Cliente();
cl1.nome = "João"
cl1.sobrenome = "Silva"
cl1.idade = 30
cl1.endereco = "Rua das Palmeiras, 18"

cl1.mostrarInformacoes();

const cl2 = new Cliente();
cl2.nome = "Ana"
cl2.sobrenome = "Ferreira"
cl2.idade = 28
cl2.endereco = "Rua das Coqueiros, 3504"

cl2.mostrarInformacoes();