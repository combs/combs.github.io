ffmpeg -i "20181104-MVI_0057.M4V" -ss 10 -t 22  -an -c:v libx264 -crf 25  -vf "scale=w=960:h=540,smartblur=luma_radius=2:luma_strength=-0.75:luma_threshold=-5" fireflies.mp4 
