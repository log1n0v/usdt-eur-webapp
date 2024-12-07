document.getElementById('calculate-btn').addEventListener('click', function() {
    const marketRate = parseFloat(document.getElementById('market-rate').value);
    const offeredRate = parseFloat(document.getElementById('offered-rate').value);
    const usdtAmount = parseFloat(document.getElementById('usdt-amount').value);

    if (isNaN(marketRate) || isNaN(offeredRate) || isNaN(usdtAmount) || marketRate <= 0 || offeredRate <= 0 || usdtAmount <= 0) {
        alert('Пожалуйста, введите все значения корректно (числа > 0).');
        return;
    }

    // Комиссия в процентах
    const commissionPercent = ((offeredRate - marketRate) / marketRate) * 100;

    // Сколько евро можно получить при обмене USDT по рыночному курсу
    const eurMarket = usdtAmount / marketRate;

    // Сколько евро можно получить при обмене USDT по предложенному курсу
    const eurOffered = usdtAmount / offeredRate;

    document.getElementById('commission').textContent = commissionPercent.toFixed(2);
    document.getElementById('eur-market').textContent = eurMarket.toFixed(2);
    document.getElementById('eur-offered').textContent = eurOffered.toFixed(2);
});
