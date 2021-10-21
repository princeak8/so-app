import td from '../TransmissionData';

export var phMain = {
    name: "PH Main TS",
    id: "phMain",
    is132: true,
    lines: [
        {
            name: "m21p",
            id: "m21p",
            connectionRoot: false,
            td
        },
        {
            name: "m22p",
            id: "m22p",
            connectionRoot: false,
            td
        },
        {
            name: "mk21p",
            id: "mk21p",
            connectionRoot: false,
            td
        },
        {
            name: "v22p",
            id: "v22p",
            connectionRoot: false,
            td
        },
        {
            name: "v21p",
            id: "v21p",
            connectionRoot: false,
            td
        },
        {
            name: "f21p",
            id: "f21p",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'f21p-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "f22p",
            id: "f22p",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'f22p-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
    ],
    mappings:   [
        {
            stationId: 'transamadiGs',
            lines: ['m21p', 'm22p']
        },
        {
            stationId: 'riversIppGs',
            lines: ['v21p', 'v22p']
        },
        {
            stationId: 'afamIv_vGs',
            lines: ['f21p', 'f22p']
        }
    ]
};