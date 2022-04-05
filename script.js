/* 0 poll value*/

let pollOptions0 = document.querySelectorAll('.poll-input-0');
let sumbitPoll0 = document.querySelector('.submit-poll-0');
let pollValue0 = 0;

for (let pollOption0 of pollOptions0) {
    pollOption0.onchange = function () {
        pollValue0 = Number.parseInt(pollOption0.value, 10);
        console.log(`poll-value-0: ${pollValue0}`);
        sumbitPoll0.disabled = false;
        return pollValue0;
    };
};

/* 0 poll value to be transported to sum */

let pollList1 = document.querySelector('.poll-list-1');
let pollSum0 = 0;


sumbitPoll0.onclick = function () {
    pollSum0 = pollValue0;
    console.log(`poll-sum-0: ${pollSum0}`);
    for (let pollOption0 of pollOptions0) {
        pollOption0.disabled = true;
    }
    pollList1.style.display = 'inline-block'
    for (let pollOption1 of pollOptions1) {
        pollOption1.disabled = false;
    }
    sumbitPoll0.disabled = true;
    return pollSum0;
};

/*1 poll value*/

let pollOptions1 = document.querySelectorAll('.poll-input-1');
let sumbitPoll1 = document.querySelector('.submit-poll-1');
let pollValue1 = 0;

for (let pollOption1 of pollOptions1) {
    pollOption1.onchange = function () {
        pollValue1 = Number.parseInt(pollOption1.value, 10);
        console.log(`poll-value-1: ${pollValue1}`);
        sumbitPoll1.disabled = false;
        return pollValue1;
    };
};

/*1 poll value to be transported to sum*/

let pollList2 = document.querySelector('.poll-list-2');
let pollSum1 = 0;

sumbitPoll1.onclick = function () {
    pollSum1 = pollValue1;
    console.log(`poll-sum-1: ${pollSum1}`);
    for (let pollOption1 of pollOptions1) {
        pollOption1.disabled = true;
    }
    pollList2.style.display = 'inline-block'
    for (let pollOption2 of pollOptions2) {
        pollOption2.disabled = false;
    }
    sumbitPoll1.disabled = true;
    return pollSum1;
};

/*2 poll value*/

let pollOptions2 = document.querySelectorAll('.poll-input-2');
let sumbitPoll2 = document.querySelector('.submit-poll-2');
let pollValue2 = 0;

for (let pollOption2 of pollOptions2) {
    pollOption2.onchange = function () {
        pollValue2 = Number.parseInt(pollOption2.value, 10);
        console.log(`poll-value-2: ${pollValue2}`);
        sumbitPoll2.disabled = false;
        return pollValue2;
    };
};

/*2poll value to be transported to sum*/

let pollSum2 = 0;

sumbitPoll2.onclick = function () {
    pollSum2 = pollValue2;
    console.log(`poll-sum-2: ${pollSum2}`)
    for (let pollOption2 of pollOptions2) {
        pollOption2.disabled = true;
    }
    resultButton.style.display = 'block';
    sumbitPoll2.disabled = true;
    return pollSum2
};

/* combining poll result and display ending*/

let resultButton = document.querySelector('.result-button');
let badEnding = document.querySelector('.badending');
let goodEnding = document.querySelector('.goodending');
let pollResult = 0


resultButton.onclick = function () {
    pollResult = pollSum0 + pollSum1 + pollSum2;
    console.log(`poll-result: ${pollResult}`);
    if (pollResult >= 4) {
        goodEnding.style.display = 'block';
        console.log('good ending executes');
    } else if (pollResult < 4) {
        badEnding.style.display = 'block';
        console.log('bad ending executes');
    }
}

let retry = document.querySelector('.retry');

retry.onclick = function () {
    for (let pollOption0 of pollOptions0) {
        pollOption0.disabled = false;
    };
    badEnding.style.display = 'none';
    goodEnding.style.display = 'none';
    pollList2.style.display = 'none';
    pollList1.style.display = 'none';
    resultButton.style.display = 'none';
    console.log('retrying')
}