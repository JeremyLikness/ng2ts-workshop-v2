# Angular Command Line Interface (CLI) Lab 

1. Navigate to the `devnexus-ts-ng2` project 

2. `ng version` (should be 1.0.0-beta.24 or higher)

3. `ng build -dev` 

4. Inspect the `dist` folder and note the file sizes

5. `ng build -prod` 

6. Inspect the `dist` folder again 

7. `ng build --prod --aot` 

8. Inspect the run time 

9. Run tests with `ng test` 

10. Stop the test runner 

11. "Lint" the code (check it against best practices and standard formatting) with `ng lint` 

12. Open a second Node.js command prompt 

13. In the first command prompt run `ng serve` 

14. In the second command prompt run `ng e2e` 

## Notes 

### Environments

You can create custom environments. Use environments to configure custom code. For example, routes, titles, debugging configurations, etc. The default environments are `environment.ts` and `environment.prod.ts`. 

### Creating New Projects 

`ng new` creates a folder, then runs `ng init` 

`ng init` creates a new CLI project in the current folder 

### Code Generation

This will be covered in later labs. The available generators include: 

* **Component** is a standalone unit of code with a template 
* **Directive** is a reusable behavior
* **Pipe** is a reusable transformation of data from an input to an output based on optional parameters 
* **Service** is a reusable class 
* **Class** is a standalone object definition 
* **Interface** is a standalone signature declaration 
* **Enum** is a scalar list of values 
* **Module** is a resuable set of components, directives, and pipes that can also provide services for the running app
