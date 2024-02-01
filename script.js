document.addEventListener('DOMContentLoaded', function() {
    let currentPopupIndex = 0;
    const popups = document.querySelectorAll('.win98popup');
    let okButtonClicked = false;

    function showPopup(index) {
        if (okButtonClicked || index === 0) {
            if (index === 0) {
                // For the first popup, position it in the center
                const top = (window.innerHeight - popups[index].offsetHeight) / 2;
                const left = (window.innerWidth - popups[index].offsetWidth) / 2;
                popups[index].style.top = `${top}px`;
                popups[index].style.left = `${left}px`;
            } else {
                // For subsequent popups, position them randomly
                const randomTop = Math.min(Math.floor(Math.random() * (window.innerHeight - popups[index].offsetHeight)), window.innerHeight - popups[index].offsetHeight - 10);
                const randomLeft = Math.floor(Math.random() * (window.innerWidth - popups[index].offsetWidth));
                popups[index].style.top = `${randomTop}px`;
                popups[index].style.left = `${randomLeft}px`;
            }

            popups[index].style.display = 'flex';
        }
    }

    function nextPopup() {
        okButtonClicked = true;
        currentPopupIndex++;

        if (currentPopupIndex < popups.length) {
            showPopup(currentPopupIndex);
        } else {
            // All popups are shown, you can handle this case or reset to the first popup.
            currentPopupIndex = 0;
            okButtonClicked = false; // Reset the flag
            showPopup(currentPopupIndex);
        }
    }

    const okButtons = document.querySelectorAll('.win98popup .buttons button');
    okButtons.forEach(button => {
        button.addEventListener('click', nextPopup);
    });

    // Show the initial popup
    showPopup(currentPopupIndex);
});
