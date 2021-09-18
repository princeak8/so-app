import transmissionData from '../TransmissionData';

export var phMain = {
    name: "PH Main TS",
    id: "phMain",
    is132: true,
    lines: [
        {
            name: "m21p",
            id: "m21p",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "m22p",
            id: "m22p",
            connectionRoot: false,
            transmissionData
        },

        //Added by me
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
            transmissionData
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
            transmissionData
        },
    ]
};