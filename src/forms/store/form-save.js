import { Form } from "../models/form";

export const saveForm = async(formData) => {
    const form = new Form(formData);

    if (!form.name || !form.lastName || !form.email || !form.country || !form.city || !form.cost){
        throw console.error('Falta datos por llenar');
    }

    const formToSave = form;
    let  formUpdated;

    if (form.id){
        formUpdated = await updateForm(formToSave);
    } else {
        formUpdated = await createForm(formToSave);
    }

    return formUpdated;
}

const createForm = async(form) => {
    const url = `${import.meta.env.BASE_URL}/forms`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    const newForm = await res.json();
    console.log({newForm});
    return newForm;
}

const updateForm = async(form) => {
    const url = `${import.meta.env.BASE_URL}/forms/${form.id}`;
    const res = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(form),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    const newForm = await res.json();
    console.log({newForm});
    return newForm;
}