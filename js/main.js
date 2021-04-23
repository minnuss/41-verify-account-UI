const codes = document.querySelectorAll('.code')

// focus on first input
codes[0].focus()

// forbid entering more then one number in input
codes.forEach(code => {
    code.addEventListener('input', () => {
        if (code.value.length > 1) {
            code.value = ''
        }
    })
})

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            // if number is pressed, put focus on next input
            setTimeout(() => {
                // eliminates error in console when using idx+1
                if (code.nextElementSibling) {
                    code.nextElementSibling.focus()
                }
            }, 10);
        } else if (e.key === "Backspace") {
            // if user mistakes a code, and press backspace, move focu to previous input
            setTimeout(() => {
                if (code.previousElementSibling) {
                    // delete the previous input
                    codes[idx - 1].value = ''
                    // move focus to previous input
                    codes[idx - 1].focus()
                }
            }, 10);
        }
    })
})
