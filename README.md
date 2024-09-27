# Glisten-ai Tutorial Course

This is the final code for the YouTube tutorial course where we build a dark Next.js, Prismic, Tailwind, TypeScript, and GSAP website.

For more information and to watch the course, go to the [course documentation](https://prismic.notion.site/Prismic-Next-js-Course-Resources-9eda931a8b3743b9b3aaf0b7a561403b).

## Skip the tutorial and launch the site

If you don’t want to go through the tutorial, but want your own version of the website deployed on Prismic, follow these directions:

1. Clone the code:
    
    ```sh
    npx @slicemachine/init@latest --starter course-glisten-next
    ```
    
2. Open the Prismic repository and select “English - United States”.
3. Run the content set up script:
    
    ```sh
    npm run set-up-content
    ```
    
4. Open the migration release and publish it. A URL to the migration release will be printed on the screen.
5. Set up the slice simulator URL: `http://localhost:3000/slice-simulator`
