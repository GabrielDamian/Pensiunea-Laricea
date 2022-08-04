import './Agrement.css';
import AppBar from './AppBar';
import Footer from './Footer';

import CalimaniImg from '../Media/activities/2.jpg';
import PartieImg from '../Media/activities/1.jpg';
import AgrementBg from '../Media/bg/agrement.jpg';
import AgrementImg from '../Media/activities/3.jpg';
import React from 'react';

const AgrementComponent = ({indexPointer})=>{
    React.useEffect(()=>{
        document.title = "Pensiunea Laricea - Agrement"
    },[])
    const config = [
        {
            title: 'Parcul National Calimani',
            desc: `Parcul Național Călimani protejează pe teritoriul său ecosisteme și habitate valoroase, precum pădurile de molid cu zâmbru, tufărișurile de jneapăn cu smârdar, pajiștile cu bujori de munte (Rhododendron), gențiene, toporași, sclipeți, etc. Zâmbrul (Pinus Cembra) mai poate fi găsit în România doar în câteva zone izolate din Carpații Orientali și Meridionali. Parcul ocupă o suprafață de aproximativ 24000 ha. Zona cuprinsă în Țara Dornelor se evidențiază prin prezența uriașei caldere vulcanice, cu un diamentru de aproximativ 10 km, fiind una dintre cele mai mari din Europa.
            Munții Călimani sunt cei mai tineri și mai înalți munți vulcanici din țara noastră, cel mai înalt vârf, Pietrosu Călimani, atingând 2100m. Legenda spune că faimosul haiduc Pintea și-ar fi ascuns comorile aici, în Călimani.`,
            img: CalimaniImg,
            map:<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10521.845139397821!2d25.345192037464926!3d47.26470416677336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47358e886f5f3c9b%3A0x7e7522b5680a12f5!2sParcul%20Na%C8%9Bional%20C%C4%83limani!5e0!3m2!1sro!2sro!4v1659013012584!5m2!1sro!2sro" 
            width="100%" 
            height="100%" 
            style={{border:'none', outline:'none'}}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        },
        {
            title: 'Partia dealul negru',
            desc: `Pârtia de schi Dealul Negru are un grad de dificultate mediu şi lungimea de 3000 metri. Altitudinea la plecare este de 1250 metri şi la sosire de 850 m, diferenţa de nivel fiind de 400 m. Este o pârtie foarte frumoasă, sectoarele cu grad mediu de dificultate alternând cu cele uşoare, iar porţiunile coborâte prin pădure cu cele prin poieni ce deschid panorame deosebite.
            Pârtia deservită de telescaun nu beneficiază de iluminare nocturnă şi zăpadă artificială.
            Dealul Negru este a treia pârtie ca lungime din ţară şi prima din Moldova.
            Transportul pe cablu se realizează prin instalaţia de tip telescaun (120 de scaune cu câte 2 locuri), urcarea făcându-se în aproximativ 25 de minute. Baza de plecare a telescaunului este pe strada Negreşti, iar cea de terminare la cea mai înaltă cotă a dealului (1300m). Urcarea se realizează spre partea superioară a versantului Nordic al Dealului Negru, până la cota 1300 m. Schiorii şi turiştii care urcă pe Dealul Negru au ocazia să admire toată depresiunea Dornelor înghesuită de-a lungul râurilor Dorna şi Bistriţa între Munţii Suhard, Călimani şi Giumalău. Mai departe, se deschid privelişti deosebite spre Munţii Rodnei.
            În partea superioară sunt amenajate două pârtii cu un grad mai mare de dificultate, deservite de teleschi.
            Pârtia beneficiază şi de snowtubing cu bandă transportoare.`,
            img: PartieImg,
            map:<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2704.7344111711614!2d25.333287050035647!3d47.319526815657525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4735927a7b226153%3A0xc3b1b0f3d995e65c!2sP%C3%A2rtia%20Dealu%20Negru!5e0!3m2!1sro!2sro!4v1659013256181!5m2!1sro!2sro" 
            width="100%" 
            height="100%" 
            style={{border:'none', outline:'none'}}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        },
        
        {
            title: 'Agrement',
            desc: ` Pentru cei ce-şi doresc o vacanţă activă, staţiunea Vatra Dornei dispune de multiple posibilităţi de petrecere a timpului liber: drumeţii, circuite auto la mănăstirile din Bucovina, pescuit pe râul Bistriţa, parapantă în Suhard, riverrafting, ciclism montan prin toată depresiunea Dornelor, iar pentru sezonul de iarnă sunt amenajate pârtii de schi de dificultate medie, prevăzute cu instalaţii de transport pe cablu, un patinoar şi o pârtie pentru sănii, iar pe muntele Runc se află o partie de schi fond`,
            img: AgrementImg,
            map:<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2704.7344111711614!2d25.333287050035647!3d47.319526815657525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4735927a7b226153%3A0xc3b1b0f3d995e65c!2sP%C3%A2rtia%20Dealu%20Negru!5e0!3m2!1sro!2sro!4v1659013256181!5m2!1sro!2sro" 
            width="100%" 
            height="100%" 
            style={{border:'none', outline:'none'}}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        }
    ]


    return(
        <div className='t1-home-container' name='top-ref-t1'>
            <AppBar />
            <div className='t1-section-1' style={{
                backgroundImage: `url(${AgrementBg
                })`,
                backgroundSize: 'cover',
                backgroundPosition: 'top'
            }}>
                <div className='t1-section-1-top'>
                    <div className='t1-section1-about'>
                        <span>Agrement: {config[indexPointer]["title"]}</span>
                    </div>
                </div>
            </div>
            <div className='t1-section-agrement-container'>
                <div className='t1-section-agrement-container-title'>
                    <span>{config[indexPointer]["title"]}</span>
                </div>
                <div className='t1-section-agrement-container-img'>
                    <img src={config[indexPointer]["img"]}/>
                </div>

                <div className='t1-section-agrement-container-desc'>
                    <span>{config[indexPointer]["desc"]}</span>
                </div>
                <div className='t1-section-agrement-container-map'>
                    {config[indexPointer]["map"]}
                </div>
            </div>
            <Footer/>
        </div>
        )
}
export default AgrementComponent;