import { BiHome } from "react-icons/bi";
import { IconProvider } from "../../../src/palmyra";


const iconMap: any = {
    'home': BiHome,
    // 'admin': SupervisorAccount,
    // 'table': TableView,
    // 'summary': CurrencyRupee
}

class SimpleeIconProvider implements IconProvider {
    getIcon = (name: string): any => {
        return iconMap[name];
    }
}

const SimpleIconProvider = new SimpleeIconProvider();
export { SimpleIconProvider }