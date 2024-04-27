
document.addEventListener('DOMContentLoaded', function () {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        modals[i].style.display = "none";
    }
});

function showDetails(memberId) {
    var modal = document.getElementById(memberId);
    modal.style.display = "block";
}

function hideDetails(memberId) {
    var modal = document.getElementById(memberId);
    modal.style.display = "none";
}

window.onclick = function (event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
};
