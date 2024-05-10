# Low Level Design
Frontend low-level design focuses on the detailed components and structure of a user interface (UI), ensuring it functions efficiently and meets specified requirements.

As a developer you must plan before you start writing code.
In this module we will talk about some principles and best practicves to desing complex systems.

![LeftNavigation](exampleOne.png)
Suppose you want to build collpasable left side naviagtion bar of youtube.

It is ideal to built a two conatiner and toggle their visibilty.
like <ExpandedMenuContainer/> and <CollapsedMenuContainer/>

## Approach

The basic approach is whatever that you need to build , Divide the whole page into components like.

``` html
<Navbar>
<LeftSection>
    <LogoSection>
        <TextComponent>
    </LogoSection>
</LeftSection>
<RightSection>
    <MenuContainer>
        <Home/>
        <About/>
        <Contact/>
    </MenuContainer>
</RightSection>
</Navbar>
```

The idea is to see whole complex page to as container of modular components.

- modular
- reusable
- testable
- debugable

## Single Responsibility Principle

Every Component that you see should have a single responsibility.

**Some company sets limits on number of lines per component.**

Higher Components 
A components that take another components as a props
It is a way by which you can resuse components like passing card component inside SponseredCardComponent section


## Config Driven UI | What problem does it solve ?


let's take the scenarion where you want to built amazon.com 
Do you know that amazon.com looks different for you and me.
How to build that ? yes with the help of config driven ui

How to personalaized the paritcular component in the site to be visible only for newly registered user ? 
ans -> config driven ui

We define the config how the data should be displayed 
genrally the config is in JSON format and decides the layout of the page.

**With the help of config driven ui backend can drive the UI, it's order and placmenet/visibility of component's**
**Config Driven UI also Know as backend driven ui , dynamic ui layout...**

## How to build config driven UI ?
- Do Your reasearch 
    - what type of app it is ?
    - Type of UI layout design that you are building 
    - Backend api should be working with UI in sync.

## Shimmer UI
Loading circle or loadig ... provides bad user experience instead of using any type of loader it's best practice to use shimmer UI 

Why to use Shimmer UI ? 
Shimmer UI improves UX(user experience )

![shimmer ui example](shimmerExample.png)

Instead of showing loaders we use empty dummy card untill the data is loaded 

here we plays with the user physcology and decreases drop rate due to long loading...

