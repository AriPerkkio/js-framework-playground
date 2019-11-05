import EventBus from '../state/event-bus.js';

class UserList extends HTMLElement {
    constructor() {
        super();

        // Create shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Create list
        const list = document.createElement('ul');
        list.setAttribute('class', 'user-list');

        // Create styles
        const style = document.createElement('style');
        style.textContent = UserListStyle;

        shadow.appendChild(style);
        shadow.appendChild(list);
    }

    onUserLoad = event => {
        const { name, email } = event.detail || {};
        const li = document.createElement('li');
        li.textContent = `${name} : ${email}`;

        this.shadowRoot.querySelector('ul.user-list').appendChild(li);
    };

    connectedCallback() {
        EventBus.subscribe('user-load', this.onUserLoad);
    }

    disconnectedCallback() {
        EventBus.unsubscribe('user-load', this.onUserLoad);
    }
}

const UserListStyle = `
.user-list li {
    margin-top: .5rem;
}`;

customElements.define('user-list', UserList);
