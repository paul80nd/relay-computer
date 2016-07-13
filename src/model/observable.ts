export interface IObservable {
    subscribe(handler: {(): void}): void;
    unsubscribe(handler: {(): void}): void;
}

export class Observable implements IObservable {

    private observers: {(): void}[];

    constructor() {
        this.observers = [];
    }

    public subscribe(handler: {(): void}): void {
        this.observers.push(handler);
        this.notifyObservers();
    }

    public unsubscribe(handler: {(): void}): void {
        this.observers = this.observers.filter(h => h !== handler);
        this.notifyObservers();
    }

    protected notifyObservers(): void {
        this.observers.slice(0).forEach(h => h());
    }
}
