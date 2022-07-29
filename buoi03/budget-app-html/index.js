var listData = [{
        id: createUUID(),
        description: "Chi tieu ngay 26/07",
        amount: -100000
    },
    {
        id: createUUID(),
        description: "Thu nhap thang 06",
        amount: 3000000
    },
    {
        id: createUUID(),
        description: "Thu nhap thang 07",
        amount: 2000000
    },
    {
        id: createUUID(),
        description: "Chi tieu ngay 27/07",
        amount: -150000
    },
];
var listIncome = listData.filter(function (e) {
    return e.amount > 0;
});
var listExpenses = listData.filter(function (e) {
    return e.amount < 0;
});
var totalIncome = 0;
var totalExpenses = 0;
var totalMonth = 0;
var percentExpenses = "";
var elementTotalMonth = document.querySelector(".budget__value");
var elementExpenses = document.querySelector(".budget__expenses--value");
var elementPercentExpenses = document.getElementById(".budget__expenses--percentage");
var elementListIncome = document.getElementById("list-incomes");
var elementListExpenses = document.getElementById("list-expenses");
var cboSelect = document.querySelector(".add__type");
var txtDescription = document.querySelector(".add__description");
var txtAmount = document.querySelector(".add__value");
var button = document.querySelector(".add__btn");
if (button) {
    button.addEventListener("click", addItem);
}
if (cboSelect) {
    cboSelect.addEventListener("change", changeClass);
}

function changeClass(e) {
    var value = e.target.value;
    var className = "green";
    if (value == "exp") {
        className = "red";
    }
    cboSelect.classList.toggle(className);
    txtDescription.classList.toggle(className);
    txtAmount.classList.toggle(className);
    button.classList.toggle(className);
}

function calcPercent(currentValue, totalValue) {
    if (!totalValue) {
        return 0 + "%";
    }
    var percent = (currentValue / totalValue) * 100;
    if (percent < 0)
        percent = percent * -1;
    return Math.round(percent) + "%";
}

function createUUID() {
    var dt = new Date().getTime();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
}

function deleteItem(id) {
    listData = listData.filter(function (e) {
        return e.id !== id;
    });
    render();
}

function addItem() {
    var n = cboSelect.value == "exp" ? -1 : 1;
    var num = parseInt(txtAmount.value) * n;
    listData.push({
        id: createUUID(),
        description: txtDescription.value,
        amount: num
    });
    render();
}

function calcTotal(list) {
    var num = list.reduce(function (total, value) {
        return total + value.amount;
    }, 0);
    return num;
}

function formatMoney(number) {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
    }).format(number);
}

function showMoney(number) {
    var num = number;
    var sym = "+ ";
    if (number < 0) {
        num = number * -1;
        sym = "- ";
    }
    return sym + formatMoney(number);
}

function listHtml(value) {
    return "\u00A0 \u00A0 <li>".concat(value.id, "</li>\u00A0 \u00A0 <li>").concat(value.description, "</li>\u00A0 \u00A0 <li>").concat(showMoney(value.amount), " - ").concat(calcPercent(value.amount, totalExpenses), "</li>\u00A0 \u00A0 ");
}

function render() {
    totalIncome = calcTotal(listIncome);
    totalExpenses = calcTotal(listExpenses);
    console.log(`totalExpenses = `,totalExpenses);
    percentExpenses = calcPercent(totalExpenses, totalIncome);
    totalMonth = totalIncome - totalExpenses;
    elementListIncome.innerHTML = listIncome
        .map(function (e) {
            return listHtml(e);
        })
        .toString();
    elementListExpenses.innerHTML = listExpenses
        .map(function (e) {
            return listHtml(e);
        })
        .toString();
    elementTotalMonth.innerText = showMoney(totalMonth);
    elementExpenses.innerText = showMoney(totalExpenses);
    elementPercentExpenses.innerText = percentExpenses;
}
render();