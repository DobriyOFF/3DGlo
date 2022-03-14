const sendForm = ({
    formId,
    someElem = []
}) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо наш менеджер с вами свяжется'

    const validate = () => {
        let success = true;
        const userName = document.querySelectorAll('[name="user_name"]');
        userName.forEach(input => {
            input.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^а-яА-Я]+[\s]/g, '');
            });
        });

        const userPhone = document.querySelectorAll('[name="user_phone"]');
        userPhone.forEach(input => {
            input.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^\d\()\-\+]/g, '');
            });
        });

        const userMassage = document.querySelectorAll('[name="user_message"]');
        userMassage.forEach(input => {
            input.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^а-яА-Я]+[\s]+[\d]+[\S]/g, '');
            });
        });
        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json)
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => [
            formBody[key] = val
        ])

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)
            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value
            }
        })

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText

                    formElements.forEach(input => {
                        input.value = ''
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
        } else {
            alert('Данные не валидны!!!')
        }
    }

    try {
        if (!form) {
            throw new Error('Верните форму на место')
        }
        form.addEventListener('submit', (event) => {
            event.preventDefault()
            validate()
            submitForm()
        })
    } catch (error) {
        console.log(error.message)
    }

}

export default sendForm