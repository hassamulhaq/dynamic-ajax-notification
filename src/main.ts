import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <form id="demo-form" class="ajax-submit" action="https://jsonplaceholder.typicode.com/posts/1" method="post" enctype="multipart/form-data">
        <div>
            <label for="age">Age</label>
            <input type="text" id="age" name="age" />
        </div>
        <div>
            <label for="blood_group">Blood Group</label>
            <input type="text" id="blood_group" name="blood_group" />
        </div>
        <div>
            <button type="submit" value="Save">Save</button>
        </div>
    </form>
    <h4>Vite + TypeScript</h4>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
