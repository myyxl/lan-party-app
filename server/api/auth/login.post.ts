interface LoginRequest {
    username: string,
    password: string
}
export default defineEventHandler((event) => {
    return {
        test: "Login!"
    }
})