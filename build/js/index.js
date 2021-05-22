// window.orientation.onchange = function () {
//     if(screen.width > screen.height){
//         document.getElementById("landscape").style.visibility = "hidden";
//     } else {
//         document.getElementById("landscape").style.visibility = "visible";
//     }
// }
// var regRex = /^-?\d+\.?\d+[+-x/%]?\d+\.?\d+$/
var regRex = /[-+x/.%]{1,}/g
var value = '';
var a = '';
var result = '';
var opr = '';
var song = [];

var ndo = document.querySelector('#do');
var re = document.querySelector('#re');
var mi = document.querySelector('#mi');
var fa = document.querySelector('#fa');
var sol = document.querySelector('#sol');
var la = document.querySelector('#la');
var si = document.querySelector('#si');
var do_octave = document.querySelector('#do_octave');
var do_stretched_octave = document.querySelector('#do_stretched_octave');
var re_stretched = document.querySelector('#re_stretched');
var mi_stretched = document.querySelector('#mi_stretched');
var fa_stretched = document.querySelector('#fa_stretched');
var sol_stretched = document.querySelector('#sol_stretched');
var la_stretched = document.querySelector('#la_stretched');
var si_stretched = document.querySelector('#si_stretched');
var do_stretched = document.querySelector('#do_stretched');

// handleClick = (id) => {
//     var query = document.querySelector(`#${id}`)
//     var x = query.value;
//     if (query.className == 'operate') {
//         opr = x;
//     }
//     if (query.className == 'number') {
//         // if (regRex.test(value) == true) {
//         //     value = value.slice(0, value.length - 1)
//         // }
//         // if (regRex.test(value) == false) {
//         //     value += x;
//         // }
//         value += x;
//     }
//     document.querySelector('#result').value = value;
//     console.log(regRex.test(value));
// }
// handleClickOpr = (id) => {
//     var query = document.querySelector(`#${id}`);
//     if (query.className == 'operate') {
//         if (value == '' && query.value == '-') {
//             opr = query.value;
//             value += opr;
//         }
//         if (value == '' && query.value == '+' || '/' || 'x' || '.' || '%') {
//             opr = '';
//         }
//         if (value.slice(-1) == query.value) {
//             return value;
//         }
//     }
// }
handleClick = (id) => {

    var query = document.querySelector(`#${id}`);

    if (query.className == 'number') {
        value += query.value;
    }
    if (query.className == 'operate') {
        opr = query.value;
        var s = value.slice(value.length - 1);

        if (value != '' && value != '0' && s == '+' || s == '-' || s == '.' || s == '%') {
            value = value.slice(0, value.length - 1) + opr;
        } else {
            value += opr;
        }
    }
    document.querySelector('#result').value = value;
    document.querySelector('#opr').value = opr;
}
handleSwitch = (id) => {
    var query = document.querySelector(`#${id}`);
    var plus = value.lastIndexOf('+');
    var minus = value.lastIndexOf('-');
    var mul = value.lastIndexOf('x');
    var divide = value.lastIndexOf('/');
    if (opr == '+') {
        if (plus !== -1) {
            if (value.search('x+') || value.search('x')) {
                value = value.replace('x+' || 'x', 'x-')
                opr = '-';
                // value = value.slice(0, plus) + opr + value.slice(plus + 1);
            }
            opr = '-';
            value = value.slice(0, plus) + opr + value.slice(plus + 1);

        }
        if (plus == -1) {
            if (opr == '+') {
                value = value.replace('x', 'x-');
                opr = '-';
            }
        }
    }
    if (opr == '-') {
        if (minus !== -1) {
            if (value.search('x-')) {
                value = value.replace('x-', 'x+')
                opr = '+';
                // value = value.slice(0, plus) + opr + value.slice(plus + 1);
            }
            opr = '+';
            value = value.slice(0, minus) + opr + value.slice(minus + 1);

        }
    }
    console.log(opr);
    document.querySelector('#result').value = value.replace('x+', 'x');
    document.querySelector('#opr').value = opr;
}
handleAC = () => {
    value = '';
    opr = '';
    document.querySelector('#result').value = '0';
    document.querySelector('#opr').value = opr;
}
handleEqual = () => {
    console.log(value);
    console.log(regRex.test(value));
    try {
        if (value.search('x')) {
            value = value.replace('x', '*');
        } else { return false; }
        result = eval(value);
        value = '';
        document.querySelector('#result').value = result.toString();
    } catch (e) {
        result = 0;
        console.log(e);
        value = '';
        document.querySelector('#result').value = result.toString();
    }
}

