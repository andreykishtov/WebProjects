import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeComp = ({code}) => {
    console.log(code);
    return (
        <div>
            <QRCode value={JSON.stringify(code)} />
        </div>
    );
};

export default QRCodeComp;