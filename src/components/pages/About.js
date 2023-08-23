export default function About() {
  return (
    <div className="about-container">
      <h1>About</h1>
      <p>
        I started this capstone by first building out the file structure. Then I
        set up routes and a navbar to link up the pages. I struggled in figuring
        out how to design the pages so I first worked on some of the
        functionality on things like fetching the products in the products page.
        I learned that finding pages on different websites as reference was very
        helpful for me. Once I found some pages that I liked, I had a point of
        reference to work with on the styles and the layout for each page. I
        really enjoyed seeing the progress made as I continued working on this
        capstone.
      </p>
      <p>
        One thing I struggled with in this capstone was coming up with how I
        wanted the home page to look. The lack of detail on what to do on the
        home page led to so many possibilities! This overwhelmed me so much I
        didn't know what to do so reached out for help. Having someone else to
        talk to and brainstorm ideas helped me so much here. The main idea that
        helped me was looking for home page examples on the internet to come up
        with some ideas on how I wanted mine to look. Once I found one I really
        liked, I used it as reference to build out the home page. I decided to
        follow a similar process with the other pages and it worked out great!
      </p>
      <p>
        The other thing that I was stuck on for a bit was the logic on updating
        the total cost on the shopping cart page when changing the amount or
        removing items in the cart. I originally made utility functions that
        would load the shopping cart, make the changes I needed, then save those
        changes. This worked until I noticed the total cost wasn't updating. I
        later learned that it was because I didn't use state. The refactor on
        using both state and localStorage for the shopping cart was a great
        learning experience for me.
      </p>
      <p>
        Right now my favorite language is JavaScript. I really enjoy learning
        all the things that can be done in JS. It's a very dynamic language with
        a lot of built in methods that help me quickly develop the things that I
        want to make. I thought it was really fascinating when I learned that it
        is possible to build a website with a minimal HTML file and use JS for
        everything else. Although, I would not recommend doing that!
      </p>
    </div>
  );
}
