
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

onmessage = function (event) {
    runWorker();
};
sleep(1000);
runWorker();

function runWorker(){
    sleep(4);
    postMessage("Done");
}


