# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a web design library.  It is used to make interactive components and make working with the DOM simpler.  It allows you to update parts of a page automatically without having to reload the entire page. This also speeds up performance since you are not reloading the entire page.

1. What does it mean to think in react?

It means that we are not changing user interfaces but rather we are rerendering them.  You are not using different functions but rather running the same function with each rendering. It's a different way of thinking of user interfaces.

1. Describe state.

State is data that we set. The page will react (or change) when a new state (or new data) is presented. 

1. Describe props.

Props is an object of data.  It's purpose is to pass down data from a parent component to a child component.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is any application state change that is observable outside the called function other than its return value. We sync effects by passing in a dependency array as the second argument of our useEffect.
