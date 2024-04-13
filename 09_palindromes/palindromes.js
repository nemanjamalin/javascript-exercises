const palindromes = function (string) {
    string = string.trim();
    string = string.replaceAll(' ','');
    string = string.replaceAll('.','');
    string = string.replaceAll(',','');
    string = string.replaceAll('!','');
    string = string.toUpperCase();


    let newString = "";
    for(let i=string.length -1;i>=0;i--){
        newString+=string[i];
    }
    return newString == string ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
