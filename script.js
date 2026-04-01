let serviceItems = document.querySelectorAll('#servicesCarousel .carousel-item');

serviceItems.forEach((el) => {
    const minPerSlide = 4; // عدد الكروت المطلوب ظهورها
    let next = el.nextElementSibling;
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            next = serviceItems[0]; // لو وصلنا لآخر كارت يرجع للأول
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
    }
});



let serviceItems = document.querySelectorAll('#servicesCarousel .carousel-item');

serviceItems.forEach((el) => {
    const minPerSlide = 4; // عدد الكروت المطلوب ظهورها معاً
    let next = el.nextElementSibling;
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // إذا وصلنا للنهاية، ابدأ من أول كارت
            next = serviceItems[0];
        }
        let cloneChild = next.cloneNode(true);
        // إضافة محتوى الكارت التالي داخل الشريحة الحالية
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
    }
});