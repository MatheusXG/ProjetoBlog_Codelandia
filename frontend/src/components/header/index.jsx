import './style.css'
import SearchIcon from '../.././assets/images/search_icon.svg'
export default function Header() {

    return(
        <div id="container" className="container-fluid d-flex align-items-center justify-content-center ">
            <div id="container-titles">
                <p className="text-md" id="title">Codelândia</p>
                <p className="text-md" id="subtitle">blog</p> 
                <div id="container-search">
                    <img src={SearchIcon} alt="" />                  
                    <input id="search" type="text" placeholder="Pesquise no blog" />
                </div>
            </div>
        </div>

    );
};
