let listData = [{
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
let listIncome = [];
let listExpenses = [];
let totalIncome = 0;
let totalExpenses = 0;
let totalMonth = 0;
let percentExpenses = "";
const  elementTotalMonth = document.querySelector(".budget__value");
const  elementExpenses = document.querySelector(".budget__expenses--value");
const  elementIncome = document.querySelector(".budget__income--value");
const  elementPercentExpenses = document.querySelector(".budget__expenses--percentage");
const  elementListIncome = document.getElementById("list-incomes");
const  elementListExpenses = document.getElementById("list-expenses");
const  cboSelect = document.querySelector(".add__type");
const  txtDescription = document.querySelector(".add__description");
const  txtAmount = document.querySelector(".add__value");
const  button = document.querySelector(".add__btn");

function changeClass(e) {
    let value = e.target.value;
    let className = ["red-focus", "red"];
    if (value == "exp") {
        cboSelect.classList.add(...className);
        txtDescription.classList.add(...className);
        txtAmount.classList.add(...className);
        button.classList.add(...className);
    } else {
        cboSelect.classList.remove(...className);
        txtDescription.classList.remove(...className);
        txtAmount.classList.remove(...className);
        button.classList.remove(...className);
    }

}

function calcPercent(currentValue, totalValue) {
    if (!totalValue) {
        return 0 + "%";
    }
    let percent = (currentValue / totalValue) * 100;
    if (percent < 0)
        percent = percent * -1;
    return Math.round(percent) + "%";
}

function createUUID() {
    let dt = new Date().getTime();
    let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        let r = (dt + Math.random() * 16) % 16 | 0;
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
    let n = cboSelect.value == "exp" ? -1 : 1;
    let num = parseInt(txtAmount.value) * n;
    listData = [...listData, {
        id: createUUID(),
        description: txtDescription.value,
        amount: num
    }];
    resetForm();
    render();
}

function resetForm(){
    txtAmount.value = 0;
    txtDescription.value = '';
}

function calcTotal(list) {
    let num = list.reduce(function (total, value) {
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
    let num = number;
    let sym = "+ ";
    if (number < 0) {
        num = number * -1;
        sym = "- ";
    }
    return sym + formatMoney(num);
}

function listHtml(element) {
    const divPercent = element.amount < 0 ? `<div class="item__percentage">${calcPercent(element.amount, totalIncome)}</div>` : '';
    return `<div class="item clearfix">
    <div class="item__description">${element.description}</div>
    <div class="right clearfix">
      <div class="item__value"> ${showMoney(element.amount)}</div>
      ${divPercent}
      <div class="item__delete">
        <button class="item__delete--btn" onclick="deleteItem('${element.id}')">
          <i class="ion-ios-close-outline"></i>
        </button>
      </div>
    </div>
  </div>`;
}

function render() {
    listIncome = listData.filter(function (e) {
        return e.amount > 0;
    });
    listExpenses = listData.filter(function (e) {
        return e.amount < 0;
    });
    totalIncome = calcTotal(listIncome);
    totalExpenses = calcTotal(listExpenses);
    percentExpenses = calcPercent(totalExpenses, totalIncome);
    totalMonth = totalIncome + totalExpenses;
    elementListIncome.innerHTML = listIncome
        .map(function (e) {
            return listHtml(e);
        }).join("")

    elementListExpenses.innerHTML = listExpenses
        .map(function (e) {
            return listHtml(e);
        }).join("")
    elementTotalMonth.innerText = showMoney(totalMonth);
    elementExpenses.innerText = showMoney(totalExpenses);
    elementIncome.innerText = showMoney(totalIncome);
    elementPercentExpenses.innerText = percentExpenses;
}

function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(function () {
    if (button) {
        button.addEventListener("click", addItem);
    }
    if (cboSelect) {
        cboSelect.addEventListener("change", changeClass);
    }
    render();
});