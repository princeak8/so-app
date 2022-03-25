import td from '../TransmissionData';

export var markudi = {
    name: "MARKUDI TS",
    id: "markudi",
    lines: [
        {
            name: "a1f",
            id: "a1f",
            connectionRoot: false,
            td
        },
        {
            name: "a2f",
            id: "a2f",
            connectionRoot: false,
            td
        },
        {
            name: "u1a",
            id: "u1a",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'u1a-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "u2a",
            id: "u2a",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'u2a-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        }
    ],
    mappings:   [
        {
            stationId: 'ugwuaji',
            lines: ['u1a', 'u2a']
        }
    ]
};