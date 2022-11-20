import { fromEvent, Observable } from 'rxjs';

const triggerButton = document.querySelector('button#trigger');

// fromEvent(triggerButton, 'click').subscribe({
//   next: (event) => console.log(event),
// });

// const subscription = fromEvent<MouseEvent>(triggerButton, 'click').subscribe(
//   (event) => console.log(event.type, event.x, event.y)
// );

// setTimeout(() => {
//   console.log('Unsubscribe');
//   subscription.unsubscribe();
// }, 5000);

const triggerClick$ = new Observable<MouseEvent>((subscriber) => {
  triggerButton.addEventListener('click', (event: MouseEvent) => {
    console.log('Event callback executed');
    subscriber.next(event);
  });
});

const subscription2 = triggerClick$.subscribe((event) =>
  console.log(event.type, event.x, event.y)
);

setTimeout(() => {
  console.log('Unsubscribe');
  subscription2.unsubscribe();
}, 5000);
