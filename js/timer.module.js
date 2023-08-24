export class Timer {
    constructor(partyDate) {
        this.partyDate = new Date(partyDate).getTime();
    }
    timeDifference() {
        let now = new Date().getTime();
        const milliSecDay = 24 * 60 * 60 * 1000;
        const milliSecHour = 60 * 60 * 1000;
        const milliSecMin = 60 * 1000;
        const milliSec = 1000;
        const timeDiff = this.partyDate - now;
        let days = Math.floor(timeDiff / milliSecDay);
        let hours = Math.floor((timeDiff % milliSecDay) / milliSecHour);
        let minutes = Math.floor((timeDiff % milliSecHour) / milliSecMin);
        let seconds = Math.floor((timeDiff % milliSecMin) / milliSec);
        let countdown = [days + " D", hours + " h", minutes + " m", seconds + " s"];
        let timer = $('#timer .col-3');
        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
            $('#timer div').html(` <p class="col-6 text-white fs-2 mt-5 border-0"> The Party Has Started!</p>`)
        } else {
            for (let i = 0; i < timer.length; i++) {
                $(timer[i]).html(`<p class="time-part border text-center text-white fs-3 pt-5">${countdown[i]}</p>`
                )
            }
        }
    }
}