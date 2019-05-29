import {jsObj} from './prop';
import * as namespace from './prop';

class Base {
    get prop() { return 1; }
    get prop2() { return 1; }
    get prop3() { return 1; }
    get prop4() { return 1; }
    get prop5() { return 1; }
    set prop5(_) {}
    get [name]() { return 1; }
    get [Symbol.toStringTag]() {return 'A'};
}

abstract class AbstractDerived extends Base {
    prop = 1;
}

class Incomplete extends implements Object {
    prop = 1;
}

class Implements implements Base {
    prop: number;
    prop2: number;
    prop3: number;
    prop4: number;
    prop5: number;
    [Symbol.toStringTag]: string;
}

const prop4 = 'prop4';
export class Derived extends Base {
    prop = 1;
    'prop2' = 1;
    'prop3' = 1;
    [prop4] = 1;
    prop5 = 1;
    [name] = 1;
    [Symbol.toStringTag] = 'B';
}

/** @class */ class Derived2 extends ((): new () => Readonly<Record<'foo', number>> => undefined!)() {
    foo = 1;
}

class Derived3 extends ((): new () => {readonly [K in 'bar']: number} => undefined!)() {
    bar = 1;
}

type Mutable<T> = {-readonly [K in keyof T]: T[K]};

class Derived4 extends ((): new () => Mutable<Readonly<Record<'baz', number>>> => undefined!)() {
    baz = 1;
}
class Derived4_1 extends ((): new () => Mutable<{readonly baz: number}> => undefined!)() {
    baz = 1;
}

class Derived5 extends ((): new () => Pick<Readonly<Record<'bas', number>>, 'bas'> => undefined!)() {
    bas = 1;
}

class Derived6 extends ((): new () => Partial<Readonly<Record<'foo', number>>> & Pick<Readonly<{bar: number} & {baz: number}>, 'baz'> => undefined!)() {
    foo = 1;
    bar = 1;
    baz = 1;
}

const obj = {const: 1 + 1} as const;

class Derived7 extends ((): new() => typeof obj => undefined!)() {
    const = 1;
}
class Derived7_1 extends ((): new() => Mutable<typeof obj> => undefined!)() {
    const = 1;
}

class Derived8 extends ((): new() => readonly [number, string] => undefined!)() {
    0 = 1;
}
class Derived8_1 extends ((): new() => Pick<readonly [number, number], 1> => undefined!)() {
    1 = 1;
}

class Derived9 extends ((): new () => Pick<{readonly [K: string]: number} | {prop: number}, 'prop'> => undefined!)() {
    prop = 1;
}

class TsClass extends ((): new() => typeof jsObj => undefined!)() {
    a = 1;
    b = 1;
    c = 1;
    d = 1;
    e = 1;
    f = 1;
}

class Derived10 extends ((): new () => typeof namespace => undefined!)() {
    jsObj: any;
}

namespace namespace2 {
    export const v: number = 1;
}

class Derived10_1 extends ((): new () => typeof namespace2 => undefined!)() {
    v = 1;
}
