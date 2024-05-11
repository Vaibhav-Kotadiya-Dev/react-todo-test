import React from "react";
import './styles.css';

type tagProps = {
    name: string;
    active: boolean;
}

const FilterTag: React.FC<tagProps> = ({ name, active }) => {
    return (
        <div className={`filter-container ${active ? 'active' : ''}`}>
            <h3 className={`tag-name ${active ? 'active' : ''}`}>{name}</h3>
        </div>
    );
}

export default FilterTag;