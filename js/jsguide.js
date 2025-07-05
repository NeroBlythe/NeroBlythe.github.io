POPUP BUTTONS


HTML

    <button onclick="(functionname()) ex. show()">
    (button text)
        </button>

        <p id="???">
            (optional text that will be replaced)
        </p>

JS

function ((name of funtion) ex.) show() {
    document.getElementById("textid").innerHTML = "replacement text";
}