import carouselData  from "./carouselData.js";

const Carousel = ()=>{
    var _pointer = 0;

    function _goNext(){
        _pointer = _pointer == carouselData.length - 1 ? 0 :  _pointer + 1;

        let image = document.getElementById('carousel-image');
        let textAbout = document.querySelector('.about-project-text');
        
        image.animate([
                { transform: 'scale(.7)' },
                { opacity: '.2' }
        ],{
            duration: 500,
        });

        textAbout.textContent = carouselData[_pointer].about;
        image.src = carouselData[_pointer].previewUrl;
    }

    function _goPrevious(){
        _pointer--;

        let image = document.getElementById('carousel-image');
        

        image.animate([
            { transform: 'scale(.7)' },
            { opacity: '.2' }
        ],{
            duration: 500,
        });

        setTimeout(()=>{
            image.src = carouselData[_pointer].previewUrl;
        }, 200);
    }
    return{
        render(){
            //Select the parent element
            let carousel_img = document.getElementById('carousel-img');
            let textAbout = document.querySelector('.about-project-text');

            //Create image element
            let image = document.createElement('img');
            image.setAttribute('src', carouselData[_pointer].previewUrl);
            image.setAttribute('id', 'carousel-image');

            //Add the description
            textAbout.innerHTML = carouselData[_pointer].about;
            
            //Append image to carousel
            carousel_img.appendChild(image);
            return this;
        },
        setEvents(){
            let next_button = document.getElementById('next');
            let previous_button = document.getElementById('previous');

            next_button.addEventListener('click', _goNext);
            previous_button.addEventListener('click', _goPrevious);
            return this;
        },
    }
}


export default Carousel;