import {doSomethingB, useServiceC} from './ServiceB';
import {doSomethingC, testCircularC2} from './ServiceC';

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
    const result = doSomethingB();
    const endTime = global.performance.now();
    console.log(`ServiceA->ServiceB Call took: ${endTime - startTime}ms`);
    return result;
}

function testCircularA1(): number {
    return doSomethingB();
}

function testCircularA2(): number {
    return doSomethingC();
}

function complexChainA(): number {
    const result1 = useServiceC();
    const result2 = testCircularC2();
    return result1 + result2;
}

export { doSomethingA, useServiceB, testCircularA1, testCircularA2, complexChainA };
