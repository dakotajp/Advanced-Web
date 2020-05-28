function changeTitleCSSStyle(a) {

    var title = document.querySelector("#mainTitle");
    title.style.color = 'black';
    title.style.ba
    ckgroundColor = a;
    document.body.style.background = a;
    alert("Change the value to: " + a)
    return true;
}

function myFunction(x, y) {
    var i;
    i = 0xFFF100

    var string1 = "#" + i
    for (var j = 0x000011; j < 0xFFFFFE; i += 101) {
        changeTitleCSSStyle(string1)
    }



}