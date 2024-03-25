const createPara = (string) => {
    const p = document.createElement('p');
    p.textContent = string;

    return p;
}

export {createPara};