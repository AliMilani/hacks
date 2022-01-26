document.addEventListener(
    "input",
    function (e) {
        e = e || window.event;
        const target = e.target || e.srcElement;
        const isFarsi = /^[\u0600-\u06FF\s]+$/.test(target.value.split(" ")[0]);
        const hasDirection = target.style.cssText.includes("direction");

        if (
            !(target.style.direction == "rtl") &&
            isFarsi &&
            (!hasDirection || target.style.direction == "ltr")
        ) {
            target.style.direction = "rtl";
            console.log("{ set to rtl}");
        } else if (
            !(target.style.direction == "ltr") &&
            !isFarsi &&
            (!hasDirection || target.style.direction == "rtl")
        ) {
            console.log("{ set to ltr}");
            target.style.direction = "ltr";
        }
    },
    false
);
