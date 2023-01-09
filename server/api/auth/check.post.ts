interface CheckRequest {
    authToken: string
}

interface CheckResponse {
    valid: boolean
}

export default defineEventHandler(async (event): Promise<CheckResponse> => {
    const body: CheckRequest = await readBody(event);
    // TODO check if valid
    return {
        valid: true
    }
})