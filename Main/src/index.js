import {categorize} from "./modules/categorize.js";

const modal = document.getElementById('modal');
const buttonClose = document.getElementById('modalClose');
const userName = document.getElementById('userName');
const something = document.getElementById('something');
const state = document.getElementById('state');
const buttonShare = document.getElementById('shareButton');

function modalOpen(){
    modal.style.display = 'block';
}

function modalClose() {
    modal.style.display = 'none';
    userName.value = "";
    something.value = "";
};

function tweet(text){
    let shareURL = 'https://twitter.com/intent/tweet';
    shareURL += '?text='+encodeURIComponent(text);
    const pageLink = "https://twitter.com/rei_Toya_rei";
    window.open(shareURL+pageLink);
}

const ctx = document.getElementById('chart');
const data = {
    labels: ["0","完全に理解した","なんもわからん","なんもわからんから脱出できるかも","あとチョットでチョットワカル","チョットワカル"],
    datasets: [{
        label: "『完全に理解した』曲線",
        data:[0,100,3,10,30,40],
        borderColor: 'rgba(255, 200, 61, 1)',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        cubicInterpolationMode: 'monotone'
    }]
};

let chart = new Chart(ctx,{
    type: 'line',
    data: data,
    options: {
        onClick: (e)=>{
            const canvasPosition = Chart.helpers.getRelativePosition(e, chart);
            const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
            const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
            state.innerHTML = categorize(dataX, dataY);
            modalOpen();
            buttonShare.addEventListener('click', function(){
                let stg = something.value;
                let user = userName.value;
                let stateToday = state.innerHTML;
                let tweetText = '今日の'+user+'さんは'+stg+stateToday;
                console.log(tweetText);
                tweet(tweetText);
            });
            buttonClose.addEventListener('click', modalClose);
        }
    }
});