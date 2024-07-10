let homeScoreEl = document.getElementById("home-scoreel")
let homeScore = 0
let awayScoreEl = document.getElementById("away-scoreel")
let awayScore = 0
const oneHome = () => {
    homeScore += 1;
    homeScoreEl.innerHTML = homeScore
}
const twoHome = () => {
    homeScore += 2;
    homeScoreEl.innerHTML = homeScore
}
const threeHome = () => {
    homeScore += 3;
    homeScoreEl.innerHTML = homeScore
}
const oneAway = () => {
    awayScore += 1;
    awayScoreEl.innerHTML = awayScore
}
const twoAway = () => {
    awayScore += 2;
    awayScoreEl.innerHTML = awayScore
}
const threeAway = () => {
    awayScore += 3;
    awayScoreEl.innerHTML = awayScore
}
const homeReset = () => {
    homeScoreEl.innerHTML = 0
    homeScore = 0
}
const awayReset = () => {
    awayScoreEl.innerHTML = 0
    awayScore = 0
}
