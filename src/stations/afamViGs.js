import td from '../TransmissionData';

export var afamViGs = {
    name: "AFAM VI GS",
    id: "afamViGs",
    gs: true,
    gsId: 'afamViPs',
    has132: false,
    lines: [
        {
            name: "f1a",
            id: "f1a",
            connectionRoot: false,
            td
        },
        {
            name: "f2a",
            id: "f2a",
            connectionRoot: false,
            td
        },
        {
            name: "f5k",
            id: "f5k",
            connectionRoot: true,
            is132Connection: true,
            commissioned: false,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'f5k-h-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'left'
                },
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'f5k-v-1',
                    start: false,
                    end: false,
                    position: 1
                },
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'f5k-h-2',
                    start: false,
                    end: false,
                    position: 2,
                    arrowDirection: 'right'
                },
            ],
            td
        },

        {
            name: "f6k",
            id: "f6k",
            connectionRoot: true,
            is132Connection: true,
            commissioned: false,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'f6k-h-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'left'
                },
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'f6k-v-1',
                    start: false,
                    end: false,
                    position: 1
                },
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'f6k-h-2',
                    start: false,
                    end: false,
                    position: 2,
                    arrowDirection: 'right'
                },
            ],
            td
        },

    ]
};