import td from '../TransmissionData';

export var oshogbo = {
    name: "OSOGBO TS",
    id: "oshogbo",
    lines: [
        {
            name: "j1h",
            id: "j1h",
            connectionRoot: false,
            td
        },
        {
            name: "j2h",
            id: "j2h",
            connectionRoot: false,
            td
        },
        {
            name: "h3g",
            id: "h3g",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'h3g-h-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'left'
                },
                {
                    alignment: 'v',
                    direction: 'up',
                    name: 'h3g-v-1',
                    start: false,
                    end: false,
                    position: 1
                },
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'h3g-h-2',
                    start: false,
                    end: true,
                    position: 2,
                    arrowDirection: 'right'
                },
            ],
            td
        },
        {
            name: "h2a",
            id: "h2a",
            connectionRoot: false,
            td
        },
        {
            name: "h1w",
            id: "h1w",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'h1w-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "h7v",
            id: "h7v",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'h7v-h-0',
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