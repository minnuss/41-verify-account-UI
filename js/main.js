const codes = document.querySelectorAll('.code')

// focus on first input
codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        // forbid entering more then one number in input
        if (code.value.length > 1) return

        if (e.key >= 0 && e.key <= 9) {
            // if number is pressed, put focus on next input
            setTimeout(() => {
                codes[idx + 1].focus()
            }, 10);
        } else if (e.key === "Backspace") {
            // if user mistakes a code, and press backspace, move focu to previous input
            setTimeout(() => {
                // delete the previous input
                codes[idx - 1].value = ''
                // move focus to previous input
                codes[idx - 1].focus()
            }, 10);
        }
    })
})
