import '../RouteForm/RouteForm.css';
const RouteForm = () => {
  
  return (
    <form className='routeform-styles'>
      <label className='routeform-labels'>
       <span>ZipCode</span>
        <input
          type='number'
          name='zipcode'
          className='routeform-input-1'
          placeholder='ZipCode'
        />
      </label>
      <label className='routeform-labels'>
        <span>Distance Within</span>
        <input
          type='number'
          name='distance'
          className='routeform-input-2'
          placeholder='Miles'
        />
      </label>
    </form>
  )
}

export default RouteForm;