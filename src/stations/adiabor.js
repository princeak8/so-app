import td from '../TransmissionData';

export var adiabor = {
    name: "ADIABOR TS",
    id: "adiabor",
    lines: [
        {
            name: "d1b",
            id: "d1b",
            connectionRoot: false,
            td
        },
        {
            name: "d2b",
            id: "d2b",
            connectionRoot: false,
            td
        },
        {
            name: "d22t",
            id: "d22t",
            connectionRoot: false,
            is132: true,
            td
        },
    ],
    mappings:   [
        {
            stationId: 'odukpaniGs',
            lines: ['d1b', 'd2b']
        },
        {
            stationId: 'itu',
            lines: ['d22t']
        }
    ]
};