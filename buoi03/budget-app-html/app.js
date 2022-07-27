function createUUID() {
    let dt = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}
let listData = [{
        id: createUUID(),
        description: 'Chi tieu ngay 26/07',
        amount: -100000
    },
    {
        id: createUUID(),
        description: 'Thu nhap thang 06',
        amount: 3000000
    },
    {
        id: createUUID(),
        description: 'Thu nhap thang 07',
        amount: 2000000
    },
    {
        id: createUUID(),
        description: 'Chi tieu ngay 27/07',
        amount: -150000
    },
];

function formatMoney(value) {
    return (new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(value));
}

function listHtml(element) {
    const symbol = element.amount < 0 ? "" : "+";
    const textPercent = calcPercentOneExpenses(element.amount);
    const divPercent = element.amount < 0 ? `<div class="item__percentage">${textPercent}</div>` : '';
    return `<div class="item clearfix">
    <div class="item__description">${element.description}</div>
    <div class="right clearfix">
      <div class="item__value"> ${symbol} ${formatMoney(element.amount)}</div>
      ${divPercent}
      <div class="item__delete">
        <button class="item__delete--btn">
          <i class="ion-ios-close-outline"></i>
        </button>
      </div>
    </div>
  </div>`;
}

function renderList(type = 'income', element) {
    const el = document.querySelector(element);
    let html = '';
    for (let index = 0; index < listData.length; index++) {
        const element = listData[index];
        if (type === 'income' && element.amount > 0)
            html += listHtml(element);
        if (type === 'expenses' && element.amount < 0)
            html += listHtml(element);
    }
    el.innerHTML = html;
}

function calcTotalIncome() {
    let sum = 0;
    for (let index = 0; index < listData.length; index++) {
        const element = listData[index];
        sum += element.amount > 0 ? element.amount : 0;
    }
    return sum;
}

function calcTotalExpenses() {
    let sum = 0;
    for (let index = 0; index < listData.length; index++) {
        const element = listData[index];
        sum += element.amount < 0 ? element.amount : 0;
    }
    return sum;
}

function calcTotalBudget() {
    return listData.reduce((total, value) => total + value.amount, 0)
}

function calcPercentExpenses(){
    const totalExpenses = calcTotalExpenses();
    const totalIncome = calcTotalIncome();
    return Math.round(totalExpenses / totalIncome * 100) + '%';
}

function calcPercentOneExpenses(value){
    const totalIncome = calcTotalIncome();
    return Math.round(value / totalIncome * 100) + '%'
}

function renderBudget() {
    document.querySelector(".budget__income--value").innerText = formatMoney(calcTotalIncome());

    document.querySelector(".budget__expenses--value").innerText = formatMoney(calcTotalExpenses());
    document.querySelector(".budget__expenses--percentage").innerText = calcPercentExpenses();

    document.querySelector(".budget__value").innerText = formatMoney(calcTotalBudget());
}

renderList('income', '#list-incomes');
renderList('expenses', '#list-expenses');
renderBudget();