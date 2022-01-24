const data = [
  {
    id: 1,
    text: 'Trang Chủ',
    name: 'home',
    displayOrder: 1,
    status: 1, // 0: inactive, 1: active, 2: deleted
    menuTypeId: 1, // 1: navigation, 2: footer
  },
  {
    id: 2,
    text: 'Dịch Vụ',
    name: 'services',
    displayOrder: 2,
    status: 1,
    menuTypeId: 1,
    collapse: true,
  },
  {
    id: 3,
    text: 'Mẫu Giao Diện',
    name: 'templates',
    displayOrder: 3,
    status: 1,
    menuTypeId: 1,
    collapse: true,
  },
  {
    id: 4,
    text: 'Tin Tức',
    name: 'news',
    displayOrder: 4,
    status: 1,
    menuTypeId: 1,
    collapse: true,
  },
  {
    id: 5,
    text: 'Liên Hệ',
    name: 'contact',
    displayOrder: 5,
    status: 1,
    menuTypeId: 1,
  },
];

export default data;
