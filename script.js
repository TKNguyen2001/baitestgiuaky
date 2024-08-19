document.addEventListener('DOMContentLoaded', function() {
    // Toggle more info section
    const moreInfoBtn = document.getElementById('moreInfoBtn');
    const moreInfoDiv = document.getElementById('moreInfo');
    
    moreInfoBtn.addEventListener('click', function() {
        if (moreInfoDiv.classList.contains('hidden')) {
            moreInfoDiv.classList.remove('hidden');
            moreInfoBtn.textContent = 'Ẩn thông tin';
        } else {
            moreInfoDiv.classList.add('hidden');
            moreInfoBtn.textContent = 'Xem thêm thông tin';
        }
    });

    // Toggle more contact info section
    const moreContactBtn = document.getElementById('moreContactBtn');
    const moreContactDiv = document.getElementById('moreContactInfo');
    
    moreContactBtn.addEventListener('click', function() {
        if (moreContactDiv.classList.contains('hidden')) {
            moreContactDiv.classList.remove('hidden');
            moreContactBtn.textContent = 'Ẩn thông tin liên lạc';
        } else {
            moreContactDiv.classList.add('hidden');
            moreContactBtn.textContent = 'Thêm thông tin liên lạc';
        }
    });
});
