
interface IconProvider {
    getIcon: (name: string) => any;
}

// Update new icon references here
const iconMap = {

}

class IconProviderImpl implements IconProvider {
    getIcon = (name: string): any => {
        return iconMap[name];
    }
}

const SimpleIconProvider = new IconProviderImpl();

export type { IconProvider }
export { SimpleIconProvider };