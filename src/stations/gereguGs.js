import td from '../TransmissionData';

export var gereguGs = {
    name: "GEREGU GS",
    id: "gereguGs",
    gs: true,
    gsId: 'gereguPs',
    has132: false,
    lines: [
        {
            name: "r1j",
            id: "r1j",
            connectionRoot: false,
            td
        },
        {
            name: "r2j",
            id: "r2j",
            connectionRoot: false,
            td
        }
    ],

    mappings:   [
        {
            stationId: 'ajaokuta',
            lines: ['r1j', 'r2j']
        }
    ]
};