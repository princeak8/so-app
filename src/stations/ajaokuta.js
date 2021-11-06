import td from '../TransmissionData';

export var ajaokuta = {
    name: "AJAOKUTA TS",
    id: "ajaokuta",
    lines: [
        {
            name: "j1l",
            id: "j1l",
            connectionRoot: false,
            td
        },
        {
            name: "j2l",
            id: "j2l",
            connectionRoot: false,
            td
        },
        {
            name: "b11j",
            id: "b11j",
            connectionRoot: false,
            td
        },
        {
            name: "b12j",
            id: "b12j",
            connectionRoot: false,
            td
        },
        {
            name: "r1j",
            id: "r1j",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'r1j-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "r2j",
            id: "r2j",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'r2j-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        }
    ],

    mappings:   [
        {
            stationId: 'gereguGs',
            lines: ['r1j', 'r2j']
        },
        {
            stationId: 'benin',
            lines: ['b11j', 'b12j']
        },
        {
            stationId: 'lokoja',
            lines: ['j1l', 'j2l']
        }
    ]
};