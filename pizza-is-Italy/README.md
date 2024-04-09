# PizzaIsItaly

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

Using Html and css for structure

## Base Idea of the Project

The main idea for the project is to be able to access a pizza app, where you can not only order from the pizzas usually pizzas-app offer you, but you can create your own pizza, according to your tastes and according to the ingredients you prefer. And then you can share with others your idea about the pizza. You can order it and make other people order it.

## Description and how to use

Before logging in, the Home page will be accessible, where you can see more information on the staff who work, how they work, the ingredients they use and their contacts. You will have access to the public menu, which the pizzeria itself offers. Without being login, you will not be able to place any order and you will not be able to access the customer catalog, where are all the pizzas created by registered and logged in users only. As a logged in user, you will have access to this catalog, you can also comment, put a like to the pizzas of others users, and above all you can create your own pizza, and of course, place your order.You will also be able to access your personal area, where you will see the pizzas you have created and the orders you have made.

### Used Language

For the application I used the English language, but for the names of the pizzas and their ingredients I used the Italian language, because I think it is a good idea to leave them in their original state. Since the pizza is an originally Italian product, the ingredients sound great in Italian.


### SoftUni Practice Server `node server.js` 

As a rest service, open folder server in terminal and type 'node server.js'. You should see that:
Server started on port 3030. You can make requests to http://localhost:3030/.

In the project directory, you can run:

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Architecture

The project is divided and organized into different modules which have different responsibilities within the application. They include the main module and start of the application, App.module.ts, Auth.module.ts responsible for everything related to user authentication, the components register, login, profile and components about user; Shared.module.ts  contains custom validators, constants.ts and check-user.pipe.ts, that will be shared by other modules in the application; Core.module.ts, which contains the basic front-line components such as header, home, footer, and the guard auth.activate.ts.; and certainly there is the protagonist of this app, Pizza.module.ts, which contains all the components regarding the details of the pizza, such as edit, details, create, catalog, clients catalog etc. And also Cart.module.ts, responsible for the cart orders. For the different rotes the app uses user.router.module.ts, api.router.module.ts, pizza.router.module.ts and cart.router.module.ts. There is app.interceptor.ts in App.module.ts, to intercept all failed calls (errors). The services are api.service.ts, user.service.ts and cart.service.ts.

## License

Distributed under the MIT License. See LICENSE.txt for more information.

## Contact
Denitsa Dimitrova, email: dimitrova.denise@gmail.com

Project Link: https://github.com/DeniD-star/pizza-is-Italy-Angular

## App deployed on Firebase

Links: 

Project Console: https://console.firebase.google.com/project/pizza-is-italy/overview
Hosting URL: https://pizza-is-italy.web.app
