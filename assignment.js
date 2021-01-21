//this is convert kilometer to meter part
function kilometerToMeter(kilometer) {
    if(kilometer < 0) {
        return "kilometer doesn't negative value"
    }
    return kilometer * 1000;
}
//this is budgetcalculator part

function budgetCalculator(watch,mobile,laptop) {
    if(watch > 0 || mobile > 0 || laptop > 0) {
        var watchPrice = watch * 50;
        var mobilePrice = mobile * 100;
        var laptopPrice = laptop * 500;
        var totalCost = watchPrice + mobilePrice + laptopPrice;

        return totalCost;
    }
    else{
        return "your item quantity is invalid"
    }
}
//this is hotelcost part
function hotelCost(day) {
    var price = 0;
    if(day > 0) {
        if(day <= 10) {
            price = day * 100;
        }
        else if(day <= 20) {
            var firstPart = 10 * 100;
            var remainingDay = day - 10;
            var secondPart = remainingDay * 80;
            price = firstPart + secondPart;
        }
        else{
            var firstPart = 10 * 100;
            var secondPart = 10 * 80;
            var remainingDay = day - 20;
            var thirdPart = remainingDay * 50;
            price = firstPart + secondPart + thirdPart;
        }
    }
    else{
        if(day < 0) {
            return "negative value is invalid"
        }
        else{
            return "you stay 0 day"
        }
    }
    return price;
}
//this is megafriend part

function megaFriend(arr) {
    var len = 0;
    var longest;
    if(arr.length <= 0) {
        console.log('Invalid array');
    }
    for(var i = 0; i < arr.length;i++) {
        if(arr[i].length > len) {
            len = arr[i].length;
            longest = arr[i];
        }
    }
    return longest;
}
