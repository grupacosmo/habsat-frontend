import React from 'react'
import MapNavbarSection from '../../container/MapNavbarSection/MapNavbarSection'

import './Members.css'

const Members = () => {
    return (
        <div className="Members">
            <MapNavbarSection />
            <div className="Members__content">
                <p>W skład grupy projektowej HABSat wchodzą m.in.: </p>
                <ul>
                    <li>inż. Filip Zyga (koordynator projektu)</li>
                    <li>mgr inż. Arkadiusz Papaj (specjalista ds. sond stratosferycznych)</li>
                    <li>mgr inż. Katarzyna Smelcerz (opiekunka koła)</li>
                    <li>Wiktoria Gąsior (specjalistka ds. promocji i marketingu)</li>
                </ul>
                <p>Zespół komputera pokładowego (OBC)</p>
                <ul>
                    <li>Maciej Rybiński (koordynator zespołu)</li>
                    <li>Darek Surdel</li>
                    <li>Jakub Kubica</li>
                    <li>Kamil Dziedzic</li>
                    <li>inż. Julia Słowikowska</li>
                    <li>Piotr Skała</li>
                    <li>inż. Wiktor Więcław </li>
                </ul>
                <p>Zespół ładunku (AI)</p>
                <ul>
                    <li>inż. Wiktor Tomasik (koordynator zespołu)</li>
                    <li>Bartek Gabrowicz</li>
                    <li>inż. Bartek Obratański</li>
                    <li>Damian Kluczyński</li>
                    <li>inż. Grzegorz Góra</li>
                    <li>inż. Hubert Orlicki</li>
                    <li>Jan Bobak</li>
                    <li>inż. mgr Klaudia Jaśko</li>
                    <li>inż. Marcin Zagrodzki</li>
                    <li>Michał Bąk</li>
                    <li>Przemek Dana</li>
                </ul>
                <p>Zespół Webdev</p>
                <ul>
                    <li>Patryk Pierzchała (koordynator zespołu)</li>
                    <li>inż. Bartosz Ziembański</li>
                    <li>inż. Patryk Borchowiec</li>
                    <li>inż. Błażej Zieliński</li>
                    <li>inż. Przemysław Skoczewski</li>
                    <li>inż. Piotr Zimak</li>
                    <li>Jakub Sukiennik</li>
                    <li>Łukasz Lech</li>
                    <li>Milena Łukasik</li>
                    <li>Dawid Laska</li>
                    <li>Mateusz Jamróz</li>
                </ul>
            </div>
        </div>
    )
}

export default Members

