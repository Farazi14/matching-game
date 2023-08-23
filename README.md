# COMPX575
Due on **Friday the 18th of August at midday**.

# Task Goal
* Gain experience using a library.
* In this exercise, you will learn about using a third-party JavaScript library (jQuery) to implement a matching memory game.

## Preamble
0. You may complete this project by working in pairs, pair programming is encouraged.
1. Fork this repository using the button at the top of the project page.
2. Make sure that the visibility of your project is private. (Settings > expand Permissions > Project visibility: Private; Save changes).  *Note: Class teachers and tutors will still have read access to your project for marking purposes.*
3. Clone the new repository to your computer using Git.  Store the repository in your COMPX575 directory.
4. Remember to commit and push regularly as you work on the project!  

### Part 1: Create the matching game offline
1. Create a directory called *matchingGame*
2. (Optional) replace the 10 images in the *images* directory with images you wish to use for your matching game.
3. In *matchingGame*, create a file called *index.html* based on the following template:
```
<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
    <title>Matching Game</title>
    <link rel="stylesheet" href="style.css">
    <script
        src="https://code.jquery.com/jquery-3.3.1.js"
        integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
        crossorigin="anonymous"
        defer></script>
        <script src="script.js" defer></script>
    </head>
    <body>
    <!-- write your HTML here -->
<   /body>
</html>
```
5. In *matchingGame*, create a file called *script.js* where you will write your JavaScript code and *style.css* where you can write CSS style rules.  These files are loaded by the HTML template above.
6. Use HTML, CSS and/or JavaScript to create a 4x4 table with 8 image pairs, each image randomly positioned.

A random order should be generated on every page load. JavaScript does not have a built-in function to shuffle arrays, but you can easily find code on the web to do that (don't forget to cite your source), or you can come up with a differnt way of producing the random ordering.

### Part 2: Using the jQuery library to implement the game
1. Make all the tiles face down initially (i.e. display identical blank images).

You should still keep track of the random image assigned to each tile (e.g. using data attributes).

If you use an image file for the face-down tiles, ensure that it cannot be chosen randomly as being one of the pairs you are matching.  This can be most easily achieved by not putting it in the *images* directory.

2. When a tile is clicked, turn it face up (i.e. display the random image assigned to it)
3. Add a button labelled "Continue" for the user to click after turning two files face up.

If the two tiles do not match, the button should turn them face down.

If the two tiles match, the button should remove them from the board (i.e. they should no longer be visible and clickable).

4. Make sure that the tiles and the "Continue" button can only be used in the correct sequence (e.g. when only one tile is face up, the "Continue" button should do nothing; when two tiles are face up, clicking a third tile should do nothing).



## Grading
This task is worth as much as 5% of your final grade.  

## Submission
On top of the commits to your Git repository, please upload your source files to moodle.
