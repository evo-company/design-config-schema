import React from 'react';
import Form from 'react-jsonschema-form';
import saveAs from 'file-saver';
import schema from 'Schema';
import { CustomFileWidget } from './components/widgets/CustomFileWidget/';
import { CustomColorWidget } from './components/widgets/CustomColorWidget/';
import { FieldTemplate } from './components/fields/FieldTemplate/';
import { ObjectFieldTemplate } from './components/fields/ObjectFieldTemplate/';
import { ErrorListTemplate } from './components/ErrorListTemplate';
import { LoadConfigButton } from './components/LoadConfigButton';


const widgets = { CustomColorWidget, CustomFileWidget };


const isConfirmed = () => confirm('WARNING: current design settings data will be erased!\nWould you like to continue?');


class SchemaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formSchema: schema,
            formData: {},
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleCreateConfigClick = this.handleCreateConfigClick.bind(this);
        this.handleConfigLoad = this.handleConfigLoad.bind(this);
        this.handleIconSetLoad = this.handleIconSetLoad.bind(this);
    }

    handleConfigLoad(rawJSON) {
        this.setState({
            formSchema: schema,
            formData: JSON.parse(rawJSON),
        });
    }

    handleFormSubmit(data) {
        const stringifiedFormData = JSON.stringify(data.formData, null, '  ');
        const blob = new Blob(
            [stringifiedFormData],
            { type: `application/json;charset=${document.characterSet}` }
        );
        saveAs(blob, 'design-settings.json');
    }

    handleCreateConfigClick() {
        if (isConfirmed()) {
            this.setState({
                formSchema: schema,
                formData: {},
            });
        }
    }

    handleIconSetLoad(icons) {
        const { formData } = this.state;
        if (formData.icons) {
            Object.assign(formData.icons, icons)
        } else {
            formData.icons = icons;
        }
        this.setState({ formData });
    }

    render() {
        const { formSchema, formData, showErrors } = this.state;
        return (
            <Form
                schema={formSchema}
                uiSchema={schema.ui}
                FieldTemplate={FieldTemplate}
                ObjectFieldTemplate={ObjectFieldTemplate}
                ErrorList={ErrorListTemplate}
                showErrorList={false}
                widgets={widgets}
                onSubmit={this.handleFormSubmit}
                onError={this.handleFormError}
                noHtml5Validate={true}
                formData={formData}
                liveValidate={true}
                formContext={{ handleIconSetLoad: this.handleIconSetLoad }}
                onError={() => alert('Can\'t save design settings until correct data will be entered!')}
            >
                <div className='fixed-top pt-2 pb-2 bg-white shadow-sm'>
                    <div className='container'>
                        <button type='submit' className='btn btn-sm btn-info'>Save</button>
                        <LoadConfigButton
                            className='btn btn-sm btn-outline-primary ml-2'
                            onLoad={this.handleConfigLoad}
                            shouldLoad={isConfirmed}
                        >Open</LoadConfigButton>
                        <button
                            type='button'
                            className='btn btn-sm btn-outline-primary ml-2'
                            onClick={this.handleCreateConfigClick}
                        >Create new config</button>
                    </div>
                </div>
            </Form>
        );
    }
};


export { SchemaForm };
