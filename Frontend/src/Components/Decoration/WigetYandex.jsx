import { Container } from 'react-bootstrap';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import s from "../Corzina/Corzine.module.css"

const WigetYandex = (props) => (
    //19cec771-cd32-42e2-bdba-5c12ccedf73d
    <Container>
        <>Как оказалось чтоб подключить карту ТК нужно быть юр.лицом так что вот яндекс карта</>
        <div className={s.map}>
        <YMaps>
            <Map height={500} width={800} defaultState={{ center: [56.34, 37.573856], zoom: 9 }}>
                <Placemark
                    modules={['geoObject.addon.balloon']}
                    defaultGeometry={[56.342711, 37.529305]}
                    properties={{
                        balloonContentBody:
                            'Я здесь',
                    }}
                />
            </Map>
        </YMaps>
        </div>
    </Container>

);

export default WigetYandex