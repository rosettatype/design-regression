import drawBot as db

db.newPage(400, 625)
db.font("AdapterArabicDisplay-Rg")
fsize = 30
db.fontSize(fsize)
db.fill(0)
db.strokeWidth(1)
word = "بريد الالكتروني:"
additional = " john@doe.com"
add = ""
w = db.width()
db.translate(w, db.height() - 50)
for i, a in enumerate(additional):
    add += a
    tw, _ = db.textSize(word + add)
    db.fill(1)
    db.stroke(0)
    db.rect(-1, -10, -w+2, fsize + 10)
    db.stroke(237/255, 28/255, 36/255)
    x = -tw - 30
    db.line((x, -5), (x, fsize - 5))
    db.fill(0)
    db.stroke(None)
    db.text(word + add, (-25, 0), align="right")
    db.translate(0, -45)

db.saveImage("bidi-input.pdf")