import * as ServiceA from './ServiceA';
import * as ServiceB from './ServiceB';

function doSomethingC(): number {
    const startTime = global.performance.now();
    let result = 0;
    for (let i = 0; i < 1e7; i++) {
        result += Math.sqrt(i);
    }
    const endTime = global.performance.now();
    console.log(`ServiceC Operation took: ${endTime - startTime}ms`);
    return result;
}

function useServiceA(): number {
    const startTime = global.performance.now();
    const result = doSomethingA();
    const endTime = global.performance.now();
    console.log(`ServiceC->ServiceA Call took: ${endTime - startTime}ms`);
    return result;
}

function testCircularC1(): string {
    return ServiceB.testCircularB1();
}

function testCircularC2(): string {
    return ServiceA.complexChainA();
}

function complexChainC(): string {
    const result1 = ServiceA.useServiceB();
    const result2 = ServiceB.complexChainB();
    return `Chain C: ${result1} + ${result2}`;
}

export { doSomethingC, useServiceA, testCircularC1, testCircularC2, complexChainC };
