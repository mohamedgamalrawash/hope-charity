// دالة واحدة بتشغل أي سلايدر نبعت لها الـ ID بتاعه
function initializeMultiSlider(carouselId) {
    let items = document.querySelectorAll(carouselId + ' .carousel-item');
    
    if (items.length > 0) {
        items.forEach((el) => {
            const minPerSlide = 4;
            let next = el.nextElementSibling;
            for (var i = 1; i < minPerSlide; i++) {
                if (!next) {
                    next = items[0];
                }
                let cloneChild = next.cloneNode(true);
                el.appendChild(cloneChild.children[0]);
                next = next.nextElementSibling;
            }
        });
    }
}

// دلوقتي هننادي الدالة مرتين.. مرة لكل سلايدر باسمه الجديد
initializeMultiSlider('#mediaCenterCarousel');  // السلايدر اللي تحت


document.getElementById('partnershipForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (!this.checkValidity()) {
        event.stopPropagation();
        // ممكن هنا تسيبها تطلع الـ validation بتاع البوتستراب العادي (الأحمر)
    } else {
        // تشغيل نافذة النجاح البروفيشنال
        var myModal = new bootstrap.Modal(document.getElementById('successModal'));
        myModal.show();

        this.reset(); // تصفير الفورم
        this.classList.remove('was-validated'); // إزالة علامات التحقق بعد التصفير
    }
    
    this.classList.add('was-validated');
}, false);


