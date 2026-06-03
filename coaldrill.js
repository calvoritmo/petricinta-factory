import { fireGetCoal } from './coaldrillProcess.js'

document.getElementById('coal-drill-btn').addEventListener('click', () => {
    fireGetCoal();
});

export function setup() {
    console.log('Setup Coal Drill');
}
