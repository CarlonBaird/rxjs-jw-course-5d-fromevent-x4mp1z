import { fromEvent, Observable } from 'rxjs';

const triggerButton = document.querySelector('button#trigger');

// fromEvent(triggerButton, 'click').subscribe({
//   next: (event) => console.log(event),
// });

fromEvent<MouseEvent>(triggerButton, 'click').subscribe((event) =>
  console.log(event.type, event.x, event.y)
);

const triggerClick$ = new Observable((subscriber) => {
  triggerButton.addEventListener('click', (event) => {
    subscriber.next(event);
  });
});

triggerClick$.subscribe((event: MouseEvent) =>
  console.log(event.type, event.x, event.y)
);
