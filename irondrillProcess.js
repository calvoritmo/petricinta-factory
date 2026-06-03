import { notifyCounter } from "./approval.js";
import { getLockConfCoalDrill } from "./barrier.js";
import { setLockConfIronDrill } from "./barrier.js";
import { barrierExitIronDrill } from "./barrier.js";

const EmptyNoFuel = "emptynofuel";
const EmptyWithFuel = "emptywithfuel";
const Full = "full";

let state = EmptyNoFuel;

let notifiedGetIron = false;
export function fireGetIron() {
    notifiedGetIron = true;
}

(function mainLoop() {
    // Notify
    if (state == Full) {
        notifyCounter();
    }
    // Receive notifications
    let _notifiedGetIron = notifiedGetIron;
    notifiedGetIron = false;
    // Gossip and lock
    if (state == EmptyNoFuel) {
        setLockConfIronDrill(1.0);
    }
    // Transition
    if (state == EmptyNoFuel) {
        if (getLockConfCoalDrill() >= 1.0) {
            state =  EmptyWithFuel
        document.getElementById('stateEmptyWithFuel').style.display = "";
        document.getElementById('stateIronFull').style.display = "none";
        document.getElementById('stateEmptyNoFuel').style.display = "none";
            barrierExitIronDrill();
            console.log("EmptyNoFuel -> EmptyWithFuel");
        }
    } else if (state == EmptyWithFuel && _notifiedGetIron) {
        state = Full
        document.getElementById('stateEmptyWithFuel').style.display = "none";
        document.getElementById('stateIronFull').style.display = "";
        document.getElementById('stateEmptyNoFuel').style.display = "none";
        console.log("EmptyWithFuel -> Full");
    } else if (state == Full) {
        state = EmptyNoFuel
        document.getElementById('stateEmptyWithFuel').style.display = "none";
        document.getElementById('stateIronFull').style.display = "none";
        document.getElementById('stateEmptyNoFuel').style.display = "";
        console.log("Full -> EmptyNoFuel");
    }

    setTimeout(mainLoop, 100);
})();
