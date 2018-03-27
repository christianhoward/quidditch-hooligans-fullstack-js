// PlayerField contains logic to render a single label and input based on type
import React from 'react';

export default ({ input, name, label, type, options }) => {
    switch (type) {
        case 'select':
            return (
                <div>
                    <label>{label}</label>
                    <select style={{ marginLeft: '10px', marginBottom: '5px' }} {...input}>
                        {
                            options.map(option => <option key={option.id} value={option.id}>{option.data}</option>)
                        }
                    </select>
                </div>
            );
        // case 'radio':
        //     return (
        //         <div>
        //             <label>{label}</label> {
        //                 options.map(option => {
        //                     return (
        //                         <div key={option.id}>
        //                             {option.data}
        //                             <input {...input} type='radio' value={option.id} style={{ marginLeft: '10px', marginBottom: '5px' }} onClick={(e) => console.log(e.target.value)} />
        //                         </div>
        //                     );
        //                 })
        //             }
        //         </div>
        //     );
        default:
            return (
                <div>
                    <label>{label}</label>
                    <input {...input} style={{ marginLeft: '10px', marginBottom: '5px' }} />
                </div>
            );
        }
};
