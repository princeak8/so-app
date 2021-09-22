import td from '../TransmissionData';

export var onitsha = {
    name: "ONITSHA TS",
    id: "onitsha",
    lines: [
        {
            name: "b1t",
            id: "b1t",
            connectionRoot: false,
            td
        },
        {
            name: "b2t",
            id: "b2t",
            connectionRoot: false,
            td
        },
        {
            name: "d3t",
            id: "d3t",
            connectionRoot: false,
            td
        },
        {
            name: "t4a",
            id: "t4a",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 't4a-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "t3h",
            id: "t3h",
            connectionRoot: false,
            td
        },
        {
            name: "k1t",
            id: "k1t",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'k1t-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "k2t",
            id: "k2t",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'k2t-h-0',
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