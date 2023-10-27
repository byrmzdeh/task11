// 12. Verilmis ededi reqemlerine ayiran proqram tertib edin
function hesablama(text) {
    text = text.toString()
    const arr = []
    for (let i = 0; i < text.length; i++) {
        arr.push(text[i])
    }
    return arr
}
console.log(hesablama(135));


// 13. Ededin reqemlerinden en boyuyunu tap
function boyukreqem(eded) {
    eded = eded.toString()
    eded = eded.split("")
    let max = eded[0]
    for (let i = 0; i < eded.length; i++) {
        if (eded[i] > max) {
            max = eded[i]
        }
    }
    return max
}
console.log(boyukreqem(123456));


//14. Ededin reqemlerinin en kiciyini tap
function kicikreqem(reqem) {
    reqem = reqem.toString()
    reqem = reqem.split("")
    let min = reqem[0]
    for (let i = 0; i < reqem.length; i++) {
        if (min > reqem[i]) {
            min = reqem[i]
        }
    }
    return min
}
console.log(kicikreqem(5463));


//15. Ededin reqemlerinin cemini , hasilini , edediortasini tapin .
function tapmaq(say) {
    say = say.toString()
    let cem = 0
    let hasil = 1
    let edediorta = 0
    let arr = []
    for (let i = 0; i < say.length; i++) {
        cem = +say[i] + cem
        hasil = hasil * +say[i]
        edediorta = cem / say.length
    }
    arr.push(cem, hasil, edediorta)
    return arr
}
console.log(tapmaq(12345));


// 16. Verilmis ededin butun bolenlerinin sayini tapin
function sayitapmaq(sayi) {
    let bolenlerinsayi = 0
    for (let i = 0; i <= sayi; i++) {
        if (sayi % i === 0) {
            bolenlerinsayi++
        }
    }
    return bolenlerinsayi
}
console.log(sayitapmaq(36));


// 17. Verilmis ededin butun bolenlerini tapin
function bolenleritapmaq(num) {
    let arr = []
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i)
        }
    }
    return arr
}
console.log(bolenleritapmaq(12));


//18. Verilmis ededin bolenlerinin cemini ve hasilini tapin 
function sum(reqem) {
    let cem = 0
    let hasil = 1
    let arr = []
    for (let i = 0; i <= reqem; i++) {
        if (reqem % i === 0) {
            hasil = hasil * i
            cem = cem + i
        }
    }
    arr.push("cemi " + cem, "hasili " + hasil)
    return arr
}
console.log(sum(10));


//20.Verilmis ededin sade ve murekkeb oldugunu teyin edin.
function smtapmaq(eded) {
    for (let i = 2; i <= Math.sqrt(eded); i++) {
        if (eded % i === 0) {
            return console.log('Bu eded murekkeb ededdir');
        }
    }
    return console.log('Bu eded sade ededdir');
}

console.log(smtapmaq(7));


// 21.Verilmis araliqda yerlesen butun sade ededleri tapin. (sevhdi)
// function sadetapmaq(baslangic,son) {
//     let arr=[]
//     for (let i = baslangic; i <= Math.sqrt(son); i++) {
//         if (!son % i === 0) {
//             arr.push(i)  
//         }
//     }
//     return arr
// }
// console.log(sadetapmaq(3,16));


//25.Verilmis ededin n-ci quvvetini hesablayin
function quvvettapmaq(eded) {
    let quvvet = prompt('quvveti daxil edin')
    let son = 1
    for (let i = 0; i < quvvet; i++) {
        son = son * eded
    }
    return son
}
console.log(quvvettapmaq(2));


