// 本地图片数据

// 图片数据类型定义
export interface Image {
  id: number;
  title: string;
  description: string;
  url: string;
  width: number;
  height: number;
}

// 图片集类型定义
export interface Album {
  id: number;
  title: string;
  description: string;
  coverImage: Image;
  images: Image[];
}

// 从JSON文件动态生成图片数据

// 假设图片文件命名规则：
// - 封面图片：0.jpg
// - 其他图片：1.jpg, 2.jpg, 3.jpg, ...（按数字顺序排列）

// Asset File数据结构
interface AssetFileAlbum {
  title: string;
  description: string;
  asset_folder: string;
  image_count: number;
}

interface AssetFile {
  albums: AssetFileAlbum[];
}

// 注意：在客户端应用中，我们不能直接读取文件系统
// 这里我们提供一个函数，用于在组件中动态获取和生成albums数据
export const fetchAlbums = async (): Promise<Album[]> => {
  try {
    console.log('开始获取相册数据...');
    // 从public目录获取asset_file.json
    const response = await fetch('/asset_file.json');
    console.log('获取到响应:', response.status);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const assetFile: AssetFile = await response.json();
    console.log('解析到JSON数据:', assetFile);

    if (!assetFile || !assetFile.albums) {
      throw new Error('Invalid JSON structure: missing albums array');
    }

    // 生成albums数据
      const albums = assetFile.albums.map((assetAlbum, index) => {
        // 使用asset_file.json中定义的图片数量
        const imageCount = assetAlbum.image_count;
        const images: Image[] = [];
        
        // 生成图片列表
        for (let i = 0; i < imageCount; i++) {
          images.push({
            id: index * 100 + i,
            title: assetAlbum.title,
            description: assetAlbum.description,
            url: `/albums/${assetAlbum.asset_folder}/${i}.jpg`,
            width: 800,
            height: 600
          });
        }
      
      return {
        id: index + 1,
        title: assetAlbum.title,
        description: assetAlbum.description,
        coverImage: images[0], // 0.jpg作为封面
        images: images // 图片按顺序排列
      };
    });
    
    console.log('生成的相册数据:', albums);
    return albums;
  } catch (error) {
    console.error('获取相册数据失败:', error);
    // 如果发生错误，返回一个示例相册，而不是空数组
    return [
      {
        id: 1,
        title: "示例相册",
        description: "这是一个示例相册，用于测试",
        coverImage: {
          id: 0,
          title: "示例封面",
          description: "这是一个示例封面",
          url: "/albums/placeholder/0.jpg",
          width: 800,
          height: 600
        },
        images: [
          {
            id: 0,
            title: "示例封面",
            description: "这是一个示例封面",
            url: "/albums/placeholder/0.jpg",
            width: 800,
            height: 600
          },
          {
            id: 1,
            title: "示例图片1",
            description: "这是一个示例图片",
            url: "/albums/placeholder/1.jpg",
            width: 800,
            height: 600
          },
          {
            id: 2,
            title: "示例图片2",
            description: "这是一个示例图片",
            url: "/albums/placeholder/2.jpg",
            width: 800,
            height: 600
          }
        ]
      }
    ];
  }
};

// 用于组件初始化时使用的模拟数据
export const mockAlbums: Album[] = [
  {
    id: 1,
    title: "示例相册",
    description: "这是一个示例相册，用于测试",
    coverImage: {
      id: 0,
      title: "示例封面",
      description: "这是一个示例封面",
      url: "/albums/placeholder/0.jpg",
      width: 800,
      height: 600
    },
    images: [
      {
        id: 0,
        title: "示例封面",
        description: "这是一个示例封面",
        url: "/albums/placeholder/0.jpg",
        width: 800,
        height: 600
      },
      {
        id: 1,
        title: "示例图片1",
        description: "这是一个示例图片",
        url: "/albums/placeholder/1.jpg",
        width: 800,
        height: 600
      },
      {
        id: 2,
        title: "示例图片2",
        description: "这是一个示例图片",
        url: "/albums/placeholder/2.jpg",
        width: 800,
        height: 600
      }
    ]
  }
];

// 导出默认的mock数据，用于组件初始渲染
export const albums: Album[] = mockAlbums;

// 社交媒体链接类型定义
export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

// 社交媒体链接数据
export const socialLinks: SocialLink[] = [
  {
    name: "小红书",
    icon: "📕",
    url: "https://www.xiaohongshu.com/user/profile/60c1e861000000000101f018"
  },
  {
    name: "抖音",
    icon: "🎵",
    url: "https://v.douyin.com/w9pYubOVozE/"
  }
];
