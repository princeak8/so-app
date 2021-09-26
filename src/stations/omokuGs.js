import td from '../TransmissionData';

export var omokuGs = {
    name: "OMOKU GS",
    id: "omokuGs",
    gs: true,
    gsId: 'omokuPs',
    has132: false,
    lines: [
        {
            name: "mk21p",
            id: "mk21p",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'mk21p-v-0',
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