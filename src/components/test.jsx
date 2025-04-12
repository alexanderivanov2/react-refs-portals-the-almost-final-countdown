import React from 'react';

export default function Form(ref) {
    const formRef = React.useRef();
    React.useImperativeHandle(ref, () => {
        return {
            clear() {
                formRef.current.clear()
            }
        }
    })
    return (
      <form ref={formRef}>
        <p>
          <label>Name</label>
          <input type="text" />
        </p>
  
        <p>
          <label>Email</label>
          <input type="email" />
        </p>
        <p id="actions">
          <button>Save</button>
        </p>
      </form>
    );
  }
  