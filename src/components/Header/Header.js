import './Header.css';


const Header = () => {
    return (
     <span onClick={() => window.scroll(0,0)} 
     className="header">
           🎬 Movie Tracker 🎥
    </span>
    );
};

export default Header;