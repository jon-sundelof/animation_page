const Soundvolume = (state = 0, action) => {
    switch (action.type) {
        case 'SETVOLUME':
            return action.payload;
        default:
            return state;
    }
}

export default Soundvolume