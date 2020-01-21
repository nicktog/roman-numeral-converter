function convertToRoman(num) {
    var final = "";
    const decValues = [1,4,5,9,10,40,50,90,100,400,500,900,1000, Infinity];
    const romNum = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];

    while (num > 0) {
        for (var val in decValues) {
            if (decValues[val]>num){
                num = num - decValues[val-1];
                final += (romNum[val-1])
                break 
            }
        }
    }
return final;
}

convertToRoman(100);