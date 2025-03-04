   const cards = document.querySelectorAll(".card");
      const wrapper = document.querySelector(".cards");

      wrapper.addEventListener("mousemove", function (event) {
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          card.style.background = `radial-gradient(960px circle at ${x}px ${y}px, rgba(59, 248, 251), transparent 15%)`;
        });
      });
