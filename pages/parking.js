import ReactMapGL, {Marker} from 'react-map-gl';
import {useState} from "react";

const initialState = {
    viewport: {
        width: '100vw',
        height: '100%',
        latitude: 54.379581,
        longitude: 18.604124,
        zoom: 17,
        pitch: 60,
        bearing: -60
    }
};

export default function Parking() {
    const [state, setState] = useState(initialState);

    return (
        <div>
            <div className="parking-page">
                <div className="map-wrapper">
                    <ReactMapGL
                        mapStyle="mapbox://styles/nikitakulish/ckdwufjvw1m0819lgwfuns5d3"
                        mapboxApiAccessToken="pk.eyJ1IjoibmlraXRha3VsaXNoIiwiYSI6ImNrOXI3NDM4MjByYmozZ21lcTlheHF3aWYifQ.f3K1k5ougE1FGvCE5BXRDw"
                        onViewportChange={(viewport) => setState({viewport})}
                        {...state.viewport}>
                        <Marker latitude={54.379581} longitude={18.604124} offsetLeft={-10} offsetTop={-10}>
                            <div className="parking-marker">
                                <img src="/static/images/pin.svg" alt=""/>
                                <span className="pulse-marker p1"></span>
                                <span className="pulse-marker p2"></span>
                            </div>
                        </Marker>
                    </ReactMapGL>
                </div>
                <div className="bottom-sheet">
                    <div className="section-item">
                        <img className="icon" src="/static/images/car-parking.svg" alt=""/>
                        <div className="content">
                            <h4>Parking</h4>
                            <h5>Strefa GDAA (9-17)</h5>
                        </div>
                    </div>
                    <div className="section-item">
                        <img className="icon" src="/static/images/info.svg" alt=""/>
                        <div className="content">
                            <h4>Informacja - <span>Płatny</span></h4>
                            <div className="week-info">
                                <span className="active">pn</span>
                                <span className="active">wt</span>
                                <span className="active">sr</span>
                                <span className="active">cz</span>
                                <span className="active">pt</span>
                                <span>sb</span>
                                <span>nd</span>
                            </div>
                        </div>
                    </div>
                    <div className="section-item">
                        <img className="icon" src="/static/images/car.svg" alt=""/>
                        <div className="content">
                            <h4>Numer rejestracyjny</h4>
                            <h5>
                                <input type="text" placeholder="-- ---- -"/>
                            </h5>
                        </div>
                    </div>
                    <div className="section-item">
                        <img className="icon" src="/static/images/clock.svg" alt=""/>
                        <div className="content">
                            <h4>Wybierz czas - <span>1 godz.</span></h4>
                        </div>
                    </div>

                    <div className="section-item">
                        <button>Parkuj</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
