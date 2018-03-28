// PlayerField contains logic to render a single label and input based on type
import React from 'react';

export default ({ input, name, label, type, options, placeholder }) => {
    switch (type) {
        case 'color':
            return (
                <div>
                    <label>{label}</label>
                    <input {...input} type='color' />
                </div>
            );
        case 'number':
            return (
                <div>
                    <label>{label}</label>
                    <input {...input} type='number' placeholder={placeholder} />
                </div>
            );
        case 'select':
            return (
                <div>
                    <label>{label}</label>
                    <select {...input}>
                        <option value="" disabled>Select {label}</option>
                        {
                            options.map(option => <option key={option.id} value={option.id}>{option.data}</option>)
                        }
                    </select>
                </div>
            );
        case 'text':
            return (
                <div>
                    <label>{label}</label>
                    <input {...input} placeholder={placeholder} />
                </div>
            );
        default:
            return (
                <div>
                    <label>{label}</label> {
                        options.map(option => {
                            return (
                                <div key={option.id} className='radios'>
                                    {option.data}
                                    <input {...input} type='radio' value={option.id} checked={input.value === option.id}/>
                                </div>
                            );
                        })
                    }
                </div>
            );
        }
};
