import React from 'react';
import css from './styles.sss';


const ObjectFieldTemplate = ({ properties }) => (
    <fieldset className={`form-fieldset ${css['form-fieldset']}`}>
        {properties.map((element) => element.content)}
    </fieldset>
);


export { ObjectFieldTemplate };
