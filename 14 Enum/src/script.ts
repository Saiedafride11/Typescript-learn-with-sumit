
// resType = resPonceType
enum resType{ SUCCESS, ERROR, FAILURE, UNAUTHENTICATED, FORBIDDEN}

interface APIResponse<T> {
    status: number,
    type: resType,
    data: T
}

const response1: APIResponse<string> = {
    status: 200,
    type: resType.SUCCESS,
    data: "test"
}