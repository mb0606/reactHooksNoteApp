const notesReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_NOTES':
            console.log("fetch", action.notes)
            return action.notes;
        case 'ADD_NOTE':
            console.log(state);
            return [...state, { title: action.title, body: action.body }];
        case 'REMOVE_NOTE':
            return state.filter((note) => note.title !== action.title);
        default:
            return state;
    }
}

export { notesReducer as default };