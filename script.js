let data = [1, 2, 3, 6, 9, 8, 7, 4, 5];

const rotateButton = document.querySelector('.rotateButton');
rotateButton.addEventListener('click', rotate);

//function to peroform the rotation
function rotate() {

    let button1 = document.getElementById('1');
    let button2 = document.getElementById('2');
    let button3 = document.getElementById('3');
    let button4 = document.getElementById('4');
    let button5 = document.getElementById('5');
    let button6 = document.getElementById('6');
    let button7 = document.getElementById('7');
    let button8 = document.getElementById('8');
    let button9 = document.getElementById('9');
    //removing 2nd to the last element of the array and assigning it to a new variable
    let changedValue = data.splice(data.length - 2, 1);
    //adding the removed element to the front of the array using the unshift method
    data.unshift(changedValue[0]);

    //assigning array values to the equivalent button element.
    button1.innerHTML = data[0];
    button2.innerHTML = data[1];
    button3.innerHTML = data[2];
    button4.innerHTML = data[7];
    button5.innerHTML = data[8];
    button6.innerHTML = data[3];
    button7.innerHTML = data[6];
    button8.innerHTML = data[5];
    button9.innerHTML = data[4];

    return data;
}
