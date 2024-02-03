import drawBot as db
import os

folder = os.path.dirname(__file__)

db.newDrawing()
db.newPage(400, 718)
db.font("AdapterArabicDisplay-Rg")
fsize = 30
db.fontSize(fsize)
db.fill(0)
db.strokeWidth(1)
word = "بريد الالكتروني:"
additional = " john@doe.com"
add = ""
w = db.width()
db.translate(w, db.height() - 40)
for i, a in enumerate(additional):
    add += a
    tw, _ = db.textSize(word + add)
    db.fill(1)
    db.stroke(0)
    #db.rect(-1, -10, -w+2, fsize + 10)
    db.rect(-1, -16, -w+2, fsize + 22)
    db.stroke(237/255, 28/255, 36/255)
    x = -tw - 30
    db.line((x, -5), (x, fsize - 5))
    db.fill(0)
    db.stroke(None)
    db.text(word + add, (-25, 0), align="right")
    db.translate(0, -55)

db.saveImage(os.path.join(folder, "bidi-input.pdf"))
db.endDrawing()

db.newDrawing()
word = "بريد الالكتروني:"
additional = " john@doe.com"
add = ""
for i, a in enumerate(additional):
    add += a
    for _ in range(3):
        db.newPage(400, 54)
        db.translate(w, 19)
        db.font("AdapterArabicDisplay-Rg")
        fsize = 30
        db.fontSize(fsize)
        db.fill(0)
        db.strokeWidth(1)
        tw, _ = db.textSize(word + add)
        db.fill(1)
        db.stroke(0)
        db.rect(-1, -16, -w+2, fsize + 22)
        db.stroke(237/255, 28/255, 36/255)
        x = -tw - 30
        db.line((x, -5), (x, fsize - 5))
        db.fill(0)
        db.stroke(None)
        db.text(word + add, (-25, 0), align="right")

db.saveImage(os.path.join(folder, "bidi-input.mp4"))
db.endDrawing()