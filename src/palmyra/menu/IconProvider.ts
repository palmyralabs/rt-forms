import { AutoAwesomeMosaic, CreditCard, Dashboard, Feed, Home, InsertChart, TableView } from "@mui/icons-material";

interface IconProvider {
    getIcon: (name: string) => any;
}

// Update new icon references here
const iconMap = {
    'grid': TableView,
    'home': Home,
    'form': Feed,
    'chart': InsertChart,
    'card': CreditCard,
    'dashboard': Dashboard,
    'layout': AutoAwesomeMosaic
}

class IconProviderImpl implements IconProvider {
    getIcon = (name: string): any => {
        return iconMap[name];
    }
}

const SimpleIconProvider = new IconProviderImpl();

export type { IconProvider }
export { SimpleIconProvider };