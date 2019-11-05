import EventBus from '../state/event-bus.js';

class LoadButton extends HTMLElement {
    userIndex = 1;

    constructor() {
        super();

        // Create shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Create button
        this.button = document.createElement('button');
        this.button.setAttribute('class', 'load-button');
        this.button.addEventListener('click', this._onClick.bind(this));
        this.button.textContent = 'Load next user';

        // Create styles
        const style = document.createElement('style');
        style.textContent = LoadButtonStyle;

        shadow.appendChild(style);
        shadow.appendChild(this.button);
    }

    toggleDisabled = () => {
        this.button.toggleAttribute('disabled');
    };

    _onClick() {
        this.toggleDisabled();

        fetch(`https://jsonplaceholder.typicode.com/users/${this.userIndex++}`)
            .then(response => response.json())
            .then(user => EventBus.fire('user-load', user))
            .then(this.toggleDisabled);
    }
}

const LoadButtonStyle = `
.load-button {
    font-family: monospace;
    font-weight: 600;
    cursor: pointer;
    color: white;
    background-color: black;
    height: 2rem;
    width: 10rem;
    border-radius: .75rem;
    border: 1px solid white;
    box-shadow: 0 0.1rem 0.5rem #000;
    outline: 0;
}

.load-button:active {
    transform: scale(0.9);
}

.load-button[disabled] {
    color: grey;
}`;

customElements.define('load-button', LoadButton);
