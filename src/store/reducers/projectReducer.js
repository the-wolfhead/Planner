const initState = {
    projects: [
        {id: '1', title: 'help me build a house', content: 'bombooclaat'},
        {id: '2', title: 'help me build a new house', content: 'bombooclaat'},
        {id: '3', title: 'help me build a newer house', content: 'bombooclaat'}
    ]
}
const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state;
            default: return state;
    }
}

export default projectReducer