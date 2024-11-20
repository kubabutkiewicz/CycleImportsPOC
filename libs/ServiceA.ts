import * as ServiceB from './ServiceB';
import * as ServiceC from './ServiceC';

function doSomethingA(): number {
    const startTime = global.performance.now();
    let result = 0;
    for (let i = 0; i < 1e7; i++) {
        result += Math.sqrt(i);
    }
    const endTime = global.performance.now();
    console.log(`ServiceA Operation took: ${endTime - startTime}ms`);
    return result;
}

function useServiceB(): number {
    const startTime = global.performance.now();
    const result = ServiceB.doSomethingB();
    const endTime = global.performance.now();
    console.log(`ServiceA->ServiceB Call took: ${endTime - startTime}ms`);
    return result;
}

function testCircularA1(): string {
    return ServiceB.testCircularB2();
}

function testCircularA2(): string {
    return ServiceC.testCircularC1();
}

function complexChainA(): string {
    const result1 = ServiceB.useServiceC();
    const result2 = ServiceC.testCircularC2();
    return `Chain A: ${result1} + $ {result2}`;
}

export { doSomethingA, useServiceB, testCircularA1, testCircularA2, complexChainA };
