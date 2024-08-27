for(let i = 1; i <=3; i++){
    const newDiv = document.createElement('div')
    newDiv.style.backgroundColor = 'gray'
    newDiv.style.padding = '20px'
    newDiv.style.margin = '20px'
    newDiv.style.color = 'whitesmoke'
    
    const Heading = document.createElement('h2')
    Heading.textContent = 'Title : Skilovate'

    const paragraph = document.createElement('p')
    paragraph.textContent = 'Skilovate is on a mission to transform careers through accessible, high-quality online training. Our values of empowerment, accessibility, excellence, and community drive everything we do.'

    newDiv.appendChild(Heading)
    newDiv.appendChild(paragraph)

    const content = document.getElementById('content')

    content.appendChild(newDiv)

}