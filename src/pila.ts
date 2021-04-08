import {LIFO} from './lifo';

/**
 * Clase que representa una pila.
 */
export class Pila<T> implements LIFO<T> {
  /**
   * Constructor de la clase.
   */
  constructor(private pila: T[] = []) {
    this.pila = pila;
  }

  /**
   * Método que permite añadir un elemento a la pila.
   * @param elemento El elemento a añadir.
   */
  push(elemento: T): void {
    this.pila.push(elemento);
  }

  /**
   * Método que permite extraer el último elemento insertado en la pila.
   * @returns El último elemento que se había insertado en la pila.
   */
  pop(): T {
    const aux: T = this.pila[this.pila.length - 1];
    this.pila.splice(this.pila.length - 1, 1);
    return aux;
  }

  /**
   * Método que devuelve el ultimo elemento insertado en la pila sin extraerlo.
   * @returns El último element
   */
  pseek(): T {
    return this.pila[this.pila.length - 1];
  }

  /**
   * Método que devuelve el número de elementos que contiene la pila.
   * @returns La cantidad de elementos que hay en la pila.
   */
  size(): number {
    return this.pila.length;
  }

  /**
   * Método que hace posible visualizar el contenido de la pila.
   * @returns Se devuelve el array que se muestra para facilitar la realización de pruebas sobre este método.
   */
  print(): string {
    let mostrarPila: string = '[  ';
    this.pila.forEach(function(elemento) {
      mostrarPila += elemento + '  ';
    });
    mostrarPila += ']';
    console.log(mostrarPila);
    return mostrarPila;
  }
}
