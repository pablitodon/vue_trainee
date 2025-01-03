export function lastSurvivor(letters, coords) {
    const arrStr = letters.split('');
for(let el of coords){
    // console.log(el);
    // console.log(arrStr.splice(el,1));
    arrStr.splice(el,1)
}
    return arrStr[0]
}


console.log(lastSurvivor('abc',[0,1]));
