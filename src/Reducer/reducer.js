export const reducer = (state, action) => {
    switch(action.type) {
        case 'GET_LIST':
            return {...state, DentistList: action.payload}
        case 'GET_DENTIST':
            return {...state, DentistSelected: action.payload}
        case 'ADD_FAV':
            return {
                ...state, 
                favs: [...state.favs, action.payload]
            }
        case 'CHANGE_THEME':
            
            return {...state, theme: action.payload }
        case 'DELETE_FAV':
            const filteredFavs = state.favs.filter((fav) => fav.id !== action.payload)
            return {...state, favs: filteredFavs}
    }
}
