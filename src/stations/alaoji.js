import td from '../TransmissionData';

export var alaoji = {
    name: "ALAOJI TS",
    id: "alaoji",
    lines: [
        {
            name: "l7a",
            id: "l7a",
            connectionRoot: false,
            td
        },
        {
            name: "l8a",
            id: "l8a",
            connectionRoot: false,
            td
        },
        {
            name: "t4a",
            id: "t4a",
            connectionRoot: false,
            td
        },
        {
            name: "f1a",
            id: "f1a",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'f1a-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "f2a",
            id: "f2a",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'f2a-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "a1k",
            id: "a1k",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'a1k-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "a2k",
            id: "a2k",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'a2k-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "a23b",
            id: "a23b",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'a23b-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "a26b",
            id: "a26b",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'a26b-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "a23w",
            id: "a23w",
            connectionRoot: false,
            td
        },
        {
            name: "a24w",
            id: "a24w",
            connectionRoot: false,
            td
        },
    ]
};