
export const storeUserData = (user) => {
    return {
        type: "STORE_USER_DATA",
        data: user
    }
}

export const clearUserData = () => {
    return {
        type: "CLEAR_USER_DATA"
    }
}
