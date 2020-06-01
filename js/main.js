'use strict'

var gQuests = [
    { id: 1, opts: ['The troll coding with js', 'The troll coding with python'], correctOptIndex: 0 },
    { id: 2, opts: ['Deadpool  killed the troll', 'Deadpool kissed the troll'], correctOptIndex: 1 },
    { id: 3, opts: ['WonderWomen love the troll', 'WonderWomen love Deadpool'], correctOptIndex: 0 },
    { id: 4, opts: ['You won', 'You lose'], correctOptIndex: 1 },
];
var gCurrQuestIdx = 0;

function initGame() {
    gCurrQuestIdx = 0;
    renderQuest()

}

function renderQuest() {

    var strAnswer1 = '';
    var strAnswer2 = '';
    var elQuest1 = document.querySelector('.quest1')
    var elQuest2 = document.querySelector('.quest2')
    
    // debugger
    
    

    console.log('Index',gCurrQuestIdx)

    if (gCurrQuestIdx === gQuests.length) {
        console.log('Congrats ! your completed your adventure good luck your next one!');
        initGame();
    } else {
        var elImg = document.querySelector('.img')
        elImg.innerHTML = `<div><img src="img/${gCurrQuestIdx}.jpg" alt=""></div> `
        strAnswer1 = gQuests[gCurrQuestIdx].opts[0];
        strAnswer2 = gQuests[gCurrQuestIdx].opts[1];
        elQuest1.innerText = strAnswer1;
        elQuest2.innerText = strAnswer2;

    }

}




function checkAnswer(elBtn) {
    var quest = gQuests[gCurrQuestIdx]

    var answer = quest.opts[quest.correctOptIndex];

    if (elBtn.innerText === answer) {
        console.log('Correct Good luck your next quest ! ');
        gCurrQuestIdx++;
        renderQuest();
    } else {
        console.log('Wrong try again ');

    }


}

