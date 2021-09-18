import transmissionData from '../TransmissionData';

export var parasEnergyGs = {
    name: "PARA ENERGY GS",
    id: "parasEnergyGs",
    gs: true,
    gsId: 'parasEnergyPs',
    has132: false,
    lines: [
        {
            name: "d21p",
            id: "d21p",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "d22p",
            id: "d22p",
            connectionRoot: false,
            transmissionData
        }
    ]
};