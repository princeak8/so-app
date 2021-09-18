import transmissionData from '../TransmissionData';

export var asaba = {
    name: "ASABA TS",
    id: "asaba",
    lines: [
        {
            name: "b3d",
            id: "b3d",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "d3t",
            id: "d3t",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'd3t-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        }
    ]
};