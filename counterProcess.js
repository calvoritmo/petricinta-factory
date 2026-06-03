import { listenIronDrill } from './approval.js'

let notify = ()=>{};

const Clean = "clean";
const Dirty = "dirty";

let state = Clean;

let notifiedIronDrill = false;

listenIronDrill(function sendNotification() {
    notifiedIronDrill = true;
});

(function mainLoop() {
    // Notify
    if (state == Dirty) {
        notify();
    }
    // Receive notifications
    let _notifiedIronDrill = notifiedIronDrill;
    notifiedIronDrill = false;
    // Gossip and lock
    // Transition
    if (state == Clean && _notifiedIronDrill) {
        state = Dirty;
        document.getElementById('stateClean').style.display = "none";
        document.getElementById('stateDirty').style.display = "";
    } else if (state == Dirty) {
        state = Clean;
        document.getElementById('stateClean').style.display = "";
        document.getElementById('stateDirty').style.display = "none";
    }

    setTimeout(mainLoop, 100);
})();

export function listenIronIncrement(callback) {
    notify = callback;
}
