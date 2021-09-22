import td from '../TransmissionData';

export var ihovborNippGs = {
    name: "IHOVBOR NIPP",
    id: "ihovborNippGs",
    gs: true,
    gsId: 'ihovborNippPs',
    has132: false,
    lines: [
        {
            name: "h7v",
            id: "h7v",
            connectionRoot: false,
            td
        },
        {
            name: "v7b",
            id: "v7b",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'v7b-h-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'left'
                },
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'v7b-v-1',
                    start: false,
                    end: true,
                    position: 1,
                    arrowDirection: 'down'
                }
            ],
            td
        }
    ]
};