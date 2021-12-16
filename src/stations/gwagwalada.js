import td from '../TransmissionData';

export var gwagwalada = {
    name: "GWAGWALADA TS",
    id: "gwagwalada",
    lines: [
        {
            name: "r5g",
            id: "r5g",
            connectionRoot: false,
            td
        },
        {
            name: "g5b",
            id: "g5b",
            connectionRoot: false,
            td
        },
        {
            name: "l6g",
            id: "l6g",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'l6g-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "l7g",
            id: "l7g",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'l7g-h-0',
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
            stationId: 'lokojaTs',
            lines: ['l6g', 'l7g']
        },
        {
            stationId: 'katampe',
            lines: ['g5b']
        },
        {
            stationId: 'shiroroGs',
            lines: ['r5g']
        }
    ]
};