import './styles.css'
import Heart from '../.././assets/images/heart.svg'
export default function Section() {

    return (
        <div id="container-row" className="row d-flex justify-content-center align-items-center flex-column" style={{paddingBottom: '100px'}}>
            <div id="container-card" className="col-12" style={{height: '195px'}}>
                <div className="d-flex justify-content-between" style={{marginTop: '22px', marginLeft: '22px', marginBottom: '10px', marginRight: '22px'}}>
                    <p id="date-card">02 de jul, 2021</p>
                    <img src={Heart} style={{width: '20px', height: '20px', marginRight: '-10px'}} alt=""/>
                </div>
                <p id="title-card">Agora é oficial: o Windows 11 está vindo</p>
                <p  class="text-break" id="text-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.</p>
            </div>
            <div id="container-card" className="col-12" style={{height: '259px'}}>
                <div className="d-flex justify-content-between" style={{marginTop: '22px', marginLeft: '22px', marginBottom: '10px', marginRight: '22px'}}>
                    <p id="date-card">02 de jul, 2021</p>
                    <img src={Heart} style={{width: '20px', height: '20px', marginRight: '-10px'}} alt=""/>
                </div>
                <p id="title-card">Tim Berners-Lee vai leiloar código-fonte da web</p>
                <p  class="text-break" id="text-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.</p>
            </div>
            <div id="container-card" className="col-12" style={{height: '163px'}}>
                <div className="d-flex justify-content-between" style={{marginTop: '22px', marginLeft: '22px', marginBottom: '10px', marginRight: '22px'}}>
                    <p id="date-card">02 de jul, 2021</p>
                    <img src={Heart} style={{width: '20px', height: '20px', marginRight: '-10px'}} alt=""/>
                </div>
                <p id="title-card">Tem Firefox novo no pedaço e você vai querer migrar</p>
                <p class="text-break" id="text-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.</p>
            </div>
            <div id="container-card" className="col-12" style={{height: '259px'}}>
                <div className="d-flex justify-content-between" style={{marginTop: '22px', marginLeft: '22px', marginBottom: '10px', marginRight: '22px'}}>
                    <p id="date-card">02 de jul, 2021</p>
                    <img src={Heart} style={{width: '20px', height: '20px', marginRight: '-10px'}} alt=""/>
                </div>
                <p id="title-card">John McAfee, criador do antivírus McAfee, morre</p>
                <p class="text-break" id="text-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.</p>
            </div>
         
        </div>
    )
}