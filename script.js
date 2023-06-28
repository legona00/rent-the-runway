let startBtn1 = document.getElementById('start1');
let stopBtn1 = document.getElementById('stop1');
let resetBtn1 = document.getElementById('reset1');
 
let startBtn2= document.getElementById('start2');
let stopBtn2 = document.getElementById('stop2');
let resetBtn2 = document.getElementById('reset2');

let startBtn3 = document.getElementById('start3');
let stopBtn3 = document.getElementById('stop3');
let resetBtn3 = document.getElementById('reset3');

let startBtn4= document.getElementById('start4');
let stopBtn4 = document.getElementById('stop4');
let resetBtn4 = document.getElementById('reset4');

let startBtn5= document.getElementById('start5');
let stopBtn5 = document.getElementById('stop5');
let resetBtn5 = document.getElementById('reset5');

let startBtn6= document.getElementById('start6');
let stopBtn6 = document.getElementById('stop6');
let resetBtn6 = document.getElementById('reset6');

let dwnldBtn = document.querySelector('.download');

//Variables
let timer1;
let minute1 = "0";
let second1 = "0";
let count1 = "0";

let timer2;
let minute2 = "0";
let second2 = "0";
let count2 = "0";

let minute3 = "0";
let second3 = "0";
let count3 = "0";

let minute4 = "0";
let second4 = "0";
let count4 = "0";

let minute5 = "0";
let second5 = "0";
let count5 = "0";

let minute6 = "0";
let second6 = "0";
let count6 = "0";
 
startBtn1.addEventListener('click', function () {
    timer1 = true;
    stopWatch1();
});
 
stopBtn1.addEventListener('click', function () {
    timer1 = false;
});
 
resetBtn1.addEventListener('click', function () {
    timer1 = false;
    minute1 = 0;
    second1 = 0;
    count1 = 0;
    document.getElementById('min1').innerHTML = "00";
    document.getElementById('sec1').innerHTML = "00";
    document.getElementById('count1').innerHTML = "00";
});
 
function stopWatch1() {
    if (timer1) {
        count1++;
 
        if (count1 == 100) {
            second1++;
            count1 = 0;
        }
 
        if (second1 == 60) {
            minute1++;
            second1 = 0;
        }
 
        let minString = minute1;
        let secString = second1;
        let countString = count1;
 
        if (minute1 < 10) {
            minString = "0" + minString;
        }
 
        if (second1 < 10) {
            secString = "0" + secString;
        }
 
        if (count1 < 10) {
            countString = "0" + countString;
        }
 
        document.getElementById('min1').innerHTML = minString;
        document.getElementById('sec1').innerHTML = secString;
        document.getElementById('count1').innerHTML = countString;
        setTimeout(stopWatch1, 10);
    }
}

//SECOND TIMER
startBtn2.addEventListener('click', function () {
    timer2 = true;
    stopWatch2();
});
 
stopBtn2.addEventListener('click', function () {
    timer2 = false;
});
 
resetBtn2.addEventListener('click', function () {
    timer2 = false;
    minute2 = 0;
    second2 = 0;
    count2 = 0;
    document.getElementById('min2').innerHTML = "00";
    document.getElementById('sec2').innerHTML = "00";
    document.getElementById('count2').innerHTML = "00";
});
 
function stopWatch2() {
    if (timer2) {
        count2++;
 
        if (count2 == 100) {
            second2++;
            count2 = 0;
        }
 
        if (second2 == 60) {
            minute2++;
            second2 = 0;
        }
 
        let minString = minute2;
        let secString = second2;
        let countString = count2;
 
        if (minute2 < 10) {
            minString = "0" + minString;
        }
 
        if (second2 < 10) {
            secString = "0" + secString;
        }
 
        if (count2 < 10) {
            countString = "0" + countString;
        }
 
        document.getElementById('min2').innerHTML = minString;
        document.getElementById('sec2').innerHTML = secString;
        document.getElementById('count2').innerHTML = countString;
        setTimeout(stopWatch2, 10);
    }
}

//THIRD TIMER
startBtn3.addEventListener('click', function () {
    timer3 = true;
    stopWatch3();
});
 
stopBtn3.addEventListener('click', function () {
    timer3 = false;
});
 
resetBtn3.addEventListener('click', function () {
    timer3 = false;
    minute3 = 0;
    second3 = 0;
    count3 = 0;
    document.getElementById('min3').innerHTML = "00";
    document.getElementById('sec3').innerHTML = "00";
    document.getElementById('count3').innerHTML = "00";
});
 
function stopWatch3() {
    if (timer3) {
        count3++;
 
        if (count3 == 100) {
            second3++;
            count3 = 0;
        }
 
        if (second3 == 60) {
            minute3++;
            second3 = 0;
        }
 
        let minString = minute3;
        let secString = second3;
        let countString = count3;
 
        if (minute3 < 10) {
            minString = "0" + minString;
        }
 
        if (second3 < 10) {
            secString = "0" + secString;
        }
 
        if (count3 < 10) {
            countString = "0" + countString;
        }
 
        document.getElementById('min3').innerHTML = minString;
        document.getElementById('sec3').innerHTML = secString;
        document.getElementById('count3').innerHTML = countString;
        setTimeout(stopWatch3, 10);
    }
}

