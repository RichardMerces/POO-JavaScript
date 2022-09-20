/*
    Crie uma classe avião e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto avião, defina as instâncias deste objeto e apresente as informações deste objeto no console.
*/

class Aviao {
    marca: string;
    modelo: string
    capacidade: number;

    mostrarInformacoes() {
        console.log(`O avião ${this.marca} ${this.modelo} tem capacidade para ${this.capacidade} passageiros.`)
    }
}

let av1 = new Aviao();
av1.marca = "Airbus"
av1.modelo = "A320"
av1.capacidade = 140

let av2 = new Aviao();
av2.marca = "Boeing"
av2.modelo = "737"
av2.capacidade = 180

let av3 = new Aviao();
av3.marca = "Embraer"
av3.modelo = "E195"
av3.capacidade = 132

av1.mostrarInformacoes();
av2.mostrarInformacoes();
av3.mostrarInformacoes();