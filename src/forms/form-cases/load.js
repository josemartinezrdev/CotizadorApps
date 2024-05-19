import { Form } from "../models/form";

export const load = async() =>{
    const url = `${import.meta.env.BASE_URL}/forms`;
    const res = await fetch(url);
    const datar = await res.json();
    const forms = datar.map(Form);
    console.log(forms)
    return forms;
}