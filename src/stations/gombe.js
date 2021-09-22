import td from '../TransmissionData';

export var gombe = {
    name: "GOMBE",
    id: "gombe",
    lines: [
        {
            name: "s1e",
            id: "s1e",
            connectionRoot: false,
            td
        },
        {
            name: "w23e",
            id: "w23e",
            connectionRoot: false,
            td
        },
        {
            name: "e1y",
            id: "e1y",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'e1y-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "e1d",
            id: "e1d",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'e1d-h-0',
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