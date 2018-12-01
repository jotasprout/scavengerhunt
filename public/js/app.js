if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js")
        .then(function(registration) {
            console.log("page controlled by SW w scope: ", registration.scope);
        }).catch(function(err) {
            console.log("SW reg failed: ", err);
        });
}