import React from 'react';
import css from './styles.sss';
import { LoadIconSetButton } from '../../LoadIconSetButton';


const ICONS_FIELD = 'root_icons';


const Description = ({ id, label, description, required, formContext }) => {
    if (!label) return description;
    const { description: descr, id: descrId } = description.props;
    const { handleIconSetLoad } = formContext
    return (
        <div className='row'>
            <div className='col-md-auto'>
                <label className={`control-label font-weight-bold text-info ${css['tree-line']}`} htmlFor={id}>
                    {label}
                    {required ? <span className='required text-danger'>*</span> : null}
                </label>
            </div>
            <div className="col">
                <p id={descrId} className='field-description'>
                    {descr}
                    {id === ICONS_FIELD ? (
                        <LoadIconSetButton
                            className='btn btn-sm btn-outline-primary ml-2'
                            onLoad={handleIconSetLoad}
                        >Load a set of icons</LoadIconSetButton>
                    ) : null}
                </p>
            </div>
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
    const { classNames, rawHelp, children, rawErrors, formContext } = props;
    const errors = formContext.showErrors ? rawErrors : null;
    return (
        <div className={classNames}>
            <Description {...props}/>
            {children}
            <div className={`${css['help-block']} text-muted`}>{rawHelp}</div>
            <ErrorList errors={errors}/>
        </div>
    );
};


export { FieldTemplate };
