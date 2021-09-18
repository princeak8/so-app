import transmissionData from '../TransmissionData';

export var itu = {
    name: "ITU TS",
    id: "itu",
    is132: true,
    lines: [
        {
            name: "b21t",
            id: "b21t",
            connectionRoot: false,
            transmissionData
        },

        {
            name: "d22t",
            id: "d22t",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'd22t-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },


        //Added by me
        {
            name: "i1e",
            id: "i1e",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'i1e-v-0',
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