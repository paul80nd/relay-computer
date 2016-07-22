export interface IObservable<T> {
    subscribe(handler: {(e: T): void}): void;
    unsubscribe(handler: {(e: T): void}): void;
}

export class Observable<T> implements IObservable<T> {

    private observers: {(e: T): void}[];

    constructor() {
        this.observers = [];
    }

    public subscribe(handler: {(e: T): void}): void {
        this.observers.push(handler);
    }

    public unsubscribe(handler: {(e: T): void}): void {
        this.observers = this.observers.filter(h => h !== handler);
    }

    protected notifyObservers(e: T): void {
        this.observers.slice(0).forEach(h => h(e));
    }
}
