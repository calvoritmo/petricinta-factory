import { fireGetIron } from './irondrillProcess.js'

document.getElementById('iron-drill-btn').addEventListener('click', () => {
    fireGetIron();
});

export function setup() {
    console.log('Setup Iron Drill');
}
