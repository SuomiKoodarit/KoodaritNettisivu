function christmasTheme() {
    let d = new Date();
    n = d.getMonth();

    if (n == 11) {
        var changeLogo = document.getElementById("logo")
        changeLogo.src = "/assets/imgs/logo.png";
    }
}
christmasTheme();