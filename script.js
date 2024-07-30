const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((latter, indx) => `<span style="transition-delay:${indx * 30}ms">${latter}</span>`)
        .join('')
})