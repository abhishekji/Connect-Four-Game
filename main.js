let playerOne = true;
let playerTwo = false;
function addColor() {
    if (playerOne) {
        event.target.style.backgroundColor = 'red';
        playerOne = false;
        playerTwo = true;
        event.target.setAttribute('disabled', true);
        if (gameCheck()) {
            alert('Player1 won');
            disableElems();
            horizontalCheck(true); 
            verticalCheck(true);
        }
        
        document.getElementById('playerTurn').innerHTML = 'Player 2 turn';
    } else {
        event.target.style.backgroundColor = 'yellow';
        playerOne = true;
        playerTwo = false;
        event.target.setAttribute('disabled', true);
        if (gameCheck()) {
            alert('Player2 won');
            disableElems();
            horizontalCheck(true); 
            verticalCheck(true);
        }
        
        document.getElementById('playerTurn').innerHTML = 'Player 1 turn';
    }
}

function disableElems() {
    let elems = document.getElementsByClassName('childElem');
    for(let i=0; i <elems.length; i++) {
        elems[i].setAttribute('disabled', true);
    }
    document.getElementById('reset').removeAttribute('disabled');
}

function gameCheck() {
    if (horizontalCheck() || verticalCheck()) {
        return true;
        
    } else {
        return false;
    }  
}

function horizontalCheck(reset) {
    let count = null;
    if (reset) {
            count = 0;
            return;
    }
    
    const list = document.getElementsByClassName('childElem');
    for(let i=0; i<6; i++) {
        const limit = 5+ i*6;
        let j = 0 + i*6;
        let count = 0;
        for (; j< limit; j++) {
            
            if ((list[j].style.backgroundColor !== '') && (list[j+1].style.backgroundColor !== '')) {

                if (list[j].style.backgroundColor === list[j+1].style.backgroundColor) {
                    if (count === 0) {
                    count = count + 2;
                    } else {
                    count++;
                    }
                    if (count === 4) {
                        
                        return true;
                    }
                } else {
                    count = 0;
                }
            }
        }
    }
    return false;
}

function verticalCheck(reset) {
    let count = null;
    if (reset) {
            count = 0;
            return;
    }
    const list = document.getElementsByClassName('childElem');
    for (let i=0; i< 6; i++) {
        count = 0;
        for (let j=i; j < 36 ; j = j+6) {
            if ((list[j].style.backgroundColor !== '') && (list[j+6].style.backgroundColor !== '')) {
                if ( j + 6 >= 36) {
                    continue;
                }
                if (list[j].style.backgroundColor === list[j + 6].style.backgroundColor) {				   
                    if (count === 0) {
                        count = count + 2;
                    } else {
                        count++;
                    }
                    if (count === 4) {
                        
                        return true;
                    }
                } else {
                    count = 0;
                }
            
            } 
        }
    }
    return false;
}

function reset() {
    let elems = document.getElementsByClassName('childElem');
    for(let i=0; i <elems.length; i++) {
        elems[i].removeAttribute('disabled');
        elems[i].style.backgroundColor = '';
    }
    horizontalCheck(true); 
    verticalCheck(true);
    playerOne = true;
    playerTwo = false;
    document.getElementById('playerTurn').innerHTML = 'Player 1 turn';
    document.getElementById('reset').setAttribute('disabled', true);
}
