document.getElementById('clickButton').addEventListener('click', function() {
    let numberOfPopups = 300; // Số lượng popup nhiều hơn
    let delay = 125; // Xuất hiện nhanh hơn một chút
  
    for (let i = 0; i < numberOfPopups; i++) {
      setTimeout(() => createPopup(), i * delay);
    }
  });
  
  function createPopup() {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.classList.add("visible")
  
    // Header của popup với các nút và phô mai
    const header = document.createElement('div');
    header.classList.add('popup-header');
  
    const cheeseImg = document.createElement('img');
    cheeseImg.src = '../heart.png'; // Hình ảnh phô mai dễ thương
    header.appendChild(cheeseImg);
  
    const buttons = document.createElement('div');
    buttons.classList.add('popup-buttons');
  
    // Nút minimize, maximize và close
    const minimizeBtn = document.createElement('div');
    minimizeBtn.classList.add('minimize');
    
    const maximizeBtn = document.createElement('div');
    maximizeBtn.classList.add('maximize');
    
    const closeBtn = document.createElement('div');
    closeBtn.classList.add('close');
  
    buttons.appendChild(minimizeBtn);
    buttons.appendChild(maximizeBtn);
    buttons.appendChild(closeBtn);
  
    header.appendChild(buttons);
  
    // Body của popup
    const body = document.createElement('div');
    body.classList.add('popup-body');
    body.innerText = 'Anh nhớ em';
  
    popup.appendChild(header);
    popup.appendChild(body);
  
    document.body.appendChild(popup);
  
    const x = Math.random() * (window.innerWidth - 350); // Giới hạn kích thước popup
    const y = Math.random() * (window.innerHeight - 220);
  
    popup.style.left = `${x}px`;
    popup.style.top = `${y}px`;
  
    // Thêm class visible sau khi tạo để hiệu ứng fade in hoạt động
    setTimeout(() => {
      popup.classList.add('visible');
    }, 100);
  }
  