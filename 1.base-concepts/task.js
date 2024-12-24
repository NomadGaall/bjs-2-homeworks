/* Задача 1 */
"use strict";

function solveEquation(a, b, c) {
    // Вычисляем дискриминант
    let discriminant = b ** 2 - 4 * a * c;

    // Проверяем значение дискриминанта
    if (discriminant < 0) {
        // Если дискриминант меньше нуля, корней нет
        return [];
    } else if (discriminant === 0) {
        // Если дискриминант равен нулю, один корень
        let root = -b / (2 * a);
        return [root];
    } else {
        // Если дискриминант больше нуля, два корня
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [root1, root2];
    }
}

// Пример использования функции
console.log(solveEquation(1, -3, 2)); // [2, 1]
console.log(solveEquation(1, 2, 1));  // [-1]
console.log(solveEquation(1, 0, 1));  // []

/* Задача 2 */
"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    // Проверяем, являются ли все аргументы числами
    if (typeof percent !== "number" || typeof contribution !== "number" || typeof amount !== "number" || typeof countMonths !== "number") {
        // Попытаемся преобразовать строки в числа
        percent = parseFloat(percent);
        contribution = parseFloat(contribution);
        amount = parseFloat(amount);
        countMonths = parseFloat(countMonths);

        // Если преобразование не удалось, возвращаем false
        if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
            return false;
        }
    }

    // Преобразуем годовую процентную ставку в месячную
    let monthlyPercent = percent / 100 / 12;

    // Вычисляем тело кредита (сумма кредита минус первоначальный взнос)
    let loanBody = amount - contribution;

    // Если тело кредита равно нулю, возвращаем 0 (кредит не взят)
    if (loanBody <= 0) {
        return 0;
    }

    // Вычисляем ежемесячный платеж
    let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)));

    // Вычисляем общую сумму, которую клиент заплатит
    let totalPayment = monthlyPayment * countMonths;

    // Округляем результат до двух знаков после запятой
    totalPayment = Math.round(totalPayment * 100) / 100;

    return totalPayment;
}

// Примеры использования функции
console.log(calculateTotalMortgage(10, 0, 50000, 12)); // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // 12479.52
