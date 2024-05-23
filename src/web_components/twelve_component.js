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
    }
    btnClick() {
        this.first = !this.first;
        this.second = !this.second;
    }
    render() {
        return html`${this.first
            ? html`
            <div class="form-container">
                <div class="form-dialog">
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
                        <div>
                            <p id="cost">Precio</p>
                        </div>
                        <button id="continuar" type="submit">
                            Continuar
                        </button>
                    </form>
                </div>
            </div>
        `
            : ""}
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
            cost: Number(formData.get('cost')),
            config: {}
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
    }

    static styles = css`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

        .form-container {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.5);
        }
        
        .form-dialog {
            font-family: "Poppins", sans-serif;
            width: 60vw;
            background-color: white;
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
            font-size: 18px;
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
            ::placeholder {
                font-size: 20px;
            }
            
            input {
                height: 30px;
                font-size: 20px;
            }
            
            span {
                font-size: 25px;
            }  
            #continuar {
                font-size: 28px;
            }
            
            #cost {
                font-size: 35px;
            }  
        }
    `;
}

customElements.define("twelve-component", TwelveComponent);