const likeButton = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');

let count = 0;

likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('liked');

    if (likeButton.classList.contains('liked')) {
        count++;
    }else {
        count--;
    }
    likeCount.textContent = count;
});
