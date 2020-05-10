const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', (e) => {

    //cek apakah thumb di klik
    if(e.target.className == 'thumb') {

        jumbo.src = e.target.src;
        jumbo.classList.add('fadeAnimation');
        setTimeout(function() {
            jumbo.classList.remove('fadeAnimation');
        }, 500);

        thumbs.forEach(function(thumb) {
            if(thumb.classList.contains('active')) {
                thumb.classList.remove('active');
            }
        });
        e.target.classList.add('active');
    }

});