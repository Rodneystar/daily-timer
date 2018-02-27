import * as timerControl from '../daily-timer';
import { expect } from 'chai';
// import {describe, before, it} from 'mocha';
var factory = new timerControl.TimerFactory();
var timer;

describe("test suite", function() {
  beforeEach(function() {
      timer = factory.createTimer(1000, () => {
      console.log("timer tick");
    });
    console.log('00000000 before each');
  })
  describe("get timer function timer controller", () => {
    it('should return a timer object ', () => {
      console.log('run time  -- ', timer.runTime);
      expect(timer instanceof timerControl.Timer).to.be.true;
    })
  })
  describe("run timer function", () => {
    it("should start the timer loop", () => {
      timer.runTimer()
    })
  })
})
