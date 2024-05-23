export class InsForm {
    /**
     * 
     * @param {Like<Form>} formDataLike 
     */
    constructor({ id, name, lastName, email, country, city, cost, config = {} }) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.country = country;
        this.city = city;
        this.cost = cost ?? null;
        this.config = {
            calidad: config?.calidad ?? null,
            tipo: config?.tipo ?? null,
            tipoAppDesk: config?.tipoAppDesk ?? null,
            interface: config?.interface ?? null,
            beneficio: config?.beneficio ?? null,
            login: config?.login ?? null,
            integracion: config?.integracion ?? null,
            perfiles: config?.perfiles ?? null,
            panelAdmin: config?.panelAdmin ?? null,
            idioma: config?.idioma ?? null,
            estado: config?.estado ?? null
        };
    }
}
