export class IApp {
    constructor() {
    }
    id: number;
    appName: string;
    appIconUrl: string;
    appIconFont: string;
    backgroundColor: string;
    url: string;
}

export class LoginRequest {
    constructor() {

    }

    loginName: string;
    password: string;
}