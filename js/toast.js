document.getElementById('triggerToast').addEventListener('click', function () {
    let toast = document.getElementById('toast');
    toast.classList.add('visible');
    setTimeout(function () {
        toast.classList.remove('visible');
        toast.classList.add('hidden');
    }, 3000);
});
