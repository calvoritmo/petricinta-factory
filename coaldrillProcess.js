import { setLockConfCoalDrill } from "./barrier.js";
import { getLockConfIronDrill } from "./barrier.js";
import { barrierExitCoalDrill } from "./barrier.js";

const Empty = "empty";
const Full = "full";
const Dispatched = "dispatched";

let state = Empty;

let notifiedGetCoal = false;
export function fireGetCoal() {
    notifiedGetCoal = true;
}

(function mainLoop() {
    // Notify
    // Receive notifications
    let _notifiedGetCoal = notifiedGetCoal;
    notifiedGetCoal = false;
    // Gossip and lock
    if (state == Full) {
        setLockConfCoalDrill(1.0);
    }
    // Transition
    if (state == Empty && _notifiedGetCoal) {
        state = Full
        document.getElementById('stateEmpty').style.display = "none";
        document.getElementById('stateCoalFull').style.display = "";
        document.getElementById('stateDispatched').style.display = "none";
        console.log("Empty -> Full");
    } else if (state == Full) {
        if (getLockConfIronDrill() >= 1.0) {
            state =  Dispatched
        document.getElementById('stateEmpty').style.display = "none";
        document.getElementById('stateCoalFull').style.display = "none";
        document.getElementById('stateDispatched').style.display = "";
            barrierExitCoalDrill();
            console.log("Full -> Dispatched");
        }
    } else if (state == Dispatched) {
        state = Empty
        document.getElementById('stateEmpty').style.display = "";
        document.getElementById('stateCoalFull').style.display = "none";
        document.getElementById('stateDispatched').style.display = "none";
        console.log("Dispatched -> Empty");
    }

    setTimeout(mainLoop, 100);
})();
