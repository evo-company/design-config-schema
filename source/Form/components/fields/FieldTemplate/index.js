import React from 'react';
import css from './styles.sss';


const Description = ({ id, label, description, required }) => {
    if (!label) return description;
    return (
        <div className='row'>
            <div className='col-md-auto'>
                <label className={`control-label font-weight-bold text-info ${css['tree-line']}`} htmlFor={id}>
                    {label}
                    {required ? <span className='required text-danger'>*</span> : null}
                </label>
            </div>
            <div className="col">{description}</div>
        </div>
    );
};


const ErrorList = ({ errors }) => {
    if (!errors) return null;
    return (
        <ul>
            {errors.map((error, i) => <li className='text-danger' key={i}>{error}</li>)}
        </ul>
    );
};


const FieldTemplate = (props) => {
    const { classNames, rawHelp, children, rawErrors } = props;
    return (
        <div className={classNames}>
            <Description {...props}/>
            {children}
            <div className={`${css['help-block']} text-muted`}>{rawHelp}</div>
            <ErrorList errors={rawErrors}/>
        </div>
    );
};


export { FieldTemplate };
