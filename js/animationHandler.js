const animateElements = ( ids ) => {
  ids.forEach(id => {
      const element = document.getElementById(id);
  
      if(!element) return;

      const observer = new IntersectionObserver(( entries )=>{
          if(entries[0].isIntersecting) element.classList.add('animated');
          else element.classList.remove('animated');
      });
      
      observer.observe(element);
  });
}

export default animateElements;