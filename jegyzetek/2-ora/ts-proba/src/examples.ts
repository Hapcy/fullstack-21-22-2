let a: any = 1;
a = 'asd';
a = () => {};

let n: number = 1;
// n = 'asd';

const arr: number[] = [1, 2];
const arrAny = [];
const arrNum = [1, 2];
const arrMixed = [1, 'ketto'];

let tuple: [number, number] = [1, 2];
tuple = [4, 5];
// const tupleNumberString: [number, string] = arrMixed;

const obj = {};
// obj.x = 5;
const obj2 = { x: 0 };
obj2.x = 5;

type TBasket = {
  apples: number;
};

interface IBasket {
  apples: number;
}

class Basket {
  apples!: number;
  // apples?: number;
  // apples: number;

  // getApples() {
  //   return this.apples;
  // }
}

const basket = { apples: 1 };
const basketT: TBasket = basket;
const basketI: IBasket = basket;
const basketKlass: Basket = basket;
console.log(basket instanceof Basket); // false
console.log(basketKlass instanceof Basket); // false

enum Fruit {
  pear,
  apple = 'APPLE',
}

function log(level: 'info' | 'warn' | 'error') {
  return function (
    _: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    return {
      ...descriptor,
      value: function (...args: unknown[]) {
        console[level](propertyKey, '(', ...args, ')');
        return originalMethod.apply(this, args);
      },
    };
  };
}

class Logged {
  @log('error')
  identity(s: string) {
    return s;
  }
}

const logged = new Logged();
logged.identity('cica');

type TodoAction =
  | {
      type: 'add TODO';
      payload: { name: string };
    }
  | {
      type: 'remove TODO';
      payload: { id: number };
    };

function reduce(action: TodoAction) {
  switch (action.type) {
    case 'add TODO': {
      console.log(action.payload.name);
      break;
    }
    case 'remove TODO': {
      console.log(action.payload.id);
    }
  }
}

type OptionalBasket = {
  [key in keyof IBasket]?: IBasket[key];
};

type MyPartial<T> = {
  [key in keyof T]?: T[key];
};

type OptionalBasket2 = MyPartial<IBasket>;
