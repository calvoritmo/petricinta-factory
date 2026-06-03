let approvalIronDrillToCounter = () => {};

export function listenIronDrill(callback) {
    approvalIronDrillToCounter = callback;
}

export function notifyCounter(){
    approvalIronDrillToCounter();
}
