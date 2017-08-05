function doAfterDelay() {
    console.log("B");
}


(function start() {
    console.log("A");
    setTimeout(function () {
        doAfterDelay()
    }, 3000);
    console.log("C");

})();

