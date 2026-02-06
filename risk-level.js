// risk-level.js
// Phân cấp mức độ nguy hiểm của nội dung

function classifyRisk(text) {
  const lower = text.toLowerCase();

  const level3 = /(đe doạ|ép buộc|gặp riêng|nếu không|tao sẽ)/;
  const level2 = /(gửi ảnh|ảnh nóng|xem chỗ|sờ|chạm)/;
  const level1 = /(gợi ý|đùa bẩn|nói tục)/;

  if (level3.test(lower)) {
    return {
      level: 3,
      message: "Nguy hiểm cao – cần sự hỗ trợ ngay"
    };
  }

  if (level2.test(lower)) {
    return {
      level: 2,
      message: "Có dấu hiệu quấy rối"
    };
  }

  if (level1.test(lower)) {
    return {
      level: 1,
      message: "Ngôn từ không phù hợp"
    };
  }

  return {
    level: 0,
    message: "Nội dung an toàn"
  };
}
