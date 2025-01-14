from PIL import Image

# 打开图片A（JPG）
image_a = Image.open('IMG_0684.JPG').convert('RGBA')

# 打开图片B（PNG）
image_b = Image.open('me_rmbg.png').convert('RGBA')

# 确保两张图片的尺寸相同
if image_a.size != image_b.size:
    image_b = image_b.resize(image_a.size, Image.ANTIALIAS)

# 提取图片B的alpha通道作为蒙版
mask = image_b.split()[3]

# 将图片A的alpha通道替换为图片B的alpha通道
r, g, b, _ = image_a.split()
image_c = Image.merge('RGBA', (r, g, b, mask))

# 保存结果图片C
image_c.save('IMG_0684.png')
