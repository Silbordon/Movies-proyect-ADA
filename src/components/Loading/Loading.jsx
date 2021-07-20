import {Spin} from 'antd';
import './Loading.sass'
import React from 'react';

const Loading = () => {
    return (
        <div className="loading">
            <Spin size="large" />
            <h4>Cargando ...</h4>
        </div>
    );
};

export default Loading;