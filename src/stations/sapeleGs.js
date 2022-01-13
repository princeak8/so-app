import td from '../TransmissionData';

export var sapeleGs = {
    name: "SAPELE TS",
    id: "sapele",
    gs: true,
    gsId: 'sapeleNippPs',
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
        },
        {
            name: "s4g",
            id: "s4g",
            connectionRoot: false,
            td
        }
    ]
};