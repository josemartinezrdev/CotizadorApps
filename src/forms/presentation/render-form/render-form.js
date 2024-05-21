import formHtml from './render-form.html?raw';
import './render-form.css';
import { InsForm } from '../../models/form';
import { getFormByid } from '../../form-cases/get-form-by-id';

let forms, frm;
let loadedForm = {};

export const showForm = async(id) => {
    forms?.classList.remove('hide-form');
    loadedForm = {};
    if (!id) return;
    const form = await getFormByid(id);
    setFormValues(form);
}

export const hideForm = () => {
    forms?.classList.add('hide-form');
    frm?.reset();
}

const setFormValues = (form) => {
    frm.querySelector('[name="name"]').value = form.name;
    frm.querySelector('[name="lastName"]').value = form.lastName;
    frm.querySelector('[name="email"]').value = form.email;
    frm.querySelector('[name="country"]').value = form.country;
    frm.querySelector('[name="city"]').value = form.city;
    loadedForm = form;
}

export const renderForm = (element, callback) => {
    if (forms) return;

    forms = document.createElement('div');
    forms.innerHTML = formHtml;
    forms.className = 'form-container hide-form';
    frm = forms.querySelector('form');
    forms.addEventListener('click', (event) => {
        if(event.target.className === 'form-container'){
            hideForm();
        }
    });

    forms.addEventListener('submit', async(event) => {
        event.preventDefault();
        
        const formData = new FormData( frm );
        const data = { ...loadedForm };
        const configKeys = ['calidad', 'tipo', 'tipoAppDesk', 'interface', 'beneficio', 'login', 'integracion', 'perfiles', 'panelAdmin', 'idioma', 'estado'];
        const config = { ...data.config }; 
        for (const [key, value] of formData) {
            if ( key === 'cost' ){
                data[key] =  +value;
                continue;
            }
            if (configKeys.includes(key)) {
                config[key] = value;
                continue;
            }

            data[key] = value;
        }
        data.config = config;
        // console.log(userLike);
        await callback( data );

        hideForm();        
    });
    element.append ( forms );
    
}