import 'mocha';
import {expect} from 'chai';
import {Pila} from '../src/pila';

const pilaNumber = new Pila<Number>();
const pilaString = new Pila<String>();

describe('Tests clase Pila con tipo de dato Number', () => {
  it('Un objeto de la clase Pila con tipo de dato Number se puede crear correctamente', () => {
    expect(pilaNumber).not.to.be.equal(null);
  });

  it('Es posible introducir un número en la pila de números', () => {
    pilaNumber.push(4);
    expect(pilaNumber.pseek()).to.be.equal(4);
  });

  it('Es posible extraer el último elemento insertado en la pila de números', () => {
    pilaNumber.push(9);
    pilaNumber.push(1);
    pilaNumber.push(10);
    expect(pilaNumber.pop()).to.be.equal(10);
  });

  it('Es posible obtener el último elemento insertado sin extraerlo de la pila de números', () => {
    pilaNumber.push(12);
    expect(pilaNumber.pseek()).to.be.equal(12);
  });

  it('Es posible obtener el número de elementos que contiene la pila de números', () => {
    expect(pilaNumber.size()).to.be.equal(4);
  });

  it('Es posible visualizar el contenido de la pila de números', () => {
    expect(pilaNumber.print()).to.be.equal('[  4  9  1  12  ]');
  });
});

describe('Tests clase Pila con tipo de dato String', () => {
  it('Un objeto de la clase Pila con tipo de dato String se puede crear correctamente', () => {
    expect(pilaNumber).not.to.be.equal(null);
  });

  it('Es posible introducir una cadena en la pila de string', () => {
    pilaString.push('dsi');
    expect(pilaString.pseek()).to.be.equal('dsi');
  });

  it('Es posible extraer el último elemento insertado en la pila de string', () => {
    pilaString.push('cya');
    pilaString.push('calculo');
    expect(pilaString.pop()).to.be.equal('calculo');
  });

  it('Es posible obtener el último elemento insertado sin extraerlo de la pila de string', () => {
    pilaString.push('algebra');
    expect(pilaString.pseek()).to.be.equal('algebra');
  });

  it('Es posible obtener el número de elementos que contiene la pila.', () => {
    expect(pilaString.size()).to.be.equal(3);
  });

  it('Es posible visualizar el contenido de la pila.', () => {
    expect(pilaString.print()).to.be.equal('[  dsi  cya  algebra  ]');
  });
});
