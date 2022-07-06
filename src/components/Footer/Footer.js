import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <>
        <div> 
            <div className="bg-dark text-white footer-div">
                <p className="col-md-4 mb-0 text-white  ps-1">Creado por Franco Prafil &copy; 2022 Company, Inc</p>
                <Link to="/" className="fs-4 col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none text-white">Movie Rentals
                </Link>
            </div>
        </div>
        </>
    )
}

export default Footer