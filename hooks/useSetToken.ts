export const useSetToken = (token: string) => {
    localStorage.setItem("token", token)
}