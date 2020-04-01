/**
 * @window on page load event method for IDs on page will set the property ID's to none which will hide these on page loading. 
 */

window.onload = function() {
    document.getElementById("question_grid").style.display = "none";
    document.getElementById("score_grid").style.display = "none";
    document.getElementById("contactus_grid").style.display = "none";
    document.getElementById("email-submit-btn").style.display = "none";
};

/**
 * @function called showQuestions will show the questions container grid when the play button is pressed.
 */

let showQuestions = function() {
    document.getElementById("question_grid").style.display = "show";
}