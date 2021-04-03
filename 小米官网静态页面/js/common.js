;
(function() {
    var topbarCarPull = document.querySelector('.topbar-car-pull')
    var topbarCar = document.querySelector('.topbar-car')
    var search = document.querySelector('.search')
    var searchIn = document.querySelector('input')
    var iconSearch = document.querySelector('.icon-search')

    topbarCar.addEventListener('mouseenter', () => {
        topbarCarPull.style.height = '100px'
        topbarCarPull.style.boxShadow = ' 0px 1px 5px 1px #ccc';
    })

    topbarCar.addEventListener('mouseleave', () => {
        topbarCarPull.style.height = '0px';
        topbarCarPull.style.boxShadow = 'none';
    })
    searchIn.addEventListener('focus', () => {
        search.style.border = '1px solid #ff6700';
        iconSearch.style.borderLeft = '1px solid #ff6700'
    })
    searchIn.addEventListener('blur', () => {
        search.style.border = '1px solid #e0e0e0';
        iconSearch.style.borderLeft = '1px solid #e0e0e0'
    })
})()