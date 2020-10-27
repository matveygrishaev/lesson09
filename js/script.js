'use strict';

let start = document.getElementById('start'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    depositCheck = document.querySelector('#deposit-check'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpenses = document.querySelector('.additional_expenses'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    incomeItems = document.querySelectorAll('.income-items');

const AppData = function () {
    this.budget =  0;
    this.budgetDay =  0;
    this.budgetMonth =  0;
    this.income =  {};
    this.incomeMonth =  0;
    this.addIncome =  [];
    this.expenses =  {};
    this.expensesMonth =  0;
    this.addExpenses =  [];
    this.deposit =  false;
    this.percentDeposit =  0;
    this.moneyDeposit =  0;
};


const appData = new AppData();

AppData.prototype.

/*
start.disabled = true;

salaryAmount.addEventListener('input', function(){
    if (salaryAmount.value.trim() === '') {
        start.disabled = true;
    } else {
        start.disabled = false;
    }
});

start.addEventListener('click', appData.start.bind(appData));

expensesPlus.addEventListener('click', appData.additionalExpensesBlock);
incomePlus.addEventListener('click', appData.additionalIncomeBlock);
periodSelect.addEventListener('change', appData.getPeriodAmount);

*/