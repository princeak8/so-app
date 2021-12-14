import td from '../TransmissionData';

export var owerri = {
    name: "OWERRI TS",
    id: "owerri",
    is132: true,
    lines: [
        {
            name: "a23w",
            id: "a23w",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'a23w-h-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'left'
                },
                {
                    alignment: 'v',
                    direction: 'up',
                    name: 'a23w-v-1',
                    start: false,
                    end: false,
                    position: 1
                },
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'a23w-h-2',
                    start: false,
                    end: true,
                    position: 2,
                    arrowDirection: 'right'
                },
            ],
            td
        },
        {
            name: "a24w",
            id: "a24w",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'a24w-h-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'left'
                },
                {
                    alignment: 'v',
                    direction: 'up',
                    name: 'a24w-v-1',
                    start: false,
                    end: false,
                    position: 1
                },
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'a24w-h-2',
                    start: false,
                    end: true,
                    position: 2,
                    arrowDirection: 'right'
                },
            ],
            td
        },
        {
            name: "w21h",
            id: "w21h",
            connectionRoot: false,
            is132Connection: true,
            td
        },
        {
            name: "w22h",
            id: "w22h",
            connectionRoot: false,
            is132Connection: true,
            td
        },
    ]
};