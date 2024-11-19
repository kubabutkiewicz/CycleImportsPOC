import {doSomethingB} from './ServiceB';

export function doSomethingA(): string {
    const startTime = global.performance.now();
    const result = 'Service A is doing something';
    const endTime = global.performance.now();
    console.log(`ServiceA Operation took: ${endTime - startTime}ms`);
    return result;
}

export function useServiceB(): string {
    const startTime = global.performance.now();
    const result = doSomethingB();
    const endTime = global.performance.now();
    console.log(`ServiceA->ServiceB Call took: ${endTime - startTime}ms`);
    return result;
}
