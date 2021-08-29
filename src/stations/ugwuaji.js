import transmissionData from '../TransmissionData';

export var ugwuaji = {
    name: "UGWUAJI TS",
    id: "ugwuaji",
    lines: [
        {
            name: "h1u",
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
            transmissionData
        },
        {
            name: "h2u",
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
            transmissionData
        },
        {
            name: "u1a",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "u2a",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "k1u",
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
            transmissionData
        },
        {
            name: "k2u",
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
            transmissionData
        },
        {
            name: "k3u",
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
            transmissionData
        },
        {
            name: "k4u",
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
            transmissionData
        }
    ]
};