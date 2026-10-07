import { FaSquare } from "react-icons/fa";
import { CheckBoxIcon } from "./CheckBoxIcon";
import { CheckBoxIcons } from "./types";

interface drodownInput {
    handleSelect?: any,
    isHalfSelected?: boolean,
    isSelected?: boolean,
    icons?: CheckBoxIcons
}
const AsyncTreeCrudDropDown = (props: drodownInput) => {
    const handleSelect = props.handleSelect;
    const isHalfSelected = props.isHalfSelected;
    const isSelected = props.isSelected;
    const icons: CheckBoxIcons = { unchecked: FaSquare, ...props.icons };
    return (
        <div className="crud-dropdown-content">
            <div className="crud-checkbox-list">
                <div className="crud-checkbox">
                    <div>
                        <CheckBoxIcon
                            className="checkbox-icon"
                            icons={icons}
                            onClick={(e) => {
                                handleSelect(e);
                                e.stopPropagation();
                            }}
                            variant={
                                isHalfSelected ? "some" : isSelected ? "all" : "none"
                            }
                        />
                    </div>
                    <div>
                        <span className="crud-checkbox-label">Create</span>
                    </div>
                </div>
                <div className="crud-checkbox">
                    <div>
                        <CheckBoxIcon
                            className="checkbox-icon"
                            icons={icons}
                            onClick={(e) => {
                                handleSelect(e);
                                e.stopPropagation();
                            }}
                            variant={
                                isHalfSelected ? "some" : isSelected ? "all" : "none"
                            }
                        />
                    </div>
                    <div>
                        <span className="crud-checkbox-label">Update</span>
                    </div>
                </div>
                <div className="crud-checkbox">
                    <div>
                        <CheckBoxIcon
                            className="checkbox-icon"
                            icons={icons}
                            onClick={(e) => {
                                handleSelect(e);
                                e.stopPropagation();
                            }}
                            variant={
                                isHalfSelected ? "some" : isSelected ? "all" : "none"
                            }
                        />
                    </div>
                    <div>
                        <span className="crud-checkbox-label">Delete</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AsyncTreeCrudDropDown
