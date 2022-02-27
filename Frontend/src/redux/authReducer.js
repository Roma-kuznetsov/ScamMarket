

const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SAVE_PHOTO_SECCESS ='SAVE-PHOTO-SECCESS';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 11 },
        { id: 3, message: 'Im, slut', likesCount: 111 },
    ],
    profile: null,
    status: "",
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case SAVE_PHOTO_SECCESS:
            return { ...state, profile:{...state.profile, photos:action.photos} }
        default:
            return state;
    }
}

export const setStatus = (status) => ({ type: SET_STATUS, status })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SECCESS, photos })



export default authReducer;