import React, { Fragment } from "react";

const Checkbox = props => {

    const {
        onChange,
        data: {id, description, done}
    } = props;
    return (<Fragment>

        <svg viewBox="0 0 0 0" 
            style={{
                position: "absolute",
                zIndex: -1,
                opacity: 0
            }}>
            
        </svg>
        
        <label className="todo new-item">
            <input
                className="todo_state"
                name={id}
                type="checkbox"
                defaultChecked={done}
                onChange={onChange}
            />
            

            <div className="todo_text">
                {description}
            </div>
        </label>
    </Fragment>);
}

export default Checkbox;