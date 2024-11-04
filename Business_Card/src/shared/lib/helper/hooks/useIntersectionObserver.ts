const handler = () => {
    const container = document.querySelector('.container');

    if (container) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    container.classList.add('in-view');
                } else {
                    container.classList.remove('in-view');
                }
            });
        }, { threshold: 0.1 }); // threshold указывает, какая часть элемента должна быть видна (10%)

        observer.observe(container);
    }
}