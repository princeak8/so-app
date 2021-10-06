import td from '../TransmissionData';

export var ugwuaji = {
    name: "UGWUAJI TS",
    id: "ugwuaji",
    lines: [
        {
            name: "h1u",
            id: "h1u",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'h1u-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "h2u",
            id: "h2u",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'h2u-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "u1a",
            id: "u1a",
            connectionRoot: false,
            td
        },
        {
            name: "u2a",
            id: "u2a",
            connectionRoot: false,
            td
        },
        {
            name: "k1u",
            id: "k1u",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'k1u-h-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'left'
                },
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'k1u-v-1',
                    start: false,
                    end: true,
                    position: 1,
                    arrowDirection: 'down'
                }
            ],
            td
        },
        {
            name: "k2u",
            id: "k2u",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'k2u-h-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'left'
                },
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'k2u-v-1',
                    start: false,
                    end: true,
                    position: 1,
                    arrowDirection: 'down'
                }
            ],
            td
        },
        {
            name: "k3u",
            id: "k3u",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'k3u-h-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'left'
                },
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'k3u-v-1',
                    start: false,
                    end: true,
                    position: 1,
                    arrowDirection: 'down'
                }
            ],
            td
        },
        {
            name: "k4u",
            id: "k4u",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'k4u-h-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'left'
                },
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'k4u-v-1',
                    start: false,
                    end: true,
                    position: 1,
                    arrowDirection: 'down'
                }
            ],
            td
        }
    ],
    mappings:   [
        {
            stationId: 'ikotEkpene',
            lines: ['k1u', 'k2u', 'k3u', 'k4u']
        },
        {
            stationId: 'markudi',
            lines: ['u1a', 'u2a']
        },
        {
            stationId: 'newHaven',
            lines: ['h1u', 'h2u']
        }
    ]
};