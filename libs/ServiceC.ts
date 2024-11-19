import {doSomethingA} from './ServiceA';

export function doSomethingC(): string {
    const startTime = global.performance.now();
    const result = 'Service C is doing something';
    const endTime = global.performance.now();
    console.log(`ServiceC Operation took: ${endTime - startTime}ms`);
    return result;
}

export function useServiceA(): string {
    const startTime = global.performance.now();
    const result = doSomethingA();
    const endTime = global.performance.now();
    console.log(`ServiceC->ServiceA Call took: ${endTime - startTime}ms`);
    return result;
}
