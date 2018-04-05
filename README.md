# RPGFightTracker

## What is it

RPG Fight Tracker ( from now on RpgFT) is an app that helps you to keep tracks on games “Round” based.

In every RPG a round is a distinct fraction of time where an entity (player or npc) is allowed to do something.

Every entity has its own round, and the rounds are sorted by a value called Initiative.
An entity have always stats like Vitality Point, Bonus and Malus. Every Bonus and Malus have a specific round duration. Vitality points may change on multiple rounds.

## Use Case

Let’s say we have 2 players: John Snow and Arya Stark; 2 enemies of the type of White Walkers. 

The master should be able to put in the entities list all the player and the NPCs.
Then should be signed the initiative roll of each entity and vitality points.



## Tecnology

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
