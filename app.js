//  var list = [];
const container = document.querySelector('.container');

function printBtn() {
    for (var i = 1; i < 1000; i++) {
        var btn = document.createElement("button");
        btn.style.backgroundColor = "gray";
        btn.style.width = "20px";
        btn.style.height = "20px";
        btn.onmouseover = function () {
            if (this.style.backgroundColor == "black") {
                this.style.backgroundColor = "gray";
            }
            else
                this.style.backgroundColor = "black";

        }
        container.append(btn);
    }
}
printBtn();