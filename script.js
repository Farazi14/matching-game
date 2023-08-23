$(document).ready(function() {
    // image shuffle function
    // source: https://www.shecodes.io/athena/72877-how-to-create-a-4x4-grid-using-html-and-javascript  &    https://www.shecodes.io/athena/72877-how-to-create-a-4x4-grid-using-html-and-javascript
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    //Image collection array
    const images = [
        './images/icons8-butterfly-filled-100.png',
        './images/icons8-chicken-filled-100.png',
        './images/icons8-crab-filled-100.png',
        './images/icons8-dog-filled-100.png',
        './images/icons8-dolphin-filled-100.png',
        './images/icons8-dove-filled-100.png',
        './images/icons8-elephant-filled-100.png',
        './images/icons8-horse-filled-100.png',
    ];

    const coverImage = './images/cover.png';


// Duplicate the images since you need two of each
    const gameImages = images.concat(images);
    // Shuffle the images array
    shuffle(gameImages);

// Create the grid and place the images
    const $grid = $("#game-board");
    const $continueButton =  $("#continue-button");

    let selectedCells = [];

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            // Assign the shuffled image to the cell

            const imageIndex = i * 4 + j;
            const $cell = $('<div class="cell"></div>');

            $cell.css('background-image', `url('${coverImage}')`);
            $cell.data('image', gameImages[imageIndex]);

            // Add a click event listener to reveal the actual image
            $cell.on('click', function() {
                if (selectedCells.length <2 && !selectedCells.includes(this)) {
                    const actualImage = $(this).data('image');
                    $(this).css('backgroundImage', `url('${actualImage}')`);
                    selectedCells.push(this);

                    if (selectedCells.length === 2) {
                        $continueButton.show();
                    }
                }
            });

            $grid.append($cell);
        }
    }

    // handle the continue button click
    $continueButton.on('click', function() {
        const cell1 = $(selectedCells[0]);
        const cell2 = $(selectedCells[1]);

        if (cell1.data('image') === cell2.data('image')) {
            cell1.addClass('disabled');
            cell2.addClass('disabled');
        }else {
            cell1.css('background-image', `url('${coverImage}')`);
            cell2.css('background-image', `url('${coverImage}')`);
        }

        selectedCells = [];
        $continueButton.hide();
    });

});