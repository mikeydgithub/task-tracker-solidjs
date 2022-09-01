import type { Component } from 'solid-js';


const App: Component = () => {
  return (
    <div class="container mt-5 text-center">
      <h1 class="mb-4">Whattodo!</h1>

      <form class="mb-5 row row-cols-2 justify-content-center">
        <input type="text" class="input-group-text p-1 w-25" placeholder='Add taske here..'/>
          <button class='btn btn-primary ms-3 w-auto' type='submit' > Add Task </button>
      </form>

      <div>
        <h4 class='text-muted mb-4 justify-content-center'>Tasks</h4>
        <div class="row row-cols-3 mb-3 justify-content-center">
          <button class='btn btn-danger w-auto'>X</button>
        
        <div class='bg-light p2 mx-2'> Push code to GitHub</div>
          <input type='checkbox' role="button" class='form-check-input h-auto px-3'/>
        </div>
      </div>
  </div>
  );
};

export default App;
