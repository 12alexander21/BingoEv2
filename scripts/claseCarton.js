class claseCarton {
  constructor() {
    const longitudCarton = 9;
    this.carton = [];

    let numero = 0;

    let fila1 = [];
    let fila2 = [];
    let fila3 = [];

    this.carton.push(fila1);
    this.carton.push(fila2);
    this.carton.push(fila3);

    for (let i = 0; i < this.carton.length; i++) {
      for (let j = 0; j < longitudCarton; j++) {
        do {
          numero = 0;
          if (j !== 0) {
            numero = parseInt(`${j}${this.getNumeroInt(0, 10)}`);
          } else {
            numero = this.getNumeroInt(0, 10);
          }
        } while (
          (numero === 0 && j === 0) ||
          this.carton[0][j] === numero ||
          this.carton[1][j] === numero
        );

        this.carton[i].push(numero);
      }
    }
    this.ordenarCasillas();
    this.taparCasillas();
  }

  getNumeroInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  ordenarCasillas() {
    let numeros = [];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 3; j++) {
        numeros[j] = this.carton[j][i];
      }
      numeros.sort((a, b) => a - b);
      for (let j = 0; j < 3; j++) {
        this.carton[j][i] = numeros[j];
      }
    }
  }

  taparCasillas() {
    const tapadasPorFila = 4; //Cantidad de casilla a tapar por fila
    const longitudCarton = 9;
    let numero = 0; //Almacena un numero aleatorio

    let totalTapados = []; //Controla las casillas tapadas por fila
    let fila1 = [];
    let fila2 = [];
    let fila3 = [];

    totalTapados.push(fila1);
    totalTapados.push(fila2);
    totalTapados.push(fila3);

    for (let i = 0; i < totalTapados.length; i++) {
      for (let j = 0; j < longitudCarton; j++) {
        totalTapados[i].push(0);
      }
    }
    for (let i = 0; i < totalTapados.length; i++) {
      for (let j = 0; j < tapadasPorFila; j++) {
        do {
          numero = this.getNumeroInt(0, 9);
        } while (
          totalTapados[i][numero] === 1 ||
          (totalTapados[0][numero] === 1 && totalTapados[1][numero] === 1)
        );

        this.carton[i][numero] = 0;
        totalTapados[i][numero] = 1;
      }
    }
  }
}
