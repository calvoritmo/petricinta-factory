let lockConfArrayCoalDrill = [0.0];
let lockConfArrayIronDrill = [0.0];
let epochCoalDrill = 0;
let epochIronDrill = 0;

let currentEpoch = 0;

function newEpoch() {
    currentEpoch++;
    lockConfArrayIronDrill.push([0.0]);
    lockConfArrayCoalDrill.push([0.0]);
}

export function setLockConfIronDrill(conf){
    lockConfArrayIronDrill[epochIronDrill] = conf;
}

export function setLockConfCoalDrill(conf){
    lockConfArrayCoalDrill[epochCoalDrill] = conf;
}

export function getLockConfIronDrill(){
    return lockConfArrayIronDrill[epochCoalDrill];
}

export function getLockConfCoalDrill(){
    return lockConfArrayCoalDrill[epochIronDrill];
}

export function barrierExitIronDrill(){
    epochIronDrill++;
    if (epochIronDrill > currentEpoch) {
        newEpoch();
    }
}

export function barrierExitCoalDrill(){
    epochCoalDrill++;
    if (epochCoalDrill > currentEpoch) {
        newEpoch();
    }
}
