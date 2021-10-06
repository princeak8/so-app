import td from '../TransmissionData';

export var ikotEkpene = {
    name: "IKOT EKPENE TS",
    id: "ikotEkpene",
    lines: [
        {
            name: "a1k",
            id: "a1k",
            connectionRoot: false,
            td
        },
        {
            name: "a2k",
            id: "a2k",
            connectionRoot: false,
            td
        },
        {
            name: "d1k",
            id: "d1k",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'd1k-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "d2k",
            id: "d2k",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'd2k-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "k1u",
            id: "k1u",
            connectionRoot: false,
            td
        },
        {
            name: "k2u",
            id: "k2u",
            connectionRoot: false,
            td
        },
        {
            name: "k3u",
            id: "k3u",
            connectionRoot: false,
            td
        },
        {
            name: "k4u",
            id: "k4u",
            connectionRoot: false,
            td
        },
        {
            name: "s1k",
            id: "s1k",
            connectionRoot: true,
            commissioned: false,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 's1k-v-0',
                    start: false,
                    end: true,
                    position: 0,
                    arrowDirection: 'up'
                },
            ],
            td
        },
        {
            name: "s2k",
            id: "s2k",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 's2k-v-0',
                    start: false,
                    end: true,
                    position: 0,
                    arrowDirection: 'up'
                },
            ],
            td
        },
        {
            name: "f5k",
            id: "f5k",
            connectionRoot: true,
            commissioned: false,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'f5k-v-0',
                    start: false,
                    end: true,
                    position: 0,
                    arrowDirection: 'up'
                },
            ],
            td
        },
        {
            name: "f6k",
            id: "f6k",
            connectionRoot: true,
            commissioned: false,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'f6k-v-0',
                    start: false,
                    end: true,
                    position: 0,
                    arrowDirection: 'up'
                },
            ],
            td
        }
    ],
    mappings:   [
        {
            stationId: 'ugwuaji',
            lines: ['k1u', 'k2u', 'k3u', 'k4u']
        },
        {
            stationId: 'alaoji',
            lines: ['a1k', 'a2k']
        },
        {
            stationId: 'odukpaniGs',
            lines: ['d1k', 'd2k']
        },
        {
            stationId: 'ikotAbasi',
            lines: ['s1k', 's2k']
        },
        {
            stationId: 'afamViGs',
            lines: ['f5k', 'f6k']
        }
    ]
};