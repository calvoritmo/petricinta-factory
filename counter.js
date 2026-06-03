import { listenIronIncrement } from './counterProcess.js'

let iron = 0;
const ironCount = document.getElementById('iron-count');
ironCount.textContent = iron;

listenIronIncrement(() => {
    iron++;
    ironCount.textContent = iron;
})

export function setup() {
    console.log('Setup Counter');
}
