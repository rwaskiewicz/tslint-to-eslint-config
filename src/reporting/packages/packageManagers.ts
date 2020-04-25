export enum PackageManager {
    npm,
    pnpm,
    Yarn,
}

export const preferredLockfiles = new Map([
    [PackageManager.npm, "./package-lock.json"],
    [PackageManager.pnpm, "./pnpm-lock.yaml"],
    [PackageManager.Yarn, "./yarn.lock"],
]);

export const installationMessages = {
    [PackageManager.npm]: (packages: string) => `npm install ${packages} --save-dev`,
    [PackageManager.pnpm]: (packages: string) => `pnpm add ${packages} --save-dev`,
    [PackageManager.Yarn]: (packages: string) => `yarn add ${packages} --dev`,
};
