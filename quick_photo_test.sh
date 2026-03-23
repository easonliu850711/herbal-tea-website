#!/bin/bash
# 快速照片測試腳本

echo "📸 快速照片測試開始..."

# 檢查是否有新照片
PHOTO_COUNT=$(find public/images/temp-upload -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" \) | wc -l)

if [ "$PHOTO_COUNT" -eq 0 ]; then
  echo "❌ 沒有新照片需要處理"
  echo "請將照片放入：public/images/temp-upload/"
  exit 1
fi

echo "發現 $PHOTO_COUNT 張新照片"

# 運行處理腳本
./scripts/process_photos.sh

# 顯示處理結果
echo ""
echo "🎉 處理完成！"
echo "照片分布："
for dir in public/images/*/; do
  if [ -d "$dir" ] && [ "$dir" != "public/images/temp-upload/" ] && [ "$dir" != "public/images/metadata/" ]; then
    dir_name=$(basename "$dir")
    count=$(find "$dir" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" \) | wc -l)
    if [ "$count" -gt 0 ]; then
      echo "  📁 $dir_name/: $count 張"
    fi
  fi
done

echo ""
echo "📊 總照片數：$(find public/images -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" \) | wc -l) 張"
echo "✅ 網站畫廊已自動更新"
