const nums = [1, 2, 3, 6, 9, 8, 7, 4]
const ids = [1, 2, 3, 6, 9, 8, 7, 4]
const anti = [1, 4, 7, 8, 9, 6, 3, 2]
const button1 = document.getElementById('btn1')
const button2 = document.getElementById('btn2')
const button3 = document.getElementById('btn3')
const button4 = document.getElementById('btn4')
const button6 = document.getElementById('btn6')
const button7 = document.getElementById('btn7')
const button8 = document.getElementById('btn8')
const button9 = document.getElementById('btn9')
const btn5 = document.getElementById('btn5')
const allBtn = document.querySelectorAll('.btn')

btn5.onclick = function () {
  nums.unshift(nums.pop())
  for (let i = 0; i <= 7; i++) {
    document.getElementById('btn' + ids[i]).innerHTML = nums[i];
  }
}

for (const i of allBtn) {
  i.addEventListener('click', function () {
    antiClockwise()
    paint()
  })
}

function antiClockwise () {
  anti.unshift(anti.pop())
}

function paint () {
  button1.innerHTML = anti[0]
  button2.innerHTML = anti[7]
  button3.innerHTML = anti[6]
  button4.innerHTML = anti[1]
  button6.innerHTML = anti[5]
  button7.innerHTML = anti[2]
  button8.innerHTML = anti[3]
  button9.innerHTML = anti[4]
}
