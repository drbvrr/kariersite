document.addEventListener('DOMContentLoaded', () => {
    const poster = document.querySelector('.poster');
    const eventItems = document.querySelectorAll('#mero1, #mero2, #mero3, #mero4, #mero5, #mero6, #mero7');
    
    // Предзагрузка изображений для плавного перехода
    const preloadImages = () => {
        for (let i = 1; i <= 7; i++) {
            const img = new Image();
            img.src = `images/mero${i}.jpg`;
        }
    };
    
    // Обработчик наведения
    const handleMouseEnter = (event) => {
        const idNumber = event.currentTarget.id.replace('mero', '');
        poster.style.backgroundImage = `url(images/mero${idNumber}.jpg)`;
        poster.style.backgroundSize = 'cover';
        poster.style.backgroundPosition = 'center';
        poster.style.transition = 'background-image 0.3s ease';
    };
    
    // Обработчик ухода курсора
    const handleMouseLeave = () => {
        poster.style.backgroundImage = '';
    };
    
    // Назначаем обработчики
    eventItems.forEach(item => {
        item.addEventListener('mouseenter', handleMouseEnter);
        item.addEventListener('mouseleave', handleMouseLeave);
    });
    
    preloadImages();


  const form = document.getElementById('subscribe-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // отменяем реальную отправку формы

    // показываем стандартный alert
    alert('Вы успешно подписались на рассылку с новостями завода «Карьер»');

    // очищаем поля формы
    form.reset();
  });
});
