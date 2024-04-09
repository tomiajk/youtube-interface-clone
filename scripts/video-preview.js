let allVideoPreviewHTML = '';

allVideoPrieview.forEach((preview, i) => {
  allVideoPreviewHTML += `
    <div class="video-preview">
      <div class="thumbnail-container">
        <img class="video-img" src="assets/thumbnails/thumbnail-${i + 1}.webp" alt="">
        <div class="video-time">${preview.videoTime.mins}:${preview.videoTime.secs}</div>
      </div>
      <div class="video-info-grid">
        <div class="profile-picture-container">
          <img class="profile-picture" src="assets/profile-pictures/profile-picture-${i + 1}.jpg" alt="">
        </div>
        <div class="video-info">
          <p class="video-title">${preview.videoTitle}</p>
          <p class="account-name">${preview.accountName}</p>
          <p class="video-stats">${preview.videoStats.views} views &#8226; ${preview.videoStats.lastPosted} ago</p>
        </div>
      </div>
    </div> 
  `
});

console.log(allVideoPreviewHTML);

document.querySelector('.js-video-grid').innerHTML = allVideoPreviewHTML;