import logo from '../assets/logo.svg';
import Form from './Form';

function Header({ handleSubmit, handleAlert }) {
    return (
        <header>
            <div className="header-container">
                <img className="logo" src={logo} alt="" />
                <Form handleSubmit={handleSubmit} handleAlert={handleAlert} />
            </div>
        </header>
    );
}

export default Header;
