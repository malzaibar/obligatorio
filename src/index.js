import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import Header from './componentes/header.js'
import About from './componentes/about.js'
import Services from './componentes/services.js'
import Resume from './componentes/resume.js'
import Portfolios from './componentes/portfolios.js'
import Counter from './componentes/counter.js'
import Contact from './componentes/contact.js'
import Footer from './componentes/footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';

class Obligatorio extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <About />
                <Services />
                <Resume />
                <Portfolios />
                <Counter />
                <Contact />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<Obligatorio />, document.getElementById("root"));