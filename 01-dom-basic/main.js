document.querySelector("#fullname").addEventListener('input', function(e) {
    document.querySelector(".text").innerText = e.target.value;
});