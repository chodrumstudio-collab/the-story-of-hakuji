#!/bin/bash

# OpenAI API를 사용해서 이미지를 생성하는 스크립트
# 사용법: ./generate-image.sh "프롬프트 설명" "파일명"

if [ $# -ne 2 ]; then
    echo "사용법: $0 \"프롬프트 설명\" \"파일명\""
    exit 1
fi

PROMPT=$1
OUTPUT_FILE=$2
API_KEY="${OPENAI_API_KEY}"

echo "이미지 생성 중: $PROMPT"

# OpenAI API 호출
response=$(curl -s -X POST "https://api.openai.com/v1/images/generations" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "model": "dall-e-3",
    "prompt": "'"$PROMPT"'",
    "n": 1,
    "size": "1024x1024",
    "quality": "standard"
  }')

# 이미지 URL 추출
image_url=$(echo $response | grep -o '"url":"[^"]*"' | cut -d'"' -f4)

if [ -z "$image_url" ]; then
    echo "오류: 이미지 생성에 실패했습니다."
    echo "응답: $response"
    exit 1
fi

echo "이미지 URL: $image_url"

# 이미지 다운로드
curl -s -o "$OUTPUT_FILE" "$image_url"

if [ -f "$OUTPUT_FILE" ]; then
    echo "이미지가 성공적으로 저장되었습니다: $OUTPUT_FILE"
else
    echo "오류: 이미지 저장에 실패했습니다."
    exit 1
fi
