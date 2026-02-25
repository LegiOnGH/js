# Javascript and Classes

## OOP
OOP stands for Object-Oriented Programming. It is a programming paradigm that uses objects and classes to organize code and data. \
In JavaScript, we can create objects using constructor functions or ES6 classes.

## Object
- collection of properties and methods

- data type that can store multiple values in a single variable.

- reference type, which means that it is stored in memory as a reference to the value.

- Array, Date, Promise, etc.

## Why use OOP
- OOP allows us to model real-world entities as objects in our code, making it easier to understand and manage complex systems. 

- It promotes code reusability through inheritance and encapsulation, which helps in organizing code and reducing redundancy. 

- OOP also enables us to create modular and maintainable code, as objects can be easily modified without affecting other parts of the program. 

- Overall, OOP enhances the flexibility and scalability of our applications.

## Parts of OOP
- **Object Literal** : Objects created using curly braces {} and key-value pairs.

- **Constructor Functions** : Creates an object and sets the value of 'this' to that object. It is typically defined with a capitalized name and is called using the 'new' keyword.

- **Prototypes** : Is a blueprint for creating objects. It allows you to define properties and methods that can be shared among all instances of a particular type of object.

- **Classes** : A class is a blueprint for creating objects. It defines the properties and methods that the objects created from the class will have.\
In JavaScript, classes were introduced in ES6 as syntactic sugar over the existing prototype-based inheritance. 

- **Instances (new, this)** : Instances are created using constructor functions or classes. They are objects that have properties and methods defined by the constructor or class.
    - **New** : New operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function. 
    - **This** : This keyword refers to the current instance of the object.

## 4 Pillars 
- **Abstraction** : Abstraction is the process of hiding complex implementation details and showing only essential features of an object. \
In JavaScript, abstraction can be achieved using classes and methods.

- **Encapsulation** : Encapsulation is a fundamental principle of object-oriented programming (OOP) that involves bundling data and methods that operate on that data within a single unit, typically an object.\
 In JavaScript, encapsulation can be achieved using closures, classes, or modules.

- **Inheritance** : Inheritance is a fundamental concept in object-oriented programming that allows a new class (called a child or subclass) to inherit properties and behaviors (methods) from an existing class (called a parent or superclass). \
In JavaScript, inheritance can be achieved using prototypes or the newer class syntax. Here’s how you can implement inheritance using both approaches:

- **Polymorphism** : Polymorphism is the ability of an object to take on many forms. \
In JavaScript, this can be achieved through method overriding and method overloading.
    - **Method Overriding** : This occurs when a subclass provides a specific implementation of a method that is already defined in its superclass. The method in the subclass overrides the method in the superclass.
    - **Method Overloading** : This is not natively supported in JavaScript, but it can be simulated by using default parameters or by checking the number and types of arguments passed to a function.



