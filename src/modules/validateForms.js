const validateForms = () => {
    const forms = document.querySelectorAll('form');

    forms.forEach((item) => {
        item.addEventListener('input', (e) => {
            if (e.target.matches('.form-phone')) {
                e.target.value = e.target.value.replace(/[^\d\(\)\-]/gi, '');
            } else if (e.target.matches('.form-email')) {
                e.target.value = e.target.value.replace(/[^\w\-\@\.\!\~\*\']/gi, '');
            } else if (e.target.matches('.mess')) {
                e.target.value = e.target.value.replace(/[^А-ЯЁа-яё\s\-]/, '');
            } else if (e.target.matches('input[name="user_name"]')) {
                e.target.value = e.target.value.replace(/[^А-ЯЁа-яё\s\-]/, '');
            }
        })
    })
}

export default validateForms;