export default function AddForm({ addEntry, newName, handleNameChange, 
                                  newNumber, handleNumberChange }) {
  return (
    <>
      <form onSubmit={addEntry}>
        <div>
          <label htmlFor="name">Name: </label>
          <input 
            id="name" value={newName} onChange={handleNameChange} required>
          </input>
          <br />
          <label htmlFor="number">Number: </label>
          <input 
            id="number" value={newNumber} onChange={handleNumberChange} 
              required>
          </input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
}