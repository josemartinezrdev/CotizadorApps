import { renderForm, showForm } from "./presentation/render-form/render-form";
import { saveForm } from "./store/form-save";
import formsStore from './store/forms-store';

export const FormsApp = async(element) => {
    
    element.innerHTML = '';
    renderForm(element, async(data) => {
        saveForm(data);
        
    });
    showForm(element);
}