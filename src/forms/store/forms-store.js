import { load } from "../form-cases/load";

const state = {
    currentPage: 0,
    forms: [],
}

const loadNextPage = async () => {
    const forms = await load( state.currentPage + 1 );
    if ( forms.length === 0 ) return;
    state.currentPage += 1;
    state.forms = forms;
}

export default {
    loadNextPage,
    /**
    * @returns {Form[]}
    */
    getUsers: () => [...state.forms],
    /**
    * @returns {Number}
    */
    getCurrentPage: () => state.currentPage,
}