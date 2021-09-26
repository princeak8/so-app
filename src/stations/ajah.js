import td from '../TransmissionData';

export var ajah = {
    name: "AJAH TS",
    id: "ajah",
    lines: [
        {
            name: "n3j",
            id: "n3j",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'n3j-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "n4j",
            id: "n4j",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'n4j-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },

        {
            name: "j1e",
            id: "j1e",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'j1e-h-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'left'
                },
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'j1e-v-1',
                    start: false,
                    end: true,
                    position: 1,
                    arrowDirection: 'down'
                },
            ],
            td
        },
        {
            name: "j1b",
            id: "j1b",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'jib-v-0',
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