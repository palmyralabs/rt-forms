interface IconProvider {
    getIcon: (name: string) => any;
}
declare class IconProviderImpl implements IconProvider {
    getIcon: (name: string) => any;
}
declare const SimpleIconProvider: IconProviderImpl;
export type { IconProvider };
export { SimpleIconProvider };
