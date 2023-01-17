function left() {
    document.getElementById('left_img').style.display = 'inline';
    document.getElementById('right_img').style.display = 'none';

    document.getElementById('left_column').style.width = '100%';
    document.getElementById('right_column').style.width = '0';
}

function both() {
    document.getElementById('left_img').style.display = 'inline';
    document.getElementById('right_img').style.display = 'inline';

    document.getElementById('left_column').style.width = '100%';
    document.getElementById('right_column').style.width = '100%';
}

function right() {
    document.getElementById('left_img').style.display = 'none';
    document.getElementById('right_img').style.display = 'inline';

    document.getElementById('left_column').style.width = '0';
    document.getElementById('right_column').style.width = '100%';
}