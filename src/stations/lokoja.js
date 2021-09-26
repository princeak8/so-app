import td from '../TransmissionData';

export var lokoja = {
    name: "LOKOJA TS",
    id: "lokoja",
    lines: [
        {
            name: "l6g",
            id: "l6g",
            connectionRoot: false,
            td
        },
        {
            name: "l7g",
            id: "l7g",
            connectionRoot: false,
            td
        },
        {
            name: "j1l",
            id: "j1l",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'j1l-h-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'left'
                },
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'j1l-v-1',
                    start: false,
                    end: true,
                    position: 1,
                    arrowDirection: 'down'
                }
            ],
            td
        },
        {
            name: "j2l",
            id: "j2l",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'j2l-h-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'left'
                },
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'j2l-v-1',
                    start: false,
                    end: false,
                    position: 1
                },
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'j2l-h-2',
                    start: false,
                    end: true,
                    position: 2,
                    arrowDirection: 'right'
                },
            ],
            td
        }
    ]
};