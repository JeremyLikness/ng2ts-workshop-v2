# Angular and TypeScript Workshop

The [Angular](https://angular.io) and [TypeScript](http://www.typescriptlang.org/) workshop is a full day workshop written and presented by [@JeremyLikness](https://twitter.com/jeremylikness) for [DevNexus 2017](https://devnexus.com/s/index). The workshop leverages cross-platform solutions so developers on any of the major (Windows, Linux, and OSX) platforms can take advantage of it. Prior knowledge and experience with web applications and JavaScript is highly recommended to get the most out of the workshop. It is designed to benefit users who have no Angular exposure as well as those familiar with Angular 1.x. Successful installation of the prerequisites is important to complete prior to the workshop to ensure the best possible experience (this will help minimize any potential issues with Wi-Fi availability and bandwidth).

## Pre-requisites

The following cross-platform resources will be required to participate in this workshop:

**Node.js** environment (LTS 6.x): [Install from this Link](https://nodejs.org/en/)

> Tested on Node version 6.9.4 and NPM version 3.10.5

After installing Node.js, install the **[Angular-CLI](https://cli.angular.io/)** with this command (to keep versions in sync):

`npm i -g angular-cli@1.0.0-beta.24` 

**Visual Studio Code** Interactive Development Environment (IDE): [Install from this Link](https://code.visualstudio.com/)

Optional Container Platform: **Docker** [Install from this Link](https://www.docker.com)

You may want to look ahead and complete the initial set up and `npm install` steps for various modules to pre-load the dependent packages and save development time during the workshop. 

Make a few starter projects like this:

`ng new devnexus-ts-ng2`

`ng new dependency-injection`

`ng new data-binding`

`ng new reactive`

`ng new ng-routing`

`ng new ng-redux`

`ng new services`

> Note: This repository contains several projects in their finished state. Many of the labs involve transitory states to teach functionality in an iterative fashion. Although you can run the existing labs, it is recommended you walk through the code tutorials to receive the full benefit. For the existing labs, change to the root directory of any given lab and run `npm install` then `ng serve` to view the lab. For the labs you work on, it is suggested you create your own parent level folder, i.e. `lab`, to run the labs from (so you will end up with `lab\devnexus-ts-ng2` and `lab\dependency-injection` etc.)

If you are having issues with your local environment, consider using the [Angular-CLI Container](https://github.com/JeremyLikness/ng2container) and note the instructions on mounting the appropriate folder.

## Modules

The following modules will be covered in the workshop.

### 01 Angular Intro (30 minutes)

A quick background introduction to Angular, its history, and its use in modern web applications.

[Click here for the lab](./00-Intro/README.md)

### 05 Angular "Hello, World." (30 minutes)

A quick and easy Angular project.

[Click here for the lab](./05-HelloWorld/README.md)

**JavaScript**

The project in JavaScript.

**TypeScript**

The project in TypeScript.

### 10 Angular-CLI (20 minutes)

A command line tool to scaffold and rapidly develop Angular 2 apps.

[Click here for the lab](./10-Angular-CLI/README.md)

### 15 TypeScript (1 hour)

A quick introduction to TypeScript and its various benefits.

[Click here for the lab](./15-TypeScript/README.md)

### 20 Components, Directives, and Pipes (30 minutes)

Getting started with the basics.

[Click here for the lab](./20-CompDirPipe/README.md)

### 25 Dependency Injection (30 minutes)

Understanding lifetime and providers.

[Click here for the lab](./25-Dependency-Injection/README.md)

### 30 Data-Binding (30 minutes)

How data flows from parents through to children.

[Click here for the lab](./30-Data-Binding/README.md)

### 35 Asynchronous Operations and RxJS (30 minutes)

Working with `Observable` and understanding asynchronous operations, including the `Http Module`.

[Click here for the lab](./35-AsyncRxJs/README.md)

### 40 Routing (30 minutes)

How to use journaling, bookmarks, and query string data in Angular with the `Routing Moudle`.

[Click here for the lab](./40-Routing/README.md)

### 45 Angular with Redux (45 minutes)

State management in Angular applications using Redux.

[Click here for the lab](./45-Redux/README.md)

### 50 Angular Testing (20 minutes)

Better understanding Angular Unit tests and workflow. 

[Click here for the lab](./50-Testing/README.md)

### 55 Angular and Docker (30 minutes)

How to containerize Angular apps and dependencies.

[Click here for the lab](./55-Docker/README.md)

## Questions? 

Have questions? Reach out to Jeremy via the contact form on his [blog](http://csharperimage.jeremylikness.com/).