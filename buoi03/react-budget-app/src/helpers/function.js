export function showMoney(number) {
    var num = (number);
    var sym = "+ ";
    if (number < 0) {
        num = num * (-1);
        sym = "- ";
    }
    return sym + formatMoney(num);
}

export function formatMoney(number) {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
    }).format(number);
}

export function calcPercent(currentValue, totalValue) {
    if (!totalValue) {
        return 0 + "%";
    }
    var percent = (currentValue / totalValue) * 100;
    if (percent < 0)
        percent = percent * -1;
    return Math.round(percent) + "%";
}
export function calcTotal(list) {
    var num = list.reduce(function (total, value) {
        return total + value.amount;
    }, 0);
    return num;
}
