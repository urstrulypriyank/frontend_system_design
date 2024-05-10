# Testing 
When you design the system and the scale of system becomes huge and teams are working in single code base, you wan't the any change should not break any existing functionality then testing palys a crcial role.

On Early Stage startup testing does feels like an Overhead but It does save hour's of debugging time too.
- Lage scale project incorporate TDD(Test Drivien Development )


**As a developer you must have basic idea about testing and if you consider yourself architect it is one of the building blocks in making the huge application mantainable.**  

## What We Will Learn In This Module ? 
As a frontend developer we write unit test cases 
- we focus on writing test cases for part of code for detecting any unexpected beahaviour in that.

For Example: Let's assume you made a todolist having 5 pending task and you deleted one task 
Now you wrote the test case to assert that the todolist must have 5 - 1 i.e 4 pending task.

Example : 
Earlier I was working for automation company where we have worked on our landing page and come out of some ideas for CTA(call to action ) like: Learn More, Apply Now and more... where we applied A/B Testing to know the click rate of A then click rate of B which grew our CTA click rate and made us to pick best appeling CTA.

You visit flipkart.com you feel that the flipkart changes location to location and also the offer that you see base on geolocation also changes due to limited offers for the locality , this is the case where you apply A/B Testing.

there are various types of testing lets dive into that.

## Types of Testing 
1. Unit Testing - testing small unit like cart of ecomm aplication 
2. Integration Testing - You test integration of multiple componnent eg: 
3. Functional Testing: Here we test functionality of the app or section,eg: if you click on add to cart the item should be present on the cart.
4. End to End Testing: In this type of testing you test whole app flow from the entry to exit like : you first login then after sucessfull login you assert token then  you assert some expected beahaviour of homepage and then logout  then assert that auth token shold not be present.
5. 


