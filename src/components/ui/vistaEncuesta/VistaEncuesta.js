import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import GraficosEncuesta from '../graficosEncuesta/GraficosEncuesta';
import SelectsEncuesta from '../selectsEncuesta/SelectsEncuesta';
import TablaEncuesta from '../tablaEncuesta/TablaEncuesta';
import './style.css';

const VistaEncuesta = () => {
    const { appStage, setAppStage } = useContext(GlobalContext);

    return (
        <>
            {appStage === 0 ?(
                <div className='div_wrapper'>
                    <div className='div_titulo'>
                        <h3 className='titulo'>ENCUESTA DE SIEMBRA</h3>
                    </div>
                    <div className='div_contentSelect'>
                        <SelectsEncuesta/>
                    </div>
                    <div>
                        <GraficosEncuesta/>
                    </div>
                </div>

            ):(
                <div className='div_wrapper'>
                    <div className='div_titulo'>
                        <h3 className='titulo'>ENCUESTA DE SIEMBRA</h3>
                    </div>
                    <div className='div_contentSelect'>
                        <SelectsEncuesta/>
                    </div>
                    <div>
                        <TablaEncuesta/>
                    </div>
                </div>
            )}
        </>
    );
};

export default VistaEncuesta;