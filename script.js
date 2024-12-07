document.getElementById('calculate-btn').addEventListener('click', function() {
    const marketRate = parseFloat(document.getElementById('market-rate').value);
    const offeredRate = parseFloat(document.getElementById('offered-rate').value);
    const usdtAmount = parseFloat(document.getElementById('usdt-amount').value);

    if (isNaN(marketRate) || isNaN(offeredRate) || isNaN(usdtAmount)) {
        alert('Пожалуйста, введите все значения корректно.');
        return;
    }

    // Комиссия = (предлагаемый курс - рыночный курс)
    const commission = offeredRate - marketRate;

    // Сколько евро можно получить, если использовать USDT по рыночному курсу
    // Равно: usdtAmount / marketRate
    const eurMarket = usdtAmount / marketRate;

    // Сколько евро можно получить, если использовать предложенный курс
    // Равно: usdtAmount / offeredRate
    const eurOffered = usdtAmount / offeredRate;

    document.getElementById('commission').textContent = commission.toFixed(4) + ' USDT/€';
    document.getElementById('eur-market').textContent = eurMarket.toFixed(2) + ' €';
    document.getElementById('eur-offered').textContent = eurOffered.toFixed(2) + ' €';
});