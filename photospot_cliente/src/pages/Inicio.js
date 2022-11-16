import { Footer } from "../components/general/Footer";
import { NavBar } from "../components/general/NavBar";
import volcan from '../images/volcan.jpg';
import foto1 from '../images/DSC09148.jpg';
import foto2 from '../images/DSC09133.jpg';
import foto3 from '../images/DSC09098.jpg';
import foto4 from '../images/DSC09078.jpg';

function Inicio() {
    return (
        <>
            <NavBar />
            <div className="d-md-flex  w-100 my-md-3 ps-md-3">
                <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <img src={volcan} style={{width: '300px'}} alt="volcan"/>
                </div>
                <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        <h5 className="display-6">Sobre Nosotros</h5><br/>
                        <h2 className="display-5">Solo necesitas tomar las fotos</h2><br/>
                        <p className="lead">Nosotros te facilitamos los mejores Spots fotógraficos en la ciudad donde te
                            encuentres.</p><br/>
                        <div className="d-md-flex">
                            <div>
                                <h1 className="display-6">20</h1>
                                <p className="lead">Ciudades</p>
                            </div>
                            <div className="px-md-5">
                                <h1 className="display-6">5k</h1>
                                <p className="lead">Spots</p>
                            </div>
                            <div className="px-md-5">
                                <h1 className="display-6">4k</h1>
                                <p className="lead">Usuarios</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '100%'}}>< iframe width="100%" title="Mapa" height="600" frameborder="0" scrolling="no" marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Oaxaca+(PhotoSpot)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
                    href="https://www.gps.ie/car-satnav-gps/" >Sat Navs</a></iframe></div>
            <br/>
            <h2 class="display-5 px-md-4">Spots populares en Oaxaca</h2><br/>
            <div class="card-group ">
                <div class="card mx-5" style={{borderRadius: '40px'}}>
                    <img src={foto1} class="card-img-top" style={{borderRadius: '30px'}} alt="foto1"/>
                    <div class="card-body">
                        <h5 class="card-title">Canteras</h5>
                        <p class="card-text">23 Shoots</p>
                        <p class="card-text"><small class="text-muted">Uploaded by Eduardo</small></p>
                    </div>
                </div>
                <div class="card mx-5" style={{borderRadius: '40px'}}>
                    <img src={foto2} class="card-img-top" style={{borderRadius: '30px'}} alt="foto2"/>
                    <div class="card-body">
                        <h5 class="card-title">Punta Zicatela</h5>
                        <p class="card-text">44 Shoots</p>
                        <p class="card-text"><small class="text-muted">Uploaded by LuisFe</small></p>
                    </div>
                </div>
                <div class="card mx-5" style={{borderRadius: '40px'}}>
                    <img src={foto3} class="card-img-top" style={{borderRadius: '30px'}} alt="foto3"/>
                    <div class="card-body">
                        <h5 class="card-title">Reforma 408</h5>
                        <p class="card-text">12 Shoots</p>
                        <p class="card-text"><small class="text-muted">Uploaded by Ximena</small></p>
                    </div>
                </div>
                <div class="card mx-5" style={{borderRadius: '40px'}}>
                    <img src={foto4} class="card-img-top" style={{borderRadius: '30px'}} alt="foto4"/>
                    <div class="card-body">
                        <h5 class="card-title">Uni 301</h5>
                        <p class="card-text">19 Shoots</p>
                        <p class="card-text"><small class="text-muted">Uploaded by LuisFe</small></p>
                    </div>
                </div>
            </div>
            <br/><br/>
            <Footer />
        </>
    )
}

export default Inicio