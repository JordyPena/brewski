const RouteForm = () => {
  
  return (
    <form>
      <label>
        ZipCode
        <input
          type='number'
          name='zipcode'
        />
      </label>
      <label>
        Within
        <input
          type='number'
          name='distance'
        />
      </label>
    </form>
  )
}

export default RouteForm;