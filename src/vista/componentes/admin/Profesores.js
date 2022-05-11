import './profesores.css';
import { Container } from "react-bootstrap";

export default function Profesores() {
    return(
        <div class="container-fluid content">
            <div class="row row-prof">
                <div class="col-md-4 col-prof ">
                1 of 3
                </div>
                <div class="col-md-4 col-prof ">
                2 of 3 (wider)
                </div>
                <div class="col-md-4 col-prof ">
                3 of 3
                </div>
            </div>
            <div class="row row-prof">
                <div class="col-md-4 col-prof ">
                1 of 3
                </div>
                <div class="col-md-4 col-prof ">
                2 of 3 (wider)
                </div>
                <div class="col-md-4 col-prof ">
                3 of 3
                </div>
            </div>
        </div>
    );
}