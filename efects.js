$(document).ready(function () {
    const modal = $("#myModal");
    const modalImg = $("#img01");
    const caption = $(".caption");
    let currentGroup = [];
    let currentIndex = 0;

    function showModal(index) {
        currentIndex = index;
        const img = currentGroup[index];
        modalImg.attr("src", $(img).attr("src"));
        caption.text($(img).attr("alt"));
        modal.show();
    }

    $(".gallery-image").on("click", function () {
        const groupName = $(this).data("group");
        currentGroup = $(`.gallery-image[data-group="${groupName}"]`).toArray(); // do poľa
        currentIndex = currentGroup.indexOf(this);
        showModal(currentIndex);
    });

    $(".close").on("click", function () {
        modal.hide();
    });

    $(".next").on("click", function () {
        currentIndex = (currentIndex + 1) % currentGroup.length;
        showModal(currentIndex);
    });

    $(".prev").on("click", function () {
        currentIndex = (currentIndex - 1 + currentGroup.length) % currentGroup.length;
        showModal(currentIndex);
    });

    modal.on("click", function (e) {
        if (!$(e.target).is(modalImg) && !$(e.target).is(".next") && !$(e.target).is(".prev")) {
            modal.hide();
        }
    });

    // Ovládanie cez klávesnicu
    $(document).on("keydown", function (e) {
        if (modal.is(":visible")) {
            if (e.key === "ArrowRight") {
                currentIndex = (currentIndex + 1) % currentGroup.length;
                showModal(currentIndex);
            } else if (e.key === "ArrowLeft") {
                currentIndex = (currentIndex - 1 + currentGroup.length) % currentGroup.length;
                showModal(currentIndex);
            } else if (e.key === "Escape") {
                modal.hide();
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Optional: Animate the burger icon
        menuToggle.classList.toggle('active');
    });
});


