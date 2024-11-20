import * as ServiceC from './ServiceC';
import * as ServiceA from './ServiceA';

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
    const result = ServiceC.doSomethingC();
    const endTime = global.performance.now();
    console.log(`ServiceB->ServiceC Call took: ${endTime - startTime}ms`);
    return result;
}

 function testCircularB1(): string {
    return ServiceC.testCircularC2();
}

 function testCircularB2(): string {
    return ServiceA.testCircularA2();
}

 function complexChainB(): string {
    const result1 = ServiceC.useServiceA();
    const result2 = ServiceA.testCircularA1();
    return `Chain B: ${result1} + ${result2}`;
}

export { doSomethingB, useServiceC, testCircularB1, testCircularB2, complexChainB };