//26. Verilmis massivde tek elementlerinin indeksini tapin.
function cutindex(...params) {
    let index = []
    for (let i = 0; i < params.length; i++) {
        if (params[i] % 2 === 1) {
            index.push(i)
        }
    }
    return index
}
console.log(cutindex(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


//27. Verilmis massivde cut elementlerinin indeksini tapin.
function tekindex(...params) {
    let indexcut = []
    for (let i = 0; i < params.length; i++) {
        if (params[i] % 2 === 0) {
            indexcut.push(i)
        }
    }
    return indexcut
}
console.log(tekindex(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


//28. Verilmis massivde cut elementlerini yazin.
const cutelement = (...params) => {
    let element = []
    for (let i = 0; i < params.length; i++) {
        if (params[i] % 2 === 0) {
            element.push(params[i])
        }
    }
    return element
}
console.log(cutelement(32, 34, 13, 1, 54, 67, 84, 91));


//29. Verilmis massivde tek elementlerini yazin.
const tekelement = (...params) => {
    let telement = []
    for (let i = 0; i < params.length; i++) {
        if (params[i] % 2 === 1) {
            telement.push(params[i])
        }
    }
    return telement
}
console.log(tekelement(23, 3, 65, 19, 32, 93, 23, 67));


//30. Massivin en boyuk elementini yazin.
const enboyuk = (...params) => {
    let max = 0
    for (let i = 0; i < params.length; i++) {
        if (params[i] > max) {
            max = params[i]
        }
    }
    return max
}
console.log(enboyuk(2, 3, 4, 5, 6, 7));


//31. Massivin en kicik elementini yazin.
const enkicik = (params) => {
    let min = params[0]
    for (let i = 0; i < params.length; i++) {
        if (params[i] < min) {
            min = params[i]
        }
    }
    return min
}
let arr = [21, 3, 4, 5, 6, 7]
console.log(enkicik(arr));


//32. Massivin en boyuk cut elementini yazin.
const enboyukk = (...params) => {
    let max = 0
    for (let i = 0; i < params.length; i++) {
        if (params[i] > max && params[i] % 2 === 0) {
            max = params[i]
        }
    }
    return max
}
console.log(enboyukk(2, 13, 42, 33, 61, 59));


//33. Massivin en kicik cut elementini yazin.
const enkicikk = (params) => {
    let min = params[0]
    for (let i = 0; i < params.length; i++) {
        if (params[i] < min && params[i] % 2 === 0) {
            min = params[i]
        }
    }
    return min
}
let arry = [34, 56, 23, 90, 45, 12, 54, 39, 81]
console.log(enkicikk(arry));


//34 35 36 37 eyni tek element ucun
//38 39 massivin maksimum elementlerini tapin (32 ile eyni)


//40. Arrayin en boyuk elementi ile birinci elementinin yerini deyismek 
const change = (arr) => {
    let maximum = arr[0]
    let maxindex = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maximum) {
            maximum = arr[i]
            maxindex = i
        }
    }

    [arr[0], arr[maxindex]] = [maximum, arr[0]];
    return arr
}
const maxarr = [12, 54, 36, 78, 20, 17, 99, 14]
console.log(change(maxarr));


//41. Arrayin en kicik elementi ile ucuncu elementinin yerini deyismek 
const changethree = (arr) => {
    let minelement = arr[0]
    let minelementindex = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minelement) {
            minelement = arr[i]
            minelementindex = i
        }
    }
    [arr[2], arr[minelementindex]] = [minelement, arr[2]]
    return arr
}
const minarr = [12, 54, 36, 78, 20, 1, 99, 14]
console.log(changethree(minarr));


//42. Arrayin max elementi ile min elementinin yerini deyisdirin.
const deyismek = (arr) => {
    let min = arr[0]
    let max = arr[0]
    let mxindex = 0
    let mnindex = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
            mxindex = i
        } else if (arr[i] < min) {
            min = arr[i]
            mnindex = i
        }
    }
    arr[mnindex] = max;
    arr[mxindex] = min;
    return arr;

}
const data = [34, 23, 2, 33, 24, 87, 45, 41, 89, 106, 39]
console.log(deyismek(data));


//43. Arrayin cut elementlerinin maximumu ile tek elementlerinin minimumu ile yerini deyisdirin.
const evenodd = (arr) => {
    let min = arr[0]
    let max = arr[0]
    let mxindex = 0
    let mnindex = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max && arr[i] % 2 === 0) {
            max = arr[i]
            mxindex = i
        } else if (arr[i] < min && arr[i] % 2 === 1) {
            min = arr[i]
            mnindex = i
        }
    }
    arr[mnindex] = max;
    arr[mxindex] = min;
    return arr;

}
const nwarr = [34, 23, 2, 13, 24, 87, 45, 41, 89, 100, 39, 110]
console.log(evenodd(nwarr));


//19,21,22,23,24 qalanlar
