/**
 * Interfaz que establece la forma que deben tener los objetos que representen una pila.
 */
export interface LIFO<T> {
  /**
   * Método que añade un elemento a la pila.
   * @param elemento El elemento que se quiere añadir.
   */
  push(elemento: T): void;

  /**
   * Método que extrae el ultimo elemento insertado en la pila.
   */
  pop(): T;

  /**
   * Método que devuelve el ultimo elemento insertado en la pila sin extraerlo.
   */
  pseek(): T;

  /**
   * Método que devuelve el número de elementos que contiene la pila.
   */
  size(): number;

  /**
   * Método que visualiza el contenido de la pila.
   */
  print(): string;
}
