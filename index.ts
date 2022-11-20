import { fromEvent } from 'rxjs';

const triggerButton = document.querySelector('button#trigger');

fromEvent(triggerButton, 'click').subscribe({
  next: (event) => console.log(event),
});
