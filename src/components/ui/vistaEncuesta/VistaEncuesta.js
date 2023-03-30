import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import './style.css';

const VistaEncuesta = () => {
    const { appStage, setAppStage } = useContext(GlobalContext);

    return (
        <>
            {appStage === 0 ?(
                <div className='div_wrapper'>
                    <h1>Vista completa de encuesta</h1>
                </div>

            ):(
                <div className='div_wrapper'>
                    <h1>Vista en partes de la encuesta</h1>
                </div>
            )}
        </>
    );
};

export default VistaEncuesta;