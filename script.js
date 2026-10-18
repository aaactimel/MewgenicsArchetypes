// Select the tooltip element and read its data attributes
const tooltipElements = document.querySelectorAll(".tooltip")

const tooltipBox = document.getElementsByClassName("tooltip-box")[0]
const tooltipTitle = document.getElementById("tooltip-title")
const tooltipText = document.getElementById("tooltip-text")
const tooltipImage = document.getElementById("tooltip-image")

tooltipElements.forEach(element => {
    element.addEventListener("mouseenter", () => {
        tooltipBox.className = "tooltip-box tooltip-box-" + element.dataset.type
        tooltipTitle.innerHTML = element.dataset.title
        tooltipText.innerHTML = element.dataset.text
        tooltipImage.src = element.dataset.image

        if (element.dataset.height) {
            tooltipBox.style.setProperty("--height", element.dataset.height)
        } else {
            tooltipBox.style.removeProperty("--height")
        }

        tooltipBox.style.opacity = "1"
    });

    element.addEventListener("mouseleave", () => {
        tooltipBox.style.opacity = "0"
    });

    element.addEventListener("mousemove", (event) => {
        const offsetX = 10; // Offset from the cursor
        const offsetY = 10; // Offset from the cursor

        tooltipBox.style.left = `${event.pageX + offsetX}px`
        tooltipBox.style.top = `${event.pageY + offsetY}px`
    });
})