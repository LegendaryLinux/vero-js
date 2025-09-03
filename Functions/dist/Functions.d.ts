export namespace Banners {
    export function resetBannerMessage(replace?: boolean): void;
    export function showErrorBanner(message: string, alwaysOnTop?: boolean): void;
    export function showWarningBanner(message: string, alwaysOnTop?: boolean): void;
    export function showSuccessBanner(message: string, alwaysOnTop?: boolean): void;
}

export namespace Crypto {
    export function digestToHex(string: string): Promise<string>;
    /**
     * @deprecated Use crypto.randomUUID() instead
     */
    export function genUUID(seed?: any): string;
}

export namespace States {
    export function getStateOptions(): JSX.Element;
    export function getMiniStateOptions(): JSX.Element[];
}

export namespace Tests {
    export function testEmail(email: string): boolean;
    export function testPhone(phone: string, withFormatting?: boolean): boolean;
    export function testZip(zip: string, plusFour?: boolean): boolean;
}

export namespace URLTools {
    export function getParam(param: string): string | null;
}
