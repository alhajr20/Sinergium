document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.querySelector('.main-img'),
          setImages = document.querySelectorAll('.product__set img');

    setImages.forEach(img => {
        img.addEventListener('click', () => {
            mainImage.src = img.src;

            setImages.forEach(item => item.classList.remove('image-active'))

            img.classList.add('image-active');
        });
    });

    const productSizeItems = document.querySelectorAll('.size__choose ul li');

    productSizeItems.forEach(item => {
        item.addEventListener('click', () => {
            productSizeItems.forEach(item => item.classList.remove('size-active'))

            item.classList.add('size-active');
        });
    });

    const partNumber = document.querySelector('.info p button');

    partNumber.textContent = Math.floor(Math.random() * 99999);

    let tabs = document.querySelectorAll('.descr-title'),
        tabsContent = document.querySelectorAll('.descr-content'),
        tabsParent = document.querySelector('.descr-tabs');

	function hideTabContent() {
        
        tabsContent.forEach(item => {
            item.classList.add('descr-content-active');
            item.classList.remove('descr-content-active');
        });

        tabs.forEach(item => {
            item.classList.remove('descr-title-active');
        });
	}

	function showTabContent(i = 0) {
        tabs[i].classList.add('descr-title-active');
        tabsContent[i].classList.add('descr-content-active');
    }
    
    hideTabContent();
    showTabContent();

	tabsParent.addEventListener('click', function(event) {
		const target = event.target;
		if(target && target.classList.contains('descr-title')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
		}
    });

    $(document).ready(function() {
        $('#phone').mask("+7(999) 999-99-99");
    });
});