//FOURTH TIMER
startBtn4.addEventListener('click', function () {
    timer4 = true;
    stopWatch4();
});
 
stopBtn4.addEventListener('click', function () {
    timer4 = false;
});
 
resetBtn4.addEventListener('click', function () {
    timer4 = false;
    minute4 = 0;
    second4 = 0;
    count4 = 0;
    document.getElementById('min4').innerHTML = "00";
    document.getElementById('sec4').innerHTML = "00";
    document.getElementById('count4').innerHTML = "00";
});
 
function stopWatch4() {
    if (timer4) {
        count4++;
 
        if (count4 == 100) {
            second4++;
            count4 = 0;
        }
 
        if (second4 == 60) {
            minute4++;
            second4 = 0;
        }
 
        let minString = minute4;
        let secString = second4;
        let countString = count4;
 
        if (minute4 < 10) {
            minString = "0" + minString;
        }
 
        if (second4 < 10) {
            secString = "0" + secString;
        }
 
        if (count4 < 10) {
            countString = "0" + countString;
        }
 
        document.getElementById('min4').innerHTML = minString;
        document.getElementById('sec4').innerHTML = secString;
        document.getElementById('count4').innerHTML = countString;
        setTimeout(stopWatch4, 10);
    }
}

startBtn5.addEventListener('click', function () {
    timer5 = true;
    stopWatch5();
});
 
stopBtn5.addEventListener('click', function () {
    timer5 = false;
});
 
resetBtn5.addEventListener('click', function () {
    timer5 = false;
    minute5 = 0;
    second5 = 0;
    count5 = 0;
    document.getElementById('min5').innerHTML = "00";
    document.getElementById('sec5').innerHTML = "00";
    document.getElementById('count5').innerHTML = "00";
});
 
function stopWatch5() {
    if (timer5) {
        count5++;
 
        if (count5 == 100) {
            second5++;
            count5 = 0;
        }
 
        if (second5 == 60) {
            minute5++;
            second5 = 0;
        }
 
        let minString = minute5;
        let secString = second5;
        let countString = count5;
 
        if (minute5 < 10) {
            minString = "0" + minString;
        }
 
        if (second5 < 10) {
            secString = "0" + secString;
        }
 
        if (count5 < 10) {
            countString = "0" + countString;
        }
 
        document.getElementById('min5').innerHTML = minString;
        document.getElementById('sec5').innerHTML = secString;
        document.getElementById('count5').innerHTML = countString;
        setTimeout(stopWatch5, 10);
    }
}

startBtn6.addEventListener('click', function () {
    timer6 = true;
    stopWatch6();
});
 
stopBtn6.addEventListener('click', function () {
    timer6 = false;
});
 
resetBtn6.addEventListener('click', function () {
    timer6 = false;
    minute6 = 0;
    second6 = 0;
    count6 = 0;
    document.getElementById('min6').innerHTML = "00";
    document.getElementById('sec6').innerHTML = "00";
    document.getElementById('count6').innerHTML = "00";
});
 
function stopWatch6() {
    if (timer6) {
        count6++;
 
        if (count6 == 100) {
            second6++;
            count6 = 0;
        }
 
        if (second6 == 60) {
            minute6++;
            second6 = 0;
        }
 
        let minString = minute6;
        let secString = second6;
        let countString = count6;
 
        if (minute6 < 10) {
            minString = "0" + minString;
        }
 
        if (second6 < 10) {
            secString = "0" + secString;
        }
 
        if (count6 < 10) {
            countString = "0" + countString;
        }
 
        document.getElementById('min6').innerHTML = minString;
        document.getElementById('sec6').innerHTML = secString;
        document.getElementById('count6').innerHTML = countString;
        setTimeout(stopWatch6, 10);
    }
}

//Format into CSV file
function createCSV() {
    let CSVmin;
    let CSVsec;
    let CSVcount;
    csvRows = [];
    const headers = ['Bagger #, M:S.ms\n'];
    csvRows.push(headers.join(', '));

    for(let i = 1; i < 7; i++){
        CSVmin = document.getElementById('min'+i).textContent;
        CSVsec = document.getElementById('sec'+i).textContent;
        CSVcount = document.getElementById('count'+i).textContent;
        csvRows.push(`${i} ${CSVmin}:${CSVsec}.${CSVcount}\n`);
    }
    const blob = new Blob(csvRows, {type: 'text/csv'});
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.setAttribute('href', url)
    a.setAttribute('download', 'times.csv');
    a.click();
}

//Function for download button
dwnldBtn.addEventListener('click', createCSV);