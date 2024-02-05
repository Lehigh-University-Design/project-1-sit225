document.addEventListener('DOMContentLoaded', function() {
    const popupCoordinates = [
        { top: 370, left: 730 }, // Coordinates for popup_0
        { top: 150, left: 300 }, // Coordinates for popup_1
        { top: 500, left: 1000 }, // Coordinates for popup_2
        { top: 450, left: 150 }, // Coordinates for popup_3
        { top: 120, left: 1290 }, // Coordinates for popup_4
        { top: 350, left: 666 }, // Coordinates for popup_5
        { top: 440, left: 1120 }, // Coordinates for popup_6
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

    const popupSound = document.getElementById('popupSound');

    function showPopup(index) {
        popups.forEach((popup, i) => {
            popup.style.display = (i === 0 || popupShownFlags[i]) ? 'flex' : 'none';
        });

        if ((okButtonClicked || index === 0) && !popupShownFlags[index]) {
            const { top, left } = popupCoordinates[index];

            popups[index].style.top = `${top}px`;
            popups[index].style.left = `${left}px`;

            popupShownFlags[index] = true;

            if (index === 3) {
                const emailImage = document.querySelector('.gif');
                emailImage.style.display = 'block';
            }

            if (index === 7) {
                const emailImage = document.querySelector('.email');
                emailImage.style.display = 'block';
            }
        }
    }

   
    function nextPopup() {
        okButtonClicked = true;

        popupSound.play();

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
