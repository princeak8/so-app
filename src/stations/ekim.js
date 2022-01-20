import td from '../TransmissionData';

export var ekim = {
    name: "EKIM TS",
    id: "ekim",
    is132: true,
    integrated: false,
    lines: [
        {
            name: "ek1m",
            id: "ek1m",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'ek1m-h-0',
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