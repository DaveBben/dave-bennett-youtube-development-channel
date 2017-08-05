function doAfterDelay() {
    return new Promise(function (resolve, reject) {
        resolve(console.log("B"));
    });

}

(function start() {
    console.log("A");
    setTimeout(function () {
        doAfterDelay().then(function() {
            console.log("C");
        })
    }, 3000);

})();

