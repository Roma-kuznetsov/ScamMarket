import React from "react";
import { Nav } from "react-bootstrap";
import s from "./Footer.module.css";

const Footer = () => {
    let styles = 'text-secondary'
return(<footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase text-white" >Информация</h5>
                <p className="text-white">Тут вы можете найти всю интересующую вас информацию и ответы на часто задаваемые вопросы, а так же информацию о наших клиентах. Сроках и условиях доставки. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis, in harum cupiditate tempora accusamus alias praesentium laudantium deserunt tenetur dolores inventore fuga, suscipit ipsa officia reiciendis exercitationem! Nihil, ipsam.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase text-white">Доставка</h5>
                <ul className="list-unstyled">
                    <li><a className="text-secondary text-decoration-none" href="#!">Условия доставки</a></li>
                    <li><a className="text-secondary text-decoration-none" href="#!">Доставка по России</a></li>
                    <li><a className="text-secondary text-decoration-none" href="#!">Доставка по СНГ</a></li>
                    <li><a className="text-secondary text-decoration-none" href="#!">Link 4</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase text-white">Документы</h5>
                <ul className="list-unstyled">
                    <Nav.Link  href="tel:+78142332211"> <a>+7(814)-233-22-11</a> </Nav.Link>
                    <li><a className={s.link} href="#!">Link 1</a></li>
                    <li><a className="text-secondary text-decoration-none" href="#!">Link 2</a></li>
                    <li><a className="text-secondary text-decoration-none" href="#!">Link 3</a></li>
                    <li><a className="text-secondary text-decoration-none" href="#!">Link 4</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3  text-white">© 2022 Copyright:
        <p> ScamMarket.com</p>
    </div>

</footer>
)}

export default Footer