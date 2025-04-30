import { Tabs, Typography } from 'antd'
import SSTVTabComponent from '../../component/SSTVTabComponent/SSTVTabComponent'
import "./SSTVSection.css"

const { TabPane } = Tabs
const { Title } = Typography

const importAll = (r:__WebpackModuleApi.RequireContext):unknown[] => {
    return r.keys().map(r)
}

export interface ISstvDataItem {
    key: number,
    tag: string,
    images: unknown[],
    description: JSX.Element
}

const sstvData:ISstvDataItem[] = [
    {
        key: 1,
        tag: "ha1dsl",
        images: importAll(require.context('../../assets/images/sstv/ha1dsl', true, /\.(png|jpe?g|svg)$/)),
        description: <span>Szabó "Feri" Ferenc HA1DSL z <strong>Węgier</strong>. Sprzęt: radio: IC-211E, antena: 6dB Vertical TRIO-STAR, kabel koncentryczny 15 metrów RG-213. Bardzo dziękujemy za nadesłane zdjęcia!'</span>
    },
    {
        key: 2,
        tag: "sq7iqt",
        images: importAll(require.context('../../assets/images/sstv/sq7iqt', true, /\.(png|jpe?g|svg)$/)),
        description: <span>Krzysiek SQ7IQT z <strong>Polski</strong> odebrał komplet zdjęć SSTV. Wielkie dzięki za nadesłane zdjęcia!</span>
    },
    {
        key: 3,
        tag: "vu3yfd",
        images: importAll(require.context('../../assets/images/sstv/vu3yfd', true, /\.(png|jpe?g|svg)$/)),
        description: <span>T. S. Prasad VU3TFD z <strong>Indii, za pomocą WebSDR-a</strong> odebrał nasze zdjęcia. Dzięki za nadesłane zdjęcia!</span>
    }
]


const SSTVSection = () => {
    return (
        <div className="SSTVSection">
            <div className="SSTVSection__title">
                <Title
                    level={4}
                >
                    Galeria przechwyconych obrazów SSTV
                </Title>
            </div>
            <div className="SSTVSection__tabs">
                <Tabs
                    centered
                    defaultActiveKey="1"
                >
                    {
                        sstvData.map(data => {
                            return (
                                <TabPane
                                    key={data.key}
                                    tab={data.tag.toLocaleUpperCase()}
                                >
                                    <SSTVTabComponent
                                        tag={data.tag}
                                        images={data.images}
                                        description={data.description}
                                    />
                                </TabPane>
                            )
                        })
                    }
                </Tabs>
            </div>
        </div>
    )
}

export default SSTVSection