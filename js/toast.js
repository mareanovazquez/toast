/* Toast Simple */
function initSimpleToast() {
    let triggerToast = document.getElementById('triggerToast');

    triggerToast.addEventListener('click', function () {
        let toast = document.getElementById('toast');
        toast.classList.add('visible');

        setTimeout(function(){
            toast.classList.remove('visible');
        }, 3000);
    });
}

/* Toast con Barra de Progreso */
function initProgressToast() {
    let triggerToast2 = document.getElementById('triggerToast2');

    triggerToast2.addEventListener('click', function () {
        let toast2 = document.getElementById('toast2');
        let barToast2 = document.getElementById('barToast2');

        toast2.classList.add('visible');
        barToast2.style.width = '100%';

        setTimeout(function () {
            toast2.classList.remove('visible');
            barToast2.style.width = '0%';
        }, 3000);
    });
}

// Inicializar los toasts
initSimpleToast();
initProgressToast();
