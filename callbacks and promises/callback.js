function doAfterDelay(callBackFuntion) {
    return callBackFuntion(console.log("B"))
}


(function start() {
    console.log("A");
    setTimeout(function () {
        doAfterDelay(() => {
            console.log("C");
        })
    }, 3000);

})();

