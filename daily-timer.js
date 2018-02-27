
const TIMER_OFF = false;
const TIMER_ON = true;

class Controller {
  constructor() {
  }
}

export class TimerFactory {
  createTimer(runTime, onAction) {
    let timer = new Timer(runTime, onAction);
    return timer;
  }
}

export class Timer {
  constructor(runTime, onAction) {
    this.runTime = runTime;
    this.switchedOn = TIMER_OFF;
    this.onAction = onAction;
    this.timerPeriod = 5 * 1000;
  }

  recurringTimer() {
    setTimeout(() => {
      if(this.switchedOn) {
          this.onAction();
          recurringTimer();
        }
    }, this.timerPeriod)
  }

  stopTimer() {
    this.timerState = TIMER_OFF;
  }

  runTimer() {
    var startTime = new Date(Date.now()).getMinutes();
    setTimeout(() => {
        this.onAction();
        recurringTimer();
    }, this.runTime )
  }
}
