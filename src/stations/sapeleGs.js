import td from '../TransmissionData';

export var sapeleGs = {
    name: "SAPELE GS",
    id: "sapeleGs",
    gs: true,
    gsId: 'sapeleSteamPs',
    has132: false,
    lines: [
        {
            name: "s3b",
            id: "s3b",
            connectionRoot: false,
            td
        },
        {
            name: "s4b",
            id: "s4b",
            connectionRoot: false,
            td
        },
        {
            name: "s5b",
            id: "s5b",
            connectionRoot: false,
            td
        }
    ]
};