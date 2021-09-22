import td from '../TransmissionData';

export var alaojiGs = {
    name: "ALAOJI GS",
    id: "alaojiGs",
    gs: true,
    gsId: 'alaojiPs',
    has132: false,
    lines: [
        {
            name: "l7a",
            id: "l7a",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'l7a-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "l8a",
            id: "l8a",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'l8a-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        }
    ]
};