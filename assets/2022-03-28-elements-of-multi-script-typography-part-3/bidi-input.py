newPage(400, 625)
font("AdapterArabicDisplay-Rg")
fsize = 30
fontSize(fsize)
fill(0)
strokeWidth(1)
word = "بريد الالكتروني:"
additional = " john@doe.com"
add = ""
w = width()
translate(w, height() - 50)
for i, a in enumerate(additional):
    add += a
    tw, _ = textSize(word + add)
    
    fill(1)
    stroke(0)
    rect(-1, -10, -w+2, fsize + 10)
    stroke(0, 0, 1)
    x = -tw - 30
    line((x, -5), (x, fsize - 5))
    fill(0)
    stroke(None)
    text(word + add, (-25, 0), align="right")
    
    translate(0, -45)

saveImage("bidi-input.pdf")