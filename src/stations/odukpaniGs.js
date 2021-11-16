import td from '../TransmissionData';

export var odukpaniGs = {
    name: "ODUKPANI GS",
    id: "odukpaniGs",
    gs: true,
    gsId: 'odukpaniNippPs',
    has132: false,
    lines: [
        {
            name: "d1b",
            id: "d1b",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'd1b-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "d2b",
            id: "d2b",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'd2b-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "d1k",
            id: "d1k",
            connectionRoot: false,
            td
        },
        {
            name: "d2k",
            id: "d2k",
            connectionRoot: false,
            td
        }
    ]
};