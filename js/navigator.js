/*
 *  Websites list in order
 */
var websites = [
    "https://lehigh-university-design.github.io/project-1-awb324/", // 1
    "https://lehigh-university-design.github.io/project-1-sit225/", // 2
    "https://lehigh-university-design.github.io/project-1-adrawoot/", // 4
    "https://lehigh-university-design.github.io/project-1-mmurata22/", // 5
    "https://lehigh-university-design.github.io/project-1-eyt225/", // 7
    "https://lehigh-university-design.github.io/project-1-shirls326/", // 8 
    "https://lehigh-university-design.github.io/project-1-ellafall/", // 10
    "https://lehigh-university-design.github.io/project-1-kaydolan/", // 12
    "https://lehigh-university-design.github.io/project-1-dsw225/", // 13
];

/*
 *  Website index variable
 */
var currentIndex = 0;

window.onload = function getCurrentIndex() {
    var path = window.location.href.split("#")[0];
    var page = path.split("/");
    
    currentIndex = websites.indexOf(path);
    }

/*
 *  Goes to the previous page from the index of current page in list
 */
function goToPrevious() {
    currentIndex = (currentIndex - 1 + websites.length) % websites.length;
    location.href = websites[currentIndex];
}

/*
 *  Goes to the next page from the index of current page in list
 */
function goToNext() {
    currentIndex = (currentIndex + 1) % websites.length;
    location.href = websites[currentIndex];
}

/*
 *  Goes to random page that is not the current page
 */
function goToRandom() {
    var randomIndex = currentIndex;
    while (randomIndex == currentIndex)
    {
        randomIndex = Math.floor(Math.random() * websites.length);
    }
    currentIndex = randomIndex;
    location.href = websites[currentIndex];
}