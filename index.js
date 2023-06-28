function previewFile() {
    var preview = document.querySelectorAll('img')[0];

    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
        preview.src = reader.result;
        cardpreview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
        cardpreview.src = "";
    }
}

document.querySelector(".btn").addEventListener("click", handleclick);

function handleclick(event) {
    event.preventDefault();
    var cardpreview = document.querySelectorAll('img')[1];
    var reader = new FileReader();
    var file = document.querySelector('input[type=file]').files[0];
    reader.onloadend = function() {
        cardpreview.src = reader.result;
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
        cardpreview.src = "";
    }
    document.getElementsByClassName("box2")[0].style.visibility = "visible";

    document.getElementById("name").innerHTML = document.getElementById("_name").value;
    document.getElementById("cname").innerHTML = document.getElementById("_cname").value;
    document.getElementById("loc").innerHTML = document.getElementById("_loc").value;

    // Adding CSS class to turn the elements grey
    document.getElementById("name").classList.add("grey-prefix");
    document.getElementById("cname").classList.add("grey-prefix");
    document.getElementById("loc").classList.add("grey-prefix");
}