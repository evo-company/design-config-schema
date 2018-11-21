import React from 'react';
import Form from 'react-jsonschema-form';
import saveAs from 'file-saver';
import schema from 'Schema';
import initSchema from 'Schema/init';
import { CustomFileWidget } from './components/widgets/CustomFileWidget/';
import { CustomColorWidget } from './components/widgets/CustomColorWidget/';
import { FieldTemplate } from './components/fields/FieldTemplate/';
import { ObjectFieldTemplate } from './components/fields/ObjectFieldTemplate/';
import { ErrorListTemplate } from './components/ErrorListTemplate';
import { LoadButton } from './components/LoadConfigButton';
import defaultFormData, { initFormData } from '../Defaults';


const widgets = { CustomColorWidget, CustomFileWidget };


const isConfirmed = () => confirm('WARNING: current configuration data will be erased!\nWould you like to continue?');


class SchemaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formSchema: initSchema,
            formData: initFormData,
            isFormBlank: true,
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleCreateConfigClick = this.handleCreateConfigClick.bind(this);
        this.handleConfigLoad = this.handleConfigLoad.bind(this);
    }

    handleConfigLoad(rawJSON) {
        this.setState({
            formSchema: schema,
            formData: JSON.parse(rawJSON),
            isFormBlank: false,
        });
    }

    handleFormSubmit(data) {
        if (this.state.isFormBlank) {
            this.setState({
                formSchema: schema,
                formData: defaultFormData(data.formData),
                isFormBlank: false,
            });
        } else {
            const stringifiedFormData = JSON.stringify(data.formData, null, '  ');
            const blob = new Blob(
                [stringifiedFormData],
                { type: `application/json;charset=${document.characterSet}` }
            );
            saveAs(blob, 'design-settings.json');
        }
    }

    handleCreateConfigClick() {
        if (isConfirmed()) {
            this.setState({
                formSchema: initSchema,
                formData: initFormData,
                isFormBlank: true,
            });
        }
    }

    render() {
        const { formSchema, formData, isFormBlank } = this.state;
        return (
            <Form
                schema={formSchema}
                uiSchema={formSchema.ui}
                FieldTemplate={FieldTemplate}
                ObjectFieldTemplate={ObjectFieldTemplate}
                ErrorList={ErrorListTemplate}
                showErrorList={false}
                widgets={widgets}
                onSubmit={this.handleFormSubmit}
                noHtml5Validate={true}
                formData={formData}
            >
                <div className='fixed-top pt-2 pb-2 bg-white shadow-sm'>
                    <div className='container'>
                        <button type='submit' className='btn btn-sm btn-info'>
                            {isFormBlank ? 'Generate' : 'Save' }
                        </button>
                        <LoadButton
                            className='btn btn-sm btn-outline-primary ml-2'
                            onLoad={this.handleConfigLoad}
                            shouldLoad={isConfirmed}
                        >Open</LoadButton>
                        {!isFormBlank ? (
                            <button
                                type='button'
                                className='btn btn-sm btn-outline-primary ml-2'
                                onClick={this.handleCreateConfigClick}
                            >Create new config</button>
                        ) : null}
                    </div>
                </div>
            </Form>
        );
    }
};


export { SchemaForm };
