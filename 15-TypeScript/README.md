# TypeScript

## Introduction to TypeScript 

[Presentation](./ts.pptx)

## TypeScript Lab 

1. Create a lab directory `mkdir ts-lab` 

2. `cd ts-lab` 

3. `code .` 

4. Create `package.json` 

    ```JavaScript
    {
        "name": "devnexus-typescript",
        "version": "1.0.0",
        "description": "TypeScript presentation",
        "main": "main.js",
        "scripts": {
            "tsc": "tsc",
            "tsc:w": "tsc -w",
            "start": "npm run tsc:w",
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "keywords": [
            "typescript"
        ],
        "author": "Jeremy Likness",
        "license": "MIT",
        "devDependencies": {
            "typescript": "^2.1.0"
        }
    }
```

5. Create `tsconfig.json` 

    ```JavaScript
    {
        "compilerOptions": {
            "target": "es5",
            "module": "system",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false
        },
        "exclude": [
            "node_modules",
            "typings"
        ]
    }
```

6. After saving, from the root of the project: `npm install` 

7. Create an `examples` directory

8. Add file [001types.ts](./ts-lab/examples/001types.ts) to the directory

9. Compile from the project root (parent directory to `examples`): `npm run-script tsc` 

10. Examine the output in `examples/001types.js` 

11. Run the output with `node examples/001types.js` 

12. Repeat steps 8 - 11 with the following: 

    a. [002interfaces.ts](./ts-lab/examples/002interfaces.ts)
    
    b. [003classes.ts](./ts-lab/examples/003classes.ts)

    c. [004lambdas.ts](./1ATypeScript/examples/004lambdas.ts)

    d. [005complex.ts](./ts-lab/examples/005complex.ts)

    e. [006generics.ts](./ts-lab/examples/006generics.ts) 

    f. [007mixinsattrs.ts](./ts-lab/examples/007mixinsattrs.ts)

13. Congratulations ... you are on your way to mastering TypeScript!
