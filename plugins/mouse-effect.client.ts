// plugins/mouse-effect.client.ts
export default defineNuxtPlugin(() => {
    function handleMouseMove(e) {
        const cards = document.getElementsByClassName("tech-card");

        for (const card of cards) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        }
    }

    if (process.client) {
        window.addEventListener("mousemove", handleMouseMove);
    }
})