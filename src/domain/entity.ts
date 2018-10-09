export class IApp {
    constructor(appName: string, appIconUrl: string) {
        this.appName = appName;
        this.appIconUrl = appIconUrl;
    }
    appName: string;
    appIconUrl: string;
    backgroundColor: string;
    url: string;
}