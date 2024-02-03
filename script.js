document.addEventListener('DOMContentLoaded', function() {
    const popupCoordinates = [
        { top: 370, left: 730 }, // Coordinates for popup_0
        { top: 150, left: 300 }, // Coordinates for popup_1
        { top: 600, left: 1000 }, // Coordinates for popup_2
        { top: 700, left: 150 }, // Coordinates for popup_3
        { top: 120, left: 1510 }, // Coordinates for popup_4
        { top: 350, left: 666 }, // Coordinates for popup_5
        { top: 540, left: 1400 }, // Coordinates for popup_6
        { top: 50, left: 1280 }, // Coordinates for popup_7
        { top: 330, left: 400 }, // Coordinates for popup_8
        { top: 150, left: 1120 }, // Coordinates for popup_9
        { top: 230, left: 790 }, // Coordinates for popup_10
        // Add more coordinates for other popups as needed
    ];

    let currentPopupIndex = 0;
    const popups = document.querySelectorAll('.win98popup');
    const popupShownFlags = Array(popups.length).fill(false);
    let okButtonClicked = false;

    function showPopup(index) {
        popups.forEach((popup, i) => {
            popup.style.display = (i === 0 || popupShownFlags[i]) ? 'flex' : 'none';
        });

        if ((okButtonClicked || index === 0) && !popupShownFlags[index]) {
            const { top, left } = popupCoordinates[index];

            popups[index].style.top = `${top}px`;
            popups[index].style.left = `${left}px`;

            popupShownFlags[index] = true;
        }
    }

    function nextPopup() {
        okButtonClicked = true;
        currentPopupIndex++;

        if (currentPopupIndex < popups.length) {
            showPopup(currentPopupIndex);
        } else {
            currentPopupIndex = 0;
            okButtonClicked = false;
            showPopup(currentPopupIndex);
        }
    }

    const okButtons = document.querySelectorAll('.win98popup .buttons button');
    okButtons.forEach(button => {
        button.addEventListener('click', nextPopup);
    });

    showPopup(currentPopupIndex);
});
