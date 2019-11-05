class EventBus {
    constructor() {
        this._bus = document.createElement('meta');
    }

    subscribe(event, callback) {
        this._bus.addEventListener(event, callback);
    }

    unsubscribe(event, callback) {
        this._bus.removeEventListener(event, callback);
    }

    fire(event, detail) {
        this._bus.dispatchEvent(new CustomEvent(event, { detail }));
    }
}

export default new EventBus();
