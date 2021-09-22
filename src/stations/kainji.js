import td from '../TransmissionData';

export var kainji = {
    name: "KAINJI TS",
    id: "kainjiTs",
    lines: [
        {
            name: "k3r",
            id: "k3r",
            connectionRoot: false,
            td
        },
        {
            name: "k1f",
            id: "k1f",
            connectionRoot: false,
            td
        },
        {
            name: "k1j",
            id: "k1j",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'k1j-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "k2j",
            id: "k2j",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'k2j-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },

        {
            name: "kn1k",
            id: "kn1k",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'kn1k-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "kn2k",
            id: "kn2k",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'kn2k-h-0',
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