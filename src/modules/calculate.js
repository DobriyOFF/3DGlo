const calculate = () => {
    const calcItem = document.querySelectorAll('.calc-item');
    calcItem.forEach((item) => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/gi, '');
        });
    })
};

export default calculate;