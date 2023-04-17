
const FormRow = ({ type, name, value, handleChange, labelText }) => {
    return (
      <div className='formrow'>
        {/* <label htmlFor={name} className=''>
          {labelText || name}
        </label> */}
       
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          className='form-control'
          placeholder={labelText}
        />
      </div>
    );
  };
  export default FormRow;