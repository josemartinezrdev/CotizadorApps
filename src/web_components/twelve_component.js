import { LitElement, css, html } from 'lit';
import './eleven_component.js';
import './home_component.js';
import { InsForm } from '../forms/form.js';

class TwelveComponent extends LitElement {
    static get properties() {
        return {
            first: { type: Boolean },
            second: { type: Boolean },
        };
    }
    constructor() {
        super();
        this.first = true;
        this.second = false;
        this.back = false;
        window.price = globalPrice.reduce((acc, num) => acc + num, 0);
        console.log(globalPrice);
        console.log(window.price);
        console.table(globalSettings);
    }
    btnClick() {
        this.first = !this.first;
        this.second = !this.second;
        globalPrice = [];
        window.price = 0;
    }
    btnBack() {
        this.first = false;
        this.second = false;
        this.back = true;
        globalPrice = [];
        window.price = 0;
    }
    render() {
        return html`${this.first
            ? html`
            <div class="form-container">
                <div class="container-top">
                    <button @click="${this.btnBack}" id="back">
                        ← Volver a empezar
                    </button>
                </div>
                <div class="form-dialog">
                    <div class="info">
                        <span>¡Bien! ¡Hemos terminado!</span>
                        <h3>¡Compártenos si te ha gustado!</h3>
                        <div class="share">
                            <a href="https://www.facebook.com/?locale=es_LA" target="_blank"><img src="../../src/assets/imgs/facebook.png" alt="facebook"></a>
                            <a href="https://co.linkedin.com/" target="_blank"><img src="../../src/assets/imgs/linkedin.png" alt="linkedin"></a>
                            <a href="https://www.google.com/?hl=es" target="_blank"><img src="../../src/assets/imgs/google.png" alt="google"></a>
                            <a href="https://x.com/?lang=es" target="_blank"><img src="../../src/assets/imgs/twitter.png" alt="twitter"></a>
                        </div>
                    </div>
                    <form @submit="${this._handleSubmit.bind(this)}"> 
                        <span>Porfavor ingresa tus datos</span>
                        <span>Nombre/s</span>
                        <input type="text" id="name" name="name" placeholder="Nombre/s" required/>
                        <span>Apellido/s</span>
                        <input type="text" id="lastName" name="lastName" placeholder="Apellido/s" required/>
                        <span>Email</span>
                        <input type="email" id="email" name="email" placeholder="Email" required/>
                        <span>Pais</span>
                        <input type="text" id="country" name="country" placeholder="Pais" required/>
                        <span>Ciudad</span>
                        <input type="text" id="city" name="city" placeholder="Ciudad" required/>
                        <h3>
                            El costo estimado de tu app es
                            <br>
                            <span id="cost">${window.price} COP</span>
                        </h3>
                        <button id="continuar" type="submit">
                            Crear tu proyecto
                        </button>
                    </form>
                </div>
            </div>
        `
            : ""}
        ${this.second ? html`<home-component></home-component>` : ""}
        ${this.back ? html`<home-component></home-component>` : ""}
        `;
    }

    async _handleSubmit(event) {
        event.preventDefault();

        const form = this.shadowRoot.querySelector('form');
        const formData = new FormData(form);
        console.log(formData);
        const data = new InsForm({
            id: Date.now().toString(), // Generar un ID único, si es necesario
            name: formData.get('name'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            country: formData.get('country'),
            city: formData.get('city'),
            cost: Number(window.price),
            config: {
              calidad: window.globalSettings.optCalidad,
              tipo: window.globalSettings.optTipoApp,
              tipoAppDesk: window.globalSettings.optTipoNewDesk,
              interface: window.globalSettings.optInterface,
              beneficio: window.globalSettings.optBeneficio,
              login: window.globalSettings.optLogin,
              integracion: window.globalSettings.optIntegration,
              perfiles: window.globalSettings.optPerfiles,
              panelAdmin: window.globalSettings.optPanel,
              idioma: window.globalSettings.optIdioma,
              estado: window.globalSettings.optEstado
            }
        });

        console.log('Datos a enviar:', data);

        try {
            const response = await fetch('https://664a0d82a300e8795d40d3ef.mockapi.io/insForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error en la solicitud: ${response.statusText} - ${errorText}`);
            }

            const result = await response.json();
            console.log('Respuesta de la API:', result);
        } catch (error) {
            console.error('Error al enviar los datos:', error);
        }
        this.btnClick();
    }

    static styles = css`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

        .info{
            text-align: center;
        }
        
        h3{
            text-align: center;
            color: white;
            font-size: 15px;
            font-weight: bolder;
            margin: 0;
        }
        
        img{
            width: 25px;
            margin: 5px;
        }
        
        .share{
            display: flex;
            justify-content: center;
            align-items: center;
        } 
        
        #back {
            background-color: transparent;
            border: none;
            color: white;
            font-size: 15px;
            cursor: pointer;
        }
        
        .container-top {
            width: 90%;
            margin: 5px 30px;
            position: absolute;
            top: 0;
        }
        
        .form-container {
            position: relative;
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #3d3935;
        }
        
        .form-dialog {
            font-family: "Poppins", sans-serif;
            width: 80vw;
            background-color: #615f5e;
            border-radius: 5px;
            padding: 10px;
            box-shadow: 0px 5px 15px rgba(255, 255, 255, 0.2);
        }
        
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        ::placeholder {
            font-size: 15px;
        }
        
        input {
            width: 90%;
            height: 20px;
            margin: 10px;
            font-size: 15px;
        }
        
        span {
            font-size: 15px;
            color: white;
        }
        
        #continuar {
            max-width: 50%;
            margin: 0.5em 0;
            border-radius: 5px;
            text-align: center;
            display: inline-block;
            box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
            padding: 1em 3em;
            background-image: linear-gradient(to left, #14e6d3, #8660f5);
            border: 0;
            color: white;
            font-size: 16px;
            font-weight: 700;
            box-sizing: inherit;
        }
        
        #cost {
            color: #14e2cd;
            font-size: 25px;
            font-weight: 700;
            margin: 10px;
        }
        
        @media (min-width: 678px) {
            .form-dialog {
                width: 75vw;
            }

            ::placeholder {
                font-size: 18px;
            }

            h3{
                font-size: 20px;
            }

            input {
                height: 25px;
                font-size: 18px;
            }
        
            span {
                font-size: 18px;
            }
        
            #continuar {
                font-size: 22px;
            }
        
            #cost {
                font-size: 35px;
            }
        
            .back {
                font-size: 20px;
            }
        }
        
        @media (min-width: 1285px) {
            .form-dialog {
                width: 55vw;
            }
        
            ::placeholder {
                font-size: 18px;
            }
        
            input {
                width: 70%;
                height: 28px;
                font-size: 18px;
            }
        
            span {
                font-size: 22px;
            }
        
            #continuar {
                font-size: 25px;
            }
        
            #cost {
                font-size: 30px;
            }
        
            .back {
                font-size: 22px;
            }
        }
    `;
}

customElements.define("twelve-component", TwelveComponent);