handleSound = (id) => {
    var ndo = document.querySelector('#do');
    var re = document.querySelector('#re');
    var mi = document.querySelector('#mi');
    var fa = document.querySelector('#fa');
    var sol = document.querySelector('#sol');
    var la = document.querySelector('#la');
    var si = document.querySelector('#si');
    var do_octave = document.querySelector('#do_octave');
    var do_stretched_octave = document.querySelector('#do_stretched_octave');
    var re_stretched = document.querySelector('#re_stretched');
    var mi_stretched = document.querySelector('#mi_stretched');
    var fa_stretched = document.querySelector('#fa_stretched');
    var sol_stretched = document.querySelector('#sol_stretched');
    var la_stretched = document.querySelector('#la_stretched');
    var si_stretched = document.querySelector('#si_stretched');
    var do_stretched = document.querySelector('#do_stretched');
    if (id == 'number0') { ndo.play(); song.push(ndo) }
    if (id == 'number1') { re.play(); }
    if (id == 'number2') { mi.play(); }
    if (id == 'number3') { fa.play(); }
    if (id == 'number4') { sol.play(); }
    if (id == 'number5') { la.play(); }
    if (id == 'number6') { si.play(); }
    if (id == 'number7') { do_octave.play(); }
    if (id == 'number8') { do_stretched.play(); }
    if (id == 'number9') { do_stretched_octave.play(); }
    if (id == 'dot') { re_stretched.play(); }
    if (id == 'plus') { mi_stretched.play(); }
    if (id == 'minus') { fa_stretched.play(); }
    if (id == 'mul') { sol_stretched.play(); }
    if (id == 'divide') { la_stretched.play(); }
    if (id == 'percent') { si_stretched.play(); }
}

handlePlay = () => {
    var ndo = document.querySelector('#do');
    var re = document.querySelector('#re');
    var mi = document.querySelector('#mi');
    var fa = document.querySelector('#fa');
    var sol = document.querySelector('#sol');
    var la = document.querySelector('#la');
    var si = document.querySelector('#si');
    var do_octave = document.querySelector('#do_octave');
    var do_stretched_octave = document.querySelector('#do_stretched_octave');
    var re_stretched = document.querySelector('#re_stretched');
    var mi_stretched = document.querySelector('#mi_stretched');
    var fa_stretched = document.querySelector('#fa_stretched');
    var sol_stretched = document.querySelector('#sol_stretched');
    var la_stretched = document.querySelector('#la_stretched');
    var si_stretched = document.querySelector('#si_stretched');
    var do_stretched = document.querySelector('#do_stretched');
    // song = value.split('');
    // song = [ndo, re, mi, fa, sol, la, si, do_octave, do_stretched, do_stretched_octave, re_stretched, mi_stretched, fa_stretched, sol_stretched, la_stretched, si_stretched]
    console.log(value);
    value = value.split('');
    for (var i = 0; i < value.length; i++) {
        if (value[i] === '0') { song.push(ndo) }
        if (value[i] === '1') { song.push(re) }
        if (value[i] === '2') { song.push(mi) }
        if (value[i] === '3') { song.push(fa) }
        if (value[i] === '4') { song.push(sol) }
        if (value[i] === '5') { song.push(la) }
        if (value[i] === '6') { song.push(si) }
        if (value[i] === '7') { song.push(do_octave) }
        if (value[i] === '8') { song.push(do_stretched) }
        if (value[i] === '9') { song.push(do_stretched_octave) }
        if (value[i] === '.') { song.push(re_stretched) }
        if (value[i] === '+') { song.push(mi_stretched) }
        if (value[i] === '-') { song.push(fa_stretched) }
        if (value[i] === 'x') { song.push(sol_stretched) }
        if (value[i] === '/') { song.push(la_stretched) }
        if (value[i] === '%') { song.push(si_stretched) }
    }
    song.shift();
    console.log(song);
    song.map((item, i) => {
        console.log(song);
        setTimeout(() => { item.play(); }, i * 1000)
    })
    song = [];
    value = '';
}
