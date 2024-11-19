import {doSomethingC} from './ServiceC';

export function doSomethingB(): string {
    const startTime = global.performance.now();
    const result = 'Service B is doing something';
    const endTime = global.performance.now();
    console.log(`ServiceB Operation took: ${endTime - startTime}ms`);
    return result;
}

export function useServiceC(): string {
    const startTime = global.performance.now();
    const result = doSomethingC();
    const endTime = global.performance.now();
    console.log(`ServiceB->ServiceC Call took: ${endTime - startTime}ms`);
    return result;
}
