function matturi() {
    var copyrightYear = document.getElementById ('copyright-year')
    copyrightYear.innerHTML = new Date().getFullYear()
}

if (document.readyState === 'complete'){
    matturi()
}else{
    document.addEventListener ('DOMContentLoaded' , augustinematturi)
}