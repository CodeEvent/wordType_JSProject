// const showTyping = () => $('.typing').text('User is typing...');
// const showIdle = () => $('.typing').text('');
// const updateTimer = (x) => $('.timer').text(x);
// const handleTypingStateChange = state =>
//   state === 1 ? showTyping() : showIdle();

// /*** Program Logic ***/

// const inputEvents$ = Rx.Observable.fromEvent($('#input'), 'input').share();

// // streams to indicate when user is typing or has become idle
// const typing$ = inputEvents$.mapTo(1);
// const isIdle$ = inputEvents$.debounceTime(1000).mapTo(0);

// // stream to emit "typing state" change-events
// const typingState$ = Rx.Observable.merge(typing$, isIdle$)
//   .distinctUntilChanged()
//   .share();

// // every second, sample from typingState$
// // if user is typing, add 1, otherwise 0
// const timer$ = Rx.Observable
//   .interval(1000)
//   .withLatestFrom(typingState$, (tick, typingState) => typingState)
//   .scan((a, b) => a + b, 0)

// // subscribe to streams
// timer$.subscribe(updateTimer);
// typingState$.subscribe(handleTypingStateChange);