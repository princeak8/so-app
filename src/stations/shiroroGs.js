import td from '../TransmissionData';

export var shiroroGs = {
    name: "SHIRORO GS",
    id: "shiroroGs",
    gs: true,
    gsId: 'shiroroPs',
    has132: false,
    lines: [
        {
            name: "j3r",
            id: "j3r",
            connectionRoot: false,
            td
        },
        {
            name: "j7r",
            id: "j7r",
            connectionRoot: false,
            td
        },
        {
            name: "r1m",
            id: "r1m",
            connectionRoot: false,
            td
        },
        {
            name: "r4b",
            id: "r4b",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'r4b-v-0',
                    start: true,
                    end: false,
                    position: 0
                },
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'r4b-h-0',
                    start: false,
                    end: true,
                    position: 1,
                },
            ],
            td
        },
        {
            name: "r2m",
            id: "r2m",
            connectionRoot: false,
            td
        },
        {
            name: "r5g",
            id: "r3g",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'r3g-h-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'left'
                },
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'r3g-v-0',
                    start: false,
                    end: false,
                    position: 1
                },
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'r3g-h-1',
                    start: false,
                    end: true,
                    position: 2,
                    arrowDirection: 'right'
                }
            ],
            td
        }
    ],
    mappings:   [
        {
            stationId: 'kaduna',
            lines: ['r1m', 'r2m']
        },
        {
            stationId: 'jebbaTs',
            lines: ['j3r', 'j7r']
        },
        {
            stationId: 'katampe',
            lines: ['r4b']
        },
        {
            stationId: 'gwagwalada',
            lines: ['r3g']
        }
    ]
};