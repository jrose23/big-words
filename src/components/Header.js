import logo from '../assets/logo.svg';
import Form from './Form';

function Header({ handleSubmit }) {
    return (
        <header>
            <div className="header-container">
                <img className="logo" src={logo} alt="" />
                <Form handleSubmit={handleSubmit} />
            </div>
        </header>
    );
}

export default Header;
