$(document).ready(function(){

    //untuk hidden button paging
    $('.pagination').hide();
    // untuk hide loading
    $('.loading').hide();
    const totalMovie = $('.movieTotal');
    const cariMovie = $('.cari-btn');
    const prev = $('.prev');
    const next = $('.next');


    next.click(function(){
        nextPage();
    });
    prev.click(function(){
        prevPage();
    });
    cariMovie.click(function(){
        cariFunc();
    });


    var url = "http://www.omdbapi.com/?apikey=26d6ac2a&s=";
    var current_page = 1;
    var cari = "naruto";

    loadContent(current_page,cari);

    function cariFunc(){
        var data =  cari = $('.input-keyword').val();
        if(data == null) {
            //ketika klik cari, berapun halaman akan dikembalikan ke satu
            loadContent(1,cari);
        }else{
            loadContent(1,data);
        }
    }

    function prevPage()
    {
        current_page--;
        loadContent(current_page,cari);
    }

    function nextPage()
    {
        current_page++;
        loadContent(current_page,cari);
    }


    function loadContent(page,cari){

        $('.loading').show();

        $.ajax({
            url: url + cari +'&page=' +page,
            success: hasil => {
                const Total = hasil.totalResults;
                const ceil = Math.ceil(Total / 10);
                totalMovie.html(`Total Data movie : ${Total}`);
    
                $('.pagination').show();
                $('.loading').hide();
                
    
                const movies = hasil.Search; //search untuk membuang di API
                let cards = '';
                movies.forEach(m => {
                    cards += showCards(m);
                });
                $('.movies-container').html(cards);
                
                if (page < 1) page = 1;
                if (page > ceil) page = ceil;

                if(page == 1)  {$('nav ul li:first()').addClass('disabled')}else{$('nav ul li:first()').removeClass('disabled')};
                if(page == ceil)  {$('nav ul li:last()').addClass('disabled')}else{$('nav ul li:last()').removeClass('disabled')};
        
        
                //ketika tombol detail di klik
                $('.modal-detail-button').on('click', function(){
                    //console.log($(this).data('imdb'));
                    $.ajax({
                        url: 'http://www.omdbapi.com/?apikey=26d6ac2a&i=' + $(this).data('imdb'),
                        success: movie => {
                            const movieDetails = showMovieDetails(movie);
                        
                        $('.modal-body').html(movieDetails);
                        },
                        error: (e) => {
                            console.log(e.responseText);
                        }
                    });
                });
        
        
            },
            error: (e) => {
                console.log(e.responseText);
            }
        });
    } 

    function showCards(m) {
        return `
            <div class="col-md-3 my-2">
                <div class="card" style="width: 15rem; height:33rem">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                    <h6 class="card-title">${m.Title}</h6>
                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdb="${m.imdbID}">Details</a>
                    </div>
                </div>
            </div>
        `;
    }
    
    function showMovieDetails(movie) {
        return `
            <div class="conatiner-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${movie.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                    <ul class="list-group">
                        <li class="list-group-item"><h4>${movie.Title} (${movie.Year})</h4></li>
                        <li class="list-group-item"><strong>Director : </strong>${movie.Director}</li>
                        <li class="list-group-item"><strong>Actors : </strong>${movie.Actors}</li>
                        <li class="list-group-item"><strong>Writer : </strong> ${movie.Writer}</li>
                        <li class="list-group-item"><strong>Plot : </strong> <br> ${movie.Plot}</li>
                    </ul>
                    </div>
                </div>
            </div>
        `;
    }

});

