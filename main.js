const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.querySelector(".title").addEventListener("click", () => {

        // Close other cards
        cards.forEach(item => {
            if(item !== card){
                item.classList.remove("active");
            }
        });

        // Toggle clicked card
        card.classList.toggle("active");
    });
});