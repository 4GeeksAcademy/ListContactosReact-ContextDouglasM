import React from "react";

const Contact = ({name,address,phone,email}) => {
    return(
        <div className="bg-light m-4">
            <div className="d-flex bd-highlight mb-3 border border-secondary">
                <div className="p-2 bd-highlight">
                    <img src="https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-ilustracion-vectorial_268834-538.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1717718400&semt=sph" alt="perfil"/>
                </div>
                <div className="ms-5 mt-5">
                    <div>
                        <h3>{name}</h3>
                    </div>
                    <div className="p-0 bd-highlight mt-3">
                        <div className="d-flex align-items-center">
                            <i class="fas fa-map-marker-alt me-3 p-0"></i>
                            <h4> {address} </h4>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex align-items-center">
                            <i class="fas fa-phone me-3"></i>
                            <h4> {phone} </h4>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex align-items-center">
                            <i class="far fa-envelope me-3"></i>
                            <h4> {email} </h4>
                        </div>
                    </div>
                </div>
                <div className="ms-auto p-2 bd-highlight d-flex justify-content-end p-0">
                    <i class="fas fa-pen m-5 me-3"></i>
                    <i class="fas fa-trash-alt m-5"></i>
                </div>
            </div>
        </div>
    )
}

export default Contact;