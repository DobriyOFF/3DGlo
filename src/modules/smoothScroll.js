const smoothScroll = (e) => {
    const perem = e.tagName.toLowerCase() == 'a' ? e.getAttribute('href').substr(1) : e.closest('a').getAttribute('href').substr(1);

    document.getElementById(perem).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
};

export default smoothScroll;