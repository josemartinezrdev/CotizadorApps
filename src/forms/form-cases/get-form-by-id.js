import { Form } from "../models/form";

export const getFormByid = async(id) => {
    const url = `${import.meta.env.BASE_URL}/forms/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
}