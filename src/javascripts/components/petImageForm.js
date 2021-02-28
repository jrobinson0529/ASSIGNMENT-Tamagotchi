import printToDom from '../helpers/printToDom';

const petImageForm = () => {
  document.querySelectorAll('.quad').innerHTML = '';
  const domString = `<form>
  <div class="form-group">
    <label for="imageUrl">Pet Image</label>
    <input type="url" class="form-control" id="imageUrl" aria-describedby="imageUrl">
    <small id="imageUrl" class="form-text">Enter your pet's image here!</small>
  </div>
  <button type="submit" class="btn btn-primary" id="petSubmit">Submit</button>`;
  printToDom('#pet', domString);
};

export default petImageForm;
