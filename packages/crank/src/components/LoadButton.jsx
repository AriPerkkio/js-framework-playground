/** @jsx createElement */
import { createElement } from '@bikeshaving/crank';

export default function* LoadButton({ onUserLoad }) {
    let userIndex = 1;
    let disabled = false;

    this.addEventListener('click', () => {
        disabled = true;
        this.refresh();

        fetch(`https://jsonplaceholder.typicode.com/users/${userIndex}`)
            .then(response => response.json())
            .then(onUserLoad)
            .then(() => {
                disabled = false;
                userIndex++;
                this.refresh();
            });
    });

    while (true) {
        yield (
            <button disabled={disabled} className='load-button'>
                Load next user
            </button>
        );
    }
}
