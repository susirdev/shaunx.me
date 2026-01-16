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

// 图片集类型定义
interface Album {
  id: number;
  title: string;
  description: string;
  coverImage: Image;
  images: Image[];
}

// 社交媒体链接类型
interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

function App() {
  // 示例图片集数据
  const [albums] = useState<Album[]>([
    {
      id: 1,
      title: "山脉日出",
      description: "壮丽的山脉在日出时分的景象",
      coverImage: {
        id: 1,
        title: "山脉日出",
        description: "壮丽的山脉在日出时分的景象",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
        width: 800,
        height: 600
      },
      images: [
        {
          id: 1,
          title: "山脉日出",
          description: "壮丽的山脉在日出时分的景象",
          url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
          width: 800,
          height: 600
        },
        {
          id: 101,
          title: "山脉日出 - 晨光",
          description: "山脉在晨光中的美丽景象",
          url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop",
          width: 800,
          height: 600
        },
        {
          id: 102,
          title: "山脉日出 - 云海",
          description: "云海之上的山脉日出",
          url: "https://images.unsplash.com/photo-1510051679722-9c5a030f4e20?w=800&h=600&fit=crop",
          width: 800,
          height: 600
        }
      ]
    },
    {
      id: 2,
      title: "海洋波浪",
      description: "蓝色海洋的波浪在阳光照耀下",
      coverImage: {
        id: 2,
        title: "海洋波浪",
        description: "蓝色海洋的波浪在阳光照耀下",
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop",
        width: 800,
        height: 600
      },
      images: [
        {
          id: 2,
          title: "海洋波浪",
          description: "蓝色海洋的波浪在阳光照耀下",
          url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop",
          width: 800,
          height: 600
        },
        {
          id: 201,
          title: "海洋波浪 - 浪花",
          description: "激起白色浪花的海洋波浪",
          url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
          width: 800,
          height: 600
        },
        {
          id: 202,
          title: "海洋波浪 - 日落",
          description: "日落时分的海洋波浪",
          url: "https://images.unsplash.com/photo-1493130952181-47e36589f64d?w=800&h=600&fit=crop",
          width: 800,
          height: 600
        },
        {
          id: 203,
          title: "海洋波浪 - 风暴",
          description: "风暴来临前的海洋波浪",
          url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&h=600&fit=crop",
          width: 800,
          height: 600
        }
      ]
    },
    {
      id: 3,
      title: "森林小径",
      description: "茂密森林中的宁静小径",
      coverImage: {
        id: 3,
        title: "森林小径",
        description: "茂密森林中的宁静小径",
        url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop",
        width: 800,
        height: 600
      },
      images: [
        {
          id: 3,
          title: "森林小径",
          description: "茂密森林中的宁静小径",
          url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop",
          width: 800,
          height: 600
        },
        {
          id: 301,
          title: "森林小径 - 秋意",
          description: "秋天的森林小径",
          url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
          width: 800,
          height: 600
        }
      ]
    },
    {
      id: 4,
      title: "城市天际线",
      description: "现代化城市的天际线夜景",
      coverImage: {
        id: 4,
        title: "城市天际线",
        description: "现代化城市的天际线夜景",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        width: 800,
        height: 600
      },
      images: [
        {
          id: 4,
          title: "城市天际线",
          description: "现代化城市的天际线夜景",
          url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
          width: 800,
          height: 600
        }
      ]
    },
    {
      id: 5,
      title: "沙漠日落",
      description: "金色沙漠在日落时分的美景",
      coverImage: {
        id: 5,
        title: "沙漠日落",
        description: "金色沙漠在日落时分的美景",
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
        width: 800,
        height: 600
      },
      images: [
        {
          id: 5,
          title: "沙漠日落",
          description: "金色沙漠在日落时分的美景",
          url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
          width: 800,
          height: 600
        }
      ]
    },
    {
      id: 7,
      title: "星空夜景",
      description: "布满星星的夜空，银河清晰可见",
      coverImage: {
        id: 7,
        title: "星空夜景",
        description: "布满星星的夜空，银河清晰可见",
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
        width: 800,
        height: 600
      },
      images: [
        {
          id: 7,
          title: "星空夜景",
          description: "布满星星的夜空，银河清晰可见",
          url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
          width: 800,
          height: 600
        }
      ]
    },
    {
      id: 8,
      title: "雪山之巅",
      description: "高耸入云的雪山顶部",
      coverImage: {
        id: 8,
        title: "雪山之巅",
        description: "高耸入云的雪山顶部",
        url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop",
        width: 800,
        height: 600
      },
      images: [
        {
          id: 8,
          title: "雪山之巅",
          description: "高耸入云的雪山顶部",
          url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop",
          width: 800,
          height: 600
        }
      ]
    },
    {
      id: 9,
      title: "湖泊倒影",
      description: "平静湖泊中的完美倒影",
      coverImage: {
        id: 9,
        title: "湖泊倒影",
        description: "平静湖泊中的完美倒影",
        url: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=800&h=600&fit=crop",
        width: 800,
        height: 600
      },
      images: [
        {
          id: 9,
          title: "湖泊倒影",
          description: "平静湖泊中的完美倒影",
          url: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=800&h=600&fit=crop",
          width: 800,
          height: 600
        }
      ]
    }
  ]);

  // 图片预览状态
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
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
              <p>{album.description}</p>
            </div>
          </div>
        ))}
      </main>

      {/* 图片预览模态框 */}
      {selectedImage && selectedAlbum && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* 关闭按钮 */}
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            
            {/* 上一张按钮 */}
            {selectedAlbum.images.length > 1 && (
              <button className="modal-nav-btn modal-prev" onClick={prevImage} aria-label="上一张">
                &#10094;
              </button>
            )}
            
            {/* 图片 */}
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title}
              className="modal-image"
            />
            
            {/* 下一张按钮 */}
            {selectedAlbum.images.length > 1 && (
              <button className="modal-nav-btn modal-next" onClick={nextImage} aria-label="下一张">
                &#10095;
              </button>
            )}
            
            {/* 图片信息 */}
            <div className="image-info" style={{ transform: 'translateY(0)', background: 'rgba(0, 0, 0, 0.8)' }}>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              {selectedAlbum.images.length > 1 && (
                <div className="image-navigation-info">
                  <span className="image-counter">{selectedImageIndex + 1} / {selectedAlbum.images.length}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
