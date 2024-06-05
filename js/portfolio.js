document.addEventListener('DOMContentLoaded', () => {
    const resize = function () {
        let width = window.innerWidth;
        const photos = document.querySelectorAll('.hero__img');
        const plans = document.querySelectorAll('.planning__img');
        const photosRow = document.querySelectorAll('.photo__row__img');
        if (width >= 576) {
            // hero portfolio
            if (photos.length == 2) {
                photos[0].style.width = '32%'
                photos[1].style.width = '66%'
            } else if (photos.length == 3) {
                photos.forEach(photo => {
                    photo.style.width = '32%';
                });
            } else {
                photos[0].style.width = '100%';
            }

            if (photosRow.length == 2) {
                photosRow[0].style.width = '32%'
                photosRow[1].style.width = '66%'
            } else if (photosRow.length == 3) {
                photosRow.forEach(photo => {
                    photo.style.width = '32%';
                });
            } else {
                photosRow[0].style.width = '100%';
            }

            // planning
            if (plans.length == 2) {
                plans.forEach(plan => {
                    plan.style.width = '45%';
                });
            } else if (plans.length == 3) {
                plans.forEach(plan => {
                    plan.style.width = '33%';
                });
            } else {
                plans[0].style.width = '100%';
            }
        } else {
            plans.forEach(plan => {
                plan.style.width = '100%'
            })

            photos.forEach(photo => {
                photo.style.width = '100%'
            })

            photosRow.forEach(photo => {
                photo.style.width = '100%'
            })
        }
    }
    resize();
    window.addEventListener('resize', function () {
        resize();
    });
});