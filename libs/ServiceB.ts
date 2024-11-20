import {doSomethingC, useServiceA} from './ServiceC';
import {doSomethingA} from './ServiceA';

function doSomethingB(): number {
    const startTime = global.performance.now();
    let result = 0;
    for (let i = 0; i < 1e7; i++) {
        result += Math.sqrt(i);
    }
    const endTime = global.performance.now();
    console.log(`ServiceB Operation took: ${endTime - startTime}ms`);
    return result;
}

function useServiceC(): number {
    const startTime = global.performance.now();
    const result = doSomethingC();
    const endTime = global.performance.now();
    console.log(`ServiceB->ServiceC Call took: ${endTime - startTime}ms`);
    return result;
}

function testCircularB1(): number {
    return doSomethingC();
}

function testCircularB2(): number {
    return doSomethingA();
}

function complexChainB(): number {
    const result1 = useServiceA();
    const result2 = testCircularB1();
    return result1 + result2;
}

export { doSomethingB, useServiceC, testCircularB1, testCircularB2, complexChainB };
