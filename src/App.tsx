import { useState } from 'react';
import './App.css';

// 图片数据类型定义
interface Image {
  id: number;
  title: string;
  description: string;
  url: string;
  width: number;
  height: number;
}

// 社交媒体链接类型
interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

function App() {
  // 示例图片数据
  const [images] = useState<Image[]>([
    {
      id: 1,
      title: "山脉日出",
      description: "壮丽的山脉在日出时分的景象",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
      width: 800,
      height: 600
    },
    {
      id: 2,
      title: "海洋波浪",
      description: "蓝色海洋的波浪在阳光照耀下",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop",
      width: 800,
      height: 600
    },
    {
      id: 3,
      title: "森林小径",
      description: "茂密森林中的宁静小径",
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop",
      width: 800,
      height: 600
    },
    {
      id: 4,
      title: "城市天际线",
      description: "现代化城市的天际线夜景",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      width: 800,
      height: 600
    },
    {
      id: 5,
      title: "沙漠日落",
      description: "金色沙漠在日落时分的美景",
      url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      width: 800,
      height: 600
    },

    {
      id: 7,
      title: "星空夜景",
      description: "布满星星的夜空，银河清晰可见",
      url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      width: 800,
      height: 600
    },
    {
      id: 8,
      title: "雪山之巅",
      description: "高耸入云的雪山顶部",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop",
      width: 800,
      height: 600
    },
    {
      id: 9,
      title: "湖泊倒影",
      description: "平静湖泊中的完美倒影",
      url: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=800&h=600&fit=crop",
      width: 800,
      height: 600
    }
  ]);

  // 图片预览状态
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  
  // 社交媒体弹窗状态
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  
  // 社交媒体链接数据
  const [socialLinks] = useState<SocialLink[]>([
    {
      name: "小红书",
      icon: "📕",
      url: "https://www.xiaohongshu.com/user/profile/"
    },
    {
      name: "抖音",
      icon: "🎵",
      url: "https://www.douyin.com/user/"
    },
    {
      name: "微信公众号",
      icon: "💬",
      url: "https://mp.weixin.qq.com/"
    }
  ]);

  // 打开图片预览
  const openModal = (image: Image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  // 关闭图片预览
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  // 切换社交媒体弹窗
  const toggleSocialLinks = () => {
    setShowSocialLinks(!showSocialLinks);
  };

  return (
    <div className="gallery-container">
      {/* 图库标题 - 可点击显示社交媒体链接 */}
      <header className="gallery-header glass" onClick={toggleSocialLinks}>
        <div className="user-profile">
          <div className="avatar">
            <img 
              src="https://ui-avatars.com/api/?name=ShaunX&background=random&color=fff&size=80" 
              alt="ShaunX" 
              className="avatar-image"
            />
          </div>
          <h1 className="user-name">ShaunX</h1>
        </div>
      </header>

      {/* 社交媒体链接弹窗 */}
      {showSocialLinks && (
        <div className="social-links-popup glass">
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
      <main className="gallery-grid">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="image-card" 
            onClick={() => openModal(image)}
          >
            <img 
              src={image.url} 
              alt={image.title} 
              loading="lazy"
            />
            <div className="image-info">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </main>

      {/* 图片预览模态框 */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title}
            />
            <div className="image-info" style={{ transform: 'translateY(0)', background: 'rgba(0, 0, 0, 0.8)' }}>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
