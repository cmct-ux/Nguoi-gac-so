// context-analysis.js
// Phân tích ngữ cảnh để tránh cảnh báo nhầm

function analyzeContext(text) {
  const lower = text.toLowerCase();

  // Các mẫu câu quấy rối nguy hiểm
  const dangerousPatterns = [
    /gửi.*ảnh.*(cu|cặc|lồn)/,
    /cho.*xem.*(chỗ|bộ phận).*(nhạy cảm|kín)/,
    /(sờ|chạm|bú|địt|chịch|đụ).*(mày|em|tao)/,
    /(ảnh nóng|ảnh nude|ảnh khỏa thân)/
  ];

  for (let pattern of dangerousPatterns) {
    if (pattern.test(lower)) {
      return {
        isHarassment: true,
        reason: "Ngữ cảnh mang tính xâm hại tình dục"
      };
    }
  }

  // Các trường hợp dùng từ nhưng KHÔNG mang nghĩa quấy rối
  const safeContexts = [
    /thằng cu mới từ quê lên/,
    /con cu nhà hàng xóm/,
    /cu cậu còn nhỏ/
  ];

  for (let safe of safeContexts) {
    if (safe.test(lower)) {
      return {
        isHarassment: false,
        reason: "Từ ngữ xuất hiện trong ngữ cảnh an toàn"
      };
    }
  }

  return {
    isHarassment: null,
    reason: "Cần kết hợp phân tích từ khóa"
  };
}
