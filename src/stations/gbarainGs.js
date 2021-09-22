import td from '../TransmissionData';

export var gbarainGs = {
    name: "GBARAIN GS",
    id: "gbarainGs",
    gs: true,
    gsId: 'gbarainPs',
    has132: false,
    lines: [
        {
            name: "h23r",
            id: "h23r",
            connectionRoot: false,
            td
        },
        {
            name: "h24r",
            id: "h24r",
            connectionRoot: false,
            td
        },
        {
            name: "r21y",
            id: "r21y",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'r21y-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "r22y",
            id: "r22y",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'r22y-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
    ]
};