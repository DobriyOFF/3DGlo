import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import serviceScroll from './modules/serviceScroll'
import calculate from './modules/calculate'
import validateForms from './modules/validateForms'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm';

timer('01 april 2022')
menu()
modal()
serviceScroll()
calculate()
validateForms()
tabs()
slider()
calc(100)
sendForm({
    formId: 'form1',
    someElem: [{
        type: 'block',
        id: 'total'
    }]
});
sendForm({
    formId: 'form2',
    someElem: [{
        type: 'block',
        id: 'total'
    }]
});
sendForm({
    formId: 'form3',
    someElem: [{
        type: 'block',
        id: 'total'
    }]
});