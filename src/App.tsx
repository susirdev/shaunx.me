import { useState, useEffect } from 'react';
import './App.css';
import { fetchAlbums, mockAlbums, socialLinks, type Album, type Image } from './data/images';

function App() {
  // 动态加载的相册数据
  const [albums, setAlbums] = useState<Album[]>(mockAlbums);
  
  // 图片预览状态
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // 社交媒体弹窗状态
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  // 用于存储定时器ID - 在浏览器中，setTimeout返回number类型
  const [socialTimer, setSocialTimer] = useState<number | null>(null);
  
  // 设备检测状态
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  
  // 设备检测 - 使用UA检测
  useEffect(() => {
    const checkIsMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
      return mobileRegex.test(userAgent.toLowerCase());
    };
    
    const isMobileDevice = checkIsMobile();
    setIsMobile(isMobileDevice);
    setIsDesktop(!isMobileDevice);
    
    // 监听窗口大小变化（备选方案，以防UA检测不准确）
    const handleResize = () => {
      const isMobileWindow = window.innerWidth < 768;
      setIsMobile(isMobileWindow);
      setIsDesktop(!isMobileWindow);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // 组件挂载时从asset_file.json加载数据
  useEffect(() => {
    const loadAlbums = async () => {
      console.log('开始加载相册数据...');
      const loadedAlbums = await fetchAlbums();
      console.log('加载到的相册数据:', loadedAlbums);
      if (loadedAlbums.length > 0) {
        console.log('更新相册数据...');
        setAlbums(loadedAlbums);
      } else {
        console.log('没有加载到相册数据，使用默认数据');
      }
    };
    
    loadAlbums();
  }, []);

  // 打开图片预览
  const openModal = (album: Album, image: Image) => {
    const index = album.images.findIndex(img => img.id === image.id);
    setSelectedAlbum(album);
    setSelectedImage(image);
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  // 关闭图片预览
  const closeModal = () => {
    setSelectedImage(null);
    setSelectedAlbum(null);
    document.body.style.overflow = 'auto';
  };
  
  // 切换到下一张图片
  const nextImage = () => {
    if (selectedAlbum) {
      const nextIndex = (selectedImageIndex + 1) % selectedAlbum.images.length;
      setSelectedImageIndex(nextIndex);
      setSelectedImage(selectedAlbum.images[nextIndex]);
    }
  };
  
  // 切换到上一张图片
  const prevImage = () => {
    if (selectedAlbum) {
      const prevIndex = (selectedImageIndex - 1 + selectedAlbum.images.length) % selectedAlbum.images.length;
      setSelectedImageIndex(prevIndex);
      setSelectedImage(selectedAlbum.images[prevIndex]);
    }
  };
  
  // 显示社交媒体弹窗并设置定时器
  const showSocialPopup = () => {
    setShowSocialLinks(true);
    // 清除之前的定时器
    if (socialTimer) {
      clearTimeout(socialTimer);
      setSocialTimer(null);
    }
    // 设置新的定时器，1秒后自动关闭
    const timer = window.setTimeout(() => {
      setShowSocialLinks(false);
    }, 1000);
    setSocialTimer(timer as unknown as number);
  };
  
  // 当鼠标进入社交媒体弹窗时，清除定时器，保持弹窗显示
  const handleSocialPopupMouseEnter = () => {
    if (socialTimer) {
      clearTimeout(socialTimer);
      setSocialTimer(null);
    }
  };
  
  // 当鼠标离开社交媒体弹窗时，直接关闭弹窗
  const handleSocialPopupMouseLeave = () => {
    setShowSocialLinks(false);
    if (socialTimer) {
      clearTimeout(socialTimer);
      setSocialTimer(null);
    }
  };
  
  // 当鼠标离开header区域时，不额外设置定时器
  const handleHeaderMouseLeave = () => {
    // 保持原有定时器逻辑，不添加新的定时器
  };

  return (
    <div className={`gallery-container ${isMobile ? 'is-mobile' : ''}`}>
      {/* 图库标题 - 鼠标悬停显示社交媒体链接 */}
      <header 
        className={`gallery-header surface ${isMobile ? 'is-mobile' : ''}`} 
        onMouseEnter={showSocialPopup}
        onMouseLeave={handleHeaderMouseLeave}
      >
        <div className="user-profile">
          <div className="avatar">
            <img 
              src="/avatar.jpg" 
              alt="ShaunX" 
              className="avatar-image"
            />
          </div>
          <h1 className="user-name">ShaunX</h1>
        </div>
      </header>

      {/* 社交媒体链接弹窗 */}
      {showSocialLinks && (
        <div 
          className={`social-links-popup surface ${isMobile ? 'is-mobile' : ''}`}
          onMouseEnter={handleSocialPopupMouseEnter}
          onMouseLeave={handleSocialPopupMouseLeave}
        >
          <div className="social-links-content">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link-item"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="social-icon">{link.icon}</span>
                <span className="social-name">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* 图库网格 */}
      <main className={`gallery-grid ${isMobile ? 'is-mobile' : ''} ${isDesktop ? 'is-desktop' : ''}`}>
        {albums.map((album) => (
          <div 
            key={album.id} 
            className="image-card" 
            onClick={() => openModal(album, album.coverImage)}
          >
            <img 
              src={album.coverImage.url} 
              alt={album.title} 
              loading="lazy"
            />
            <div className="image-info">
              <h3>{album.title}</h3>
            </div>
          </div>
        ))}
      </main>

      {/* 图片预览模态框 */}
      {selectedImage && selectedAlbum && (
        <div className={`modal-overlay ${isMobile ? 'is-mobile' : ''}`} onClick={closeModal}>
          {/* 关闭按钮 - 移到 modal-content 外部 */}
          <button className={`modal-close ${isMobile ? 'is-mobile' : ''}`} onClick={(e) => {
            e.stopPropagation();
            closeModal();
          }}>
            ×
          </button>
          
          <div className={`modal-content ${isMobile ? 'is-mobile' : ''}`} onClick={(e) => e.stopPropagation()}>
            {/* 图片容器 */}
            <div className="modal-image-container">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                className="modal-image"
              />
            </div>
            
            {/* 图片信息 */}
            <div className="image-info" style={{}}>
              <h3>{selectedImage.title}</h3>
            </div>
          </div>
          
          {/* 上一张按钮 - 移到 modal-content 外部 */}
          {selectedAlbum.images.length > 1 && (
            <button className={`modal-nav-btn modal-prev ${isMobile ? 'is-mobile' : ''}`} onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }} aria-label="上一张">
              &#10094;
            </button>
          )}
          
          {/* 下一张按钮 - 移到 modal-content 外部 */}
          {selectedAlbum.images.length > 1 && (
            <button className={`modal-nav-btn modal-next ${isMobile ? 'is-mobile' : ''}`} onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }} aria-label="下一张">
              &#10095;
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
