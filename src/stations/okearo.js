import td from '../TransmissionData';

export var okearo = {
    name: "Oke-Aro TS",
    id: "okearo",
    lines: [
        {
            name: "k7w",
            id: "k7w",
            connectionRoot: false,
            td
        },
        {
            name: "k8w",
            id: "k8w",
            connectionRoot: false,
            td
        },
        {
            name: "n7k",
            id: "n7k",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'n7k-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "n8k",
            id: "n8k",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'n8k-h-0',
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