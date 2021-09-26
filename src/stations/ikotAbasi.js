import td from '../TransmissionData';

export var ikotAbasi = {
    name: "IKOT ABASI GS",
    id: "ikotAbasi",
    is132: true,
    commissioned: false,
    lines: [
        {
            name: "s1k",
            id: "s1k",
            connectionRoot: true,
            is132Connection: true,
            commissioned: false,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 's1k-h-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'left'
                },
            ],
            td
        },
        {
            name: "s2k",
            id: "s2k",
            connectionRoot: true,
            is132Connection: true,
            commissioned: false,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 's2k-h-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'left'
                },
            ],
            td
        },
        {
            name: "bm23s",
            id: "bm23s",
            connectionRoot: false,
            td
        },
        {
            name: "bm24s",
            id: "bm24s",
            connectionRoot: false,
            td
        }
    ]
};