const setProjects = (projects)=> {
    return{
        set: ()=>{
            projects.forEach((element, index ) => {
                const wrapper = document.getElementById('animatedContainerWrapper');
                const container = document.createElement('div');
                container.setAttribute('class', 'animatedContainer');
                container.setAttribute('id', `animated-${index}`);
                const img = document.createElement('img');
                img.setAttribute('class', 'image');
                img.setAttribute('src', element.previewUrl);
                //img.style.backgroundImage = `url(${element.previewUrl})`;

                const aboutProject = document.createElement('div');
                aboutProject.setAttribute('class', 'text');
                aboutProject.innerText = element.about;

                container.append(img, aboutProject);
                wrapper.appendChild(container);
            });
        }
    }
}

export default setProjects;