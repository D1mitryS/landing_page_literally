/* Toggle radios */
const enableOptions = options => {
    options.forEach(option => {
        option.disabled = false;
    });
};

const disableOptions = options => {
    options.forEach(option => {
        option.disabled = true;
    });
};


/* Counts submits */
let count = 0;

/* Toggle radios, buttons and poll visibility according to count */
const pollLists = document.querySelectorAll('#poll-list');
const pollButtons = document.querySelectorAll('#poll-button');

pollButtons.forEach(pollButton => {
    pollButton.addEventListener('click', () => {
        pollButton.disabled = true;
        const currentPollOptions = document.querySelectorAll(`input[name=poll-${count}`);
        disableOptions(currentPollOptions);

        if (pollButton === pollButtons[0] || pollButton === pollButtons[1]) {
            pollLists[count].style.display = 'none';
            pollLists[count + 1].style.display = 'flex';
            pollButtons[count + 1].disabled = false;
            const nextPollOptions = document.querySelectorAll(`input[name=poll-${count + 1}`);
            enableOptions(nextPollOptions);
        } else if (pollButton === pollButtons[pollButtons.length - 1]) {
            resultLink.style.display = 'block';
        };

        count += 1;
    })
});


/* Gets radio value by it's name after it has been checked */
const getPollValue = pollNumber => {
    const pollValue = document.querySelector(`input[name="poll-${pollNumber}"]:checked`).value;
    return Number.parseInt(pollValue, 10) || 0;
};


/* Shows ending block based on poll result */
const resultLink = document.querySelector('#result-link');
const endingVariants = [{
        class: 'good-ending',
        title: 'u might survive'
    },
    {
        class: 'bad-ending',
        title: 'you died'
    }
];

resultLink.addEventListener('click', () => {
    const ending = document.querySelector('#ending');
    const endingTitle = document.querySelector('#ending-title');
    let pollResult = 0;

    for (let i = 0; i <= 2; i++) {
        pollResult += getPollValue(i);
    };

    const goodEnding = (pollResult >= 4) ? true : false;

    if (goodEnding) {
        ending.classList.remove(endingVariants[1].class)
        ending.classList.add(endingVariants[0].class)
        endingTitle.textContent = endingVariants[0].title;
    } else {
        ending.classList.remove(endingVariants[0].class)
        ending.classList.add(endingVariants[1].class)
        endingTitle.textContent = endingVariants[1].title;
    };

    ending.style.display = 'flex';
    retryLink.style.display = 'inline';
});

/* Hiding poll lists and resets count, radios and buttons  */
const retryLink = document.querySelector('#retry-link');

retryLink.addEventListener('click', () => {
    for (let i = 1; i <= 2; i++) {
        pollLists[i].style.display = 'none';
    };

    resultLink.style.display = 'none';
    ending.style.display = 'none';
    retryLink.style.display = 'none';

    count = 0;
    pollLists[count].style.display = 'flex';
    pollButtons[count].disabled = false;
    const pollOptions = document.querySelectorAll(`input[name=poll-${count}`);
    enableOptions(pollOptions);
});