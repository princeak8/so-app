import transmissionData from '../TransmissionData';

export var afamIv_vGs = {
    name: "AFAM IV-V GS",
    id: "afamIv_vGs",
    gs: true,
    gsId: 'afamIv_vPs',
    has132: false,
    lines: [
        //Added by me
        {
            name: "f4p",
            id: "f4p",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "f5p",
            id: "f5p",
            connectionRoot: false,
            transmissionData
        },
    ]
};