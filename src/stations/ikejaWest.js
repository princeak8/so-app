import td from '../TransmissionData';

export var ikejaWest = {
    name: "IKEJA-WEST TS",
    id: "ikejaWest",
    lines: [
        {
            name: "r1w",
            id: "r1w",
            connectionRoot: false,
            td
        },
        {
            name: "h1w",
            id: "h1w",
            connectionRoot: false,
            td
        },
        {
            name: "m5w",
            id: "m5w",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'm5w-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "nw1bs",
            id: "nw1bs",
            connectionRoot: false,
            td
        },
        {
            name: "w3l",
            id: "w3l",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'w3l-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "k7w",
            id: "k7w",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'k7w-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "k8w",
            id: "k8w",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'k8w-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "n6w",
            id: "n6w",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'n6w-v-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'up'
                },
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'n6w-h-0',
                    start: false,
                    end: false,
                    position: 1,
                },
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'n6w-v-1',
                    start: false,
                    end: true,
                    position: 0,
                    arrowDirection: 'down'
                },
            ],
            td
        },
        {
            name: "w4l",
            id: "w4l",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'w4l-h-0',
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