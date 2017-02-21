# Angular Unit Testing

1. Pull down `6502redux` project: `git clone https://github.com/JeremyLikness/redux6502.git`

2. Set `6502redux` as the current working directory 

3. Run the suite of tests: `ng test --watch=false --single-run=true` 

    This will open Chrome as the default browser and run around 600 unit tests. 

4. Repeat the command but add `--browsers=PhantomJS` 

    This is a "headless" browser that can run without a UI and therefore is suited well for automated tests. Read more about this in [Integrating Angular 2 Unit Tests](http://csharperimage.jeremylikness.com/2016/12/integrating-angular-2-unit-tests-with.html). 

5. Explore the [JUnit Reporter](https://github.com/karma-runner/karma-junit-reporter) for Karma. This outputs the test results to ingest into your build service.

6. Take a look at the [compiler.spec.ts](https://github.com/JeremyLikness/redux6502/blob/master/src/app/compiler/compiler.spec.ts) to see an example of comprehensive unit tests for a Plain Old JavaScript Object (POJO). The Angular testbed is solely used to register the test. 

7. A simple test for an Angular pipe: [hex.pipe.spec.ts](https://github.com/JeremyLikness/redux6502/blob/master/src/app/hex.pipe.spec.ts)

8. The `ADC` operand has a lot of complex logic to validate, so it generates a matrix of tests. See: [adc.spec.ts](https://github.com/JeremyLikness/redux6502/blob/master/src/app/cpu/opCodes/adc.spec.ts)

9. An example of a more complex scenario that loads, runs, and tests an entire program: [comparisons.spec.ts](https://github.com/JeremyLikness/redux6502/blob/master/src/app/cpu/scenarios/comparisons.spec.ts)

10. Finally, take a look at a component specification. It will create the actual component and invoke various actions to test the desired results: [compiler.component.spec](https://github.com/JeremyLikness/redux6502/blob/master/src/app/compiler/compiler.component.spec.ts)
