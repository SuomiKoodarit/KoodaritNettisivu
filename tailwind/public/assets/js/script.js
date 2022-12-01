function christmasTheme() {
    let getDate = new Date();
    currentMonth = getDate.getMonth();

    if (currentMonth === 11) {
        var changeLogo = document.getElementById("logo")
        changeLogo.src = "assets/imgs/Logo.png";
    }
}
christmasTheme();