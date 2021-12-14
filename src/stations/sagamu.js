import td from '../TransmissionData';

export var sagamu = {
    name: "SAGAMU TS",
    id: "sagamu",
    lines: [
        {
            name: "d23s",
            id: "d23s",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'd23s-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                }
            ],
            td
        },
        {
            name: "d24s",
            id: "d24s",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'd24s-h-0',
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